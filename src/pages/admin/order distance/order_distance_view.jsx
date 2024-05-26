import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminSideBar from "../component/side_navbar_admin";
import { Button } from "react-bootstrap";
import {
  fetchConfirmDistance,
  setDate,
  setOpenUpdateOrderDistanceModal,
  setUpdateOrderDistanceData,
  setUserId,
} from "../../../store/admin/orderdistance";
import UpdateDistanceModal from "./updateDistanceModal";
import { Toaster, toast } from "sonner";
import OrderDistanceDetail from "./order_distance_detail";

const OrderDistanceView = () => {
  const dispatch = useDispatch();

  const [uniqueUsers, setUniqueUsers] = useState([]);

  const paymentConfirmData = useSelector(
    (state) => state.orderdistanceStore.orderdistanceData
  );

  useEffect(() => {
    dispatch(fetchConfirmDistance());
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = uniqueUsers.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleUpdateOrderDistance = (data, userId) => {
    dispatch(setUpdateOrderDistanceData({ data }));
    dispatch(setOpenUpdateOrderDistanceModal());
    dispatch(setUserId({ id: data.user_id }));
    dispatch(setDate({ date: data.order_date }));
  };

  useEffect(() => {
    if (Array.isArray(paymentConfirmData)) {
      const uniqueUserData = [];
      const uniqueUserIds = new Set();

      paymentConfirmData.forEach((payment) => {
        const { user_id, order_date } = payment;
        const uniqueKey = `${user_id}_${order_date}`;
        if (!uniqueUserIds.has(uniqueKey)) {
          uniqueUserIds.add(uniqueKey);
          uniqueUserData.push(payment);
        }
      });

      setUniqueUsers(uniqueUserData);
    }
  }, [paymentConfirmData]);

  return (
    <div style={{ display: "flex" }}>
      <AdminSideBar />
      <UpdateDistanceModal />
      <OrderDistanceDetail />
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
                    <th>NO</th>
                    <th>Name</th>
                    <th>Order Date</th>
                    <th>Delivery Option</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {currentItems.map((p, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          {p.first_name} {p.last_name}
                        </td>
                        <td>{p.order_date}</td>
                        <td>{p.delivery_option}</td>
                        <td>
                          <Button
                            variant="primary"
                            className="me-2"
                            onClick={() =>
                              handleUpdateOrderDistance(p, p.user_id)
                            }
                          >
                            Confirm
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
                    ...Array(
                      Math.ceil(currentItems.length / itemsPerPage)
                    ).keys(),
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
