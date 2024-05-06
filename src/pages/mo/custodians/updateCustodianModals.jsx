import React, { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  hideUpdateCustodianModal,
  setCancelEditCustodian,
  updateCustodianData,
} from "../../../store/mo/custodian";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";


function ModalUpdateCustodian() {
  const show = useSelector((state) => state.custodianStore.updateCustodianModal);
  const data = useSelector((state) => state.custodianStore.editCustodianData);

  const nameRef = useRef(null);
  const amountRef = useRef(null);

  useEffect(() => {
    console.log(data);
    if (data) {
      if (nameRef.current) {
        nameRef.current.value = data.name;
      }
      if (amountRef.current) {
        amountRef.current.value = data.amount;
      }
    }
  }, [data]);

  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(setCancelEditCustodian());
    dispatch(hideUpdateCustodianModal());
  };

  const handleSaveChanges = () => {
    const updatedCustodian = {
      custodian_id: data.custodian_id,
      name: nameRef.current.value,
      amount: amountRef.current.value,
    };

    dispatch(updateCustodianData(updatedCustodian));

    handleClose();
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Custodian</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Name" autoFocus ref={nameRef} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Amount</Form.Label>
              <Form.Control type="text" placeholder="Amount" autoFocus ref={amountRef} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveChanges}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalUpdateCustodian;
