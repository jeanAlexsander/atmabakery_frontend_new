import OwnerSideBar from "../component/owner_nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useRef } from "react";
import ModalUpdateSalary from "./updateSalaryModals";
import { useDispatch, useSelector } from "react-redux";
import {
  showUpdateSalaryModal,
} from "../../../store/owner/salary";

const SalaryView = () => {
  const initValue = useSelector((state) => state.salaryStore.salaryData);
  const [salary, setSalary] = useState([...initValue]);
  const searchRef = useRef(null);
  const dispatch = useDispatch();

  const filterSalary = (cek) => {
    var lowerCek = cek.toLowerCase();
    var temp = initValue.filter(
      (o) =>
        o.salary_id.toLowerCase().includes(lowerCek) ||
        o.employee_id.toLowerCase().includes(lowerCek) ||
        o.salary_amount.toLowerCase().includes(lowerCek) ||
        o.bonus.toLowerCase().includes(lowerCek) ||
        o.paid_time.toLowerCase().includes(lowerCek)
    );
    setSalary(temp);
  };

  const handleOpenModalUpdate = () => {
    dispatch(showUpdateSalaryModal());
  };
  return (
    <div style={{ display: "flex" }}>
      <OwnerSideBar/>
      <ModalUpdateSalary />
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
          <h4>Salary</h4>
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
                filterSalary(String(searchRef.current.value));
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
          + Update Salary
        </Button>
        <div
          className="p-4 container-fluid"
          style={{ overflowY: "auto", flex: "1" }}
        >
          <div className="card shadow-lg p-4 mb-5 rounded">
            <div className="card-header mb-3">
              <h2 className="fw-semibold" style={{ textAlign: "center" }}>
                Employee's Salary
              </h2>
            </div>

            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Salary ID</th>
                  <th scope="col">Employee ID</th>
                  <th scope="col">Salary Amount</th>
                  <th scope="col">Bonus</th>
                  <th scope="col">Paid Time</th>
                </tr>
              </thead>
              <tbody>
                {salary.map((o) => {
                  return (
                    <tr key={o.salary_id}>
                      <td>{o.salary_id}</td>
                      <td>
                        {o.employee_id}
                      </td>
                      <td>{o.salary_amount}</td>
                      <td>{o.bonus}</td>
                      <td>{o.paid_time}</td>
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

export default SalaryView;
