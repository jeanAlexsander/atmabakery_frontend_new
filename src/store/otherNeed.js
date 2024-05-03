import { createSlice } from "@reduxjs/toolkit";

const OtherNeed = [
    {
      id: 1,
      name: "Listrik",
      cost: "200000",
      date: "2021-03-01",
    },
    {
        id: 2,
        name: "Air",
        cost: "100000",
        date: "2024-03-27",
    },
    {
        id: 3,
        name: "Internet",
        cost: "250000",
        date: "2024-03-15",
    },
  ];


const otherNeedSlice = createSlice({
    name: "otherNeedStore",
    initialState: {
        addOtherNeedModal: false,
        updateOtherNeedModal: false,
        deleteOtherNeedModal: false,
        otherNeedData: [...OtherNeed]
    },
    reducers: {
        showAddOtherNeedModal: (state) => {
            state.addOtherNeedModal = true;
        },
        hideAddOtherNeedModal: (state) => {
            state.addOtherNeedModal = false;
        },
        showUpdateOtherNeedModal: (state) => {
            state.updateOtherNeedModal = true;
        },
        hideUpdateOtherNeedModal: (state) => {
            state.updateOtherNeedModal = false;
        },
        showDeleteOtherNeedModal: (state) => {
            state.deleteOtherNeedModal = true;
        },
        hideDeleteaOtherNeedModal: (state) => {
            state.deleteOtherNeedModal = false;
        }
    }
})

export const { showAddOtherNeedModal, hideAddOtherNeedModal, hideUpdateOtherNeedModal, showUpdateOtherNeedModal, hideDeleteOtherNeedModal, showDeleteOtherNeedModal } = otherNeedSlice.actions;

export default otherNeedSlice;