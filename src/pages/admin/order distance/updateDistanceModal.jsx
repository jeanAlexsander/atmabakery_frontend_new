import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  setCancelUpdateOrderDistance,
  setCloseUpdateOrderDistanceModal,
} from "../../../store/admin/orderdistance";

function UpdateDistanceModal() {
  const show = useSelector((state) => state.orderdistanceStore.showUpdateModal);
  const data = useSelector(
    (state) => state.orderdistanceStore.updateOrderDistanceData
  );

  console.log("masuk sini", data.distance);
  const totalDistanceRef = useRef(null);

  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      if (totalDistanceRef.current) {
        totalDistanceRef.current.value = data.distance;
      }
    }
  }, [data]);

  const handleSave = () => {
    handleClose();
  };

  const handleClose = () => {
    dispatch(setCancelUpdateOrderDistance());
    dispatch(setCloseUpdateOrderDistanceModal());
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Distance</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Input Distance</Form.Label>
              <Form.Control
                type="number"
                placeholder="enter Distance"
                autoFocus
                ref={totalDistanceRef}
              />
            </Form.Group>
          </Form>
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

export default UpdateDistanceModal;
