import React from "react";
import Footer2 from "../../pages/COMPONENTS/Footer/Footer2";
import Navbar from "../../pages/COMPONENTS/Navbar/Navbar";
import Product_Sidebar from "../../pages/COMPONENTS/Product/Product_Sidebar";
import HomeCarousels from "../COMPONENTS/Carousels/HomeCarousels";
import ProductBest_Sidebar from "../COMPONENTS/Product/ProductBest_Sidebar";

const Home = () => {
  return (
    <div>
      <Navbar reloadnavbar={false} />
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: "50px",
        }}
      >
        <div style={{ maxWidth: "1200px", width: "100%" }}>
          <HomeCarousels />
        </div>
      </div>
      <ProductBest_Sidebar />
      <Product_Sidebar />
      <Footer2 />
    </div>
  );
};

export default Home;
