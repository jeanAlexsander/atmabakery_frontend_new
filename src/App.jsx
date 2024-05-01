import { useState } from "react";
// import { Routes, Router } from "react-router-dom";

import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register.jsx";
import "./App.css";
import EmployeeView from "./pages/mo/employee/employee.jsx";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <EmployeeView />
    </Router>
  );
}

export default App;
