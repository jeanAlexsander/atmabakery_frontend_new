import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { hideUpdateRecipeIngredientModal } from "../../../store/admin/recipeingredients";
import "bootstrap/dist/css/bootstrap.min.css";

function ModalUpdateRecipeIngredient() {
  const show = useSelector((state) => state.recipeStore.updateRecipeModal);

  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(hideUpdateRecipeIngredientModal());
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Recipe</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="enter First Name"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="enter Last Name"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
          <div class="input-group mb-3">
            <select
              className="custom-select "
              id="inputGroupSelect03"
              style={{ width: "500px", height: "40px" }}
            >
              <option selected>Choose...</option>
              <option value="1">Employee</option>
              <option value="2">Manager</option>
              <option value="3">Owner</option>
            </select>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalUpdateRecipeIngredient;
