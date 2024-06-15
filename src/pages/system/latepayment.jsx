import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  showUpdateLatePaymentModal,
  fetchLatePaymentData,
  setdataIdUpdate,
  hideUpdateLatePaymentModal,
} from "../../store/system/latepayment";
import ModalLatePayment from "./modalLatePayment";
import AdminSideBar from "../admin/component/side_navbar_admin";
import { setUpdatestatusLatePaymentData } from "../../store/system/latepayment";

const LatePaymentView = () => {
  const initValue = useSelector(
    (state) => state.latepaymentStore.statusLatePaymentData
  );
  const [filteredLatePayment, setFilteredLatePayment] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLatePaymentData());
  }, [dispatch]);

  const handleOpenModalUpdate = () => {
    dispatch(showUpdateLatePaymentModal());
  };

  const handleUpdate = (statusOrder) => {
    dispatch(showUpdateLatePaymentModal());
    dispatch(setdataIdUpdate({ id: statusOrder }));
  };

  return (
    <div style={{ display: "flex" }}>
      <AdminSideBar />
      <ModalLatePayment />
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
          <h4>Late Payment</h4>
        </div>
        <div
          className="p-4 container-fluid"
          style={{ overflowY: "auto", flex: "1" }}
        >
          <div className="card shadow-lg p-4 mb-5 rounded">
            <div className="card-header mb-3">
              <h2 className="fw-semibold" style={{ textAlign: "center" }}>
                Late Payment Data
              </h2>
            </div>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Order ID</th>
                  <th scope="col">Order Date</th>
                  <th scope="col">User ID</th>
                  <th scope="col">Total</th>
                  <th scope="col">Status</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {initValue.map((u) => {
                  return (
                    <tr key={u.order_id}>
                      <td>{u.order_id}</td>
                      <td>{u.order_date}</td>
                      <td>{u.user_id}</td>
                      <td>{u.total}</td>
                      <td>{u.status_order}</td>
                      <td>
                        <Button
                          onClick={() => {
                            dispatch(showUpdateLatePaymentModal());
                            dispatch(setdataIdUpdate({ id: u.order_id }));
                            dispatch(
                              setUpdatestatusLatePaymentData({ data: u })
                            );
                          }}
                        >
                          Batalkan
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

export default LatePaymentView;
