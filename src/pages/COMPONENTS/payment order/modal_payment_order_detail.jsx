import { useDispatch, useSelector } from "react-redux";
import {
  confirmPayment,
  fetchDetailOrderData,
  fetchPaymentOrderData,
  hideModalDetail,
  setCancelDetailInvoiceData,
  setCancelDetailOrderData,
} from "../../../store/customer/payment_order";
import { Button, Form, Modal, Table } from "react-bootstrap";
import { useEffect, useRef, useState } from "react";

const ModalPaymentOrderDetail = () => {
  const dispatch = useDispatch();
  const show = useSelector(
    (state) => state.paymentOrderCustomerStore.modalAction
  );

  const filterData = useSelector(
    (state) => state.paymentOrderCustomerStore.detailOrderData
  );
  const invoiceData = useSelector(
    (state) => state.paymentOrderCustomerStore.detailInvoiceData
  );

  const [priceError, setPriceError] = useState("");
  const [imageError, setImageError] = useState("");
  const totalTemp = invoiceData.total + invoiceData.delivery_fee;
  const [totalPayment, setTotalPayment] = useState(0);

  useEffect(() => {
    setTotalPayment(totalTemp);
  }, [totalTemp]);

  const availablePoint = localStorage.getItem("total_point");
  const [point, setPoint] = useState(localStorage.getItem("total_point"));

  const priceRef = useRef(null);
  const imageRef = useRef(null);
  const handleClose = () => {
    priceRef.current.value = "";
    imageRef.current.value = "";
    setPriceError("");
    setImageError("");

    dispatch(hideModalDetail());
    dispatch(setCancelDetailOrderData());
    dispatch(setCancelDetailInvoiceData());
    dispatch(fetchPaymentOrderData());
  };
  const handleSave = () => {
    const totalPrice = invoiceData.total + invoiceData.delivery_fee;

    if (priceRef.current.value && imageRef.current.value) {
      if (parseInt(priceRef.current.value) >= totalPayment) {
        const formData = new FormData();
        formData.append("order_id", invoiceData.order_id);
        formData.append("amount", priceRef.current.value);
        formData.append("image", imageRef.current.files[0]);
        dispatch(confirmPayment(formData));
        dispatch(fetchPaymentOrderData());
        handleClose();
      } else {
        setPriceError(
          "Price must be equal to or greater than the total price."
        );
      }
    } else {
      if (!priceRef.current.value) {
        setPriceError("Please enter the price.");
      } else {
        setPriceError("");
      }
      if (!imageRef.current.value) {
        setImageError("Please upload an image.");
      } else {
        setImageError("");
      }
    }
  };

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
                    <th>No</th>
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
                  <tr>
                    <td>Total Price</td>
                    <td></td>
                    <td>{totalPayment}</td>
                  </tr>
                  <tr>
                    <td>Available Point</td>
                    <td></td>
                    <td>{point}</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td rowSpan={2}>
                      <Button
                        variant="success"
                        onClick={() => {
                          setTotalPayment(totalTemp - point * 100);
                          setPoint(0);
                        }}
                        disabled={point === 0}
                      >
                        Use Point
                      </Button>
                    </td>
                    <td rowSpan={2}>
                      <Button
                        variant="danger"
                        onClick={() => {
                          setTotalPayment(totalTemp);
                          setPoint(availablePoint);
                        }}
                        disabled={point === availablePoint}
                      >
                        Cancel
                      </Button>
                    </td>
                  </tr>
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
              />
              {priceError && (
                <Form.Text className="text-danger">{priceError}</Form.Text>
              )}
            </Form.Group>
          </Form>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="inputGroupFileAddon01">
                Upload
              </span>
            </div>
            <div className="custom-file">
              <Form.Label>Payment Proof</Form.Label>
              <input
                type="file"
                className="custom-file-input"
                id="inputGroupFile01"
                aria-describedby="inputGroupFileAddon01"
                ref={imageRef}
              />
              <label className="custom-file-label" htmlFor="inputGroupFile01">
                Choose file
              </label>
              {imageError && (
                <Form.Text className="text-danger">{imageError}</Form.Text>
              )}
            </div>
          </div>
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
};

export default ModalPaymentOrderDetail;
