import { createSlice } from "@reduxjs/toolkit";

const Custodian = [
    {
      id: 1,
      name: "Jaka Sembung",
      deposit_time: "2024-03-25 08:00:00",
      amount: "10",
    },
    {
        id: 2,
        name: "Frankle",
        deposit_time: "2024-03-24 07:00:00",
        amount: "5",
    },
    {
        id: 3,
        name: "Rube",
        deposit_time: "2024-04-27 11:50:00",
        amount: "7",
    },
  ];


const custodianSlice = createSlice({
    name: "custodianStore",
    initialState: {
        addCustodianModal: false,
        updateCustodianModal: false,
        deleteCustodianModal: false,
        custodianData: [...Custodian]
    },
    reducers: {
        showAddCustodianModal: (state) => {
            state.addCustodianModal = true;
        },
        hideAddCustodianModal: (state) => {
            state.addCustodianModal = false;
        },
        showUpdateCustodianModal: (state) => {
            state.updateCustodianModal = true;
        },
        hideUpdateCustodianModal: (state) => {
            state.updateCustodianModal = false;
        },
        showDeleteCustodianModal: (state) => {
            state.deleteCustodianModal = true;
        },
        hideDeleteCustodianModal: (state) => {
            state.deleteCustodianModal = false;
        }
    }
})

export const { showAddCustodianModal, hideAddCustodianModal, hideUpdateCustodianModal, showUpdateCustodianModal, hideDeleteCustodianModal, showDeleteCustodianModal } = custodianSlice.actions;

export default custodianSlice;