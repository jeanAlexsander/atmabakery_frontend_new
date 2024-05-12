import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { addIngredientData, hideAddIngredientModal } from "../../../store/ingredient";
import "bootstrap/dist/css/bootstrap.min.css";
import { useRef } from "react";

function ModalAddIngredient() {
  const show = useSelector((state) => state.ingredientStore.addIngredientModal);
  const nameRef = useRef(null)
  const unitRef = useRef(null)
  const amountRef = useRef(null)

  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(hideAddIngredientModal());
  };

  const handleSave = () => {
    const data = {
      name: nameRef.current.value,
      unit: unitRef.current.value,
      amount: amountRef.current.value
    }
    dispatch(addIngredientData(data))
    dispatch(hideAddIngredientModal())
  }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Ingredient</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="enter Name" autoFocus ref={nameRef} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Unit</Form.Label>
              <Form.Control type="text" placeholder="enter Unit" autoFocus ref={unitRef} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >
              <Form.Label>Amount</Form.Label>
              <Form.Control type="text" placeholder="Amount" autoFocus ref={amountRef} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalAddIngredient;
