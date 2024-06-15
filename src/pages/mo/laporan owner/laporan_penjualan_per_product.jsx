import { useEffect, useRef, useState } from "react";
import MOSideBar from "../component/side_nav_bar";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataReportPerProduct } from "../../../store/mo/report";
import { useReactToPrint } from "react-to-print";
import { Button, Dropdown } from "react-bootstrap";
import OwnerSideBar from "../../owner/component/owner_nav";

const LaporanPenjualanBulananPerProductOwner = () => {
  const componentRef = useRef();
  const data = useSelector((state) => state.reportStore.dataInputPerProduct);
  let total = 0;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDataReportPerProduct(5));
  }, []);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "emp-data",
  });
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  const [selectedMonth, setSelectedMonth] = useState("Januari");

  const monthMapping = {
    Januari: 1,
    Februari: 2,
    Maret: 3,
    April: 4,
    Mei: 5,
    Juni: 6,
    Juli: 7,
    Agustus: 8,
    September: 9,
    Oktober: 10,
    November: 11,
    Desember: 12,
  };
  useEffect(() => {
    dispatch(fetchDataReportPerProduct(monthMapping[selectedMonth]));
  }, [dispatch, selectedMonth]);

  const handleSelect = (eventKey) => {
    setSelectedMonth(eventKey);
  };

  return (
    <div style={{ display: "flex" }}>
      <OwnerSideBar />
      <div style={{ width: "100%", marginTop: "20px", marginLeft: "20px" }}>
        <Button
          variant="success"
          onClick={handlePrint}
          style={{ marginBottom: "20px" }}
        >
          Print Disini
        </Button>
        <Dropdown onSelect={handleSelect}>
          <Dropdown.Toggle variant="danger" id="dropdown-basic">
            {selectedMonth}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {Object.keys(monthMapping).map((month) => (
              <Dropdown.Item key={month} eventKey={month}>
                {month}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
        <div ref={componentRef}>
          <h1 className="text-center my-3 border py-2">Report Product</h1>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              flexDirection: "column",
            }}
          >
            <table className="custom-table">
              <tbody>
                <tr>
                  <td colSpan={4}>
                    <strong>Atma Kitchan</strong>
                    <p>Jl. Centralpark No.10 Yogyakarta</p>
                    <tr>
                      <strong>LAPORAN PENJUALAN BULANAN</strong>
                    </tr>
                    <tr>Bulan : {selectedMonth}</tr>
                    <tr className="no-border">Tahun : 2024</tr>
                    <tr>Tanggal Cetak : {formattedDate}</tr>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>produk</strong>
                  </td>
                  <td>
                    <strong>Kuantitas</strong>
                  </td>
                  <td>
                    <strong>Harga</strong>
                  </td>
                  <td>
                    <strong>Jumlah Uang</strong>
                  </td>
                </tr>
                {data.map((item) => {
                  total += parseInt(item.amount);
                  return (
                    <tr>
                      <td>{item.product_name}</td>
                      <td>{item.total_buy}</td>
                      <td>{item.price}</td>
                      <td>{item.amount}</td>
                    </tr>
                  );
                })}

                <tr>
                  <td colSpan={3} style={{ textAlign: "center" }}>
                    <strong>Total</strong>
                  </td>
                  <td>{total}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaporanPenjualanBulananPerProductOwner;
