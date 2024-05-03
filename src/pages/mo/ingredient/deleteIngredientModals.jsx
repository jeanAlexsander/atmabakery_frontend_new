import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { hideDeleteIngredientModal } from "../../../store/ingredient";
import "bootstrap/dist/css/bootstrap.min.css";

function ModalAddIngredient() {
  const show = useSelector((state) => state.ingredientStore.deleteIngredientModal);

  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(hideDeleteIngredientModal());
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure to delete?</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalAddIngredient;
