import React from "react";

import "./Cart.css";

const Cart = () => {
  return (
    <>
      <div className="cart_container">
        <div className="empty_cart_text">
          <div className="empty_cart_heading">
            <h1>Shopping Venture</h1>
          </div>
          <div className="empty_cart_para">
            <p>Your Shopping Cart is currently empty</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
