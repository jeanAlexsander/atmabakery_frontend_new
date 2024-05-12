import React, { useRef } from "react";
import "./Register.css";
import NavbarCustomer from "../navbar/navbarCustomer";
import "./Register.css";
import { URL } from "../../../constants";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { Toast, ToastBody, ToastContainer } from "react-bootstrap";

function Register() {
  const firstnameRef = useRef(null);
  const lastnameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();

  const handleSubmit = () => {
    const firstname = firstnameRef.current.value;
    const lastname = lastnameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    async function register() {
      await fetch(URL + "register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          first_name: firstname,
          last_name: lastname,
          email: email,
          password_hash: password,
        }),
      });
    }

    try {
      register();
      setTimeout(() => {
        navigate("/");
        firstnameRef.current.value = "";
        lastnameRef.current.value = "";
        emailRef.current.value = "";
        passwordRef.current.value = "";
      }, 3000);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="Register">
      <NavbarCustomer />
      <div className="wrapper">
        <div>
          <form action="">
            <h1>Register</h1>
            <div className="input-box">
              <input
                type="text"
                id="firstname"
                placeholder="First Name"
                ref={firstnameRef}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="input-box">
              <input
                type="text"
                id="lastname"
                placeholder="Last Name"
                ref={lastnameRef}
              />
            </div>

            <div className="input-box">
              <input
                type="text"
                id="email"
                placeholder="Email"
                ref={emailRef}
              />
            </div>

            <div className="input-box">
              <input
                type="text"
                id="password"
                placeholder="Password"
                ref={passwordRef}
              />
            </div>

            <button
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
