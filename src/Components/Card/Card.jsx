import React from "react";
import axios from "axios";

const Card = ({ title, weight, subtitle, price, oldPrice, imageUrl }) => {
  function fetchAddCart() {
    const obj = {
      id: 1,
      title: title,
      weight: weight,
      imageUrl: imageUrl,
      subtitle: subtitle,
      price: price,
    };
    axios.post("https://65c3afef39055e7482c16929.mockapi.io/cart", obj);
  }
  return (
    <div className="card">
      <div>
        <img src={imageUrl} alt="" />
        <p>{title}</p>
        <div className="card-weight">
          <p>{weight}</p>
        </div>
        <div className="card-info">
          <p>{subtitle}</p>
        </div>
        <div>
          <div className="card-cart d-flex align-center">
            <div>
              <p>{oldPrice}</p>
              <p>{price}</p>
            </div>
            <img
              onClick={fetchAddCart}
              src="../../public/img/cart.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
