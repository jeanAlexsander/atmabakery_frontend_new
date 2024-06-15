import React, { useRef, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { addHampers, hideAddHampersModal } from "../../../store/admin/hampers";
import "bootstrap/dist/css/bootstrap.min.css";
import { URL } from "../../../../constants"; // Sesuaikan dengan path dan nama file constants

function ModalAddHampers() {
  const show = useSelector((state) => state.hampersStore.addHampersModal);
  const nameRef = useRef(null);
  const statusRef = useRef(null);
  const imageRef = useRef(null);

  const [product, setProduct] = useState([{ product_id: "", quantity: "" }]);
  const [productData, setProductData] = useState([]);

  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(hideAddHampersModal());
  };

  const handleSave = () => {
    const name = nameRef.current.value;
    const status = statusRef.current.value;
    const image = imageRef.current.files[0];

    const formData = new FormData();
    formData.append("name", name);
    formData.append("hampers_status", status);
    formData.append("image", image);

    // Append product data to FormData
    product.forEach((item, index) => {
      formData.append(`product[${index}][product_id]`, item.product_id);
      formData.append(`product[${index}][quantity]`, item.quantity);
    });

    dispatch(addHampers(formData));
    // dispatch(hideAddHampersModal());
  };

  const getProduct = async () => {
    try {
      const response = await fetch(URL + "get-product-data");
      const data = await response.json();
      setProductData(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (show) {
      getProduct();
    }
  }, [show]);

  const addDataProduct = (index, value) => {
    const newData = product.map((item, idx) =>
      idx === index ? { ...item, product_id: value } : item
    );
    setProduct(newData);
  };

  const addDataUnit = (index, value) => {
    const newData = product.map((item, idx) =>
      idx === index ? { ...item, quantity: value } : item
    );
    setProduct(newData);
  };

  const handleAddProduct = () => {
    setProduct((prev) => [...prev, { product_id: "", quantity: "" }]);
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Modal.Title>Add Hampers</Modal.Title>
            <Button variant="success" onClick={handleAddProduct}>
              Add Product
            </Button>
          </div>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formHampersName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                autoFocus
                ref={nameRef}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formHampersStatus">
              <Form.Label>Hampers Status</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Hampers Status"
                ref={statusRef}
              />
            </Form.Group>
            {product.map((item, index) => (
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
                  name={`product_${index}`}
                  id={`product_${index}`}
                  style={{ width: "250px" }}
                  onChange={(e) => {
                    addDataProduct(index, e.target.value);
                  }}
                >
                  <option value="">Select Product</option>
                  {productData.map((product) => (
                    <option key={product.product_id} value={product.product_id}>
                      {product.name}
                    </option>
                  ))}
                </select>
                <Form.Group className="mb-3" controlId={`unit_${index}`}>
                  <Form.Control
                    type="number"
                    placeholder="Enter Quantity"
                    onChange={(e) => {
                      addDataUnit(index, e.target.value);
                    }}
                  />
                </Form.Group>
              </div>
            ))}
            <Form.Group className="mb-3" controlId="formHampersImage">
              <Form.Label>Hampers Image</Form.Label>
              <Form.Control type="file" accept="image/*" ref={imageRef} />
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

export default ModalAddHampers;
