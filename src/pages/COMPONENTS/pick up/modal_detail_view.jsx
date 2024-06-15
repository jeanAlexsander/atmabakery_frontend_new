import { useDispatch, useSelector } from "react-redux";
import {
  hidePickupModalDetail,
  setCancelDetailPickupData,
} from "../../../store/customer/pick_up";
import { Button, Modal, Table } from "react-bootstrap";

const ModalDetailView = () => {
  const show = useSelector((state) => state.pickUpStore.showModal);
  const filterData = useSelector((state) => state.pickUpStore.detailPickupdata);

  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(hidePickupModalDetail());
    dispatch(setCancelDetailPickupData());
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Today's Pick Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div
            className="p-4 container-fluid"
            style={{ overflowY: "auto", flex: "1" }}
          >
            <div className="card shadow-lg p-4 mb-5 rounded">
              <div className="card-header mb-3">
                <h2 className="fw-semibold" style={{ textAlign: "center" }}>
                  Detail Product
                </h2>
              </div>

              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Nomor</th>
                    <th>Product Name</th>
                    <th>Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  {filterData.map((p, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{p.name}</td>
                      <td>{p.amount / p.price}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
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

export default ModalDetailView;
