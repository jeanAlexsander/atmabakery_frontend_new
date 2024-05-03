import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { hideUpdateSalaryModal } from "../../../store/owner/salary";
import "bootstrap/dist/css/bootstrap.min.css";

function ModalUpdateSalary() {
  const show = useSelector((state) => state.salaryStore.updateSalaryModal);

  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(hideUpdateSalaryModal());
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Salary</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Salary ID</Form.Label>
              <Form.Control
                type="text"
                placeholder="enter First Name"
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Employee ID</Form.Label>
              <Form.Control
                type="text"
                placeholder="enter Last Name"
                autoFocus
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Salary Amount</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Bonus</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>

          <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Paid Time</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          
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

export default ModalUpdateSalary;
