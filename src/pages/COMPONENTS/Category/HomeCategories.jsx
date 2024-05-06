import React from 'react'
import './HomeCategories.css'
import cake1 from '../../IMAGES/cake1.png'
import cake2 from '../../IMAGES/cake2.png'
import cake3 from '../../IMAGES/cake3.png'
import cake4 from '../../IMAGES/cake4.png'

const HomeCategories = () => {
  return (
    <div className='homecategories'>
      <div className='container'>
        <img src={cake1} alt='cake1' />
       <h2>Best Seller Product</h2>
      </div>
      <div className='container'>
        <img src={cake2} alt="cake2" />
        <h2>Newest Product</h2>
      </div>
      <div className='container'>
        <img src={cake3} alt='img3' />
          <h2>Promo Products</h2>
      </div>
    </div>
  )
}

export default HomeCategories