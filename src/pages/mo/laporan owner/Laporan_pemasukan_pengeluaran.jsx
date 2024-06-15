import { useEffect, useRef, useState } from "react";
import MOSideBar from "../component/side_nav_bar";
import { Button, Dropdown } from "react-bootstrap";
import { useReactToPrint } from "react-to-print";
import { fetchDataPengeluaranPemasukan } from "../../../store/mo/report";
import { useDispatch, useSelector } from "react-redux";
import OwnerSideBar from "../../owner/component/owner_nav";

const LaporanPemasukanPengeluaranOwner = () => {
  const componentRef = useRef();
  const data = useSelector(
    (state) => state.reportStore.dataPemasukanPengeluaran
  );
  const dispatch = useDispatch();

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
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "emp-data",
  });
  const handleSelect = (eventKey) => {
    setSelectedMonth(eventKey);
  };
  useEffect(() => {
    dispatch(fetchDataPengeluaranPemasukan(monthMapping[selectedMonth]));
  }, [dispatch, selectedMonth]);

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
          <h1 className="text-center my-3 border py-2">
            Pengeluaran Pemasukan
          </h1>
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
                  <td colSpan={3}>
                    <strong>Atma Kitchan</strong>
                    <p>Jl. Centralpark No.10 Yogyakarta</p>
                    <tr>
                      <strong>LAPORAN PEMASUKAN DAN PENGELUARAN</strong>
                    </tr>
                    <tr>Bulan : {selectedMonth}</tr>
                    <tr>Tahun : 2024</tr>
                    <tr>Tanggal Cetak : {formattedDate}</tr>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong></strong>
                  </td>
                  <td>
                    <strong>Pemasukan</strong>
                  </td>
                  <td>
                    <strong>Pengeluaran</strong>
                  </td>
                </tr>

                <tr>
                  <td>Penjualan</td>
                  <td>{data.total_pemasukan}</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Tip</td>
                  <td>{data.tip}</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Gaji Karyawan</td>
                  <td></td>
                  <td>{data.total_gaji}</td>
                </tr>

                <tr>
                  <td>Bahan Baku</td>
                  <td></td>
                  <td>{data.total_pembelian_bahan}</td>
                </tr>
                {data &&
                  data.other_need &&
                  data.other_need.length > 0 &&
                  data.other_need.map((item) => {
                    return (
                      <tr key={item.name}>
                        <td>{item.name}</td>
                        <td></td>
                        <td>{item.cost}</td>
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

export default LaporanPemasukanPengeluaranOwner;
