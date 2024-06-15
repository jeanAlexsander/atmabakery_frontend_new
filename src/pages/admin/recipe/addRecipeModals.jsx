import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import {
  addRecipeData,
  fetchRecipesData,
  hideAddRecipeModal,
} from "../../../store/admin/recipe";
import "bootstrap/dist/css/bootstrap.min.css";
import { URL } from "../../../../constants";

function ModalAddRecipe() {
  const show = useSelector((state) => state.recipeStore.addRecipeModal);
  const [productName, setProductName] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [dataInputIngredient, setDataInputIngredient] = useState([
    { ingredient_id: "", total_use: "" },
  ]);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(hideAddRecipeModal());
  };

  const handleSave = async () => {
    const data = {
      product_name: productName,
      ingredients: dataInputIngredient,
    };

    try {
      await fetch(URL + "add-recipes-new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      // Handle response as needed
      dispatch(fetchRecipesData());
      dispatch(hideAddRecipeModal());
    } catch (error) {
      console.log(error);
    }
  };

  const getIngredients = async () => {
    try {
      const response = await fetch(URL + "get-ingredients");
      const data = await response.json();
      setIngredients(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (show) {
      getIngredients();
    }
  }, [show]);

  const handleAddIngredient = () => {
    setDataInputIngredient((prev) => [
      ...prev,
      { ingredient_id: "", total_use: "" },
    ]);
  };

  const addDataIngredient = (index, value) => {
    const newData = dataInputIngredient.map((val, idx) =>
      idx === index ? { ...val, ingredient_id: value } : val
    );
    setDataInputIngredient(newData);
  };

  const addDataUnit = (index, value) => {
    const newData = dataInputIngredient.map((val, idx) =>
      idx === index ? { ...val, total_use: value } : val
    );
    setDataInputIngredient(newData);
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Modal.Title>Add Ingredient</Modal.Title>
            <Button variant="success" onClick={handleAddIngredient}>
              Add Ingredient
            </Button>
          </div>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Product Name"
                autoFocus
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
              />
            </Form.Group>
            {dataInputIngredient.map((val, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  gap: "10px",
                }}
              >
                <select
                  name={`ingredient_${index}`}
                  id={`ingredient_${index}`}
                  style={{ width: "250px" }}
                  onChange={(e) => {
                    addDataIngredient(index, e.target.value);
                  }}
                >
                  <option value="">Select Ingredient</option>
                  {ingredients.map((ingredient) => (
                    <option
                      key={ingredient.ingredient_id}
                      value={ingredient.ingredient_id}
                    >
                      {ingredient.name}
                    </option>
                  ))}
                </select>
                <Form.Group className="mb-3" controlId={`unit_${index}`}>
                  <Form.Control
                    type="number"
                    placeholder="Enter Unit"
                    autoFocus
                    onChange={(e) => {
                      addDataUnit(index, e.target.value);
                    }}
                  />
                </Form.Group>
              </div>
            ))}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalAddRecipe;
