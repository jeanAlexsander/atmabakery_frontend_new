import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchDetailOrderData,
  fetchPaymentOrderData,
  setDetailInvoiceData,
  showModalDetail,
} from "../../../store/customer/payment_order";
import ModalPaymentOrderDetail from "./modal_payment_order_detail";

const PaymentOrderView = () => {
  const initVaLue = useSelector(
    (state) => state.paymentOrderCustomerStore.paymentOrderData
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPaymentOrderData());
  }, [dispatch]);

  const handleOpenModal = (data) => {
    dispatch(fetchDetailOrderData(data));
    dispatch(setDetailInvoiceData({ data }));
    dispatch(showModalDetail());
  };

  return (
    <div style={{ padding: "50px" }}>
      <ModalPaymentOrderDetail />
      <h1
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          paddingBottom: "20px",
        }}
      >
        Your Payment
      </h1>
      <table className="yourorderstable">
        <tr>
          <th scope="col">Oder ID</th>
          <th scope="col">Order Date</th>
          <th scope="col">Price</th>
          <th scope="col">Delivery Fee</th>
          <th scope="col">Total Price</th>
        </tr>
        <thead></thead>

        <tbody>
          {initVaLue.map((item, index) => {
            return (
              <tr key={item.order_id}>
                <td data-label="OrderID">{index + 1}</td>
                <td data-label="OrderDate">{item.order_date}</td>
                <td data-label="TotalOrder">{item.total}</td>
                <td data-label="Delivery Status">{item.delivery_fee}</td>
                <td data-label="Total">{item.total + item.delivery_fee}</td>
                <td data-label="Invoice">
                  <button
                    className="mainbutton1"
                    onClick={() => {
                      handleOpenModal(item);
                    }}
                  >
                    View
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentOrderView;
