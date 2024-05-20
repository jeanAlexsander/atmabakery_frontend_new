import React from 'react'
import Footer2 from '../../pages/COMPONENTS/Footer/Footer2'
import Navbar from '../../pages/COMPONENTS/Navbar/Navbar'
import ConsignmentProduct from './ConsignmentProduct'

const ConsignmentPage = () => {

  const products = [
   
]
  return (
    <div>
      <Navbar reloadnavbar={false}/>
      <ConsignmentProduct/>
      <Footer2 />
    </div>
  )
}

export default ConsignmentPage;
