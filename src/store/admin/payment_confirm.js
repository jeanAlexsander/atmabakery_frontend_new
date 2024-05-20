import { createSlice } from "@reduxjs/toolkit";

const initValue = [
    {
        payment_confirm_id: 1,
        name: "Jean",
        product_name: "Brownies",
        total_payment: 450000,
        advantages_as_a_tip: 0,
    },
    {
        payment_confirm_id: 2,
        name: "Kekke",
        product_name: "Lapis Legit",
        total_payment: 750000,
        advantages_as_a_tip: 0,
    },
    {
        payment_confirm_id: 3,
        name: "Billy",
        product_name: "Milk Bun",
        total_payment: 300000,
        advantages_as_a_tip: 0,
    },
]


const paymentConfirmSlice = createSlice({
    name: "paymentConfirmStore",
    initialState: {
        paymentConfirmData: [...initValue],
        addPaymentConfirmModal: false,
    },
    reducers: {
        showAddPaymentConfirmModal: (state) => {
            state.addPaymentConfirmModal = true;
        },
        hideAddPaymentConfirmModal: (state) => {
            state.addPaymentConfirmModal = false;
        },
    },
})

export const {hideAddPaymentConfirmModal, showAddPaymentConfirmModal} = paymentConfirmSlice.actions;


export default paymentConfirmSlice;