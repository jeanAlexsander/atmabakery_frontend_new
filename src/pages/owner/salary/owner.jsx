import OwnerSideBar from "../component/owner_nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useRef, useEffect } from "react";
import ModalUpdateSalary from "./updateSalaryModals";
import { useDispatch, useSelector } from "react-redux";
import { showUpdateSalaryModal, fetchSalaryData, setEditSalaryData, setUpdateSalaryData} from "../../../store/owner/salary";

const SalaryView = () => {
  const initValue = useSelector((state) => state.salaryStore.salaryData);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredSalary, setFilteredSalary] = useState([]);
  const dispatch = useDispatch();
  const searchRef = useRef(null);

  useEffect(() => {
    dispatch(fetchSalaryData());
  }, [dispatch]);

  const handleOpenModalUpdate = (salary) => {
    dispatch(setEditSalaryData(salary));
    dispatch(showUpdateSalaryModal());
  }

  const handleSearch = () => {
    const lowerCek = searchTerm.toLowerCase();
    const temp = initValue.filter(
      (o) => 
        o.salary_id.toLowerCase().includes(lowerCek) ||
        o.employee_id.toLowerCase().includes(lowerCek) ||
        o.salary_amount.toLowerCase().includes(lowerCek) ||
        o.bonus.toLowerCase().includes(lowerCek) ||
        o.paid_time.toLowerCase().includes(lowerCek) 
    );
    setFilteredSalary(temp);
  };

  const handleUpdate = (salary) => {
    dispatch(showUpdateSalaryModal());
    dispatch(setUpdateSalaryData({data:salary}));
  };


  return (
    <div style={{ display: "flex" }}>
      <OwnerSideBar />
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
              value={searchTerm}
              onChange={(o) => setSearchTerm(o.target.value)}
            />
            <Button variant="danger" className="mb-2" onClick={handleSearch}>
              Search
            </Button>
          </div>
        </div>
        <div
          className="p-4 container-fluid"
          style={{ overflowY: "auto", flex: "1" }}
        >
          <div className="card shadow-lg p-4 mb-5 rounded">
            <div className="card-header mb-3">
              <h2 className="fw-semibold" style={{ textAlign: "center" }}>
                Salary Data
              </h2>
            </div>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Salary ID</th>
                  <th scope="col">Salary Name</th>
                  <th scope="col">Salary Amount</th>
                  <th scope="col">Paid Time</th>
                  <th scope="col">Bonus</th>
                </tr>
              </thead>
              <tbody>
                {(searchTerm ? filteredSalary : initValue).map((o) => (
                  <tr key={o.salary_id}>
                    <td>{o.salary_id}</td>
                    <td>
                      {o.first_name} {o.last_name}
                    </td>
                    <td>{o.salary_amount}</td>
                    <td>{o.paid_time}</td>
                    <td>{o.bonus}</td>
                    <td>
                      <Button
                        variant="primary"
                        className="me-2"
                        onClick={() => handleUpdate(o)}
                      >
                        Edit
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalaryView;
