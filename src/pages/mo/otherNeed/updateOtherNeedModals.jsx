import React, { useRef, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { hideUpdateOtherNeedModal, setCancelEditOtherNeed, updateOtherNeedData, updateOtherNeedModal } from "../../../store/mo/otherNeed";
import "bootstrap/dist/css/bootstrap.min.css";

function ModalUpdateOtherNeed() {
  const show = useSelector((state) => state.otherNeedStore.updateOtherNeedModal);
  const data = useSelector((state) => state.otherNeedStore.editOtherNeedData);

  const nameRef = useRef(null);
  const costRef = useRef(null);


  useEffect(() => {
    console.log(data);
    if (data) {
      if (nameRef.current) {
        nameRef.current.value = data.name;
      }
      if (costRef.current) {
        costRef.current.value = data.cost;
      }
    }
  }, [data]);

  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(hideUpdateOtherNeedModal());
    dispatch(setCancelEditOtherNeed())
  };

  const handleSaveChanges = () => {
    function formatDate(date) {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0'); // Tambahkan nol di depan jika bulan kurang dari 10
      const day = String(date.getDate()).padStart(2, '0'); // Tambahkan nol di depan jika tanggal kurang dari 10
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');
      const seconds = String(date.getSeconds()).padStart(2, '0');

      return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    }

    const temp = new Date();
    const date = formatDate(temp);

    const updateOtherNeed = {
      other_need_id: data.other_need_id,
      name: nameRef.current.value,
      cost: costRef.current.value,
      Date_of_expense: date,
    };

    dispatch(updateOtherNeedData(updateOtherNeed));

    handleClose();
  }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Other Need</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="enter Name" autoFocus ref={nameRef} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>cost</Form.Label>
              <Form.Control type="text" placeholder="enter Cost" autoFocus ref={costRef}
              />
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

export default ModalUpdateOtherNeed;