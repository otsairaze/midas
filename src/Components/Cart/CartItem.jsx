import React from "react";
import axios from "axios";

const CartItem = ({ imageUrl, id, removeCartItem }) => {
  return (
    <div>
      <div className="container">
        <div className="cart-wrapper">
          <img width={180} height={180} src={imageUrl} alt="" />
          <button onClick={() => removeCartItem(id)}>Удалить</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
