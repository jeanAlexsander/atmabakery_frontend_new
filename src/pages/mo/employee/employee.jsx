import MOSideBar from "../component/side_nav_bar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useRef } from "react";
import ModalAddEmployees from "./addEmployeeModals";
import ModalUpdateEmployees from "./updateEmployeeModals";
import ModalDeleteEmployees from "./deleteEmployeeModals";
import { useDispatch, useSelector } from "react-redux";
import {
  showAddEmployeeModal,
  showUpdateEmployeeModal,
  showDeleteEmployeeModal,
} from "../../../store/employee";

const EmployeeView = () => {
  const initValue = useSelector((state) => state.employeeStore.employeeData);
  const [employees, setEmployees] = useState([...initValue]);
  const searchRef = useRef(null);
  const dispatch = useDispatch();

  const filterEmployee = (cek) => {
    var lowerCek = cek.toLowerCase();
    var temp = initValue.filter(
      (e) =>
        e.first_name.toLowerCase().includes(lowerCek) ||
        e.last_name.toLowerCase().includes(lowerCek) ||
        e.email.toLowerCase().includes(lowerCek) ||
        e.role_name.toLowerCase().includes(lowerCek)
    );
    setEmployees(temp);
  };

  const handleOpenModal = () => {
    dispatch(showAddEmployeeModal());
  };
  const handleOpenModalUpdate = () => {
    dispatch(showUpdateEmployeeModal());
  };
  const handleOpenModalDelete = () => {
    dispatch(showDeleteEmployeeModal());
  };
  return (
    <div style={{ display: "flex" }}>
      <MOSideBar />
      <ModalAddEmployees />
      <ModalUpdateEmployees />
      <ModalDeleteEmployees />
      <div style={{ width: "100%" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginLeft: "20px",
            marginTop: "20px",
            flex: "1",
          }}
        >
          <h4>Employees</h4>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginRight: "20px",
            }}
          >
            <input
              type="text"
              className="form-control form-control-sm "
              placeholder="Search..."
              style={{ width: "300px", marginRight: "10px" }}
              ref={searchRef}
            />
            <Button
              variant="danger"
              className="mb-2"
              onClick={() => {
                filterEmployee(String(searchRef.current.value));
              }}
            >
              Search
            </Button>
          </div>
        </div>
        <Button
          onClick={() => {
            handleOpenModal();
          }}
          variant="success"
          className="mt-3 "
          style={{ marginLeft: "20px" }}
        >
          + Add Employee
        </Button>
        <div
          className="p-4 container-fluid"
          style={{ overflowY: "auto", flex: "1" }}
        >
          <div className="card shadow-lg p-4 mb-5 rounded">
            <div className="card-header mb-3">
              <h2 className="fw-semibold" style={{ textAlign: "center" }}>
                Data Employee
              </h2>
            </div>

            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Employee Id</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Role Name</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((e) => {
                  return (
                    <tr key={e.id}>
                      <td>{e.id}</td>
                      <td>
                        {e.first_name} {e.last_name}
                      </td>
                      <td>{e.email}</td>
                      <td>{e.role_name}</td>
                      <td>
                        <Button
                          variant="primary"
                          className="me-2"
                          onClick={() => {
                            handleOpenModalUpdate();
                          }}
                        >
                          Edit
                        </Button>
                        <Button
                          variant="danger"
                          onClick={() => {
                            {
                              handleOpenModalDelete();
                            }
                          }}
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeView;
