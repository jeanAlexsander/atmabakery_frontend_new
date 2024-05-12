import React from "react";
import AdminSideBar from "../component/side_navbar_admin";

const ChangePasswordAdminNew = () => {
  return (
    <div style={{ display: "flex" }}>
      <AdminSideBar />
      <div className="accountsettings">
        <h1 className="mainhead1">Change Password</h1>

        <div className="form">
          <div className="form-group">
            <label htmlFor="oldpass">
              New Password <span>*</span>
            </label>
            <input type="password" />
          </div>

          <div className="form-group">
            <label htmlFor="newpass">
              Confirm New Password <span>*</span>
            </label>
            <input type="password" />
          </div>
        </div>

        <button className="mainbutton1">Save Changes</button>
      </div>
    </div>
  );
};

export default ChangePasswordAdminNew;
