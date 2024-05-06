import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  showAddHampersModal,
  showUpdateHampersModal,
  showDeleteHampersModal,
  fetchHampersData,
  setDeleteHamperId,
  setEditHampersData,
} from "../../../store/admin/hampers";
import AdminSideBar from "../component/side_navbar_admin";
import ModalAddHampers from "./addHampers";
import ModalUpdateHampers from "./updateHampers";
import ModalDeleteHampers from "./deleteHampers";
import { Button, Card } from "react-bootstrap";
import gambar1 from "../../../assets/bg1.png";

const HampersAdminView = () => {
  const initValue = useSelector((state) => state.hampersStore.hampersData);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredHampers, setFilteredHampers] = useState([]);
  const searchRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHampersData());
  }, [dispatch]);

  const filterHampers = () => {
    const lowerCek = searchTerm.toLowerCase();
    const temp = initValue.filter(
      (h) =>
        h.name.toLowerCase().includes(lowerCek) ||
        h.hampers_status.toLowerCase().includes(lowerCek)
    );
    setFilteredHampers(temp);
  };

  const handleOpenModal = () => {
    dispatch(showAddHampersModal());
  };

  const handleOpenModalUpdate = () => {
    dispatch(showUpdateHampersModal());
  };

  const handleOpenModalDelete = () => {
    dispatch(showDeleteHampersModal());
  };

  const handleDelete = (id) => {
    dispatch(setDeleteHamperId({ id }));
    dispatch(showDeleteHampersModal());
  };

  const handleUpdate = (hampers) => {
    dispatch(setEditHampersData({ hampers }));
    dispatch(showUpdateHampersModal());
  };

  return (
    <div style={{ display: "flex" }}>
      <AdminSideBar />
      <ModalAddHampers />
      <ModalUpdateHampers />
      <ModalDeleteHampers />
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
          <h4>Recipe</h4>
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
            <Button variant="danger" className="mb-2" onClick={filterHampers}>
              Search
            </Button>
          </div>
        </div>
        <Button
          onClick={handleOpenModal}
          variant="success"
          className="mt-3 "
          style={{ marginLeft: "20px" }}
        >
          + Add Hampers
        </Button>
        <div
          className="p-4 container-fluid"
          style={{ overflowY: "auto", flex: "1" }}
        >
          <div className="card shadow-lg p-4 mb-5 rounded">
            <div className="card-header mb-3">
              <h2 className="fw-semibold" style={{ textAlign: "center" }}>
                Hampers
              </h2>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {(searchTerm ? filteredHampers : initValue).map((h) => (
                <div
                  key={h.hampers_id}
                  style={{ width: "calc(100% / 3)", padding: "0 5px" }}
                >
                  <Card style={{ width: "18rem" }}>
                    <Card.Img
                      variant="top"
                      src={h.image === "NULL" ? gambar1 : h.image}
                    />
                    <Card.Body>
                      <Card.Title>{h.name}</Card.Title>
                      <Card.Text>{h.hampers_status}</Card.Text>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Button
                          variant="primary"
                          onClick={() => {
                            handleUpdate(h);
                          }}
                        >
                          Update
                        </Button>
                        <Button
                          variant="danger"
                          onClick={() => {
                            handleDelete(h.hampers_id);
                          }}
                        >
                          Delete
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HampersAdminView;
