import React, { useRef, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchRecipesData,
  hideUpdateRecipeModal,
  setCancelEditRecipe,
  updateRecipeData,
} from "../../../store/admin/recipe";
import "bootstrap/dist/css/bootstrap.min.css";
import { URL } from "../../../../constants"; // Sesuaikan dengan path dan nama file constants

function ModalUpdateRecipe() {
  const show = useSelector((state) => state.recipeStore.updateRecipeModal);
  const data = useSelector((state) => state.recipeStore.editRecipeData);
  const [dataIngredients, setDataIngredients] = useState([]);
  const [dataInputIngredient, setDataInputIngredient] = useState([]);

  const fetchDataUpdate = async () => {
    try {
      const response = await fetch(
        URL + "get-recipes-update/" + data.product_id
      );
      const dataIn = await response.json();
      setDataIngredients(dataIn.data);
      setDataInputIngredient(dataIn.data.ingredients);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log("masuk");
    if (show) {
      fetchDataUpdate();
    }
  }, [show, data]);

  const product_nameRef = useRef(null);
  const deskripsiRef = useRef(null);

  useEffect(() => {
    if (dataIngredients) {
      if (product_nameRef.current) {
        product_nameRef.current.value = dataIngredients.product_name;
      }
      if (deskripsiRef.current) {
        deskripsiRef.current.value = data.deskripsi;
      }
    }
  }, [data, dataIngredients]);

  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(hideUpdateRecipeModal());
    dispatch(setCancelEditRecipe());
  };

  const updateRecipeData = async (data) => {
    try {
      await fetch(URL + "update-recipes-new", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleSaveChanges = () => {
    const data = {
      product_name: product_nameRef.current.value,
      ingredients: dataInputIngredient,
    };
    updateRecipeData(data);
    handleClose();
  };

  const addDataIngredient = (index, value) => {
    const newData = dataInputIngredient.map((val, idx) =>
      idx === index ? { ...val, ingredient_id: value } : val
    );
    setDataInputIngredient(newData);
  };

  const addDataUnit = (index, value) => {
    const newData = dataInputIngredient.map((val, idx) =>
      idx === index ? { ...val, total_use: parseInt(value) } : val
    );
    setDataInputIngredient(newData);
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Recipe</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formProductName">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Product Name"
                autoFocus
                defaultValue={data.name}
                ref={product_nameRef}
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
                <Form.Group className="mb-3" controlId={`unit_${index}`}>
                  <Form.Control
                    type="number"
                    placeholder={val.name}
                    autoFocus
                    disabled
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId={`unit_${index}`}>
                  <Form.Control
                    type="number"
                    placeholder="Enter Unit"
                    autoFocus
                    onChange={(e) => {
                      addDataUnit(index, e.target.value);
                    }}
                    value={val.total_use}
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
          <Button variant="primary" onClick={handleSaveChanges}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalUpdateRecipe;
