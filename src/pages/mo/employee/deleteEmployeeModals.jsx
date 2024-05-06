import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import {
  hideDeleteEmployeeModal,
  deleteEmployeeData,
} from "../../../store/employee";
import "bootstrap/dist/css/bootstrap.min.css";

function ModalDeleteEmployees() {
  const show = useSelector((state) => state.employeeStore.deleteEmployeeModal);
  const deleteId = useSelector((state) => state.employeeStore.deleteId);

  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(hideDeleteEmployeeModal());
  };
  const handleDelete = () => {
    dispatch(deleteEmployeeData(deleteId));
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
          <Button
            variant="primary"
            onClick={() => {
              handleDelete();
              handleClose();
            }}
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalDeleteEmployees;
