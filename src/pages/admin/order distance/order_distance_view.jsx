import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminSideBar from "../component/side_navbar_admin";
import { Button } from "react-bootstrap";
import {
  setOpenUpdateOrderDistanceModal,
  setUpdateOrderDistanceData,
} from "../../../store/admin/orderdistance";
import UpdateDistanceModal from "./updateDistanceModal";
import { Toaster, toast } from "sonner";

const OrderDistanceView = () => {
  const initValue = useSelector(
    (state) => state.orderdistanceStore.orderdistanceData
  );

  const toastMessage = () => {
    toast.error("Data Updated");
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const dispatch = useDispatch();

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = initValue.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleUpdateOrderDistance = (data) => {
    dispatch(setUpdateOrderDistanceData({ data }));
    dispatch(setOpenUpdateOrderDistanceModal());
  };

  return (
    <div style={{ display: "flex" }}>
      <AdminSideBar />
      <UpdateDistanceModal />
      <Toaster duration={3000} richColors />
      <div style={{ width: "100%" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginLeft: "20px",
            marginTop: "20px",
            marginBottom: "20px",
            flex: "1",
          }}
        >
          <h4>order distance</h4>
          <Button variant="primary" onClick={toastMessage}>
            cek toast
          </Button>
          <div
            className="p-4 container-fluid"
            style={{
              overflowY: "auto",
              flex: "1",
              marginTop: "50px",
              marginLeft: "-100px",
              marginRight: "60px",
            }}
          >
            <div className="card shadow-lg p-4 mb-5 rounded">
              <div className="card-header mb-3">
                <h2 className="fw-semibold" style={{ textAlign: "center" }}>
                  Input Distance
                </h2>
              </div>

              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Customer ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">distance</th>
                    <th scope="col">total payment</th>
                    <th scope="col">action</th>
                  </tr>
                </thead>
                <tbody>
                  {currentItems.map((c) => {
                    return (
                      <tr key={c.id}>
                        <td>{c.user_id}</td>
                        <td>
                          {c.first_name} {c.last_name}
                        </td>
                        <td>{c.distance}</td>
                        <td>{c.total_payment}</td>
                        <td>
                          <Button
                            className="primary"
                            onClick={() => {
                              handleUpdateOrderDistance(c);
                            }}
                          >
                            <i className="fas fa-edit"></i>
                          </Button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <nav>
                <ul className="pagination justify-content-center">
                  {[
                    ...Array(Math.ceil(initValue.length / itemsPerPage)).keys(),
                  ].map((number) => (
                    <li key={number} className="page-item">
                      <button
                        onClick={() => paginate(number + 1)}
                        className="page-link"
                      >
                        {number + 1}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDistanceView;
