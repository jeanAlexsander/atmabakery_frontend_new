import { createSlice } from "@reduxjs/toolkit";


const userViewSlice = createSlice({
    name: "userViewSlice",
    initialState: {
        indexVal: 1,
    },
    reducers: {
        setIndexVal: (state, action)=> {
            state.indexVal = action.payload.data
        },
    }
});


export const {setIndexVal} = userViewSlice.actions;

export default userViewSlice;
