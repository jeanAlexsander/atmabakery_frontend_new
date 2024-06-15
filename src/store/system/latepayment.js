import { createSlice } from "@reduxjs/toolkit";
import { URL } from "../../../constants";

const latepaymentSlice = createSlice({
    name: "latepaymentStore",
    initialState: {
        statusLatePaymentData: [],
        updateStatusPaymentModal: false,
        updateStatusPaymentData : {},
        editStatusLatePayment: null,
        dataIdUpdate: null,
        updatestatusLatePaymentData: {},
    },
    reducers:{
        setStatusLatePaymentData: (state, action) => {
            state.statusLatePaymentData = [...action.payload.data];
        },
        showUpdateLatePaymentModal: (state) => {   
            state.updateStatusPaymentModal = true;
        },
        hideUpdateLatePaymentModal: (state) => {
            state.updateStatusPaymentModal = false;
        },
        setEditLatePaymentData: (state, action) => {
            state.editStatusLatePayment = action.payload.latePayment;
        },
        setdataIdUpdate: (state, action) => {
            state.dataIdUpdate = action.payload.id;
        },
        setCanceldataIdUpdate: (state) => {
            state.dataIdUpdate = null
        },
        setUpdatestatusLatePaymentData: (state, action) => {
            state.updatestatusLatePaymentData = action.payload.data;
        },
        setCancelUpdatestatusLatePaymentData: (state) => {
            state.updatestatusLatePaymentData = {};
        }
    }
});

export const fetchLatePaymentData = () => {
    return async (dispatch) => {
        async function fetchDataDatabase() {
            const response = await fetch(URL + "get-late-payment");
            if (!response.ok) {
                throw new Error("Something went wrong!");
            }
            const data = await response.json();
            return data.data;
        }

        try {
            const data = await fetchDataDatabase();
            dispatch(setStatusLatePaymentData({ data }));
        } catch (error) {
            console.log(error);
        }
    };
};

export const updateLatePaymentData = (id) => {
    return async (dispatch) => {
        async function updateDataDatabase() {
            const response = await fetch(URL+ "update-late-payment/" +id, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if (!response.ok) {
                throw new Error("Something went wrong!");
            }
        }

        try {
            await updateDataDatabase();
            dispatch(fetchLatePaymentData());
            dispatch(setCanceldataIdUpdate());
        } catch (error) {
            console.log(error);
        }
    };
};

export const { setStatusLatePaymentData, showUpdateLatePaymentModal, hideUpdateLatePaymentModal, setEditLatePaymentData, setdataIdUpdate, setCanceldataIdUpdate, setCancelUpdatestatusLatePaymentData, setUpdatestatusLatePaymentData } = latepaymentSlice.actions;

export default latepaymentSlice;