import { createSlice } from "@reduxjs/toolkit";
import { URL } from "../../../constants";

const todaysOrderSlice = createSlice({
  name: "todaysOrderStore",
  initialState: {
    todaysOrder: [],
    modalTodaysOrder: false,
    todaysOrderId: null,
    todaysOrderDetail: [],
  },
  reducers: {
    setTodaysOrder: (state, action) => {
      state.todaysOrder = [...action.payload.data];
    },
    setModalTodaysOrder: (state) => {
      state.modalTodaysOrder = true;
    },
    hideModalTodaysOrder: (state) => {
      state.modalTodaysOrder = false;
    },
    setTodaysOrderId: (state, action) => {
      state.todaysOrderId = action.payload.id;
    },
    hideTodaysOrderId: (state) => {
      state.todaysOrderId = null;
    },
    settodaysOrderDetail: (state, action) => {
      state.todaysOrderDetail = [...action.payload.data];
    },
  },
});

export const fetchTodayOrder = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      try {
        const response = await fetch(URL + "get-todays-proces");
        const data = await response.json();
        return data.data;
      } catch (error) {
        console.log(error);
      }
    };
    try {
      const data = await fetchData();
      dispatch(setTodaysOrder({ data }));
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchTodayOrderDetail = (dataId) => {
  console.log(dataId);
  return async (dispatch) => {
    const fetchData = async () => {
      try {
        const response = await fetch(URL + "get-bahan", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ order_id: dataId }),
        });
        const data = await response.json();
        console.log(data.data);
        return data.data;
      } catch (error) {
        console.log(error);
      }
    };
    try {
      const data = await fetchData();
      dispatch(settodaysOrderDetail({ data }));
    } catch (error) {
      console.log(error);
    }
  };
};

export const {
  setTodaysOrder,
  hideModalTodaysOrder,
  setModalTodaysOrder,
  hideTodaysOrderId,
  setTodaysOrderId,
  settodaysOrderDetail,
} = todaysOrderSlice.actions;

export default todaysOrderSlice;
