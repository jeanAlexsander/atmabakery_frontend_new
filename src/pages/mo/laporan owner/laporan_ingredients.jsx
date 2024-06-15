import { useEffect, useRef } from "react";
import MOSideBar from "../component/side_nav_bar";
import { useDispatch, useSelector } from "react-redux";
import { fetchIngredients } from "../../../store/mo/report";
import { Button } from "react-bootstrap";
import { useReactToPrint } from "react-to-print";
import OwnerSideBar from "../../owner/component/owner_nav";

const LaporanIngredientsOwner = () => {
  const componentRef = useRef();
  const data = useSelector((state) => state.reportStore.dataIngredients);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchIngredients());
  }, []);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "emp-data",
  });

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
        <div ref={componentRef}>
          <h1 className="text-center my-3 border py-2">Ingredient Product</h1>
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
                      <strong>LAPORAN PENJUALAN BULANAN</strong>
                    </tr>
                    <tr>Tanggal Cetak : 10 Februari 2024</tr>
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
                    <strong>Stok</strong>
                  </td>
                </tr>
                {data.map((item) => {
                  return (
                    <tr>
                      <td>{item.name}</td>
                      <td>{item.unit}</td>
                      <td>{item.amount}</td>
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

export default LaporanIngredientsOwner;
