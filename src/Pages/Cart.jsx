import React, { useState } from "react";
import Header from "../Components/Header/Header";
import CartItem from "../Components/Cart/CartItem";
import axios from "axios";
import { Link } from "react-router-dom";

const Cart = () => {
  const [items, setItems] = React.useState([]);
  function fetchCartItem() {
    axios
      .get("https://65c3afef39055e7482c16929.mockapi.io/cart")
      .then((res) => setItems(res.data));
  }
  React.useEffect(() => {
    fetchCartItem();
  }, []);
  const removeCartItem = async (id) => {
    await axios.delete(
      `https://65c3afef39055e7482c16929.mockapi.io/cart/${id}`
    );
    fetchCartItem();
  };

  return (
    <div>
      <div className="container">
        <Header />
        <div>
          <p className="cart-title">Корзина</p>
          <div>
            <p className="mb-40">
              <Link to="/">Главная</Link> / Корзина
            </p>
          </div>
        </div>
        <div className="d-flex cart-info justify-between">
          <div>
            <p>Блюдо:</p>
          </div>
          <div className="d-flex cart-info__list">
            <p>Цена:</p>
            <p>Кол-во:</p>
            <p>Сумма:</p>
          </div>
        </div>
        {items.map((obj) => (
          <CartItem
            imageUrl={obj.imageUrl}
            id={obj.id}
            removeCartItem={(id) => removeCartItem(id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Cart;
