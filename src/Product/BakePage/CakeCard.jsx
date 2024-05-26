import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { toast } from 'react-toastify'
import "./CakeCard.css";

const CakeCard = ({ data }) => {
  const [show, setshow] = useState(false);
  const [count, setCount] = useState(1);

  // const getproductid = () => {
  //   alert(data.id)
  // }

  const addtocart = () => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    let productdata = data;
    if (cart) {
      // alert('1 item is already added to cart')
      let itemincart = cart.find(
        (item) => item.productdata.ProductId === productdata.ProductId
      );
      if (itemincart) {
        cart = cart.map((item) => {
          if (item.productdata.ProductId === productdata.ProductId) {
            return {
              ...item,
              quantity: item.quantity + count,
            };
          } else {
            return item;
          }
        });
        localStorage.setItem("cart", JSON.stringify(cart));
      } else {
        cart = [
          ...cart,
          {
            productdata,
            quantity: count,
          },
        ];
        localStorage.setItem("cart", JSON.stringify(cart));
      }
    } else {
      cart = [
        {
          productdata,
          quantity: count,
        },
      ];

      // console.log(cart)
      localStorage.setItem("cart", JSON.stringify(cart));
    }
    // setreloadnavbar(!reloadnavbar)
    window.location.reload();
    // toast.success('Item added to cart')
  };
  return (
    <div className="product">
      <div className="s1">
        <img src={data.ProductImage[0].image} alt={"no img"} />
      </div>
      <div className="s2">
        <h3>
          Rp.{" "}
          {data.ProductPrice - (data.ProductPrice * data.ProductDiscount) / 100}
          .000
          <span>Rp.{data.ProductPrice}.000</span>
        </h3>
        <p>{data.ProductName}</p>
      </div>
      <div className="s3">
        <p>{data.counttype}</p>
      </div>
    </div>
  );
};

export default CakeCard;
