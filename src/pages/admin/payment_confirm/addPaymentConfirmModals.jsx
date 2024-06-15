import React, { useRef } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import {
  confirmOrder,
  hideAddPaymentConfirmModal,
  setCancelDateUser,
  setConfirmActionData,
  showConfirmActionModal,
} from "../../../store/admin/payment_confirm";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table } from "react-bootstrap";

function ModalAddPaymentConfirm() {
  const show = useSelector(
    (state) => state.paymentConfirmStore.addPaymentConfirmModal
  );

  const data = useSelector(
    (state) => state.paymentConfirmStore.paymentConfirmData
  );

  const date = useSelector((state) => state.paymentConfirmStore.setDateUser);

  const userId = useSelector((state) => state.paymentConfirmStore.setIdUser);

  const priceRef = useRef(null);

  const filterData = data.filter(
    (item) => item.user_id === userId && item.order_date === date
  );

  const totalPrice = filterData.reduce((acc, item) => {
    return acc + item.amount;
  }, 0);

  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(hideAddPaymentConfirmModal());
    dispatch(setCancelDateUser());
  };

  const handleSave = () => {
    dispatch(setConfirmActionData({ data: filterData }));
    dispatch(showConfirmActionModal());
    handleClose();
  };

  React.useEffect(() => {
    if (priceRef.current) {
      priceRef.current.value = totalPrice;
    }
  }, [totalPrice]);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Order</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div
            className="p-4 container-fluid"
            style={{ overflowY: "auto", flex: "1" }}
          >
            <div className="card shadow-lg p-4 mb-5 rounded">
              <div className="card-header mb-3">
                <h2 className="fw-semibold" style={{ textAlign: "center" }}>
                  Detail Product
                </h2>
              </div>

              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Nomor</th>
                    <th>Product Name</th>
                    <th>Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  {filterData.map((p, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{p.name}</td>
                      <td>{p.amount / p.price}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </div>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Input Total Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="enter price"
                autoFocus
                ref={priceRef}
                disabled
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalAddPaymentConfirm;
