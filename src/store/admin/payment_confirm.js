import { createSlice } from "@reduxjs/toolkit";
import { URL } from "../../../constants";

const paymentConfirmSlice = createSlice({
    name: "paymentConfirmStore",
    initialState: {
        paymentConfirmData: [],
        addPaymentConfirmModal: false,
        setIdUser: 0,
        setDateUser: "",
        confirmActionModal: false,
        confirmActionData: [],
        confirmToast: 0,
    },
    reducers: {
        showAddPaymentConfirmModal: (state) => {
            state.addPaymentConfirmModal = true;
        },
        hideAddPaymentConfirmModal: (state) => {
            state.addPaymentConfirmModal = false;
        },
        setPaymentConfirmData: (state, action) => {
            state.paymentConfirmData = [...action.payload.data];
        },
        setUserId: (state, action) => {
            state.setIdUser = action.payload.id;
        },
        setDefaultUserId: (state) => {
            state.setIdUser = 0;
        },
        setDateUser: (state, action) => {
            state.setDateUser = action.payload.date;
        },
        setCancelDateUser: (state) => {
            state.setDateUser = "";
        },
        showConfirmActionModal: (state) => {
            state.confirmActionModal = true;
        },
        hideConfirmActionModal: (state) => {
            state.confirmActionModal = false;
        },
        setConfirmActionData: (state, action) => {
            state.confirmActionData = [...action.payload.data];
        },
        setCancelActionData: (state) => {
            state.confirmActionData = [];
        },
        setConfirmToast: (state, action) => {
            state.confirmToast = action.payload.toast;
        },
        setResetToast: (state) => {
            state.confirmToast = 0;
        }
        
    },
})

export const fetchOrderNotConfirm = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            try {
                const response = await fetch(URL + "not-confirm-data" )
                const data = await response.json();
                return data.data;
            }catch (error) {
                console.log(error);
            }
        }

        try{
            const data = await fetchData();
            dispatch(setPaymentConfirmData({data: data}));
        }catch (error) {
            console.log(error);
        }
    }
}

export const confirmOrder = (data) => {
    const editData = [...data]
    return async (dispatch) => {
        const confirm = async () => {
            try{
                const response = await fetch(URL + "confirm-order", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({data: editData}),
                })
                const data = await response.json();
                console.log(data); 
            }catch (error) {
                console.log(error);
            }
        }

        try{
            await confirm();
            fetchOrderNotConfirm();
            dispatch(fetchOrderNotConfirm());
            dispatch(setConfirmToast({toast: 1}));
        }catch (error) {
            dispatch(setConfirmToast({toast: 2}));
            console.log(error);
        }
    }
}

export const {hideAddPaymentConfirmModal, showAddPaymentConfirmModal, setPaymentConfirmData, setDefaultUserId, setUserId, setCancelDateUser, setDateUser, hideConfirmActionModal, showConfirmActionModal, setCancelActionData, setConfirmActionData, setConfirmToast, setResetToast} = paymentConfirmSlice.actions;


export default paymentConfirmSlice;