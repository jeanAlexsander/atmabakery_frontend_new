import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import {
  hideUpdatePositionModal,
  fetchPositionData,
  addPositionData,
  getDataPosition,
} from "../../../store/position";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useRef } from "react";

function ModalUpdatePosition() {
  const show = useSelector((state) => state.positionStore.updatePositionModal);
  const data = useSelector((state) => state.positionStore.positionDataDB);
  const id = useSelector((state) => state.positionStore.deleteId);

  const positionNameRef = useRef(null);

  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(hideUpdatePositionModal());
  };

  const handleSave = () => {
    const positionName = positionNameRef.current.value;

    const data = {
      id: id,
      position_id: positionName,
    };
    dispatch(addPositionData(data));
    handleClose();
  };

  useEffect(() => {
    dispatch(getDataPosition());
  }, [dispatch]);

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
              ref={positionNameRef}
            >
              <option selected>Choose...</option>

              {data.map((e) => {
                return <option value={e.position_id} >{e.position_name}</option>;
              })}
            </select>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleSave();
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalUpdatePosition;
