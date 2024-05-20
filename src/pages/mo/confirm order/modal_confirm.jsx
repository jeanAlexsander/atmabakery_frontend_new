import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  setCancelConfirmData,
  setCloseConfirmModal,
  setShowIngredientConfirmModal,
} from "../../../store/mo/confirm_order";

function ModalConfirm() {
  const show = useSelector((state) => state.confirmOrderStore.showConfirmModal);
  const p = useSelector((state) => state.confirmOrderStore.showConfirmData);
  const dispatch = useDispatch();

  const handleSave = () => {
    dispatch(setCloseConfirmModal());
    dispatch(setShowIngredientConfirmModal());
  };

  const handleClose = () => {
    dispatch(setCloseConfirmModal());
    dispatch(setCancelConfirmData());
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Are You Sure To Confirm this Order?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="p-4 container-fluid">
            <div className="card shadow-lg p-4 mb-5 rounded">
              <div className="card-header mb-3">
                <h2 className="fw-semibold text-center">Confirm Order</h2>
              </div>

              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Product Name</th>
                    <th>Quantity</th>
                    <th>Total Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr key={p.payment_confirm_id}>
                    <td>
                      {p.first_name} {p.last_name}
                    </td>
                    <td>{p.product}</td>
                    <td>{p.quantity}</td>
                    <td>{p.price}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="d-flex justify-content-center">
            <Button
              variant="danger"
              onClick={handleClose}
              style={{ minWidth: "100px" }}
            >
              Cancel
            </Button>
            <Button
              variant="primary"
              onClick={handleSave}
              style={{ minWidth: "100px", minHeight: "44px" }}
            >
              Confirm
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalConfirm;
