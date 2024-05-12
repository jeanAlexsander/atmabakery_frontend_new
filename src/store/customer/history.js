import { createSlice } from "@reduxjs/toolkit";
import { URL } from "../../../constants";


const historySLice = createSlice({
    name: "historySlice",
    initialState: {
        historyData: [],
        
    },
    reducers: {
        setHistoryData: (state, action) => {
            state.historyData = [...action.payload.data];
        },
    }
});

export const fetchistoryData = () => {
    return async (dispatch) => {
        try {
            const response = await fetch( URL + 'get-history/' + localStorage.getItem('user_id'));
            const data = await response.json();
            dispatch(setHistoryData({data: data.data}));
        } catch (err) {
            console.log(err);
        }
    };
}


export const {setHistoryData} = historySLice.actions;

export default historySLice;
