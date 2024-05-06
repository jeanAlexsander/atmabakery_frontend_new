import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { deleteCustodianData, hideDeleteCustodianModal } from "../../../store/mo/custodian";
import "bootstrap/dist/css/bootstrap.min.css";

function ModalDeleteCustodian() {
  const show = useSelector((state) => state.custodianStore.deleteCustodianModal);
  const deleteId = useSelector((state) => state.custodianStore.deleteId);

  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(hideDeleteCustodianModal());
  };

  const handleDelete = () => {
    dispatch(deleteCustodianData(deleteId));
    dispatch(hideDeleteCustodianModal());
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

export default ModalDeleteCustodian;
