import { createSlice } from "@reduxjs/toolkit";

const initValue = [
    {
        id: 1,
        first_name: "John",
        last_name: "Doe",
        product: "Lapis Legit",
        quantity: 1,
        price: 100000,
        status: "Pending",
    },
    {
        id: 2,
        first_name: "Jane",
        last_name: "Doe",
        product: "Lapis Legit",
        quantity: 1,
        price: 100000,
        status: "Pending",
    },
    {
        id: 3,
        first_name: "John",
        last_name: "Doe",
        product: "Lapis Legit",
        quantity: 1,
        price: 100000,
        status: "Pending",
    },
    {
        id: 4,
        first_name: "Jane",
        last_name: "Doe",
        product: "Lapis Legit",
        quantity: 1,
        price: 100000,
        status: "Pending",
    },
    {
        id: 5,
        first_name: "John",
        last_name: "Doe",
        product: "Lapis Legit",
        quantity: 1,
        price: 100000,
        status: "Pending",
    },
    {
        id: 6,
        first_name: "Jane",
        last_name: "Doe",
        product: "Lapis Legit",
        quantity: 1,
        price: 100000,
        status: "Pending",
    },
    {
        id: 7,
        first_name: "John",
        last_name: "Doe",
        product: "Lapis Legit",
        quantity: 1,
        price: 100000,
        status: "Pending",
    },
    {
        id: 8,
        first_name: "Jane",
        last_name: "Doe",
        product: "Lapis Legit",
        quantity: 1,
        price: 100000,
        status: "Pending",
    },
    {
        id: 9,
        first_name: "John",
        last_name: "Doe",
        product: "Lapis Legit",
        quantity: 1,
        price: 100000,
        status: "Pending",
    },
    {
        id: 10,
        first_name: "Jane",
        last_name: "Doe",
        product: "Lapis Legit",
        quantity: 1,
        price: 100000,
        status: "Pending",
    }
]

const initIngredientValue = [
    {
        id: 1,
        ingredient_name: "Flour",
        quantity: 1,
        unit: "kg",
    },
    {
        id: 2,
        ingredient_name: "Sugar",
        quantity: 1,
        unit: "kg",
    },
    {
        id: 3,
        ingredient_name: "Egg",
        quantity: 1,
        unit: "kg",
    },
    {
        id: 4,
        ingredient_name: "Butter",
        quantity: 1,
        unit: "kg",
    },
    {
        id: 5,
        ingredient_name: "Milk",
        quantity: 1,
        unit: "kg",
    },
]

const confirmOrderSlice = createSlice({
    name: "confirmOrderStore",
    initialState:{
        confirmOrderData: [...initValue],
        showConfirmModal: false,
        showRejectModal: false,
        showConfirmData: {},
        showRejectData: {},
        ingredientConfirmOrderData:[...initIngredientValue],
        showIngredientConfirmModal: false,
    },
    reducers:{
        setShowConfirmModal: (state) => {
            state.showConfirmModal = true;
        },
        setCloseConfirmModal: (state) => {
            state.showConfirmModal = false;
        },
        setShowRejectModal: (state) => {
            state.showRejectModal = true;
        },
        setCloseRejectModal: (state) => {
            state.showRejectModal = false;
        },
        setConfirmData: (state, action) => {
            state.showConfirmData = action.payload;
        },
        setCancelConfirmData: (state) => {
            state.showConfirmData = {};
        },
        setRejectData: (state, action) => {
            state.showRejectData = action.payload;
        },
        setCancelRejectData: (state) => {
            state.showRejectData = {};
        },
        setIngredientConfirmOrder: (state, action) => {
            state.ingredientConfirmOrderData = action.payload.data;
        },
        setCancelIngredientConfirmOrder: (state) => {
            state.ingredientConfirmOrderData = {};
        },
        setShowIngredientConfirmModal: (state) => {
            state.showIngredientConfirmModal = true;
        },
        setCloseIngredientConfirmModal: (state) => {
            state.showIngredientConfirmModal = false;
        }
    }
})

export const {setCancelConfirmData, setCancelRejectData, setCloseConfirmModal, setCloseRejectModal, setConfirmData, setRejectData, setShowConfirmModal, setShowRejectModal, setCancelIngredientConfirmOrder, setCloseIngredientConfirmModal, setIngredientConfirmOrder, setShowIngredientConfirmModal} = confirmOrderSlice.actions;

export default confirmOrderSlice;