import { createSlice } from "@reduxjs/toolkit";
import { setCancelUpdate } from "./produk";


const initialValue = [
    {
        id: 1,
        user_id: 1,
        first_name: "John",
        last_name: "Doe",
        distance: 1,
        total_payment: 1000,
    },
    {
        id: 2,
        user_id: 2,
        first_name: "Jane",
        last_name: "Doe",
        distance: 2,
        total_payment: 2000,
    },
    {
        id: 3,
        user_id: 3,
        first_name: "James",
        last_name: "Doe",
        distance: 3,
        total_payment: 3000,
    },
    {
        id: 4,
        user_id: 4,
        first_name: "Jenny",
        last_name: "Doe",
        distance: 4,
        total_payment: 4000,
    },
    {
        id: 5,
        user_id: 5,
        first_name: "Jasmine",
        last_name: "Doe",
        distance: 5,
        total_payment: 5000,
    },
    {
        id: 6,
        user_id: 6,
        first_name: "Jade",
        last_name: "Doe",
        distance: 6,
        total_payment: 6000,
    },
    {
        id: 7,
        user_id: 7,
        first_name: "Jasper",
        last_name: "Doe",
        distance: 7,
        total_payment: 7000,
    },
    {
        id: 8,
        user_id: 8,
        first_name: "Jax",
        last_name: "Doe",
        distance: 8,
        total_payment: 8000,
    },
    {
        id: 9,
        user_id: 9,
        first_name: "Jaxon",
        last_name: "Doe",
        distance: 9,
        total_payment: 9000,
    },
    {
        id: 10,
        user_id: 10,
        first_name: "Jaxson",
        last_name: "Doe",
        distance: 10,
        total_payment: 10000,
    },
]


const orderdistanceSlice = createSlice({
    name: "orderdistanceStore",
    initialState: {
        orderdistanceData: [...initialValue],
        showUpdateModal: false,
        updateOrderDistanceData: {},
    },
    reducers: {
        setOrderDistance: (state, action) => {
            state.orderdistanceData = action.payload;
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
        }
    },
})



export const { setCancelUpdateOrderDistance, setCloseUpdateOrderDistanceModal, setOpenUpdateOrderDistanceModal, setOrderDistance, setUpdateOrderDistanceData } = orderdistanceSlice.actions;

export default orderdistanceSlice;