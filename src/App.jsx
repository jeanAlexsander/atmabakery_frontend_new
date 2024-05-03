import { useState } from "react";
// import { Routes, Router } from "react-router-dom";

import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register.jsx";
import "./App.css";
import EmployeeView from "./pages/mo/employee/employee.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import PositionView from "./pages/mo/position/position.jsx";
import PresensiView from "./pages/mo/presensi/presensi.jsx";
import CustodianView from "./pages/mo/custodians/custodian.jsx";
import IngredientView from "./pages/mo/ingredient/ingredient.jsx";
import OtherNeedView from "./pages/mo/otherNeed/otherNeed.jsx";

function App() {
  return (
    <Router>
      <EmployeeView />
    </Router>
  );
}

export default App;
