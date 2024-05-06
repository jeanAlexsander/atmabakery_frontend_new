import AdminSideBar from "../component/side_navbar_admin";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useRef, useEffect } from "react";
import ModalAddRecipe from "./addRecipeModals";
import ModalUpdateRecipe from "./updateRecipeModals";
import ModalDeleteRecipe from "./deleteRecipeModals";
import { useDispatch, useSelector } from "react-redux";
import {
  showAddRecipeModal,
  showUpdateRecipeModal,
  showDeleteRecipeModal,
  fetchRecipesData,
  setDeleteRecipeId,
  setEditRecipeData
} from "../../../store/admin/recipe";

const RecipeAdminView = () => {
  const initValue = useSelector((state) => state.recipeStore.recipeData);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredRecipe, setFilteredRecipes] = useState([]);
  const searchRef = useRef(null);
  const dispatch = useDispatch();

  let noUrut = 0;

  const handleSearch = () => {
    var lowerCek = searchTerm.toLowerCase();
    const temp = initValue.filter(
      (r) =>
        r.product_name.toLowerCase().includes(lowerCek) ||
        r.deskripsi.toLowerCase().includes(lowerCek)
    );
    console.log(temp)
    setFilteredRecipes(temp);
  };

  useEffect(() => {
    dispatch(fetchRecipesData());
  }, [dispatch]);

  const handleOpenModal = () => {
    dispatch(showAddRecipeModal());
  };

  const handleOpenModalUpdate = (recipe) => {
    dispatch(setEditRecipeData(recipe));
    dispatch(showUpdateRecipeModal());
  };

  const handleDelete = (id) => {
    console.log(id)
    dispatch(setDeleteRecipeId({ id }));
    dispatch(showDeleteRecipeModal());
  };

  const handleEdit = (recipe) => {
    dispatch(setEditRecipeData({ recipe }))
    dispatch(showUpdateRecipeModal())
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
          <h4>Recipes</h4>
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
              onChange={(r) => setSearchTerm(r.target.value)}
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
          + Add Recipes
        </Button>
        <div
          className="p-4 container-fluid"
          style={{ overflowY: "auto", flex: "1" }}
        >
          <div className="card shadow-lg p-4 mb-5 rounded">
            <div className="card-header mb-3">
              <h2 className="fw-semibold" style={{ textAlign: "center" }}>
                Data Recipes
              </h2>
            </div>

            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Nomor</th>
                  <th scope="col">Recipe Id</th>
                  <th scope="col">Product Name</th>
                  <th scope="col">Deskripsi</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {(searchTerm ? filteredRecipe : initValue).map((r) => {
                  noUrut += 1
                  return (
                    <tr key={r.recipe_id}>
                      <td>{noUrut}</td>
                      <td>{r.recipe_id}</td>
                      <td>{r.product_name}</td>
                      <td>{r.deskripsi}</td>
                      <td>
                        <Button
                          variant="primary"
                          className="me-2 btn-md"
                          onClick={() => {
                            handleEdit(r);
                          }}
                        >
                          Edit
                        </Button>
                        <Button
                          variant="danger"
                          className="btn-md"
                          onClick={() => {
                            handleDelete(r.recipe_id);
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