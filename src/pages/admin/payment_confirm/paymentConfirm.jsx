import AdminSideBar from "../component/side_navbar_admin";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ModalAddPaymentConfirm from "./addPaymentConfirmModals";
import { showAddPaymentConfirmModal } from "../../../store/admin/payment_confirm";

const PaymentConfirmView = () => {
  const initValue = useSelector(
    (state) => state.paymentConfirmStore.paymentConfirmData
  );
  // const [paymentConfirm, setPaymentConfirm] = useState([...initValue]);
  const dispatch = useDispatch();

  let noUrut = 0;

  const modalAddPaymentConfirm = () => {
    dispatch(showAddPaymentConfirmModal());
  };

  return (
    <div style={{ display: "flex" }}>
      <AdminSideBar />
      <ModalAddPaymentConfirm />
      <div style={{ width: "100%" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginLeft: "20px",
            marginTop: "20px",
            flex: "1",
          }}
        >
          <h4>Payment Confirm</h4>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginRight: "20px",
            }}
          ></div>
        </div>

        <div
          className="p-4 container-fluid"
          style={{ overflowY: "auto", flex: "1" }}
        >
          <div className="card shadow-lg p-4 mb-5 rounded">
            <div className="card-header mb-3">
              <h2 className="fw-semibold" style={{ textAlign: "center" }}>
                Payment Confirm
              </h2>
            </div>

            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Nomor</th>
                  <th scope="col">payment Confirm ID</th>
                  <th scope="col">Name</th>
                  <th scope="col">Product Name</th>
                  <th scope="col">Total Payment</th>
                  <th scope="col">Advantages as a tip</th>
                  <th scope="col">Action</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {initValue.map((p) => {
                  noUrut += 1;
                  return (
                    <tr key={p.payment_confirm_id}>
                      <td>{noUrut}</td>
                      <td>{p.payment_confirm_id}</td>
                      <td>{p.name}</td>
                      <td>{p.product_name}</td>
                      <td>{p.total_payment}</td>
                      <td>0</td>
                      <td>
                        <Button
                          variant="primary"
                          className="me-2"
                          onClick={() => {
                            modalAddPaymentConfirm();
                          }}
                        >
                          Confirm
                        </Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentConfirmView;
