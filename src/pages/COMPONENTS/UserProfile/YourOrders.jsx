import { useDispatch, useSelector } from "react-redux";
import "./YourOrders.css";
import { useEffect, useRef, useState } from "react";
import { fetchistoryData } from "../../../store/customer/history";
import Button from "react-bootstrap/Button";
import {
  fetchInvoiceData,
  fetchOpenInvoiceData,
  setOpenInvoiceData,
} from "../../../store/customer/pick_up";

const YourOrders = () => {
  const dispatch = useDispatch();
  const initVaLue = useSelector((state) => state.pickUpStore.invoiceData);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProduct, setFilteredProduct] = useState([]);
  const searchRef = useRef(null);

  const filterProduk = () => {
    console.log("access");
    var lowerCek = searchTerm.toLowerCase();
    var temp = initVaLue.filter((p) =>
      p.name.toString().toLowerCase().includes(lowerCek)
    );
    setFilteredProduct(temp);
  };

  const handleOpenInvoice = (data) => {
    localStorage.setItem("order_id", data.order_id);
    localStorage.setItem("order_date", data.order_date);
    window.open("http://localhost:5173/print-invoice");
  };

  useEffect(() => {
    dispatch(fetchInvoiceData());
  }, []);
  return (
    <div className="yourorders">
      <div style={{ display: "flex", flexDirection: "row" }}>
        <input
          type="text"
          className="form-control form-control-sm "
          placeholder="Search..."
          style={{ width: "300px", marginRight: "10px" }}
          ref={searchRef}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button
          variant="danger"
          className="mb-2"
          onClick={() => {
            filterProduk(String(searchRef.current.value));
          }}
        >
          Search
        </Button>
      </div>
      <h1 className="mainhead1">Your Orders</h1>
      <table className="yourorderstable">
        <tr>
          <th scope="col">Oder ID</th>
          <th scope="col">Order Date</th>
          <th scope="col">Total</th>
          <th scope="col">Action</th>
        </tr>
        <thead></thead>

        <tbody>
          {(searchTerm ? filteredProduct : initVaLue).map((item) => {
            return (
              <tr key={item.order_id}>
                <td data-label="OrderID">24.05.{item.order_id}</td>
                <td data-label="OrderDate">{item.order_date}</td>
                <td data-label="Delivery Status">{item.total}</td>
                <td data-label="Invoice">
                  <button
                    className="mainbutton1"
                    onClick={() => {
                      handleOpenInvoice(item);
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

export default YourOrders;
