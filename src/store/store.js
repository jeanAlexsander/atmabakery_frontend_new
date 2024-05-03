import { configureStore } from "@reduxjs/toolkit";
import employeeSlice from "./employee";
import positionSlice from "./position";
import presensiSlice from "./presensi";
import custodianSlice from "./custodian";
import ingredientSlice from "./ingredient";
import otherNeedSlice from "./otherNeed";

export const store = configureStore({
    reducer: {
        employeeStore: employeeSlice.reducer,
        positionStore: positionSlice.reducer,
        presensiStore: presensiSlice.reducer,
        custodianStore: custodianSlice.reducer,
        ingredientStore: ingredientSlice.reducer,
        otherNeedStore: otherNeedSlice.reducer
    }
});
