import { createSlice } from "@reduxjs/toolkit";

const Presensi = [
    {
      id: 1,
      first_name: "John",
      last_name: "Doe",
    },
    {
      id: 2,
      first_name: "Jane",
      last_name: "Doe",
    },
    {
      id: 3,
      first_name: "James",
      last_name: "Doe",
    },
  ];


const presensiSlice = createSlice({
    name: "presensiStore",
    initialState: {
        updatePresensiModal: false,
        presensiData: [...Presensi]
    },
    reducers: {
        showUpdatePresensiModal: (state) => {
            state.updatePresensiModal = true;
        },
        hideUpdatePresensiModal: (state) => {
            state.updatePresensiModal = false;
        },
    }
})

export const { hideUpdatePresensiModal, showUpdatePresensiModal } = presensiSlice.actions;

export default presensiSlice;