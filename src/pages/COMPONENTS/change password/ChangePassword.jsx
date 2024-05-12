import React, { useRef } from "react";
import { URL } from "../../../../constants";
const ChangePasswordCustomer = () => {
  var currentUrl = window.location.href;

  var currentUrl = window.location.href;

  var urlParts = currentUrl.split("/");
  var email = urlParts[urlParts.length - 1];

  const passRef = useRef(null);

  console.log(email);

  const handleChangepassword = async () => {
    console.log(`${URL}action-change-password`);
    async function send() {
      const response = await fetch(`${URL}action-change-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password_hash: passRef.current.value,
        }),
      });
      const data = await response.json();
    }

    async function sending() {
      try {
        await send();
      } catch (err) {
        console.log(err);
      }
    }
    sending();
  };

  return (
    <>
      <div className="accountsettings">
        <h1 className="mainhead1">Change Password</h1>

        <div className="form">
          <div className="form-group">
            <label htmlFor="oldpass">
              New Passworxd Password <span>*</span>
            </label>
            <input type="password" ref={passRef} />
          </div>

          <div className="form-group">
            <label htmlFor="newpass">
              Confirm New Password <span>*</span>
            </label>
            <input type="password" />
          </div>
        </div>

        <button className="mainbutton1" onClick={handleChangepassword}>
          Save Changes
        </button>
      </div>
    </>
  );
};

export default ChangePasswordCustomer;
