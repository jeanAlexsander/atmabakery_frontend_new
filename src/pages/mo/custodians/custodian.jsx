import MOSideBar from "../component/side_nav_bar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useRef } from "react";
import ModalAddCustodian from "./addCustodianModals";
import ModalUpdateCustodian from "./updateCustodianModals";
import ModalDeleteCustodian from "./deleteCustodianModals";
import { useDispatch, useSelector } from "react-redux";
import {
  showAddCustodianModal,
  showUpdateCustodianModal,
  showDeleteCustodianModal,
} from "../../../store/custodian";

const CustodianView = () => {
  const initValue = useSelector((state) => state.custodianStore.custodianData);
  const [custodian, setCustodian] = useState([...initValue]);
  const searchRef = useRef(null);
  const dispatch = useDispatch();

  const filterCustodian = (cek) => {
    var lowerCek = cek.toLowerCase();
    var temp = initValue.filter(
      (c) =>
        c.name.toLowerCase().includes(lowerCek) ||
        c.deposit_time.toLowerCase().includes(lowerCek) ||
        c.amount.toLowerCase().includes(lowerCek)
    );
    setCustodian(temp);
  };

  const handleOpenModal = () => {
    dispatch(showAddCustodianModal());
  };
  const handleOpenModalUpdate = () => {
    dispatch(showUpdateCustodianModal());
  };
  const handleOpenModalDelete = () => {
    dispatch(showDeleteCustodianModal());
  };
  return (
    <div style={{ display: "flex" }}>
      <MOSideBar />
      <ModalAddCustodian />
      <ModalUpdateCustodian />
      <ModalDeleteCustodian />
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
          <h4>Custodians</h4>
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
                filterCustodian(String(searchRef.current.value));
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
          + Add Custodian
        </Button>
        <div
          className="p-4 container-fluid"
          style={{ overflowY: "auto", flex: "1" }}
        >
          <div className="card shadow-lg p-4 mb-5 rounded">
            <div className="card-header mb-3">
              <h2 className="fw-semibold" style={{ textAlign: "center" }}>
                Data Custodians
              </h2>
            </div>

            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Custodian Id</th>
                  <th scope="col">Name</th>
                  <th scope="col">Deposit Time</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {custodian.map((c) => {
                  return (
                    <tr key={c.id}>
                      <td>{c.id}</td>
                      <td>{c.name}</td>
                      <td>{c.deposit_time}</td>
                      <td>{c.amount}</td>
                      <td>
                        <Button
                          variant="primary"
                          className="me-2 btn-md"
                          onClick={() => {
                            handleOpenModalUpdate();
                          }}
                        >
                          Edit
                        </Button>
                        <Button
                          variant="danger"
                          className="btn-md"
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

export default CustodianView;
