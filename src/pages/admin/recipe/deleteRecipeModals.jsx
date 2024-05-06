import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { 
  hideDeleteRecipeModal,
  deleteRecipeData,
 } from "../../../store/admin/recipe";
import "bootstrap/dist/css/bootstrap.min.css";

function ModalDeleteRecipe() {
  const show = useSelector((state) => state.recipeStore.deleteRecipeModal);
  const deleteId = useSelector((state) => state.recipeStore.deleteId);

  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(hideDeleteRecipeModal());
  };
  
  const handleDelete = () => {
    dispatch(deleteRecipeData(deleteId));
    handleClose();
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
          <Button variant="primary" onClick={()=> {handleDelete();}}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalDeleteRecipe;
