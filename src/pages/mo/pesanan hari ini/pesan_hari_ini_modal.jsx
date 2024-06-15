import { Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchTodayOrderDetail,
  hideModalTodaysOrder,
} from "../../../store/mo/todays_orders";
import { useEffect } from "react";

const ModalPesananHariIni = () => {
  const show = useSelector((state) => state.todaysOrdersStore.modalTodaysOrder);
  const orderId = useSelector((state) => state.todaysOrdersStore.todaysOrderId);
  const initValue = useSelector(
    (state) => state.todaysOrdersStore.todaysOrderDetail
  );
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(hideModalTodaysOrder());
  };
  useEffect(() => {
    dispatch(fetchTodayOrderDetail(orderId));
  }, []);
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Detail Ingredients</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div
            className="p-4 container-fluid"
            style={{ overflowY: "auto", flex: "1" }}
          >
            <div className="card shadow-lg p-4 mb-5 rounded">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Nomor</th>
                    <th scope="col">ingredient name</th>
                    <th scope="col">quantity</th>
                  </tr>
                </thead>
                <tbody>
                  {initValue.map((e, index) => {
                    return (
                      <tr key={e.user_id}>
                        <td>{index + 1}</td>
                        <td>{e.ingredient_name}</td>
                        <td>{e.quantity}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalPesananHariIni;
