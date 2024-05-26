import { createSlice } from "@reduxjs/toolkit";
import { URL } from "../../../constants";

const paymentOrderSlice = createSlice({
    name: "paymentOrderStore",
    initialState: {
        paymentOrderData: [],
        modalAction: false,
        detailOrderData: [],
        detailInvoiceData: {}
    },
    reducers: {
        setPaymentOrderData: (state, action) => {
            state.paymentOrderData = [...action.payload.data];
        },
        setCancelPaymentOrderData: (state) => {
            state.paymentOrderData = [];
        },
        showModalDetail: (state) => {
            state.modalAction = true;
        },
        hideModalDetail: (state) => {
            state.modalAction = false;
        },
        setDetailOrderData: (state, action) => {
            state.detailOrderData = [...action.payload.data];
        },
        setCancelDetailOrderData: (state) => {
            state.detailOrderData = [];
        },
        setDetailInvoiceData: (state, action) => {
            state.detailInvoiceData = action.payload.data;
        },
        setCancelDetailInvoiceData: (state) => {
            state.detailInvoiceData = {};
        }
    }
});

export const fetchPaymentOrderData = () => {
    console.log("fetchPaymentOrderData")
    return async (dispatch) => {
        const fetchData = async () => {
            try{
                const response = await fetch(URL + "get-payment", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        user_id: localStorage.getItem("user_id")
                    })
                })
                const data = await response.json();
                return data.data;
            }catch(error){
                console.log(error);
            }
        }

        try{
            const data = await fetchData();
            dispatch(setPaymentOrderData({data}));
        }catch(error){
            console.log(error);
        }
    }
}

export const fetchDetailOrderData = (data) => {
    const dataInput = data;
    return async (dispatch) => {
        const fetchData = async () => {
            try{
                const response = await fetch(URL + "get-payment-order", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        "user_id": dataInput.user_id,
                        "order_date": dataInput.order_date
                    })
                })
                const data = await response.json();
                console.log(data.data)
                return data.data;
            }catch(error){
                console.log(error);
            }
        }

        try{
            const data = await fetchData();
            dispatch(setDetailOrderData({data}));
        }catch(error){
            console.log(error);
        }
    }
}

export const confirmPayment = (data) => {
    return async (dispatch) => {
        async function addData() {
            const response = await fetch(`${URL}customer-payment`, {
                method: "POST",
                body: data,
                'content-type': 'multipart/form-data',
            });
            if (!response.ok) {
                throw new Error("Something went wrong!");
            }
            const responseData = await response.json();
            console.log(responseData);
            return responseData;
        }

        try {
            await addData();
        } catch (error) {
            console.log(error);
        }
    };
}


export const {setCancelPaymentOrderData, setPaymentOrderData, hideModalDetail, showModalDetail, setCancelDetailOrderData, setDetailOrderData, setCancelDetailInvoiceData, setDetailInvoiceData} = paymentOrderSlice.actions
export default paymentOrderSlice;