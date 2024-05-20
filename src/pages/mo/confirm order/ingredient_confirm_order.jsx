import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { setCloseIngredientConfirmModal } from "../../../store/mo/confirm_order";

function IngredientConfirmOrderModal() {
  const show = useSelector(
    (state) => state.confirmOrderStore.showIngredientConfirmModal
  );
  const data = useSelector(
    (state) => state.confirmOrderStore.ingredientConfirmOrderData
  );
  const dispatch = useDispatch();

  let noUrut = 0;

  const handleSave = () => {
    handleClose();
  };

  const handleClose = () => {
    dispatch(setCloseIngredientConfirmModal());
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>this is the missing ingredient!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="p-4 container-fluid">
            <div className="card shadow-lg p-4 mb-5 rounded">
              <div className="card-header mb-3">
                <h2 className="fw-semibold text-center">Ingredients</h2>
              </div>

              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Product Name</th>
                    <th>Quantity</th>
                    <th>Unit</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((p) => {
                    noUrut++;
                    return (
                      <tr key={p.payment_confirm_id}>
                        <td>{noUrut}</td>
                        <td>{p.ingredient_name}</td>
                        <td>{p.quantity}</td>
                        <td>{p.unit}</td>
                      </tr>
                    );
                  })}
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
              Continue
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default IngredientConfirmOrderModal;
