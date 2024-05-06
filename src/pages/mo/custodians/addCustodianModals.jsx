import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import {
  hideAddCustodianModal,
  addCustodianData,
} from "../../../store/mo/custodian";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useRef } from "react";

function ModalAddCustodian() {
  const show = useSelector((state) => state.custodianStore.addCustodianModal);
  const nameRef = useRef(null);
  const amountRef = useRef(null);
  const dispatch = useDispatch();

  const handleSave = () => {
    function formatDate(date) {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0'); // Tambahkan nol di depan jika bulan kurang dari 10
      const day = String(date.getDate()).padStart(2, '0'); // Tambahkan nol di depan jika tanggal kurang dari 10
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');
      const seconds = String(date.getSeconds()).padStart(2, '0');

      return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    }
    const name = nameRef.current.value;
    const amount = amountRef.current.value;
    const temp = new Date();
    const deposit_time = formatDate(temp);

    const data = {
      name: name,
      amount: amount,
      deposit_time: deposit_time
    };
    dispatch(addCustodianData(data))
    handleClose();
  };

  const handleClose = () => {
    dispatch(hideAddCustodianModal());
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Custodians</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="enter Name"
                autoFocus ref={nameRef}
                required />
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
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalAddCustodian;
