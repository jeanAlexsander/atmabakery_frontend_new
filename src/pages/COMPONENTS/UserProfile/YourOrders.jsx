import { useDispatch, useSelector } from "react-redux";
import "./YourOrders.css";
import { useEffect, useRef, useState } from "react";
import { fetchistoryData } from "../../../store/customer/history";
import Button from "react-bootstrap/Button";

const YourOrders = () => {
  const dispatch = useDispatch();
  const initVaLue = useSelector((state) => state.historyStore.historyData);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProduct, setFilteredProduct] = useState([]);
  const searchRef = useRef(null);
  console.log(initVaLue);

  const filterProduk = () => {
    console.log("access");
    var lowerCek = searchTerm.toLowerCase();
    var temp = initVaLue.filter((p) =>
      p.name.toString().toLowerCase().includes(lowerCek)
    );
    setFilteredProduct(temp);
  };

  useEffect(() => {
    dispatch(fetchistoryData());
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
          <th scope="col">Amout</th>
          <th scope="col">Price</th>
          <th scope="col">Name</th>
          <th scope="col">Invoice</th>
        </tr>
        <thead></thead>

        <tbody>
          {(searchTerm ? filteredProduct : initVaLue).map((item) => {
            return (
              <tr key={item.order_id}>
                <td data-label="OrderID">{item.order_id}</td>
                <td data-label="OrderDate">{item.amount}</td>
                <td data-label="Delivery Status">{item.price}</td>
                <td data-label="Total">{item.name}</td>
                <td data-label="Invoice">
                  <button
                    className="mainbutton1"
                    onClick={() => {
                      setselectedorderid(item.id);
                      setordersuccesscont(true);
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
