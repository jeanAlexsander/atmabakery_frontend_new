import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchRoleData,
  hideAddEmployeeModal,
  addEmployeeData,
} from "../../../store/employee";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useRef } from "react";

function ModalAddEmployees() {
  const show = useSelector((state) => state.employeeStore.addEmployeeModal);
  const role = useSelector((state) => state.employeeStore.role);
  const roleRef = useRef(null);
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);

  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(hideAddEmployeeModal());
  };

  const handleSave = () => {
    const firstName = firstNameRef.current.value;
    const lastName = lastNameRef.current.value;
    const email = emailRef.current.value;
    const role = roleRef.current.value;

    const data = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      role_id: role,
    };
    dispatch(addEmployeeData(data));
  };

  useEffect(() => {
    dispatch(fetchRoleData());
  }, [dispatch]);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="enter First Name"
                autoFocus
                ref={firstNameRef}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="enter Last Name"
                autoFocus
                ref={lastNameRef}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="enter Email"
                autoFocus
                ref={emailRef}
                required
              />
            </Form.Group>
          </Form>
          <div class="input-group mb-3">
            <Form.Label>Select role</Form.Label>
            <select
              classname="custom-select "
              id="inputGroupSelect03"
              style={{ width: "500px", height: "40px" }}
              ref={roleRef}
              required
            >
              <option selected>Choose...</option>
              {role.map((r) => {
                {
                  return <option value={r.role_id}>{r.role_name}</option>;
                }
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
              // handleClose();
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalAddEmployees;
