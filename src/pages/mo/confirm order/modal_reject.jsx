import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  moRejectOrder,
  setCancelConfirmData,
  setCancelOrderData,
  setCancelRejectData,
  setCloseRejectModal,
} from "../../../store/mo/confirm_order";

function ModalReject() {
  const show = useSelector((state) => state.confirmOrderStore.showRejectModal);
  const data = useSelector((state) => state.confirmOrderStore.detailOrderData);
  const orderData = useSelector((state) => state.confirmOrderStore.orderData);
  const dispatch = useDispatch();
  const handleSave = () => {
    dispatch(moRejectOrder(orderData));
    handleClose();
  };

  const handleClose = () => {
    dispatch(setCloseRejectModal());
    dispatch(setCancelRejectData());
    dispatch(setCancelConfirmData());
    dispatch(setCancelOrderData());
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Are You Sure To Reject this Order?</Modal.Title>
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
                    <th>Nomor</th>
                    <th>Product Name</th>
                    <th>Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((p, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{p.name}</td>
                        <td>{p.amount / p.price}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              justifyContent: "center",
              gap: "50px",
            }}
          >
            <Button
              variant="danger"
              onClick={handleClose}
              style={{ minWidth: "100px" }}
            >
              Cancel
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                handleSave();
              }}
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

export default ModalReject;
