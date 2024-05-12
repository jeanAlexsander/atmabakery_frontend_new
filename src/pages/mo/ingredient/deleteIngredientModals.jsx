import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { deleteIngredientData, hideDeleteIngredientModal } from "../../../store/ingredient";
import "bootstrap/dist/css/bootstrap.min.css";

function ModalDeleteIngredient() {
  const show = useSelector((state) => state.ingredientStore.deleteIngredientModal);
  const deleteId = useSelector((state) => state.ingredientStore.deleteId);

  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(hideDeleteIngredientModal());
  };

  const handleDelete = () => {
    dispatch(deleteIngredientData(deleteId));
    dispatch(hideDeleteIngredientModal());
  }

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
          <Button variant="success" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalDeleteIngredient;
