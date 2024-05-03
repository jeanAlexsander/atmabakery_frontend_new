import AdminSideBar from "../component/side_navbar_admin";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useRef } from "react";
import ModalAddRecipe from "./addRecipeModals";
import ModalUpdateRecipe from "./updateRecipeModals";
import ModalDeleteRecipe from "./deleteRecipeModals";
import { useDispatch, useSelector } from "react-redux";
import {
  showAddRecipeModal,
  showUpdateRecipeModal,
  showDeleteRecipeModal,
} from "../../../store/admin/recipe";

const RecipeAdminView = () => {
  const initValue = useSelector((state) => state.recipeStore.recipeData);
  const [recipe, setRecipes] = useState([...initValue]);
  const searchRef = useRef(null);
  const dispatch = useDispatch();

  const filterRecipe = (cek) => {
    var lowerCek = cek.toLowerCase();
    var temp = initValue.filter(
      (r) =>
        r.recipe_id.toLowerCase().includes(lowerCek) ||
        r.product_name.toLowerCase().includes(lowerCek) 
    );
    setRecipes(temp);
  };

  const handleOpenModal = () => {
    dispatch(showAddRecipeModal());
  };
  const handleOpenModalUpdate = () => {
    dispatch(showUpdateRecipeModal());
  };
  const handleOpenModalDelete = () => {
    dispatch(showDeleteRecipeModal());
  };
  return (
    <div style={{ display: "flex" }}>
      <AdminSideBar />
      <ModalAddRecipe />
      <ModalUpdateRecipe />
      <ModalDeleteRecipe />
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
                filterRecipe(String(searchRef.current.value));
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

            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Recipe ID</th>
                  <th scope="col">Product Name</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {recipe.map((r) => {
                  return (
                    <tr key={r.recipe_id}>
                      <td>{r.recipe_id}</td>
                      <td>{r.product_name}</td>
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

export default RecipeAdminView;
