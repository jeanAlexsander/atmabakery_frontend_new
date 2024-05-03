import AdminSideBar from "../component/side_navbar_admin";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useRef, useEffect } from "react";
import ModalAddProduk from "./addProdukModals";
import ModalUpdateProduk from "./updateProdukModals";
import ModalDeleteProduk from "./deleteProdukModals";
import { useDispatch, useSelector } from "react-redux";
import {
  showAddProdukModal,
  showUpdateProdukModal,
  showDeleteProdukModal,
} from "../../../store/admin/produk";
import Card from "react-bootstrap/Card";
import gambar1 from "../../../assets/bg1.png"

const ProdukAdminView = () => {
  const initValue = useSelector((state) => state.produkStore.produkData);
  const [produk, setProduk] = useState([...initValue]);
  const searchRef = useRef(null);
  const dispatch = useDispatch();

  const filterProduk = (cek) => {
    console.log("access");
    var lowerCek = cek.toLowerCase();
    var temp = initValue.filter(
      (p) =>
        p.produk_id.toString().toLowerCase().includes(lowerCek) ||
        p.custodian_id.toLowerCase().includes(lowerCek) ||
        p.name.toLowerCase().includes(lowerCek) ||
        p.price.toLowerCase().includes(lowerCek) ||
        p.quantity.toLowerCase().includes(lowerCek) ||
        p.image.toLowerCase().includes(lowerCek) ||
        p.category_id.toLowerCase().includes(lowerCek) 
    );
    setProduk(temp);
  };
  

  const handleOpenModal = () => {
    dispatch(showAddProdukModal());
  };
  const handleOpenModalUpdate = () => {
    dispatch(showUpdateProdukModal());
  };
  const handleOpenModalDelete = () => {
    dispatch(showDeleteProdukModal());
  };
  return (
    <div style={{ display: "flex" }}>
      <AdminSideBar />
      <ModalAddProduk />
      <ModalUpdateProduk />
      <ModalDeleteProduk />
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
          <h4>Produk</h4>
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
                filterProduk(String(searchRef.current.value));
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
          + Add Produk
        </Button>
        <div
          className="p-4 container-fluid"
          style={{ overflowY: "auto", flex: "1" }}
        >
          <div className="card shadow-lg p-4 mb-5 rounded">
            <div className="card-header mb-3">
              <h2 className="fw-semibold" style={{ textAlign: "center" }}>
                Produk
              </h2>
            </div>
            <div
              style={{ display: "flex", flexDirection: "row", rowGap: "10px" }}
            >
              {produk.map((p) => {
                return (
                  <div
                    key={p.produk_id} 
                    style={{
                      width: "calc(100% / 3)",
                      padding: "0 5px",
                      boxSizing: "border-box",
                    }}
                  >
                    <Card style={{ width: "18rem" }}>
                      <Card.Img variant="top" src={gambar1} />
                      <Card.Body>
                        <Card.Title>{p.name}</Card.Title>
                        <Card.Text>{p.price}, {p.custodian_id} {p.quantity}, {p.category_id}, </Card.Text>
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

export default ProdukAdminView;
