import MOSideBar from "../component/side_nav_bar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useRef } from "react";
import ModalAddOtherNeed from "./addOtherNeedModals";
import ModalUpdateOtherNeed from "./updateOtherNeedModals";
import ModalDeleteOtherNeed from "./deleteOtherNeedModals";
import { useDispatch, useSelector } from "react-redux";
import {
  showAddOtherNeedModal,
  showUpdateOtherNeedModal,
  showDeleteOtherNeedModal,
} from "../../../store/otherNeed";

const OtherNeedView = () => {
  const initValue = useSelector((state) => state.otherNeedStore.otherNeedData);
  const [otherNeed, setOtherNeed] = useState([...initValue]);
  const searchRef = useRef(null);
  const dispatch = useDispatch();

  const filterOtherNeed = (cek) => {
    var lowerCek = cek.toLowerCase();
    var temp = initValue.filter(
      (o) =>
        o.name.toLowerCase().includes(lowerCek) ||
        o.cost.toLowerCase().includes(lowerCek) ||
        o.date.toLowerCase().includes(lowerCek)
    );
    setOtherNeed(temp);
  };

  const handleOpenModal = () => {
    dispatch(showAddOtherNeedModal());
  };
  const handleOpenModalUpdate = () => {
    dispatch(showUpdateOtherNeedModal());
  };
  const handleOpenModalDelete = () => {
    dispatch(showDeleteOtherNeedModal());
  };
  return (
    <div style={{ display: "flex" }}>
      <MOSideBar />
      <ModalAddOtherNeed />
      <ModalUpdateOtherNeed />
      <ModalDeleteOtherNeed />
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
          <h4>Other Need</h4>
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
                filterOtherNeed(String(searchRef.current.value));
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
          + Add Other Need
        </Button>
        <div
          className="p-4 container-fluid"
          style={{ overflowY: "auto", flex: "1" }}
        >
          <div className="card shadow-lg p-4 mb-5 rounded">
            <div className="card-header mb-3">
              <h2 className="fw-semibold" style={{ textAlign: "center" }}>
                Data Other Need
              </h2>
            </div>

            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Other Need Id</th>
                  <th scope="col">Name</th>
                  <th scope="col">Cost</th>
                  <th scope="col">Date</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {otherNeed.map((o) => {
                  return (
                    <tr key={o.id}>
                      <td>{o.id}</td>
                      <td>
                        {o.name}
                      </td>
                      <td>{o.cost}</td>
                      <td>{o.date}</td>
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

export default OtherNeedView;
