import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import {
  showUpdateConfirmationReceiptModal,
  hideUpdateConfirmationReceiptModal,
  setdataIdUpdate,
  fetchConfirmationReceiptData,
  setCanceldataIdUpdate,
  updateConfirmationReceiptData,
} from "../../../store/customer/confirmationReceipt";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table } from "react-bootstrap";

function ModalAddConfirmationReceipt() {
  const show = useSelector(
    (state) => state.confirmationReceiptStore.updateConfirmationReceiptModal
  );
  const data = useSelector(
    (state) => state.confirmationReceiptStore.editConfirmationReceipt
  );
  const id = useSelector(
    (state) => state.confirmationReceiptStore.dataIdUpdate
  );

  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(hideUpdateConfirmationReceiptModal());
    dispatch(setCanceldataIdUpdate());
  };

  const handleUpdate = (statusOrder) => {
    dispatch(showUpdateConfirmationReceiptModal());
    dispatch(updateConfirmationReceiptData(statusOrder));
    dispatch(fetchConfirmationReceiptData());
    handleClose();
  };

  const product = useSelector(
    (state) => state.confirmationReceiptStore.statusUpdateReceiptData
  );
  const orderId = useSelector(
    (state) => state.confirmationReceiptStore.dataIdUpdate
  );

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Order Date</th>
                <th>User ID</th>
                <th>Total</th>
                <th>Status Order</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{product.order_id}</td>
                <td>{product.order_date}</td>
                <td>{product.user_id}</td>
                <td>{product.total}</td>
                <td>{product.status_order}</td>
              </tr>
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleUpdate(orderId);
            }}
          >
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalAddConfirmationReceipt;
