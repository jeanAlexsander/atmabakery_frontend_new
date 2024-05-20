import React from 'react'
import Footer2 from '../../pages/COMPONENTS/Footer/Footer2'
import Navbar from '../../pages/COMPONENTS/Navbar/Navbar'
import DrinkPageProduct from './DrinkPageProduct'

function DrinkPage() {

  return (
    <div>
        <Navbar reloadnavbar={false}/>
        <DrinkPageProduct/>
        <Footer2/>
    </div>
  )
}

export default DrinkPage;
