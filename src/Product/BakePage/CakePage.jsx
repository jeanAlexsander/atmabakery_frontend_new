import React from 'react'
import Footer2 from '../../pages/COMPONENTS/Footer/Footer2'
import Navbar from '../../pages/COMPONENTS/Navbar/Navbar'
import CakePageProduct from './CakePageProduct'

const CakePage = () => {

  const products = [
   
]
  return (
    <div>
      <Navbar reloadnavbar={false}/>
      <CakePageProduct/>
      <Footer2 />
    </div>
  )
}

export default CakePage;
