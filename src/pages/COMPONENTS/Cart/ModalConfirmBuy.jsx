import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  buyPurchase,
  fetchProductViewData,
  setCancelDelyveryOption,
  setFailedToast,
  setHideModalConfirmBuy,
  setSuccesToast,
} from "../../../store/customer/product_view";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ModalConfirmBuy = () => {
  const show = useSelector(
    (state) => state.productDataViewStore.showModalConfirmBuy
  );

  const dataInput = useSelector(
    (state) => state.productDataViewStore.productData
  );
  const deliveryOption = useSelector(
    (state) => state.productDataViewStore.deliveryOption
  );

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(setHideModalConfirmBuy());
  };

  const handleSave = () => {
    handleClose();
    const data = dataInput.filter((item) => item.count > 0);

    const formattedData = data.map((item) => ({
      user_id: localStorage.getItem("user_id"),
      product_id: item.product_id,
      amount: item.price * item.count,
      delivery_option: deliveryOption,
    }));

    try {
      dispatch(buyPurchase(formattedData));
      dispatch(fetchProductViewData());
      setTimeout(() => {
        dispatch(setCancelDelyveryOption());
        navigate("/");
      }, 3000);
    } catch (e) {
      dispatch(setFailedToast());
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Purchase</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h2>Are You Sure To Confirm Buy ?</h2>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={handleClose}>
          Cancel
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            handleSave();
            handleClose();
          }}
        >
          Yes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalConfirmBuy;
