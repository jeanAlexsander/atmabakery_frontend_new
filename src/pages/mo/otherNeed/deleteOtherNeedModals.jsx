import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { deleteOtherNeedData, hideDeleteOtherNeedModal } from "../../../store/mo/otherNeed";
import "bootstrap/dist/css/bootstrap.min.css";

function ModalDeleteOtherNeed() {
  const show = useSelector((state) => state.otherNeedStore.deleteOtherNeedModal);
  const deleteId = useSelector((state) => state.otherNeedStore.deleteId);

  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(hideDeleteOtherNeedModal());
  };

  const handleDelete = () => {
    dispatch(deleteOtherNeedData(deleteId));
    dispatch(hideDeleteOtherNeedModal());
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
          <Button variant="primary" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalDeleteOtherNeed;
