import { useDispatch, useSelector } from "react-redux";
import MOSideBar from "../component/side_nav_bar";
import { useEffect, useRef, useState } from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { fetchDataReport } from "../../../store/mo/report";
import { Button } from "react-bootstrap";
import { useReactToPrint } from "react-to-print";
import OwnerSideBar from "../../owner/component/owner_nav";

const LaporanPenjulananBulananOwner = () => {
  const data = useSelector((state) => state.reportStore.data);
  const [pages, setPages] = useState(1);

  const dispatch = useDispatch();
  const componentRef = useRef();

  useEffect(() => {
    dispatch(fetchDataReport());
  }, [dispatch]);
  let total_price = 0;

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "emp-data",
  });

  return (
    <div style={{ display: "flex" }}>
      <OwnerSideBar />
      <div style={{ width: "100%", marginTop: "20px", marginLeft: "20px" }}>
        <Button variant="success" onClick={handlePrint}>
          Print Disini
        </Button>
        <div ref={componentRef}>
          <h1 className="text-center my-3 border py-2">Report Semua Bulanan</h1>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              flexDirection: "column",
            }}
          >
            <div style={{ paddingBottom: "30px" }}>
              <Button
                variant="success"
                onClick={() => {
                  setPages(1);
                }}
              >
                Report
              </Button>
              <Button
                variant="danger"
                onClick={() => {
                  setPages(2);
                }}
              >
                Grafik
              </Button>
            </div>
            {pages === 1 && (
              <div>
                <table className="custom-table" border="1">
                  <tbody>
                    <tr>
                      <td colSpan={3}>
                        <strong>Atma Kitchan</strong>
                        <p>Jl. Centralpark No.10 Yogyakarta</p>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={3}>
                        <strong>LAPORAN PENJUALAN BULANAN</strong>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={2}>
                        <strong>Tahun :</strong> 2024
                      </td>
                      <td>
                        <strong>Tanggal Cetak :</strong>{" "}
                        {new Date().toDateString()}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Bulan</strong>
                      </td>
                      <td>
                        <strong>Jumlah Transaksi</strong>
                      </td>
                      <td>
                        <strong>Jumlah Uang</strong>
                      </td>
                    </tr>
                    {data.map((item) => {
                      total_price += item.pv;
                      return (
                        <tr key={item.name}>
                          <td>{item.name}</td>
                          <td>{item.total_order}</td>
                          <td>{item.pv}</td>
                        </tr>
                      );
                    })}
                    <tr>
                      <td colSpan={2} style={{ textAlign: "center" }}>
                        <strong>Total</strong>
                      </td>
                      <td>{total_price}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>

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
          ></div>
          {pages === 2 && (
            <div
              className="p-4 container-fluid"
              style={{ overflowY: "auto", flex: "1" }}
            >
              <div className="card shadow-lg p-4 mb-5 rounded">
                <div className="card-header mb-3">
                  <h2 className="fw-semibold" style={{ textAlign: "center" }}>
                    Statistics
                  </h2>
                </div>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart
                    data={data}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar
                      dataKey="pv"
                      fill="#8884d8"
                      activeShape={<Rectangle fill="pink" stroke="blue" />}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LaporanPenjulananBulananOwner;
