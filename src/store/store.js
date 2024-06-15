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
import historySLice  from "./customer/history";
import customerAdminSlice from "./admin/customer";
import orderdistanceSlice from "./admin/orderdistance";
import paymentConfirmSlice from "./admin/payment_confirm";
import confirmOrderSlice from "./mo/confirm_order";
import productViewSlice from "./customer/product_view";
import paymentOrderSlice from "./customer/payment_order";
import pickUpSlice from "./customer/pick_up";
import reportSlice from "./mo/report";
import todaysOrderSlice from "./mo/todays_orders";
import statusOrderSlice from "./admin/update_status_order";
import confirmationReceiptSlice from "./customer/confirmationReceipt";
import latepaymentSlice from "./system/latepayment";

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
        purchaseIngredientStore: purchaseIngredientSlice.reducer,
        salaryStore: salarySlice.reducer,
        produkStore: produkSlice.reducer,
        hampersStore: hampersSlice.reducer,
        historyStore: historySLice.reducer,
        customerAdminStore: customerAdminSlice.reducer,
        orderdistanceStore: orderdistanceSlice.reducer,
        paymentConfirmStore: paymentConfirmSlice.reducer,
        confirmOrderStore: confirmOrderSlice.reducer,
        productDataViewStore: productViewSlice.reducer,
        paymentOrderCustomerStore: paymentOrderSlice.reducer,
        pickUpStore : pickUpSlice.reducer,
        reportStore: reportSlice.reducer,
        todaysOrdersStore: todaysOrderSlice.reducer,
        statusOrderStore: statusOrderSlice.reducer,
        confirmationReceiptStore: confirmationReceiptSlice.reducer,
        latepaymentStore: latepaymentSlice.reducer
    }
});
