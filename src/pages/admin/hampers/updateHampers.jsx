import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import {
  hideUpdateHampersModal,
  updateHampers,
} from "../../../store/admin/hampers";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useRef } from "react";

function ModalUpdateHampers() {
  const show = useSelector((state) => state.hampersStore.updateHampersModal);
  const data = useSelector((state) => state.hampersStore.editHampersData);
  const nameRef = useRef(null);
  const statusRef = useRef(null);
  const imageRef = useRef(null);

  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      if (nameRef.current) {
        nameRef.current.value = data.name;
      }
      if (statusRef.current) {
        statusRef.current.value = data.hampers_status;
      }
      // if (imageRef.current) {
      //   imageRef.current.value = data.image;
      // }
    }
  }, [data]);

  const handleClose = () => {
    dispatch(hideUpdateHampersModal());
  };

  const handleSave = () => {
    const name = nameRef.current.value;
    const status = statusRef.current.value;
    let image = null;
    if (data.image === imageRef.current.value) {
      image = data.image;
    } else {
      image = imageRef.current.files[0];
    }
    const formData = new FormData();
    formData.append("name", name);
    formData.append("hampers_status", status);
    formData.append("image", image);

    const fixData = {
      id: data.hampers_id,
      formData: formData,
    };

    dispatch(hideUpdateHampersModal());
    dispatch(updateHampers(fixData));
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Recipe</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="enter Name"
                autoFocus
                ref={nameRef}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Hampers Status</Form.Label>
              <Form.Control
                type="text"
                placeholder="Hampers Status"
                autoFocus
                ref={statusRef}
              />
            </Form.Group>
          </Form>
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

export default ModalUpdateHampers;
