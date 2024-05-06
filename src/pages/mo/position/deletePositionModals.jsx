import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { hideDeletePositionModal,deletePositionData } from "../../../store/position";
import "bootstrap/dist/css/bootstrap.min.css";

function ModalDeletePosition() {
  const show = useSelector((state) => state.positionStore.deletePositionModal);
  const deleteId = useSelector((state) => state.positionStore.deleteId);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(hideDeletePositionModal());
  };
  const handleDelete = () => {
    dispatch(deletePositionData(deleteId));
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
          <Button variant="primary" 
          onClick={()=> {
            handleDelete();
          }}
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalDeletePosition;
