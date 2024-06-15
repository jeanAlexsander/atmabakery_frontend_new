import { createSlice } from "@reduxjs/toolkit";
import { URL } from "../../../constants";

const confirmationReceiptSlice = createSlice({
    name: "confirmationReceiptStore",
    initialState: {
        confirmationReceiptData: [],
        updateConfirmationReceiptModal: false,
        updateConfirmationReceiptData: {},
        editConfirmationReceipt: null,
        dataIdUpdate: null,
        statusUpdateReceiptData: {}
    },
    reducers: {
        setStatusConfirmationReceiptData: (state, action) => {
            state.confirmationReceiptData = action.payload.data;
        },
        showUpdateConfirmationReceiptModal: (state) => {
            state.updateConfirmationReceiptModal = true;
        },
        hideUpdateConfirmationReceiptModal: (state) => {
            state.updateConfirmationReceiptModal = false;
        },
        setEditConfirmationReceiptData: (state, action) => {
            state.editConfirmationReceipt = action.payload.confirmationReceipt;
        },
        setdataIdUpdate: (state, action) => {
            state.dataIdUpdate = action.payload.id;
        },
        setCanceldataIdUpdate: (state) => {
            state.dataIdUpdate = null;
        },
        setStatusUpdateReceiptData: (state, action) => {
            state.statusUpdateReceiptData = action.payload.data;
        },
        setCancelStatusUpdateReceiptData: (state) => {
            state.statusUpdateReceiptData = {};
        
        }
    }
});

export const fetchConfirmationReceiptData = () => {
    return async (dispatch) => {
        async function fetchDataDatabase() {
            const response = await fetch(URL + "get-confirmation-receipt");
            if (!response.ok) {
                throw new Error("Something went wrong!");
            }
            const data = await response.json();
            return data.data;
        }

        try {
            const data = await fetchDataDatabase();
            dispatch(setStatusConfirmationReceiptData({ data }));
        } catch (error) {
            console.log(error);
        }
    };
}

export const updateConfirmationReceiptData = (id) => {
    return async (dispatch) => {
        async function updateDataDatabase() {
            const response = await fetch(URL + "update-confirmation-receipt/" + id, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                throw new Error("Something went wrong!");
            }

            const responseData = await response.json();
            return responseData;
        }

        try {
            await updateDataDatabase();
            dispatch(fetchConfirmationReceiptData());
        } catch (error) {
            console.log(error);
        }
    };
}

export const {
    setStatusConfirmationReceiptData,
    showUpdateConfirmationReceiptModal,
    hideUpdateConfirmationReceiptModal,
    setEditConfirmationReceiptData,
    setdataIdUpdate,
    setCanceldataIdUpdate,
    setCancelStatusUpdateReceiptData,
    setStatusUpdateReceiptData
} = confirmationReceiptSlice.actions;

export default confirmationReceiptSlice;