import AdminSideBar from "../component/side_navbar_admin";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useRef } from "react";
import ModalAddRecipeIngredient from "./addRecipeIngredientsModals";
import ModalUpdateRecipeIngredient from "./updateRecipeIngredientsModals";
import ModalDeleteRecipeIngredient from "./deleteRecipeIngredients";
import { useDispatch, useSelector } from "react-redux";
import {
  showAddRecipeIngredientModal,
  showUpdateRecipeIngredientModal,
  showDeleteRecipeIngredientModal,
} from "../../../store/admin/recipeingredients";

const RecipeIngredientView = () => {
  const initValue = useSelector((state) => state.recipeIngredientStore.recipeIngredientData);
  const [recipeIngredient, setRecipeIngredient] = useState([...initValue]);
  const searchRef = useRef(null);
  const dispatch = useDispatch();

  const filterRecipeIngredient = (cek) => {
    var lowerCek = cek.toLowerCase();
    var temp = initValue.filter(
      (o) =>
        o.recipe_id.toLowerCase().includes(lowerCek) ||
        o.product_name.toLowerCase().includes(lowerCek) ||
        o.total_use.toLowerCase().includes(lowerCek)
    );
    setRecipeIngredient(temp);
  };

  const handleOpenModal = () => {
    dispatch(showAddRecipeIngredientModal());
  };
  const handleOpenModalUpdate = () => {
    dispatch(showUpdateRecipeIngredientModal());
  };
  const handleOpenModalDelete = () => {
    dispatch(showDeleteRecipeIngredientModal());
  };
  return (
    <div style={{ display: "flex" }}>
      <AdminSideBar />
      <ModalAddRecipeIngredient />
      <ModalUpdateRecipeIngredient />
      <ModalDeleteRecipeIngredient />
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
                filterRecipeIngredient(String(searchRef.current.value));
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
          + Add Recipe Ingredients
        </Button>
        <div
          className="p-4 container-fluid"
          style={{ overflowY: "auto", flex: "1" }}
        >
          <div className="card shadow-lg p-4 mb-5 rounded">
            <div className="card-header mb-3">
              <h2 className="fw-semibold" style={{ textAlign: "center" }}>
                Recipe Ingredients
              </h2>
            </div>

            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Recipe ID</th>
                  <th scope="col">Ingredient ID</th>
                  <th scope="col">Total Use</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {recipeIngredient.map((o) => {
                  return (
                    <tr key={o.recipe_id}>
                      <td>{o.recipe_id}</td>
                      <td>{o.ingredient_id}</td>
                      <td>{o.total_use}</td>
                      <td></td>
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

export default RecipeIngredientView;
