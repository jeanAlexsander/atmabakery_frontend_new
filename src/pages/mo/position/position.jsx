import MOSideBar from "../component/side_nav_bar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useRef, useEffect } from "react";
import ModalAddPosition from "./addPositionModals";
import ModalUpdatePosition from "./updatePositionModals";
import ModalDeletePosition from "./deletePositionModals";
import { useDispatch, useSelector } from "react-redux";
import {
  showAddPositionModal,
  showUpdatePositionModal,
  showDeletePositionModal,
  fetchPositionData,
  setDeleteId,
  setEditPositionData,
} from "../../../store/position";

const PositionView = () => {
  const initValue = useSelector((state) => state.positionStore.positionData);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPosition, setFilteredPosition] = useState([]);
  const searchRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPositionData());
  }, [dispatch]);

  const handleOpenModal = () => {
    dispatch(showAddPositionModal());
  };
  const handleOpenModalUpdate = () => {
    dispatch(showUpdatePositionModal());
    dispatch(setEditPositionData(position));
  };
  const handleOpenModalDelete = () => {
    dispatch(setDeleteId({ id }));
    dispatch(showDeletePositionModal());
  };


  const handleSearch = () => {
    var lowerCek = searchTerm.toLowerCase();
    var temp = initValue.filter(
      (p) =>
        p.position_name.toLowerCase().includes(lowerCek) ||
        p.position_id.toLowerCase().includes(lowerCek)
    );
    setFilteredPosition(temp);
  };

  const handleDelete = (id) => {
    dispatch(setDeleteId({ id }));
    dispatch(showDeletePositionModal());
  };

  const handleUpdate = (id) => {
    dispatch(setDeleteId({ id }));
    dispatch(showUpdatePositionModal());
  };

  const handleAdd = (id) => {
    dispatch(setDeleteId({id}))
    dispatch(showAddPositionModal());
  }

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
          <h4>Position</h4>
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
              onChange={(p) => setSearchTerm(p.target.value)}
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
                Position Data
              </h2>
            </div>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">User id</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Position Name</th>
                </tr>
              </thead>
              <tbody>
                {(searchTerm ? filteredPosition : initValue).map((p) => (
                  <tr key={p.user_id}>
                    <td>{p.user_id}</td>
                    <td>{p.first_name} {p.last_name}</td>
                    <td>{p.email} </td>
                    <td>{p.position_name  === undefined ? "none" : p.position_name}</td>
                    <td>
                      <Button
                        variant="warning"
                        className="me-2"
                        onClick={() => handleUpdate(p.user_id)}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="danger"
                        className="me-2"
                        onClick={() => handleDelete(p.user_id)}
                        disabled={p.position_name  === undefined ? true : false}
                      >
                        Delete
                      </Button>
                      <Button
                        variant="success"
                        className="me-2"
                        onClick={() => handleAdd(p.user_id)}
                        disabled={p.position_name  === undefined ? false : true}
                      >
                        Add
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

export default PositionView;
