import AdminSideBar from "../component/side_navbar_admin";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useRef, useEffect } from "react";
import ModalAddPromoPoint from "./addPromoPointModals";
import ModalUpdatePromoPoint from "./updatePromoPointModals";
import ModalDeletePromoPoint from "./deletePromoPointModals";
import { useDispatch, useSelector } from "react-redux";
import {
  showAddPromoPointModal,
  showUpdatePromoPointModal,
  showDeletePromoPointModal,
  setDeleteId,
  fetchPromoPointData,
  setEditPromoPointData,
  setAddPromo,
} from "../../../store/admin/promoPoint";

const PromoPointView = () => {
  const initValue = useSelector(
    (state) => state.promoPointStore.promoPointData
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [promoPoint, setPromoPoint] = useState([...initValue]);
  const searchRef = useRef(null);
  const dispatch = useDispatch();

  let noUrut = 0;

  useEffect(() => {
    dispatch(fetchPromoPointData());
  }, [dispatch]);

  const handleOpenModal = (data) => {
    dispatch(setAddPromo({ data }));
    dispatch(showAddPromoPointModal());
  };

  const handleOpenModalUpdate = (promoPoint) => {
    dispatch(setEditPromoPointData(promoPoint));
    dispatch(showUpdatePromoPointModal());
  };

  const handleOpenModalDelete = (id) => {
    dispatch(setDeleteId({ id }));
    dispatch(showDeletePromoPointModal());
  };

  const handleSearch = () => {
    const lowerCek = searchTerm.toLowerCase();
    const temp = initValue.filter(
      (p) =>
        p.first_name.toLowerCase().includes(lowerCek) ||
        p.last_name.toLowerCase().includes(lowerCek) ||
        p.email.toLowerCase().includes(lowerCek) ||
        p.total_point.toLowerCase().includes(lowerCek)
    );
    setFilteredPromoPoint(temp);
  };

  const handleDelete = (id) => {
    dispatch(setDeleteId({ id }));
    dispatch(showDeletePromoPointModal());
  };

  const handleUpdate = (promoPoint) => {
    dispatch(setEditPromoPointData({ promoPoint }));
    dispatch(showUpdatePromoPointModal());
  };

  return (
    <div style={{ display: "flex" }}>
      <AdminSideBar />
      <ModalAddPromoPoint />
      <ModalUpdatePromoPoint />
      <ModalDeletePromoPoint />
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
          <h4>Promo Point</h4>
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
                filterRecipe(String(searchRef.current.value));
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
                Promo Point
              </h2>
            </div>

            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Nomor</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Total Point</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {(searchTerm ? filteredPromoPoint : initValue).map((p) => {
                  noUrut += 1;
                  return (
                    <tr key={p.user_id}>
                      <td>{noUrut}</td>
                      <td>
                        {p.first_name} {p.last_name}
                      </td>
                      <td>{p.email}</td>
                      <td>{p.total_point}</td>
                      <td></td>
                      <td>
                        <Button
                          variant="primary"
                          className="me-2"
                          onClick={() => {
                            handleOpenModal(p);
                          }}
                        >
                          Add Point
                        </Button>
                        <Button
                          variant="primary"
                          className="me-2"
                          onClick={() => handleUpdate(p)}
                        >
                          Edit
                        </Button>
                        <Button
                          variant="danger"
                          className="me-2"
                          onClick={() => handleDelete(p.user_id)}
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

export default PromoPointView;
