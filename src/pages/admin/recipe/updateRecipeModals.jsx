import React, { useRef, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { hideUpdateRecipeModal, setCancelEditRecipe, updateRecipeData } from "../../../store/admin/recipe";
import "bootstrap/dist/css/bootstrap.min.css";

function ModalUpdateRecipe() {
  const show = useSelector((state) => state.recipeStore.updateRecipeModal);
  const data = useSelector((state) => state.recipeStore.editRecipeData);

  const product_nameRef = useRef(null)
  const deskripsiRef = useRef(null)

  useEffect(() => {
    if (data) {
      if (product_nameRef.current) {
        product_nameRef.current.value = data.product_name;
      }
      if (deskripsiRef.current) {
        deskripsiRef.current.value = data.deskripsi;
      }
    }
  }, [data]);

  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(hideUpdateRecipeModal());
    dispatch(setCancelEditRecipe())
  };

  const handleSaveChanges = () => {
    const updateRecipe = {
      recipe_id: data.recipe_id,
      product_name: product_nameRef.current.value,
      deskripsi: deskripsiRef.current.value,
    };

    dispatch(updateRecipeData(updateRecipe));

    handleClose();
  }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Recipe</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Product Name</Form.Label>
              <Form.Control type="text" placeholder="enter Product Name" autoFocus ref={product_nameRef} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>deskripsi</Form.Label>
              <Form.Control type="text" placeholder="enter Deskripsi" autoFocus ref={deskripsiRef}
              />
            </Form.Group>
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