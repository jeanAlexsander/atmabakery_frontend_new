import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { hideDeleteHampersModal } from "../../../store/admin/hampers";
import "bootstrap/dist/css/bootstrap.min.css";

function ModalDeleteHampers() {
  const show = useSelector((state) => state.hampersStore.deleteHampersModal);

  const dispatch = useDispatch();

  const handleClose = () => {
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
          <Button variant="primary" onClick={handleClose}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalDeleteHampers;
