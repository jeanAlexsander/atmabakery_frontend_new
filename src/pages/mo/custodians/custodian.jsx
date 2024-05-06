import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  showAddCustodianModal,
  showUpdateCustodianModal,
  showDeleteCustodianModal,
  fetchCustodiansData,
  setDeleteCustodianId,
  setEditCustodianData
} from "../../../store/mo/custodian";
import { Button } from "react-bootstrap";
import MOSideBar from "../component/side_nav_bar";
import ModalAddCustodian from "./addCustodianModals";
import ModalUpdateCustodian from "./updateCustodianModals";
import ModalDeleteCustodian from "./deleteCustodianModals";

const CustodianView = () => {
  const initValue = useSelector((state) => state.custodianStore.custodianData);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCustodian, setFilteredCustodian] = useState([]);
  const searchRef = useRef(null);
  const dispatch = useDispatch();

  let noUrut = 0;

  const handleSearch = () => {
    const lowerCek = searchTerm.toLowerCase();
    const temp = initValue.filter(
      (c) =>
        c.name.toLowerCase().includes(lowerCek) ||
        c.deposit_time.toLowerCase().includes(lowerCek) ||
        String(c.amount).includes(lowerCek)
    );
    console.log(temp)
    setFilteredCustodian(temp);
  };

  useEffect(() => {
    dispatch(fetchCustodiansData());
  }, [dispatch]);

  const handleOpenModal = () => {
    dispatch(showAddCustodianModal());
  };

  const handleOpenModalUpdate = () => {
    dispatch(showUpdateCustodianModal());
  };

  const handleDelete = (id) => {
    console.log(id)
    dispatch(setDeleteCustodianId({ id }));
    dispatch(showDeleteCustodianModal());
  };

  const handleEdit = (custodian) => {
    dispatch(setEditCustodianData({ custodian }))
    dispatch(showUpdateCustodianModal())
  }

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
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button
              variant="danger"
              className="mb-2"
              onClick={handleSearch}
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
                  <th scope="col">NO</th>
                  <th scope="col">Custodian Id</th>
                  <th scope="col">Name</th>
                  <th scope="col">Deposit Time</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {(searchTerm ? filteredCustodian : initValue).map((c) => {
                  noUrut += 1
                  return (
                    <tr key={c.custodian_id}>
                      <td>{noUrut}</td>
                      <td>{c.custodian_id}</td>
                      <td>{c.name}</td>
                      <td>{c.deposit_time}</td>
                      <td>{c.amount}</td>
                      <td>
                        <Button
                          variant="primary"
                          className="me-2 btn-md"
                          onClick={() => {
                            handleEdit(c);
                          }}
                        >
                          Edit
                        </Button>
                        <Button
                          variant="danger"
                          className="btn-md"
                          onClick={() => {
                            handleDelete(c.custodian_id);
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
