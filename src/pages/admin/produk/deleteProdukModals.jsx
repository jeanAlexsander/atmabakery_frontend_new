import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProduk,
  hideDeleteProdukModal,
} from "../../../store/admin/produk";
import "bootstrap/dist/css/bootstrap.min.css";

function ModalDeleteProduk() {
  const show = useSelector((state) => state.produkStore.deleteProdukModal);
  const deleteId = useSelector((state) => state.produkStore.deleteId);

  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(hideDeleteProdukModal());
  };

  const handleSave = () => {
    dispatch(hideDeleteProdukModal());
    dispatch(deleteProduk(deleteId));
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure to delete?</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalDeleteProduk;
