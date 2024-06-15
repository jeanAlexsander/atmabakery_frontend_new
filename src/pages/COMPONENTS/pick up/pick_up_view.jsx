import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchDetailPickupData,
  fetchPickUpData,
  showPickupModalDetail,
} from "../../../store/customer/pick_up";
import ModalDetailView from "./modal_detail_view";

const PickUpView = () => {
  const initVaLue = useSelector((state) => state.pickUpStore.pickUpData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPickUpData());
  }, [dispatch]);

  const handleOpenModal = (data) => {
    dispatch(fetchDetailPickupData(data));
    dispatch(showPickupModalDetail());
  };

  return (
    <div style={{ padding: "20px" }}>
      <ModalDetailView />
      <h1>Pick Up </h1>
      <table className="yourorderstable">
        <tr>
          <th scope="col">Oder ID</th>
          <th scope="col">Order Date</th>
          <th scope="col">Price</th>
          <th scope="col">Action</th>
        </tr>
        <thead></thead>

        <tbody>
          {initVaLue.map((item, index) => {
            return (
              <tr key={item.order_id}>
                <td data-label="OrderID">{index + 1}</td>
                <td data-label="OrderDate">{item.order_date}</td>
                <td data-label="OrderDate">{item.total}</td>
                <td data-label="Invoice">
                  <button
                    className="mainbutton1"
                    onClick={() => {
                      handleOpenModal(item);
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
    </div>
  );
};

export default PickUpView;
