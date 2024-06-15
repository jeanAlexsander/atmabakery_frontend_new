import AdminSideBar from "../component/side_navbar_admin";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ModalAddUpdateOrderStatus from "./addUpdateOrderStatusModal";
import {
  showUpdateOrderStatusModal,
  fetchStatusOrderData,
  setdataIdUpdate,
} from "../../../store/admin/update_status_order";

const UpdateOrderStatusView = () => {
  const initValue = useSelector(
    (state) => state.statusOrderStore.statusOrderData
  );
  const [filteredOrderStatus, setFilteredOrderStatus] = useState([]);
  const dispatch = useDispatch();

  let noUrut = 0;

  useEffect(() => {
    dispatch(fetchStatusOrderData());
  }, [dispatch]);

  const hanleOpenModalUpdate = () => {
    dispatch(showUpdateOrderStatusModal());
  };

  const handleUpdate = (statusOrder) => {
    dispatch(showUpdateOrderStatusModal());
    dispatch(setdataIdUpdate({ id: statusOrder }));
  };

  return (
    <div style={{ display: "flex" }}>
      <AdminSideBar />
      <ModalAddUpdateOrderStatus />
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
          <h4>Update Order Status</h4>
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
          className="u-4 container-fluid"
          style={{ overflowY: "auto", flex: "1" }}
        >
          <div className="card shadow-lg u-4 mb-5 rounded">
            <div className="card-header mb-3">
              <h2 className="fw-semibold" style={{ textAlign: "center" }}>
                Update Order Status
              </h2>
            </div>

            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Order ID</th>
                  <th scope="col">Order Date</th>
                  <th scope="col">User ID </th>
                  <th scope="col">Total</th>
                  <th scope="col">Status</th>
                  <th scope="col">Action</th>{" "}
                </tr>
              </thead>
              <tbody>
                {initValue.map((u) => {
                  noUrut += 1;
                  return (
                    <tr key={u.update_order_status_id}>
                      <td>{u.order_id}</td>
                      <td>{u.order_date}</td>
                      <td>{u.user_id}</td>
                      <td>{u.total}</td>
                      <td>{u.status_order}</td>
                      <td>
                        <Button
                          variant="primary"
                          className="me-2"
                          onClick={() => {
                            handleUpdate(u.order_id);
                          }}
                        >
                          Update
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

export default UpdateOrderStatusView;
