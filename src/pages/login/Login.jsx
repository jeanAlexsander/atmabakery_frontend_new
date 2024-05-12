import React, { useRef, useState } from "react";
import { FaEye, FaEyeSlash, FaLock, FaUser } from "react-icons/fa";
import NavbarCustomer from "../navbar/navbarCustomer";
import "../login/Login.css";
import { URL } from "../../../constants";
import { useNavigate } from "react-router-dom";

function Login() {
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleLogin = async () => {
    const email = emailRef.current.value;
    const password_hash = passwordRef.current.value;
    const datalogin = {
      email: email,
      password_hash: password_hash,
    };

    try {
      const response = await fetch(`${URL}login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(datalogin),
      });

      const data = await response.json();

      localStorage.setItem("email", data.data[0].email);
      localStorage.setItem("first_name", data.data[0].first_name);
      localStorage.setItem("last_name", data.data[0].last_name);
      localStorage.setItem("user_id", data.data[0].user_id);
      

      if (data.data[0].role_name === "admin") {
        navigate("/admin");
      } else if (data.data[0].role_name === "manager") {
        navigate("/mo");
      } else if (data.data[0].role_name === "owner") {
        navigate("/owner");
      } else if (data.data[0].role_name === "customer") {
        navigate("/customer");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  return (
    <div className="login-background">
      <NavbarCustomer />
      <div className="wrapper">
        <form action="">
          <h1>Sign In</h1>
          <div className="input-box">
            <input
              type="text"
              id="username"
              placeholder="Username"
              required
              ref={emailRef}
            />
            <FaUser className="icon" />
          </div>
          <div className="input-box" style={{ position: "relative" }}>
            <input
              type={visible ? "text" : "password"}
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ display: "inline" }}
              ref={passwordRef}
            />
            <button
              type="button"
              onClick={toggleVisibility}
              className="icon toggle-icon"
              style={{
                position: "absolute",
                left: "410px",

                transform: "translateY(-50%)",
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "white",
                width: "5px",
              }}
            >
              {visible ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          <div className="remember-forgot">
            <label>
              <input type="checkbox" />
              Remember Me
            </label>
            <a href="#">Forgot Password</a>
          </div>

          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              handleLogin();
            }}
          >
            Login
          </button>

          <div className="register-link">
            <p>
              Don't Have an Account?
              <a
                href="#"
                style={{ color: "blue", textDecoration: "underline" }}
              >
                Register
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
