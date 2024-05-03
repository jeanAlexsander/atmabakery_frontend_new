import AdminSideBar from "../component/side_navbar_admin";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useRef, useEffect } from "react";
import ModalAddHampers from "./addHampers";
import ModalUpdateHampers from "./updateHampers";
import ModalDeleteHampers from "./deleteHampers";
import { useDispatch, useSelector } from "react-redux";
import {
  showAddHampersModal,
  showUpdateHampersModal,
  showDeleteHampersModal,
} from "../../../store/admin/hampers";
import Card from "react-bootstrap/Card";
import gambar1 from "../../../assets/bg1.png";

const HampersAdminView = () => {
  const initValue = useSelector((state) => state.hampersStore.hampersData);
  const [hampers, setHampers] = useState([...initValue]);
  const searchRef = useRef(null);
  const dispatch = useDispatch();

  const filterHampers = (cek) => {
    console.log("access");
    var lowerCek = cek.toLowerCase();
    var temp = initValue.filter(
      (h) =>
        h.hampers_id.toString().toLowerCase().includes(lowerCek) ||
        h.name.toLowerCase().includes(lowerCek) ||
        h.hampers_status.toLowerCase().includes(lowerCek)
    );
    setHampers(temp);
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
            />
            <Button
              variant="danger"
              className="mb-2"
              onClick={() => {
                filterHampers(String(searchRef.current.value));
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
          + Add Recipe
        </Button>
        <div
          className="p-4 container-fluid"
          style={{ overflowY: "auto", flex: "1" }}
        >
          <div className="card shadow-lg p-4 mb-5 rounded">
            <div className="card-header mb-3">
              <h2 className="fw-semibold" style={{ textAlign: "center" }}>
                Recipe
              </h2>
            </div>
            <div
              style={{ display: "flex", flexDirection: "row", rowGap: "10px" }}
            >
              {hampers.map((h) => {
                return (
                  <div
                    key={h.hampers_id}
                    style={{
                      width: "calc(100% / 3)",
                      padding: "0 5px",
                      boxSizing: "border-box",
                    }}
                  >
                    <Card style={{ width: "18rem" }}>
                      <Card.Img variant="top" src={gambar1} />
                      <Card.Body>
                        <Card.Title>{h.name}</Card.Title>
                        <Card.Text>{h.hampers_status}</Card.Text>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                          }}
                        >
                          <Button
                            variant="primary"
                            className="btn-lg"
                            style={{
                              fontSize: "15px",
                              flex: "1",
                              marginRight: "5px",
                              height: "auto",
                              lineHeight: "normal",
                            }}
                            onClick={()=>{handleOpenModalUpdate()}}

                          >
                            Update
                          </Button>
                          <Button
                            variant="danger"
                            className="btn-lg"
                            style={{
                              fontSize: "15px",
                              flex: "1",
                              marginLeft: "5px",
                              height: "auto",
                              lineHeight: "normal",
                            }}
                            onClick={()=>{handleOpenModalDelete()}}
                          >
                            Delete
                          </Button>
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HampersAdminView;
