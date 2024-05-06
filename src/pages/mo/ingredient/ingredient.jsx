import MOSideBar from "../component/side_nav_bar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useRef, useEffect } from "react";
import ModalAddIngredient from "./addIngredientModals";
import ModalUpdateIngredient from "./updateIngredientModals";
import ModalDeleteIngredient from "./deleteIngredientModals";
import { useDispatch, useSelector } from "react-redux";
import {
  showAddIngredientModal,
  showUpdateIngredientModal,
  showDeleteIngredientModal,
  fetchIngredientsData,
  setDeleteIngredientId,
  setEditIngredientData
} from "../../../store/ingredient";

const IngredientView = () => {
  const initValue = useSelector((state) => state.ingredientStore.ingredientData);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredIngredient, setFilteredIngredients] = useState([]);
  const searchRef = useRef(null);
  const dispatch = useDispatch();

  let noUrut = 0;

  const handleSearch = () => {
    var lowerCek = searchTerm.toLowerCase();
    const temp = initValue.filter(
      (i) =>
        i.name.toLowerCase().includes(lowerCek) ||
        i.unit.toLowerCase().includes(lowerCek) ||
        String(i.amount).includes(lowerCek)
    );
    console.log(temp)
    setFilteredIngredients(temp);
  };

  useEffect(() => {
    dispatch(fetchIngredientsData());
  }, [dispatch]);

  const handleOpenModal = () => {
    dispatch(showAddIngredientModal());
  };

  const handleOpenModalUpdate = (ingredient) => {
    dispatch(setEditIngredientData(ingredient));
    dispatch(showUpdateIngredientModal());
  };

  const handleDelete = (id) => {
    console.log(id)
    dispatch(setDeleteIngredientId({ id }));
    dispatch(showDeleteIngredientModal());
  };

  const handleEdit = (ingredient) => {
    dispatch(setEditIngredientData({ ingredient }))
    dispatch(showUpdateIngredientModal())
  };

  return (
    <div style={{ display: "flex" }}>
      <MOSideBar />
      <ModalAddIngredient />
      <ModalUpdateIngredient />
      <ModalDeleteIngredient />
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
          <h4>Ingredients</h4>
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
              onChange={(i) => setSearchTerm(i.target.value)}
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
          + Add Ingredient
        </Button>
        <div
          className="p-4 container-fluid"
          style={{ overflowY: "auto", flex: "1" }}
        >
          <div className="card shadow-lg p-4 mb-5 rounded">
            <div className="card-header mb-3">
              <h2 className="fw-semibold" style={{ textAlign: "center" }}>
                Data Ingredient
              </h2>
            </div>

            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Nomor</th>
                  <th scope="col">Ingredient Id</th>
                  <th scope="col">Name</th>
                  <th scope="col">Unit</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {(searchTerm ? filteredIngredient : initValue).map((i) => {
                  noUrut += 1
                  return (
                    <tr key={i.ingredient_id}>
                      <td>{noUrut}</td>
                      <td>{i.ingredient_id}</td>
                      <td>{i.name}</td>
                      <td>{i.unit}</td>
                      <td>{i.amount}</td>
                      <td>
                        <Button
                          variant="primary"
                          className="me-2 btn-md"
                          onClick={() => {
                            handleEdit(i);
                          }}
                        >
                          Edit
                        </Button>
                        <Button
                          variant="danger"
                          className="btn-md"
                          onClick={() => {
                            handleDelete(i.ingredient_id);
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

export default IngredientView;
