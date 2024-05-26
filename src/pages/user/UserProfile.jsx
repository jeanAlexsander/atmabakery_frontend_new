import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Footer1 from "../../pages/COMPONENTS/Footer/Footer1";
import Footer2 from "../../pages/COMPONENTS/Footer/Footer2";
import Navbar from "../../pages/COMPONENTS/Navbar/Navbar";
import SingleBanner from "../../pages/COMPONENTS/Banners/SingleBanner";
import UserSidebar from "../../pages/COMPONENTS/UserProfile/UserSidebar";
import AccountSettings from "../../pages/COMPONENTS/UserProfile/AccountSettings";
import "./UserProfile.css";
import ChangePassword from "../../pages/COMPONENTS/UserProfile/ChangePassword";
import YourOrders from "../../pages/COMPONENTS/UserProfile/YourOrders";
import UserAddress from "../../pages/COMPONENTS/UserProfile/UserAddress";
import LegalNotice from "../../pages/COMPONENTS/UserProfile/LegalNotice";
import { useSelector } from "react-redux";
import PaymentOrderView from "../COMPONENTS/payment order/payment_order_view";

const UserProfile = () => {
  const indexVal = useSelector((state) => state.userViewSlice.indexVal);

  const { activepage } = useParams();

  return (
    <div className="userprofile">
      <Navbar />

      <div className="userprofilein">
        <div className="left">
          <UserSidebar activepage={activepage} />
        </div>
        <div className="right">
          {indexVal === 1 && <AccountSettings />}
          {indexVal === 2 && <ChangePassword />}
          {indexVal === 3 && <YourOrders />}
          {indexVal === 4 && <UserAddress />}
          {indexVal === 5 && <LegalNotice />}
          {indexVal === 6 && <PaymentOrderView />}
        </div>
      </div>

      <Footer2 />
    </div>
  );
};

export default UserProfile;
