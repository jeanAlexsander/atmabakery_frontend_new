import { createSlice } from "@reduxjs/toolkit";
import { URL } from "../../../constants";

const statusOrderSlice = createSlice({
    name: "statusOrderStore",
    initialState: {
        statusOrderData: [],
        updateStatusOrderModal: false,
        updateStatusOrderData: {},
        editStatusOrder: null,
        dataIdUpdate: null
    },
    reducers: {
        setStatusOrderData: (state, action) => {
            state.statusOrderData = [...action.payload.data];
        },
        showUpdateOrderStatusModal: (state) => {
            state.updateStatusOrderModal = true;
        },
        hideUpdateOrderStatusModal: (state) => {
            state.updateStatusOrderModal = false;
        },
        setEditOrderStatusData: (state, action) => {
            state.editStatusOrder = action.payload.statusOrder;
        },
        setdataIdUpdate: (state, action) => {
            console.log(action.payload.id)
            state.dataIdUpdate = action.payload.id;
        },
        setCanceldataIdUpdate: (state) => {
            state.dataIdUpdate = null
        }
    }
});

export const fetchStatusOrderData = () => {
    return async (dispatch) => {
        async function fetchDataDatabase() {
            const response = await fetch(URL + "get-status-order");
            if (!response.ok) {
                throw new Error("Something went wrong!");
            }
            const data = await response.json();
            return data.data;
        }

        try {
            const data = await fetchDataDatabase();
            dispatch(setStatusOrderData({ data }));
        } catch (error) {
            console.log(error);
        }
    };
};

export const updateStatusOrderData = (data, id) => {
    console.log("masuk redux")
    return async (dispatch) => {
        async function updateDataDatabase() {
            const response = await fetch(URL + "update-status-order/" + id, {
                method: "POST",
                body: JSON.stringify({status_order: data}),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if (!response.ok) {
                throw new Error("Something went wrong!");
            }
            const result = await response.json();
            return result;
        }

        try {
            await updateDataDatabase();
            dispatch(fetchStatusOrderData());
        } catch (error) {
            console.log(error);
        }
    };
};

export const {
    setStatusOrderData,
    showUpdateOrderStatusModal,
    hideUpdateOrderStatusModal,
    setEditOrderStatusData,
    setCanceldataIdUpdate,
    setdataIdUpdate
} = statusOrderSlice.actions;

export default statusOrderSlice;