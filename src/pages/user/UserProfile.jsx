import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Footer1 from '../../pages/COMPONENTS/Footer/Footer1'
import Footer2 from '../../pages/COMPONENTS/Footer/Footer2'
import Navbar from '../../pages/COMPONENTS/Navbar/Navbar'
import SingleBanner from '../../pages/COMPONENTS/Banners/SingleBanner'
import UserSidebar from '../../pages/COMPONENTS/UserProfile/UserSidebar'
import AccountSettings from '../../pages/COMPONENTS/UserProfile/AccountSettings'
import './UserProfile.css'
import ChangePassword from '../../pages/COMPONENTS/UserProfile/ChangePassword'
import YourOrders from '../../pages/COMPONENTS/UserProfile/YourOrders'
import UserAddress from '../../pages/COMPONENTS/UserProfile/UserAddress'
import LegalNotice from '../../pages/COMPONENTS/UserProfile/LegalNotice'
import { useSelector } from 'react-redux'

const UserProfile = () => {
    
    const indexVal = useSelector((state) => state.userViewSlice.indexVal);

    const {activepage} = useParams()


  return (
    <div className='userprofile'>
        <Navbar/>
        <SingleBanner 
        heading={`My Profile`}
        bannerimage = 'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80' 
        />

         <div className='userprofilein'>
            <div className='left'>
              <UserSidebar activepage={activepage}/>
            </div>
            <div className='right'>
              {indexVal === 1 && <AccountSettings/>}
              {indexVal === 2 && <ChangePassword/>}
              {indexVal === 3 && <YourOrders/>}
              {indexVal === 4 && <UserAddress/>}
              {indexVal === 5 && <LegalNotice/>}
            </div>
            
         </div>

        <Footer2/>
        </div>
  )
}

export default UserProfile