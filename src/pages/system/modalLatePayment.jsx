import React from "react";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";
import {
  hideUpdateLatePaymentModal,
  updateLatePaymentData,
  fetchLatePaymentData,
} from "../../store/system/latepayment";

function ModalLatePayment() {
  const show = useSelector(
    (state) => state.latepaymentStore.updateStatusPaymentModal
  );
  const data = useSelector(
    (state) => state.latepaymentStore.editStatusLatePayment
  );
  const id = useSelector((state) => state.latepaymentStore.dataIdUpdate);

  const dispatch = useDispatch();

  const product = useSelector(
    (state) => state.latepaymentStore.updatestatusLatePaymentData
  );

  const handleClose = () => {
    dispatch(hideUpdateLatePaymentModal());
  };

  const handleUpdate = () => {
    dispatch(updateLatePaymentData(id));
    dispatch(fetchLatePaymentData());
    handleClose();
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Late Payment</Modal.Title>
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
          <Button variant="primary" onClick={handleUpdate}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalLatePayment;
