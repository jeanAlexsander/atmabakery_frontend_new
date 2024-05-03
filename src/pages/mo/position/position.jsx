import MOSideBar from "../component/side_nav_bar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useRef } from "react";
import ModalAddPosition from "./addPositionModals";
import ModalUpdatePosition from "./updatePositionModals";
import ModalDeletePosition from "./deletePositionModals";
import { useDispatch, useSelector } from "react-redux";
import {
  showAddPositionModal,
  showUpdatePositionModal,
  showDeletePositionModal,
} from "../../../store/position";

const PositionView = () => {
  const initValue = useSelector((state) => state.positionStore.positionData);
  const [position, setPosition] = useState([...initValue]);
  const searchRef = useRef(null);
  const dispatch = useDispatch();

  const filterPosition = (cek) => {
    var lowerCek = cek.toLowerCase();
    var temp = initValue.filter(
      (p) =>
        p.first_name.toLowerCase().includes(lowerCek) ||
        p.last_name.toLowerCase().includes(lowerCek) ||
        p.role_position.toLowerCase().includes(lowerCek)
    );
    setPosition(temp);
  };

  const handleOpenModal = () => {
    dispatch(showAddPositionModal());
  };
  const handleOpenModalUpdate = () => {
    dispatch(showUpdatePositionModal());
  };
  const handleOpenModalDelete = () => {
    dispatch(showDeletePositionModal());
  };
  return (
    <div style={{ display: "flex" }}>
      <MOSideBar />
      <ModalAddPosition />
      <ModalUpdatePosition />
      <ModalDeletePosition />
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
          <h4>Employee</h4>
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
                filterPosition(String(searchRef.current.value));
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
          + Add Position
        </Button>
        <div
          className="p-4 container-fluid"
          style={{ overflowY: "auto", flex: "1" }}
        >
          <div className="card shadow-lg p-4 mb-5 rounded">
            <div className="card-header mb-3">
              <h2 className="fw-semibold" style={{ textAlign: "center" }}>
                Data Position
              </h2>
            </div>

            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Employee_id</th>
                  <th scope="col">Name</th>
                  <th scope="col">Role Position</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {position.map((p) => {
                  return (
                    <tr key={p.id}>
                      <td>{p.id}</td>
                      <td>
                        {p.first_name} {p.last_name}
                      </td>
                      <td>{p.role_position}</td>
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

export default PositionView;
