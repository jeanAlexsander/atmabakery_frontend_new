import React, { useRef } from "react";
import AdminSideBar from "../component/side_navbar_admin";
import { URL } from "../../../../constants";

const ChangePasswordAdminNew = () => {
  const newPasswordRef = useRef();
  const confirmNewPasswordRef = useRef();

  const saveChangePassword = async (password, confirmPassword) => {
    const email = localStorage.getItem("email");
    const data = {
      email: email,
      password_hash: password,
    };
    try {
      await fetch(URL + "action-change-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangePassword = async () => {
    const newPassword = newPasswordRef.current.value;
    const confirmNewPassword = confirmNewPasswordRef.current.value;
    await saveChangePassword(newPassword, confirmNewPassword);
    newPasswordRef.current.value = "";
    confirmNewPasswordRef.current.value = "";
  };
  return (
    <div style={{ display: "flex" }}>
      <AdminSideBar />
      <div className="accountsettings" style={{ padding: "20px" }}>
        <h1 className="mainhead1">Change Password</h1>

        <div>
          <div>
            <label htmlFor="oldpass">
              New Password <span>*</span>
            </label>
            <input type="password" ref={newPasswordRef} />
          </div>

          <div>
            <label htmlFor="newpass">
              Confirm New Password <span>*</span>
            </label>
            <input type="password" ref={confirmNewPasswordRef} />
          </div>
        </div>

        <button className="mainbutton1" onClick={handleChangePassword}>
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default ChangePasswordAdminNew;
