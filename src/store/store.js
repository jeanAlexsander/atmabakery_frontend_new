import { configureStore, createSlice } from "@reduxjs/toolkit";
import employeeSlice from "../store/employee";
import positionSlice from "../store/position";
import presensiSlice from "../store/presensi";
import custodianSlice from "../store/custodian";
import ingredientSlice from "../store/ingredient";
import otherNeedSlice from "../store/otherNeed";
import hampersSlice from "./admin/hampers";
import produkSlice from "./admin/produk";
import recipeSlice from "./admin/recipe";
import userViewSlice, { setIndexVal } from "./customer/user";
import salarySlice from "./owner/salary";
// import customerSlice from "./admin/customer";
// import moProfileSlice from "./mo/profilemo";

export const store = configureStore({
    reducer: {
        employeeStore: employeeSlice.reducer,
        recipeStore: recipeSlice.reducer,
        userViewSlice: userViewSlice.reducer,
        otherNeedStore: otherNeedSlice.reducer,
        positionStore: positionSlice.reducer,
        salaryStore: salarySlice.reducer,
        // moProfileStore: moProfileSlice.reducer,
        //customerData: customerSlice.reducer,
        presensiData: presensiSlice.reducer,
        salaryStore: salarySlice.reducer,
    }
    
});
