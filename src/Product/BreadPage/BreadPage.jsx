import React from 'react'
import Footer2 from '../../pages/COMPONENTS/Footer/Footer2'
import Navbar from '../../pages/COMPONENTS/Navbar/Navbar'
import BreadPageProduct from './BreadPageProduct'

const BreadPage = () => {

  const products = [
   
]
  return (
    <div>
      <Navbar reloadnavbar={false}/>
      <BreadPageProduct/>
      <Footer2 />
    </div>
  )
}

export default BreadPage;
