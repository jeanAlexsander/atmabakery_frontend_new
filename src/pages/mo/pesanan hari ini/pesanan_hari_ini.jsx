import { useDispatch, useSelector } from "react-redux";
import MOSideBar from "../component/side_nav_bar";
import { useEffect } from "react";
import {
  fetchTodayOrder,
  setModalTodaysOrder,
  setTodaysOrderId,
} from "../../../store/mo/todays_orders";
import { Button } from "react-bootstrap";
import ModalPesananHariIni from "./pesan_hari_ini_modal";

const PesananHariIni = () => {
  const initValue = useSelector((state) => state.todaysOrdersStore.todaysOrder);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodayOrder());
  }, []);
  const handleOpenModal = (data) => {
    dispatch(setModalTodaysOrder());
    dispatch(setTodaysOrderId({ id: data }));
  };

  return (
    <div style={{ display: "flex" }}>
      <MOSideBar />
      <ModalPesananHariIni />
      <div style={{ width: "100%" }}>
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
        >
          <div
            className="p-4 container-fluid"
            style={{ overflowY: "auto", flex: "1" }}
          >
            <div className="card shadow-lg p-4 mb-5 rounded">
              <div className="card-header mb-3">
                <h2 className="fw-semibold" style={{ textAlign: "center" }}>
                  Order Processing Today
                </h2>
              </div>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Nomor</th>
                    <th scope="col">User Id</th>
                    <th scope="col">Nama</th>
                    <th scope="col">Tanggal</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {initValue.map((e, index) => {
                    return (
                      <tr key={e.user_id}>
                        <td>{index + 1}</td>
                        <td>{e.user_id}</td>
                        <td>
                          {e.first_name} {e.last_name}
                        </td>
                        <td>
                          {e.order_date.slice(0, 10)} {e.order_date.slice(11, 19)}
                        </td>
                        <td>
                          <Button
                            variant="primary"
                            className="me-2"
                            onClick={() => handleOpenModal(e.order_id)}
                          >
                            Detail
                          </Button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PesananHariIni;
