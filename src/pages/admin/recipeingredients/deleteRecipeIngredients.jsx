import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { hideDeleteRecipeIngredientModal } from "../../../store/admin/recipeingredients";
import "bootstrap/dist/css/bootstrap.min.css";

function ModalDeleteRecipeIngredient() {
  const show = useSelector((state) => state.recipeIngredientStore.deleteRecipeIngredientModal);

  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(hideDeleteRecipeIngredientModal());
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

export default ModalDeleteRecipeIngredient;
