import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  hideUpdateOrderStatusModal,
  updateStatusOrderData,
} from "../../../store/admin/update_status_order";

function ModalAddUpdateOrderStatus() {
  const show = useSelector(
    (state) => state.statusOrderStore.updateStatusOrderModal
  );
  const data = useSelector((state) => state.statusOrderStore.edit);
  const id = useSelector((state) => state.statusOrderStore.dataIdUpdate);

  const dispatch = useDispatch();
  const orderIDRef = useRef(null);
  const userIDRef = useRef(null);
  const statusRef = useRef(null);

  const [value, setValue] = useState("");
  const pilihan = [
    { label: "diproses", value: 1 },
    { label: "siap di pickup", value: 2 },
    { label: "sedang dikirim", value: 3 },
    { label: "selesai", value: 4 },
  ];

  function handleSelect(event) {
    setValue(event.target.value);
  }

  const handleClose = () => {
    dispatch(hideUpdateOrderStatusModal());
  };

  useEffect(() => {
    if (data) {
      if (orderIDRef.current) {
        orderIDRef.current.value = data.order_id;
      }
      if (userIDRef.current) {
        userIDRef.current.value = data.user_id;
      }
    }
  }, [data]);

  const handleSave = () => {
    let status = statusRef.current.value;
    if (status === "sudah di pickup") {
      status = "selesai";
    }
    dispatch(hideUpdateOrderStatusModal());
    dispatch(updateStatusOrderData(status, id));
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <div className="w-100 p-3 border rounded">
            <h3>Status Pick UP</h3>
            <select
              className="form-select"
              onChange={handleSelect}
              ref={statusRef}
            >
              {pilihan.map((option) => (
                <option key={option.value} value={option.label}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalAddUpdateOrderStatus;
