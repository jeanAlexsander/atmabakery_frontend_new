import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MOSideBar from "../component/side_nav_bar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import ModalAddOtherNeed from "./addOtherNeedModals";
import ModalUpdateOtherNeed from "./updateOtherNeedModals";
import ModalDeleteOtherNeed from "./deleteOtherNeedModals";
import {
  showAddOtherNeedModal,
  showUpdateOtherNeedModal,
  showDeleteOtherNeedModal,
  fetchOtherNeedData,
  setDeleteOtherNeedId,
  setEditOtherNeedData,
} from "../../../store/mo/otherNeed";

const OtherNeedView = () => {
  const initValue = useSelector((state) => state.otherNeedStore.otherNeedData);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredIngredient, setFilteredIngredients] = useState([]);
  const searchRef = useRef(null);
  const dispatch = useDispatch();

  let noUrut = 0;

  const handleSearch = () => {
    var lowerCek = searchTerm.toLowerCase();
    const temp = initValue.filter(
      (o) =>
        o.name.toLowerCase().includes(lowerCek) ||
        String(o.cost).includes(lowerCek) ||
        String(o.date).includes(lowerCek)
    );
    console.log(temp);
    setFilteredIngredients(temp);
  };

  useEffect(() => {
    dispatch(fetchOtherNeedData());
  }, [dispatch]);

  const handleOpenModal = () => {
    dispatch(showAddOtherNeedModal());
  };

  const handleOpenModalUpdate = (otherNeed) => {
    dispatch(showEditOtherNeedData(otherNeed));
    dispatch(showUpdateOtherNeedModal());
  };

  const handleDelete = (id) => {
    console.log(id);
    dispatch(setDeleteOtherNeedId({ id }));
    dispatch(showDeleteOtherNeedModal());
  };

  const handleEdit = (otherNeed) => {
    dispatch(setEditOtherNeedData({ otherNeed }));
    dispatch(showUpdateOtherNeedModal());
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
              onChange={(o) => setSearchTerm(o.target.value)}
            />
            <Button variant="danger" className="mb-2" onClick={handleSearch}>
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
                  <th scope="col">Nomor</th>
                  <th scope="col">Other Need Id</th>
                  <th scope="col">Name</th>
                  <th scope="col">Cost</th>
                  <th scope="col">Date</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {(searchTerm ? filteredIngredient : initValue).map((o) => {
                  noUrut += 1;
                  return (
                    <tr key={o.other_need_id}>
                      <td>{noUrut}</td>
                      <td>{o.other_need_id}</td>
                      <td>{o.name}</td>
                      <td>{o.cost}</td>
                      <td>{o.Date_of_expense}</td>
                      <td>
                        <Button
                          variant="primary"
                          className="me-2 btn-md"
                          onClick={() => {
                            handleEdit(o);
                          }}
                        >
                          Edit
                        </Button>
                        <Button
                          variant="danger"
                          className="btn-md"
                          onClick={() => {
                            handleDelete(o.other_need_id);
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
