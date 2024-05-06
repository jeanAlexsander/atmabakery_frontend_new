import { configureStore, createSlice } from "@reduxjs/toolkit";
import employeeSlice from "../store/employee";
import positionSlice from "../store/position";
import presensiSlice from "../store/presensi";
import custodianSlice from "../store/mo/custodian";
import ingredientSlice from "../store/ingredient";
import otherNeedSlice from "../store/mo/otherNeed";
import hampersSlice from "./admin/hampers";
import produkSlice from "./admin/produk";
import recipeSlice from "./admin/recipe";
import userViewSlice, { setIndexVal } from "./customer/user";
import salarySlice from "./owner/salary";
// import customerSlice from "./admin/customer";
// import moProfileSlice from "./mo/profilemo";
import promoPointSlice from "./admin/promoPoint";
import purchaseIngredientSlice from "./mo/purchaseIngredient";

export const store = configureStore({
    reducer: {
        employeeStore: employeeSlice.reducer,
        recipeStore: recipeSlice.reducer,
        userViewSlice: userViewSlice.reducer,
        otherNeedStore: otherNeedSlice.reducer,
        positionStore: positionSlice.reducer,
        presensiStore: presensiSlice.reducer,
        custodianStore: custodianSlice.reducer,
        ingredientStore: ingredientSlice.reducer,
        otherNeedStore: otherNeedSlice.reducer,
        promoPointStore: promoPointSlice.reducer,
        purchaseIngredientStore: purchaseIngredientSlice.reducer
    }
    
});
