import { useDispatch, useSelector } from "react-redux";
import MOSideBar from "../component/side_nav_bar";
import { Button } from "react-bootstrap";
import { useState } from "react";
import {
  setConfirmData,
  setRejectData,
  setShowConfirmModal,
  setShowRejectModal,
} from "../../../store/mo/confirm_order";
import ModalConfirm from "./modal_confirm";
import ModalReject from "./modal_reject";
import IngredientConfirmOrderModal from "./ingredient_confirm_order";

const ConfirmOrderView = () => {
  const initValue = useSelector(
    (state) => state.confirmOrderStore.confirmOrderData
  );
  let noUrut = 0;
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = initValue.slice(indexOfFirstItem, indexOfLastItem);

  const dispatch = useDispatch();

  const handleConfirmOrder = (data) => {
    dispatch(setShowConfirmModal());
    dispatch(setConfirmData(data));
  };

  const handleRejectOrder = (data) => {
    dispatch(setShowRejectModal());
    dispatch(setRejectData(data));
  };

  return (
    <div style={{ display: "flex" }}>
      <MOSideBar />
      <ModalConfirm />
      <ModalReject />
      <IngredientConfirmOrderModal/>
      <div style={{ width: "100%", marginTop: "20px", marginLeft: "20px" }}>
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
          <h4>Confirm Order</h4>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginRight: "20px",
            }}
          ></div>
        </div>
        <div
          className="p-4 container-fluid"
          style={{ overflowY: "auto", flex: "1" }}
        >
          <div className="card shadow-lg p-4 mb-5 rounded">
            <div className="card-header mb-3">
              <h2 className="fw-semibold" style={{ textAlign: "center" }}>
                Confirm Order
              </h2>
            </div>

            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Nomor</th>
                  <th scope="col">Name</th>
                  <th scope="col">Product Name</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Total Price</th>
                  <th scope="col">Status</th>
                  <th scope="col">Action</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((p, index) => {
                  noUrut = indexOfFirstItem + index + 1;
                  return (
                    <tr key={p.payment_confirm_id}>
                      <td>{noUrut}</td>
                      <td>
                        {p.first_name} {p.last_name}
                      </td>
                      <td>{p.product}</td>
                      <td>{p.quantity}</td>
                      <td>{p.price}</td>
                      <td>{p.status}</td>
                      <td>
                        <Button
                          variant="primary"
                          className="me-2"
                          style={{ minWidth: "100px", minHeight: "40px" }}
                          onClick={() => {
                            handleConfirmOrder(p);
                          }}
                        >
                          Confirm
                        </Button>
                        <Button
                          variant="danger"
                          className="me-2"
                          style={{ minWidth: "100px", minHeight: "44px" }}
                          onClick={() => {
                            handleRejectOrder(p);
                          }}
                        >
                          Reject
                        </Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <nav>
              <ul className="pagination justify-content-center">
                <li
                  className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
                >
                  <button
                    onClick={() => paginate(currentPage - 1)}
                    className="page-link"
                  >
                    Previous
                  </button>
                </li>
                {[
                  ...Array(Math.ceil(initValue.length / itemsPerPage)).keys(),
                ].map((number) => (
                  <li
                    key={number}
                    className={`page-item ${
                      currentPage === number + 1 ? "active" : ""
                    }`}
                  >
                    <button
                      onClick={() => paginate(number + 1)}
                      className="page-link"
                    >
                      {number + 1}
                    </button>
                  </li>
                ))}
                <li
                  className={`page-item ${
                    currentPage === Math.ceil(initValue.length / itemsPerPage)
                      ? "disabled"
                      : ""
                  }`}
                >
                  <button
                    onClick={() => paginate(currentPage + 1)}
                    className="page-link"
                  >
                    Next
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmOrderView;
