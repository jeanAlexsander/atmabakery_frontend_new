import { useEffect, useRef, useState } from "react";
import MOSideBar from "../component/side_nav_bar";
import { useDispatch, useSelector } from "react-redux";
import { fetchIngredientsPerPeriode } from "../../../store/mo/report";
import { Button, Dropdown } from "react-bootstrap";
import { useReactToPrint } from "react-to-print";
import OwnerSideBar from "../../owner/component/owner_nav";

const LaporanIngredientPerPeriode = () => {
  const componentRef = useRef();
  const data = useSelector(
    (state) => state.reportStore.dataIngredientsPerPeriode
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

  useEffect(() => {
    dispatch(fetchIngredientsPerPeriode(monthMapping[selectedMonth]));
  }, [dispatch, selectedMonth]);

  const handleSelect = (eventKey) => {
    setSelectedMonth(eventKey);
  };
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "emp-data",
  });
  return (
    <div style={{ display: "flex" }}>
      <MOSideBar />
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
            Report Ingredient Per Periode
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
              {" "}
              <tbody>
                <tr>
                  <td colSpan={3}>
                    <strong>Atma Kitchan</strong>
                    <p>Jl. Centralpark No.10 Yogyakarta</p>
                    <p>
                      <strong>LAPORAN Penggunaan Bahan Baku</strong>
                    </p>
                    <p className="no-border">Periode : {selectedMonth} 2024</p>
                    <p>Tanggal Cetak : {formattedDate}</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Nama Bahan</strong>
                  </td>
                  <td>
                    <strong>Satuan</strong>
                  </td>
                  <td>
                    <strong>Digunakan</strong>
                  </td>
                </tr>
                {data.map((item) => {
                  return (
                    <tr>
                      <td>{item.name}</td>
                      <td>{item.unit}</td>
                      <td>{item.quantity}</td>
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

export default LaporanIngredientPerPeriode;
