import React from "react";
import Logo from "../../../public/img/logo.svg";
import Find from "../../../public/img/Header/find.svg";
import Profile from "../../../public/img/Header/profile.svg";
import Cart from "../../../public/img/Header/cart.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container">
        <nav className="d-flex justify-between align-center">
          <div>
            <a href="">
              <img src={Logo} width={170} height={30}></img>
            </a>
          </div>
          <div>
            <ul className="d-flex g-60">
              <li>АКЦИИ</li>
              <li>ГОРЯЧЕЕ</li>
              <li>ХОЛОДНОЕ</li>
              <li>СВЕЖАЯ ВЫПЕЧКА</li>
              <li>ДЕСЕРТЫ</li>
              <li>НАПИТКИ</li>
            </ul>
          </div>
          <div className="r-block d-flex">
            <a href="">
              <img src={Find} width={24} height={24}></img>
            </a>
            <a href="">
              <img src={Profile} width={24} height={24}></img>
            </a>
            <Link to="/cart">
              {" "}
              <img src={Cart} width={24} height={24}></img>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
