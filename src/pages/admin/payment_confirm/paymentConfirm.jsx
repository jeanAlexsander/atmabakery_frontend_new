import AdminSideBar from "../component/side_navbar_admin";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ModalAddPaymentConfirm from "./addPaymentConfirmModals";
import {
  fetchOrderNotConfirm,
  setDateUser,
  setUserId,
  showAddPaymentConfirmModal,
} from "../../../store/admin/payment_confirm";
import ConfirmAction from "./confirm_action";
import { Toaster, toast } from "sonner";

const PaymentConfirmView = () => {
  const [uniqueUsers, setUniqueUsers] = useState([]);

  const paymentConfirmData = useSelector(
    (state) => state.paymentConfirmStore.paymentConfirmData
  );

  const toastValue = useSelector(
    (state) => state.paymentConfirmStore.confirmToast
  );

  const dispatch = useDispatch();

  const successToast = () => {
    toast.success("Success Confirm Payment", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const errorToast = () => {
    toast.error("Failed Confirm Payment", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  useEffect(() => {
    if (toastValue === 1) {
      successToast();
    } else if (toastValue === 2) {
      errorToast();
    } else {
    }
  }, [toastValue]);

  useEffect(() => {
    dispatch(fetchOrderNotConfirm());
  }, [dispatch]);

  useEffect(() => {
    const uniqueUserData = [];
    const uniqueUserIds = new Set();

    paymentConfirmData.forEach((payment) => {
      const { user_id, order_date } = payment;
      const uniqueKey = `${user_id}_${order_date}`;
      if (!uniqueUserIds.has(uniqueKey)) {
        uniqueUserIds.add(uniqueKey);
        uniqueUserData.push(payment);
      }
    });

    setUniqueUsers(uniqueUserData);
  }, [paymentConfirmData]);

  const modalAddPaymentConfirm = (userId, dateUser) => {
    dispatch(showAddPaymentConfirmModal());
    dispatch(setUserId({ id: userId }));
    dispatch(setDateUser({ date: dateUser }));
  };

  return (
    <div style={{ display: "flex" }}>
      <AdminSideBar />
      <ModalAddPaymentConfirm />
      <ConfirmAction />
      <Toaster />
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

            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Nomor</th>
                  <th>Name</th>
                  <th>Order Date</th>
                  <th>Delivery Option</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {uniqueUsers.map((p, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                      {p.first_name} {p.last_name}
                    </td>
                    <td>{p.order_date}</td>
                    <td>{p.delivery_option}</td>
                    <td>
                      <Button
                        variant="primary"
                        className="me-2"
                        onClick={() =>
                          modalAddPaymentConfirm(p.user_id, p.order_date)
                        }
                      >
                        Confirm
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentConfirmView;
