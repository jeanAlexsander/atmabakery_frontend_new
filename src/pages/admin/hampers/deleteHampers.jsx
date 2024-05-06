import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import {
  hideDeleteHampersModal,
  deleteHampers,
} from "../../../store/admin/hampers";
import "bootstrap/dist/css/bootstrap.min.css";

function ModalDeleteHampers() {
  const show = useSelector((state) => state.hampersStore.deleteHampersModal);

  const deleteId = useSelector((state) => state.hampersStore.deleteId);

  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(hideDeleteHampersModal());
  };

  const handleDelete = () => {
    dispatch(deleteHampers(deleteId));
    dispatch(hideDeleteHampersModal());
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
          <Button variant="primary" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalDeleteHampers;
