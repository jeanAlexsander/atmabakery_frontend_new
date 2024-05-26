import { createSlice } from "@reduxjs/toolkit";
import { URL } from "../../../constants";

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
        confirmOrderData: [],
        showConfirmModal: false,
        showRejectModal: false,
        showConfirmData: {},
        showRejectData: {},
        ingredientConfirmOrderData:[...initIngredientValue],
        showIngredientConfirmModal: false,
        detailOrderData: [],
        missingIngredientData: [],
        orderData: {}
    },
    reducers:{
        setConfirmOrderData: (state, action) => {
            state.confirmOrderData = [...action.payload.data]
        },
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
        },
        setDetailOrderData: (state, action) => {
            state.detailOrderData = [...action.payload.data];
        },
        setCancelDetailOrderData: (state) => {
            state.detailOrderData = [];
        },
        setMissngIngredientData: (state, action) => {
            state.missingIngredientData = [...action.payload.data];
        },
        setCancelMissingIngredientData: (state) => {
            state.missingIngredientData = [];
        },
        setOrderData: (state, action) => {
            state.orderData = action.payload.data;
        },
        setCancelOrderData: (state) => {
            state.orderData = {};
        }
    }
})


export const fetchDataMO = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            try{
                const response = await fetch(URL + 'get-mo-confirm');
                const data = await response.json();
                return data.data;

            }catch(error){
                console.log(error);
            }
        }
        try{
            const data = await fetchData();
            dispatch(setConfirmOrderData({data}))
        }catch(error){
            console.log(error);
        }

    }
}

export const fetchMODetailOrder = (data) => {
    const inputData = data
    return async (dispatch) => {
        const fetchData = async () => {
            try{
                const response = await fetch(URL + 'get-payment-order', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(inputData)
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

export const fetchMissingIngredient = (data) => {
    const inputData = data;
    return async (dispatch) => {
        const fetchData = async () => {
            try{
                const response = await fetch(URL + 'get-missing-ingredient', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({data: inputData})
                })
                const data = await response.json();
                console.log(data);
                return data.data;
            }catch(error){
                console.log(error);
            }
        }
        try{
            const data = await fetchData();
            dispatch(setMissngIngredientData({data}));
        }catch(error){
            console.log(error);
        }
    }
}

export const moConfirmOrder = (data) => {
    const order_id = data.order_id;
    const total = data.total
    const user_id = data.user_id
    return async (dispatch) => {
        const confirmData = async () => {
            try{
                const response = await fetch(URL + 'mo-confirm-order', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({order_id: order_id, total: total, user_id: user_id})
                })
            }catch(error){
                console.log(error);
            }
        }
        try{
            await confirmData();
            dispatch(fetchDataMO())
        }catch(error){
            console.log(error);
        }
    }
}

export const moRejectOrder = (data) => {
    const order_id = data.order_id;
    const total = data.total
    const user_id = data.user_id
    return async (dispatch) => {
        const confirmData = async () => {
            try{
                const response = await fetch(URL + 'mo-decline-order', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({order_id: order_id, total: total, user_id: user_id})
                })
            }catch(error){
                console.log(error);
            }
        }
        try{
            await confirmData();
            dispatch(fetchDataMO())
        }catch(error){
            console.log(error);
        }
    }
}


export const {setCancelConfirmData, setCancelRejectData, setCloseConfirmModal, setCloseRejectModal, setConfirmData, setRejectData, setShowConfirmModal, setShowRejectModal, setCancelIngredientConfirmOrder, setCloseIngredientConfirmModal, setIngredientConfirmOrder, setShowIngredientConfirmModal, setConfirmOrderData, setCancelDetailOrderData, setDetailOrderData, setCancelMissingIngredientData, setMissngIngredientData, setCancelOrderData, setOrderData} = confirmOrderSlice.actions;

export default confirmOrderSlice;