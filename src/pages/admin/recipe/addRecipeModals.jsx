import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { addRecipeData, hideAddRecipeModal } from "../../../store/admin/recipe";
import "bootstrap/dist/css/bootstrap.min.css";
import { useRef } from "react";

function ModalAddRecipe() {
  const show = useSelector((state) => state.recipeStore.addRecipeModal);
  const product_nameRef = useRef(null)
  const deskripsiRef = useRef(null)

  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(hideAddRecipeModal());
  };

  const handleSave = () => {
    const data = {
      product_name: product_nameRef.current.value,
      deskripsi: deskripsiRef.current.value,
    }
    dispatch(addRecipeData(data))
    dispatch(hideAddRecipeModal())
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
              <Form.Label>Product Name</Form.Label>
              <Form.Control type="text" placeholder="enter Product Name" autoFocus ref={product_nameRef} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Deskripsi</Form.Label>
              <Form.Control type="text" placeholder="enter Unit" autoFocus ref={deskripsiRef} />
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

export default ModalAddRecipe;
