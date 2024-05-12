import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { setCloseHistoryModal } from "../../../store/admin/customer";

function ModalShowHistoryAdmin() {
  const initVaLue = useSelector(
    (state) => state.customerAdminStore.historyData
  );
  const show = useSelector((state) => state.customerAdminStore.modalHistory);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(setCloseHistoryModal());
  };

  const nothingHistory = (
    <tr>
      <td rowSpan={5}>nothing in history</td>
    </tr>
  );

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Recipe</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
              {initVaLue.length === 0 && nothingHistory}
              {initVaLue.length > 0 &&
                initVaLue.map((item) => {
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
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalShowHistoryAdmin;
