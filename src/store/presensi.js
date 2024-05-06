import { createSlice } from "@reduxjs/toolkit";
import { URL } from "../../constants";


const presensiSlice = createSlice({
    name: "presensiStore",
    initialState: {
        updatePresensiModal: false,
        presensiData: []
    },
    reducers: {
        showUpdatePresensiModal: (state) => {
            state.updatePresensiModal = true;
        },
        hideUpdatePresensiModal: (state) => {
            state.updatePresensiModal = false;
        },
        setPresensi: (state, action) => {
            state.presensiData = [...action.payload.data];
        }
    }
})


export const fetchPesensi = () => {
  return async (dispatch) => {
    async function fetchDataDatabase() {
        const response = await fetch(`${URL}get-presensi`)
        if (!response.ok) {
            throw new Error("Something went wrong!");
        }
        const data = await response.json();
        return data.data;        
    }

    try {
        const data = await fetchDataDatabase();
        dispatch(setPresensi({ data }));
    } catch (error) {
        console.log(error);
    }
};
}
export const { hideUpdatePresensiModal, showUpdatePresensiModal,setPresensi } = presensiSlice.actions;

export default presensiSlice;