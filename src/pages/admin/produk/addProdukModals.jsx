import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import {
  addProduk,
  fetchCategorisData,
  hideAddProdukModal,
} from "../../../store/admin/produk";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useRef } from "react";

function ModalAddProduk() {
  const show = useSelector((state) => state.produkStore.addProdukModal);
  const categoriesData = useSelector(
    (state) => state.produkStore.categoriesData
  );
  const imageRef = useRef(null);
  const categoryRef = useRef(null);
  const nameRef = useRef(null);
  const priceRef = useRef(null);
  const quantityRef = useRef(null);

  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(hideAddProdukModal());
  };

  const handleSave = () => {
    const name = nameRef.current.value;
    const price = priceRef.current.value;
    const quantity = quantityRef.current.value;
    const image = imageRef.current.files[0];
    const category_id = categoryRef.current.value;

    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("quantity", quantity);
    formData.append("image", image);
    formData.append("category_id", category_id);

    dispatch(addProduk(formData));
    dispatch(hideAddProdukModal());
  };

  useEffect(() => {
    dispatch(fetchCategorisData());
  }, [dispatch]);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="enter Product Name"
                autoFocus
                ref={nameRef}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="enter Price"
                autoFocus
                ref={priceRef}
              />
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Quantity</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="enter Quantity"
                  autoFocus
                  ref={quantityRef}
                />
              </Form.Group>
            </Form.Group>
          </Form>
          <div class="input-group mb-3">
            <Form.Label>Select Category</Form.Label>
            <select
              classname="custom-select "
              id="inputGroupSelect03"
              style={{ width: "500px", height: "40px" }}
              ref={categoryRef}
              required
            >
              <option selected>Choose...</option>
              {categoriesData.map((r) => {
                {
                  return (
                    <option value={r.category_id} key={r.category_id}>
                      {r.name}
                    </option>
                  );
                }
              })}
            </select>
          </div>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="inputGroupFileAddon01">
                Upload
              </span>
            </div>
            <div class="custom-file">
              <Form.Label>Hampers Image</Form.Label>
              <input
                type="file"
                class="custom-file-input"
                id="inputGroupFile01"
                aria-describedby="inputGroupFileAddon01"
                ref={imageRef}
              />
              <label class="custom-file-label" for="inputGroupFile01">
                Choose file
              </label>
            </div>
          </div>
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

export default ModalAddProduk;
