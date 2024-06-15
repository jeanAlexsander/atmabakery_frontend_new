import React, { useRef } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import {
  confirmOrder,
  hideAddPaymentConfirmModal,
  setCancelDateUser,
  setConfirmActionData,
  showConfirmActionModal,
} from "../../../store/admin/payment_confirm";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table } from "react-bootstrap";
import {
  cancelDate,
  cancelTotalDelivery,
  cancelTotalPrice,
  cancelUserId,
  confirmDistanceOrder,
  fetchConfirmDistance,
  hideUpdateModalDetail,
  totalAddOnDelivery,
} from "../../../store/admin/orderdistance";

function OrderDistanceDetail() {
  const show = useSelector(
    (state) => state.orderdistanceStore.showUpdateModalDetail
  );

  const data = useSelector(
    (state) => state.orderdistanceStore.orderdistanceData
  );

  const date = useSelector((state) => state.orderdistanceStore.date);

  const userId = useSelector((state) => state.orderdistanceStore.userId);
  const totalDelivery = useSelector(
    (state) => state.orderdistanceStore.totalDelivery
  );

  const filterData = data.filter(
    (item) => item.user_id === userId && item.order_date === date
  );

  const totalPrice = useSelector(
    (state) => state.orderdistanceStore.totalPrice
  );

  const allPrice = filterData.reduce((acc, item) => {
    return acc + item.price;
  }, 0);

  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(hideUpdateModalDetail());
    dispatch(cancelUserId());
    dispatch(cancelTotalDelivery());
    dispatch(cancelTotalPrice());
    dispatch(cancelDate());
  };

  const handleSave = () => {
    dispatch(setConfirmActionData({ data: filterData }));
    dispatch(showConfirmActionModal());
    const totalDeliveryR = totalDelivery;
    dispatch(confirmDistanceOrder(filterData, totalDeliveryR));
    dispatch(fetchConfirmDistance());
    handleClose();
  };

  React.useEffect(() => {
    dispatch(totalAddOnDelivery(totalPrice));
  }, [dispatch, totalPrice]);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Order</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div
            className="p-4 container-fluid"
            style={{ overflowY: "auto", flex: "1" }}
          >
            <div className="card shadow-lg p-4 mb-5 rounded">
              <div className="card-header mb-3">
                <h2 className="fw-semibold" style={{ textAlign: "center" }}>
                  Detail Product
                </h2>
              </div>

              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Nomor</th>
                    <th>Product Name</th>
                    <th>Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  {filterData.map((p, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{p.name}</td>
                      <td>{p.amount / p.price}</td>
                    </tr>
                  ))}
                  <tr>
                    <td colSpan="2">Total Delivery</td>
                    <td></td>
                    <td></td>
                    <td>{totalDelivery}</td>
                  </tr>
                  <tr>
                    <td colSpan="2">Total Price</td>
                    <td></td>
                    <td></td>
                    <td>{allPrice + totalDelivery}</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default OrderDistanceDetail;
