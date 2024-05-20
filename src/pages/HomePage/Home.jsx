import React from 'react'
import BannerSlider from '../../pages/COMPONENTS/Banners/BannerSlider'
import HomeCategories from '../../pages/COMPONENTS/Category/HomeCategories'
import Footer1 from '../../pages/COMPONENTS/Footer/Footer1'
import Footer2 from '../../pages/COMPONENTS/Footer/Footer2'
import Navbar from '../../pages/COMPONENTS/Navbar/Navbar'
import Product_Sidebar from '../../pages/COMPONENTS/Product/Product_Sidebar'
import img1 from '../../pages/IMAGES/1.png'
import img2 from '../../pages/IMAGES/2.png'
import img3 from '../../pages/IMAGES/3.png'
import img4 from '../../pages/IMAGES/4.png'
import ProductsSlider from '../../pages/COMPONENTS/Product/ProductsSlider'
import HomeCarousels from '../COMPONENTS/Carousels/HomeCarousels'
import ProductBest_Sidebar from '../COMPONENTS/Product/ProductBest_Sidebar'

const Home = () => {

  const products = [
   
]
  return (
    <div>
      <Navbar reloadnavbar={false}/>
      <div style={{width: "100%", display: "flex", justifyContent: "center", marginTop: "50px"}}>
        <div style={{maxWidth: "1200px", width: "100%"}}>
          <HomeCarousels />
        </div>
      </div>
      <ProductBest_Sidebar />
      <Product_Sidebar />
      <Footer2 />
    </div>
  )
}

export default Home;
