import AdminSideBar from "../component/side_navbar_admin";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCustodiansData } from "../../../store/mo/custodian";
import {
  fetchCustomerData,
  fetchHistoryData,
  setOpenModalHistory,
} from "../../../store/admin/customer";
import ModalShowHistoryAdmin from "./history_customer";

const CustomerView = () => {
  const initValue = useSelector(
    (state) => state.customerAdminStore.customerData
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProduct, setFilteredProduct] = useState([]);
  const searchRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCustomerData());
  }, [dispatch]);

  const filterCustomer = (cek) => {
    var lowerCek = cek.toLowerCase();
    var temp = initValue.filter(
      (c) =>
        String(c.user_id).includes(lowerCek) ||
        c.first_name.toLowerCase().includes(lowerCek) ||
        c.last_name.toLowerCase().includes(lowerCek) ||
        c.email.toLowerCase().includes(lowerCek)
    );
    setFilteredProduct(temp);
  };

  const handleOpenModal = (id) => {
    dispatch(setOpenModalHistory());
    dispatch(fetchHistoryData(id));
  };

  return (
    <div style={{ display: "flex" }}>
      <AdminSideBar />
      <ModalShowHistoryAdmin />
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
          <h4>Customer</h4>
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
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button
              variant="danger"
              className="mb-2"
              onClick={() => {
                filterCustomer(String(searchRef.current.value));
              }}
            >
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
                Customer
              </h2>
            </div>

            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Customer ID</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">date of birth</th>
                  <th scope="col">action</th>
                </tr>
              </thead>
              <tbody>
                {(searchTerm ? filteredProduct : initValue).map((c) => {
                  return (
                    <tr key={c.user_id}>
                      <td>{c.user_id}</td>
                      <td>
                        {c.first_name} {c.last_name}
                      </td>
                      <td>{c.email}</td>
                      <td>{c.date_of_birth}</td>
                      <td>
                        <Button
                          className="primary"
                          onClick={() => {
                            handleOpenModal(c.user_id);
                          }}
                        >
                          <i className="fas fa-edit"></i>
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

export default CustomerView;
