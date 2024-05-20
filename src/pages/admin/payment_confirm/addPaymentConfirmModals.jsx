import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { hideAddPaymentConfirmModal } from "../../../store/admin/payment_confirm";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useRef } from "react";

function ModalAddPaymentConfirm() {
  const show = useSelector(
    (state) => state.paymentConfirmStore.addPaymentConfirmModal
  );
  // const paymentConfirmData = useSelector(
  //   (state) => state.paymentConfirmStore.paymentConfirmData
  // );
  //   const imageRef = useRef(null);
  //   const categoryRef = useRef(null);
  //   const nameRef = useRef(null);
  //   const priceRef = useRef(null);
  //   const quantityRef = useRef(null);
  //   const custodianRef = useRef(null);

  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(hideAddPaymentConfirmModal());
  };

  //   const handleSave = () => {
  //     // const name = nameRef.current.value;
  //     // const price = priceRef.current.value;
  //     // const quantity = quantityRef.current.value;
  //     // const image = imageRef.current.files[0];
  //     // const category_id = categoryRef.current.value;
  //     // const custodian_id = custodianRef.current.value;
  //     // const formData = new FormData();
  //     // formData.append("name", name);
  //     // formData.append("price", price);
  //     // formData.append("quantity", quantity);
  //     // formData.append("image", image);
  //     // formData.append("category_id", category_id);
  //     // if (custodian_id !== "") {
  //     //   formData.append("custodian_id", custodian_id);
  //     // }
  //     // dispatch(addProduk(formData));
  //     // dispatch(hideAddProdukModal());
  //   };

  //   useEffect(() => {
  //     dispatch(fetchPaymentConfirmData());
  //   }, [dispatch]);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Input Payment Amount</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Payment Amount</Form.Label>
              <Form.Control
                type="text"
                placeholder="enter Product Name"
                autoFocus
              />
            </Form.Group>
          </Form>
          <div class="input-group mb-3"></div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Save Changes</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalAddPaymentConfirm;
