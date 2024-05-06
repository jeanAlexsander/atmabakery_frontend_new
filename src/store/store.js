import { configureStore } from "@reduxjs/toolkit";
import employeeSlice from "../store/employee";
import positionSlice from "../store/position";
import presensiSlice from "../store/presensi";
import custodianSlice from "../store/custodian";
import ingredientSlice from "../store/ingredient";
import otherNeedSlice from "../store/otherNeed";
import hampersSlice from "./admin/hampers";
import produkSlice from "./admin/produk";

export const store = configureStore({
    reducer: {
        employeeStore: employeeSlice.reducer,
        positionStore: positionSlice.reducer,
        presensiStore: presensiSlice.reducer,
        custodianStore: custodianSlice.reducer,
        ingredientStore: ingredientSlice.reducer,
        otherNeedStore: otherNeedSlice.reducer,
        hampersStore: hampersSlice.reducer,
        produkStore: produkSlice.reducer,
    }
});
