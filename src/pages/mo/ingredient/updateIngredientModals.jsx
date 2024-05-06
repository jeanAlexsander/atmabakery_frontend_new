import React, { useRef, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { hideUpdateIngredientModal, setCancelEditIngredient, updateIngredientData } from "../../../store/ingredient";
import "bootstrap/dist/css/bootstrap.min.css";

function ModalUpdateIngredient() {
  const show = useSelector((state) => state.ingredientStore.updateIngredientModal);
  const data = useSelector((state) => state.ingredientStore.editIngredientData);

  const nameRef = useRef(null);
  const unitRef = useRef(null);
  const amountRef = useRef(null);

  useEffect(() => {
    console.log(data);
    if (data) {
      if (nameRef.current) {
        nameRef.current.value = data.name;
      }
      if (unitRef.current) {
        unitRef.current.value = data.unit;
      }
      if (amountRef.current) {
        amountRef.current.value = data.amount;
      }
    }
  }, [data]);

  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(hideUpdateIngredientModal());
    dispatch(setCancelEditIngredient())
  };

  const handleSaveChanges = () => {
    const updateIngredient = {
      ingredient_id: data.ingredient_id,
      name: nameRef.current.value,
      unit: unitRef.current.value,
      amount: amountRef.current.value,
    };

    dispatch(updateIngredientData(updateIngredient));

    handleClose();
  }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Ingredient</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="enter Name" autoFocus ref={nameRef} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Unit</Form.Label>
              <Form.Control type="text" placeholder="enter Unit" autoFocus ref={unitRef}
              />
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

export default ModalUpdateIngredient;
