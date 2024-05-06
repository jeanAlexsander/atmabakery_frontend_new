import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  showAddEmployeeModal,
  showUpdateEmployeeModal,
  showDeleteEmployeeModal,
  fetchEmployeeData,
  setDeleteId,
  setEditEmployeeData,
} from "../../../store/employee";
import { Button } from "react-bootstrap";
import MOSideBar from "../component/side_nav_bar";
import ModalAddEmployees from "./addEmployeeModals";
import ModalUpdateEmployees from "./updateEmployeeModals";
import ModalDeleteEmployees from "./deleteEmployeeModals";

const EmployeeView = () => {
  const initValue = useSelector((state) => state.employeeStore.employeeData);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const searchRef = useRef(null);
  const dispatch = useDispatch();

  let noUrut = 0;

  useEffect(() => {
    dispatch(fetchEmployeeData());
  }, [dispatch]);

  const handleOpenModal = () => {
    dispatch(showAddEmployeeModal());
  };

  const handleOpenModalUpdate = (employee) => {
    dispatch(setEditEmployeeData(employee));
    dispatch(showUpdateEmployeeModal());
  };

  const handleOpenModalDelete = (id) => {
    dispatch(setDeleteId({ id }));
    dispatch(showDeleteEmployeeModal());
  };

  const handleSearch = () => {
    const lowerCek = searchTerm.toLowerCase();
    const temp = initValue.filter(
      (e) =>
        String(e.employee_id).includes(lowerCek) ||
        e.first_name.toLowerCase().includes(lowerCek) ||
        e.last_name.toLowerCase().includes(lowerCek) ||
        e.email.toLowerCase().includes(lowerCek) ||
        e.role_name.toLowerCase().includes(lowerCek)
    );
    setFilteredEmployees(temp);
  };

  const handleDelete = (id) => {
    dispatch(setDeleteId({ id }));
    dispatch(showDeleteEmployeeModal());
  };

  const handleUpdate = (employee) => {
    dispatch(setEditEmployeeData({ employee }));
    dispatch(showUpdateEmployeeModal());
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
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button variant="danger" className="mb-2" onClick={handleSearch}>
              Search
            </Button>
          </div>
        </div>
        <Button
          onClick={handleOpenModal}
          variant="success"
          className="mt-3"
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
                  <th scope="col">Nomor</th>
                  <th scope="col">Employee Id</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Role Name</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {(searchTerm ? filteredEmployees : initValue).map((e) => {
                  noUrut += 1
                  return (
                    <tr key={e.user_id}>
                      <td>{noUrut}</td>
                      <td>{e.user_id}</td>
                      <td>
                        {e.first_name} {e.last_name}
                      </td>
                      <td>{e.email}</td>
                      <td>{e.role_name}</td>
                      <td>
                        <Button
                          variant="primary"
                          className="me-2"
                          onClick={() => handleUpdate(e)}
                        >
                          Edit
                        </Button>
                        <Button
                          variant="danger"
                          onClick={() => handleDelete(e.user_id)}
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
