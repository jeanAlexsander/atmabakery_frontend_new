import React, { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchRoleData,
  hideUpdateEmployeeModal,
  setCancelEditEmployee,
  updateEmployeeData,
} from "../../../store/employee";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

function ModalUpdateEmployees() {
  const show = useSelector((state) => state.employeeStore.updateEmployeeModal);
  const data = useSelector((state) => state.employeeStore.editEmployeeData);
  const role = useSelector((state) => state.employeeStore.role);


  const roleRef = useRef(null);
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);

  useEffect(() => {
    if (data) {
      if (roleRef.current) {
        roleRef.current.value = data.role_id;
      }
      if (firstNameRef.current) {
        firstNameRef.current.value = data.first_name;
      }
      if (lastNameRef.current) {
        lastNameRef.current.value = data.last_name;
      }
      if (emailRef.current) {
        emailRef.current.value = data.email;
      }
    }
  }, [data]);

  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(setCancelEditEmployee());
    dispatch(hideUpdateEmployeeModal());
  };

  const handleSaveChanges = () => {
    const updatedEmployee = {
      user_id: data.user_id,
      role_id: roleRef.current.value,
      first_name: firstNameRef.current.value,
      last_name: lastNameRef.current.value,
      email: emailRef.current.value,
    };

    dispatch(updateEmployeeData(updatedEmployee));

    handleClose();
  };

  useEffect(() => {
    dispatch(fetchRoleData());
  }, [dispatch]);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Update Employee</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" ref={firstNameRef} required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" ref={lastNameRef} required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" ref={emailRef} required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formRole">
            <Form.Label>Select Role</Form.Label>
            <Form.Select ref={roleRef} required>
              <option value="">Choose...</option>
              {role.map((r) => (
                <option key={r.role_id} value={r.role_id}>
                  {r.role_name}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSaveChanges}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalUpdateEmployees;
