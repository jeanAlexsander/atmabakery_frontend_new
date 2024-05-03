import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { hideUpdatePositionModal } from "../../../store/position";
import "bootstrap/dist/css/bootstrap.min.css";

function ModalUpdatePosition() {
  const show = useSelector((state) => state.positionStore.updatePositionModal);

  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(hideUpdatePositionModal());
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Position</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div class="input-group mb-3">
            <select
              classname="custom-select "
              id="inputGroupSelect03"
              style={{ width: "500px", height: "40px" }}
            >
              <option selected>Choose...</option>
              <option value="1">OB</option>
              <option value="2">Kitchen</option>
              <option value="3">Packaging</option>
            </select>
          </div>
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

export default ModalUpdatePosition;
