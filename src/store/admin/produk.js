import { createSlice } from "@reduxjs/toolkit";

const produk = [
    {
      product_id: 1,
      custodian_id: 1,
      name: "Lapis Legit Loyang", 
      price: "85000",
      quantity: "1",
      image: '../assets/bg1.png',
      category_id: "1",
    },
    {
        product_id: 2,
        custodian_id: 2,
        name: "Lapis Legit 1/2 Loyang", 
        price: "45000",
        quantity: "1",
        image: '../assets/bg1.png',
        category_id: "1",
    },
    {
        product_id: 3,
        custodian_id: 3,
        name: "Lapis Surabaya 1 Loyang", 
        price: "55000",
        quantity: "1",
        image: '../assets/bg1.png',
        category_id: "1",
    },
  ];


const produkSlice = createSlice({
    name: "produkStore",
    initialState: {
        updateSalaryModal: false,
        produkData: [...produk]
    },
    reducers: {
        showUpdateSalaryModal: (state) => {
            state.updateSalaryModal = true;
        },
        hideUpdateSalaryModal: (state) => {
            state.updateSalaryModal = false;
        }
    }
})

export const { showAddProdukModal, hideAddProdukModal, showUpdateProdukModal, hideUpdateProdukModal, hideDeleteProdukModal, showDeleteProdukModal } = produkSlice.actions;

export default produkSlice;