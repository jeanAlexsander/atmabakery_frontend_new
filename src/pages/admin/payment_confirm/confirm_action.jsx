import React, { useRef } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import {
  confirmOrder,
  hideAddPaymentConfirmModal,
  hideConfirmActionModal,
  setCancelDateUser,
  setConfirmActionData,
  showConfirmActionModal,
  
} from "../../../store/admin/payment_confirm";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table } from "react-bootstrap";
import { setNetralToast } from "../../../store/customer/product_view";

function ConfirmAction() {
  const show = useSelector(
    (state) => state.paymentConfirmStore.confirmActionModal
  );

  const filterData = useSelector(
    (state) => state.paymentConfirmStore.confirmActionData
  );

  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(hideConfirmActionModal());
    dispatch(setCancelDateUser());
  };

  const handleSave = () => {
    dispatch(confirmOrder(filterData));

    setTimeout(() => {
      dispatch(setNetralToast());
    }, 2000);

    handleClose();
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Are You Sure to Confirm Order?</Modal.Title>
        </Modal.Header>
        <Modal.Body></Modal.Body>
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

export default ConfirmAction;
