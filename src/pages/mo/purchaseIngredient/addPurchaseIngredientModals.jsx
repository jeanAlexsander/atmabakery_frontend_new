import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import {
  addDataToPurchaseIngredent,
  addPurchaseIngredientData,
  fetchPurchaseIngredientsData,
  fetchPurchaseIngredientsModal,
  hideAddPurchaseIngredientModal,
} from "../../../store/mo/purchaseIngredient";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useRef, useState } from "react";

function ModalAddPurchaseIngredient() {
  const show = useSelector(
    (state) => state.purchaseIngredientStore.addPurchaseIngredientModal
  );
  const initValue = useSelector(
    (state) => state.purchaseIngredientStore.dataIngredient
  );
  const [unitName, setUnitName] = useState("");
  const [pricePerUnit, setPricePerUnit] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPurchaseIngredientsModal());
  }, [dispatch]);

  const nameRef = useRef(null);
  const totalRef = useRef(null);

  const handleClose = () => {
    dispatch(hideAddPurchaseIngredientModal());
  };

  const handleNameChange = (e) => {
    const selectedIngredientId = e;
    const temp = [...initValue];
    const filteredUnitName = temp.filter((p) =>
      String(p.ingredient_id).includes(String(selectedIngredientId))
    );
    setUnitName(filteredUnitName[0].unit);
    setPricePerUnit(filteredUnitName[0].price_per_unit);
  };

  const handleSave = () => {
    const data = {
      ingredient_id: nameRef.current.value,
      total_price: parseInt(totalRef.current.value) * parseInt(pricePerUnit),
      total_buy: parseInt(totalRef.current.value),
    };

    dispatch(addDataToPurchaseIngredent(data));
    dispatch(hideAddPurchaseIngredientModal());
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Purchase Ingredient</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <select
                className="custom-select "
                id="inputGroupSelect03"
                style={{ width: "465px", height: "40px" }}
                ref={nameRef}
                required
                onChange={() => {
                  handleNameChange(nameRef.current.value);
                }}
              >
                <option value="">Choose...</option>
                {initValue.map((r) => (
                  <option value={r.ingredient_id} key={r.role_id}>
                    {r.name}
                  </option>
                ))}
              </select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Unit</Form.Label>
              <Form.Control
                type="text"
                placeholder="Unit"
                autoFocus
                value={unitName}
                disabled
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Total Buy</Form.Label>
              <Form.Control
                type="text"
                placeholder="Total Buy"
                autoFocus
                ref={totalRef}
              />
            </Form.Group>
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

export default ModalAddPurchaseIngredient;
