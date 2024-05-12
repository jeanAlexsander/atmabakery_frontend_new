import { createSlice } from "@reduxjs/toolkit";
import { URL } from "../../../constants";


const customerAdminSlice = createSlice({
    name: "customerAdminStore",
    initialState:{
        customerData: [],
        historyData: [],
        idHistory: null,
        modalHistory: false
    },
    reducers:{
        setCustomerData: (state, action) => {
            state.customerData = [...action.payload.data];
        },
        setHistoryData: (state, action) => {
            state.historyData = [...action.payload.data];
        },
        setIdHistory: (state, action) => {
            state.idHistory = action.payload.id;
        },
        setCancelIdHistory: (state) => {
            state.idHistory = null;
        },
        setOpenModalHistory: (state) => {
            state.modalHistory = true;
        },
        setCloseHistoryModal: (state) => {
            state.modalHistory = false;
        }
    }
})


export const fetchCustomerData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch(URL + "customer-admin");
            if (!response.ok) {
                throw new Error("Could not fetch customer data!");
            }
            const data = await response.json();
            return data.data;
        };

        try {
            const customerData = await fetchData();
            dispatch(setCustomerData({data: customerData}));
        } catch (error) {
            console.log(error);
        }
    };

}

export const fetchHistoryData = (id) => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch(URL + "get-history/" + id);
            if (!response.ok) {
                throw new Error("Could not fetch history data!");
            }
            const data = await response.json();
            return data.data;
        };

        try {
            const historyData = await fetchData();
            dispatch(setHistoryData({data: historyData}));
        } catch (error) {
            console.log(error);
        }
    }
}


export const {setCustomerData, setHistoryData, setCancelIdHistory, setIdHistory, setCloseHistoryModal, setOpenModalHistory} = customerAdminSlice.actions;



export default customerAdminSlice;