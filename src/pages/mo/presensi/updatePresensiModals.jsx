import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { hideUpdatePresensiModal } from "../../../store/presensi";
import "bootstrap/dist/css/bootstrap.min.css";

function ModalUpdatePresensi() {
  const show = useSelector((state) => state.presensiStore.updatePresensiModal);

  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(hideUpdatePresensiModal());
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Presensi</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <h4>Are you sure to save data?</h4>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalUpdatePresensi;
