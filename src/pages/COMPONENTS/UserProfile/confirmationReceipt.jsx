import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import ModalAddConfirmationReceipt from "./modalAddconfirmationReceipt";
import {
  fetchConfirmationReceiptData,
  setStatusUpdateReceiptData,
  setdataIdUpdate,
  showUpdateConfirmationReceiptModal,
} from "../../../store/customer/confirmationReceipt";
const ConfirmationReceiptView = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchConfirmationReceiptData());
  }, [dispatch]);

  const initValue = useSelector(
    (state) => state.confirmationReceiptStore.confirmationReceiptData
  );

  let noUrut = 0;

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <ModalAddConfirmationReceipt />
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
                Payment list
              </h2>
            </div>

            <table className="table">
              <thead>
                <tr>
                  <th scope="col">NO</th>
                  <th scope="col">Date</th>
                  <th scope="col">User ID</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(initValue) &&
                  initValue.map((c) => {
                    noUrut += 1;
                    return (
                      <tr key={c.order_id}>
                        <td>{noUrut}</td>
                        <td>{c.order_date}</td>
                        <td>{c.user_id}</td>
                        <td>
                          <Button
                            onClick={() => {
                              dispatch(showUpdateConfirmationReceiptModal());
                              dispatch(setdataIdUpdate({ id: c.order_id }));
                              dispatch(setStatusUpdateReceiptData({ data: c }));
                            }}
                          >
                            Selesai
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

export default ConfirmationReceiptView;
