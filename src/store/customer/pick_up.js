import { createSlice } from "@reduxjs/toolkit";
import { URL } from "../../../constants";

const pickUpSlice = createSlice({
    name: "pickUpStore",
    initialState:{
        pickUpData: [],
        detailPickupdata: [],
        showModal: false,
        invoiceData: [],
        openInvoiceData: {},
        setAllInvoice: {}
    },
    reducers:{
        setPickUpdata: (state, action) => {
            state.pickUpData = [...action.payload.data]
        },
        setCancelPickupData: (state) => {
            state.pickUpData = []
        },
        setDetailPickupData: (state, action) => {
            state.detailPickupdata = [...action.payload.data]
        },
        setCancelDetailPickupData: (state) => {
            state.detailPickupdata = []
        },
        showPickupModalDetail: (state) => {
            state.showModal = true
        },
        hidePickupModalDetail: (state) => {
            state.showModal = false
        },
        setInvoiceData: (state, action) => {
            state.invoiceData = [...action.payload.data]
        },
        setCancelInvoiceData: (state) => {
            state.invoiceData = []
        },
        setOpenInvoiceData: (state, action) => {
            console.log(action.payload.data)
            state.openInvoiceData = action.payload.data
        },
        setCancelOpenInvoiceData: (state) => {
            state.openInvoiceData = {}
        },
        setAllInvoice: (state, action) => {
            state.setAllInvoice = action.payload.data
        }
    }    
})

export const fetchPickUpData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            try{
                const response = await fetch(URL + 'get-customer-pickup',{
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({user_id: localStorage.getItem('user_id')})
                })
                const data = await response.json();
                console.log(localStorage.getItem('user_id'))
                return data.data;
            }catch(error){
                console.log(error)
            }
        }

        try{
            const data = await fetchData();
            dispatch(setPickUpdata({data}))
        }catch(error){
            console.log(error)
        }
    }
}

export const fetchDetailPickupData = (data) => {
    const inputdata = data;
    console.log(inputdata)
    return async (dispatch) => {
        const fetchData = async () => {
            try{
                const response = await fetch(URL + 'get-payment-order', {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({user_id: inputdata.user_id, order_date: inputdata.order_date})
                })
                const data = await response.json();
                console.log(data.data)
                return data.data;
            }catch(error){
                console.log(error)
            }
        }

        try{
            const data = await fetchData();
            dispatch(setDetailPickupData({data}))
        }catch(error){
            console.log(error)
        }
    }
}

export const fetchInvoiceData = () =>{
    const user_id = localStorage.getItem('user_id');
    return async(dispatch) => {
        const fetchData = async () => {
            try{
                const response = await fetch(URL + 'get-invoice', {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({user_id})
                })
                const data = await response.json();
                return data.data
            }catch(error){
                console.log(error)
            }
        }

        try{
            const data = await fetchData();
            dispatch(setInvoiceData({data}));
        }catch(error){
            console.log(error)
        }
    }
}

export const fetchOpenInvoiceData = () => {
    console.log("masuk sini")
    console.log(localStorage.getItem('order_id'))
    console.log(localStorage.getItem('order_date'))
    console.log(localStorage.getItem('user_id'))
    return async (dispatch) => {
        const fetchData = async () => {
            try{
                const response = await fetch(URL + 'get-payment-detail', {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({user_id: localStorage.getItem('user_id'), order_date: localStorage.getItem('order_date') , order_id: localStorage.getItem('order_id')})
                })
                const data = await response.json();
                return data.data;
            }catch(error){
                console.log(error)
            }
        }
        try{
            const data = await fetchData();
            dispatch(setAllInvoice({data}))
        }catch(error){
            console.log(error)
        }
    }
}

export const {setCancelPickupData, setPickUpdata, setCancelDetailPickupData, setDetailPickupData, hidePickupModalDetail, showPickupModalDetail, setCancelInvoiceData, setInvoiceData, setCancelOpenInvoiceData, setOpenInvoiceData, setAllInvoice} = pickUpSlice.actions;

export default pickUpSlice;