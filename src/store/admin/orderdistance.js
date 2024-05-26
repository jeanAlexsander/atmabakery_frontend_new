import { createSlice } from "@reduxjs/toolkit";
import { URL } from "../../../constants";


const orderdistanceSlice = createSlice({
    name: "orderdistanceStore",
    initialState: {
        orderdistanceData: [],
        showUpdateModal: false,
        updateOrderDistanceData: {},
        showUpdateModalDetail: false,
        date: "",
        userId: 0,
        totalPrice: 0,
        totalDelivery: 0,
    },
    reducers: {
        setOrderDistance: (state, action) => {
            state.orderdistanceData = [...action.payload.data];
        },
        setOpenUpdateOrderDistanceModal: (state) => {
            state.showUpdateModal = true;
        },
        setCloseUpdateOrderDistanceModal: (state) => {
            state.showUpdateModal = false;
        },
        setUpdateOrderDistanceData : (state, action) => {
            state.updateOrderDistanceData = action.payload.data;
        },
        setCancelUpdateOrderDistance: (state) => {
            state.updateOrderDistanceData = {};
        },
        showUpdateModalDetail: (state) => {
            state.showUpdateModalDetail = true;
        },
        hideUpdateModalDetail: (state) => {
            state.showUpdateModalDetail = false;
        },
        setDate: (state, action) => {
            state.date = action.payload.date;
        },
        cancelDate: (state) => {
            state.date = "";
        },
        setUserId: (state, action) => {
            state.userId = action.payload.id;
        },
        cancelUserId: (state) => {
            state.userId = 0;
        },
        setTotalPrice: (state, action) => {
            state.totalPrice = action.payload.price;
        },
        cancelTotalPrice: (state) => {
            state.totalPrice = 0;
        }, 
        setTotalDelivery: (state, action) => {
            state.totalDelivery = action.payload.delivery;
        },
        cancelTotalDelivery: (state) => {
            state.totalDelivery = 0;
        },
        
    },
})


export const fetchConfirmDistance = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            try {
                const response = await fetch(URL + "confirm-distance")
                const data = await response.json();
                return data.data;
            }catch (error) {
                console.log(error);
            }
        }

        try{
            const data = await fetchData();
            dispatch(setOrderDistance({data: data}));
        }catch (error) {
            console.log(error);
        }
    }
}

export const totalAddOnDelivery = (data) => {
    const dataInput = data
    return async (dispatch) => {
        const fetchData = async () => {
            try {
                const response = await fetch(URL + "total-distance", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({distance: dataInput}),
                });
                const data = await response.json();
                return data.data;
            }catch (error) {
                console.log(error);
            }
        }

        try{
            const data = await fetchData();
            dispatch(setTotalDelivery({delivery: data}))
        }catch (error) {
            console.log(error);
        }
    }

}


export const confirmDistanceOrder = (dataOrder, deliveryFee) => {
    const dataDatabase = {
        data: dataOrder[0],
        delivery_fee: deliveryFee,
    }
    return async (dispatch) => {
        const confirmData = async () => {
            try{
                const response = await fetch(URL+ 'confirm-distance-order', {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({data: dataDatabase}),
                })
                const data = await response.json();
                console.log(data);
            }catch (error) {
                console.log(error);
            }
        }
        try{
            await confirmData();
            dispatch(fetchConfirmDistance());
        }catch (error) {
            console.log(error);
        }
    }
}


export const { setCancelUpdateOrderDistance, setCloseUpdateOrderDistanceModal, setOpenUpdateOrderDistanceModal, setOrderDistance, setUpdateOrderDistanceData, hideUpdateModalDetail, showUpdateModalDetail, cancelDate, cancelTotalPrice, cancelUserId, setDate, setTotalPrice, setUserId, cancelTotalDelivery, setTotalDelivery } = orderdistanceSlice.actions;

export default orderdistanceSlice;