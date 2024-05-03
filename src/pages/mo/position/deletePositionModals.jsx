import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { hideDeletePositionModal } from "../../../store/position";
import "bootstrap/dist/css/bootstrap.min.css";

function ModalAddPosition() {
  const show = useSelector((state) => state.positionStore.deletePositionModal);

  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(hideDeletePositionModal());
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

export default ModalAddPosition;
