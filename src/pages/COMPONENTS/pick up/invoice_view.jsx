import React, { useRef, useEffect } from "react";
import { useReactToPrint } from "react-to-print";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchOpenInvoiceData } from "../../../store/customer/pick_up";

const PdfPrintView = () => {
  const componentRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOpenInvoiceData());
  }, [dispatch]);

  const pesananData = useSelector((state) => state.pickUpStore.setAllInvoice);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "emp-data",
    onAfterPrint: () => alert("Print success"),
  });

  return (
    <div style={{ width: "100%", height: window.innerHeight, padding: "50px" }}>
      <Button variant="success" onClick={handlePrint}>
        Print this out
      </Button>
      <div
        ref={componentRef}
        style={{ width: "100%", height: window.innerHeight, padding: "50px" }}
      >
        <h1 className="text-center my-3 border py-2">Receipt Customer</h1>
        <Table className="w-75 mx-auto">
          <tbody>
            <tr>
              <td colSpan="2">
                <strong>Atma Kitchen</strong>
                <br />
                Jl.Centralpark No.10 Yogyakarta
              </td>
            </tr>
            <tr>
              <td>Nota:</td>
              <td>24.05.{pesananData?.orderData?.order_id}</td>
            </tr>
            <tr>
              <td>Tanggal Pesan:</td>
              <td>{pesananData?.orderData?.order_date}</td>
            </tr>
            <tr>
              <td>Lunas Pada:</td>
              <td>{pesananData?.payment?.payment_date}</td>
            </tr>
            <tr>
              <td colSpan="2">
                <strong>Customer</strong>: {pesananData?.customer?.email} /{" "}
                {pesananData?.customer?.first_name}{" "}
                {pesananData?.customer?.last_name}
                <p>Jl Babarsari no 11</p>
              </td>
            </tr>
            {pesananData?.order?.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.price}</td>
              </tr>
            ))}
            <tr>
              <td>Delivery fee</td>
              <td>{pesananData?.delivery?.delivery_fee}</td>
            </tr>
            <tr>
              <td>Total</td>
              <td>
                {pesananData?.orderData?.total +
                  pesananData?.delivery?.delivery_fee}
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                ------------------------------------------------------------------------
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default PdfPrintView;
