import { useState } from "react";
// import { Routes, Router } from "react-router-dom";

import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register.jsx";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import PositionView from "./pages/mo/position/position.jsx";
import PresensiView from "./pages/mo/presensi/presensi.jsx";
import CustodianView from "./pages/mo/custodians/custodian.jsx";
import IngredientView from "./pages/mo/ingredient/ingredient.jsx";
import OtherNeedView from "./pages/mo/otherNeed/otherNeed.jsx";
import EmployeeView from "./pages/mo/employee/employee.jsx";
import HampersAdminView from "./pages/admin/hampers/hampers.jsx";
import ProdukAdminView from "./pages/admin/produk/produk.jsx";
import Home from "./pages/HomePage/Home.jsx";
import RecipeAdminView from "./pages/admin/recipe/recipe_admin.jsx";
//import EmployeeView from "./pages/mo/position/employee.jsx";
import AccountSettings from "./pages/COMPONENTS/UserProfile/AccountSettings.jsx";
import UserProfile from "./pages/user/UserProfile.jsx";
import MOProfile from "./pages/mo/MOProfile/MOProfile.jsx";
import ChangePassword from "./pages/COMPONENTS/UserProfile/ChangePassword.jsx";
import ChangePasswordMO from "./pages/mo/ChangePassword/ChangePasswordMO.jsx";
import ChangePasswordAdmin from "./pages/admin/ChangePasswordAdmin/ChangePasswordAdmin.jsx";
import SalaryView from "./pages/owner/salary/owner.jsx";
// import CustomerView from "./pages/admin/customers/customers.jsx";
import HampersAdminView from "./pages/admin/hampers/hampers.jsx";
import EmployeeView from "./pages/mo/employee/employee.jsx";
import PromoPointView from "./pages/admin/promoPoint/promoPoint.jsx";
import PurchaseIngredientView from "./pages/mo/purchaseIngredient/purchaseIngredient.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  },
  
])


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
