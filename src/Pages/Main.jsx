import axios from "axios";
import React from "react";
import Card from "../Components/Card/Card";

const Main = () => {
  const [items, setItems] = React.useState([]);
  React.useEffect(() => {
    axios
      .get("https://65c3afef39055e7482c16929.mockapi.io/food")
      .then((res) => setItems(res.data));
  }, []);
  return (
    <div className="container">
      <div className="main-block">
        <div>
          <p className="main__title">
            Доставка готовой еды из фермерских продуктов!
          </p>
        </div>
        <div className="pos-block ellipse-1">
          <img src="../../public/img/ellipse-1.svg" alt="" />
        </div>
        <div className="main-block__num">
          <p>+7 (499) 841-67-29</p>
          <p className="">delivery@midas.rest</p>
        </div>
        <div className="main-right__block pos-block">
          <img src="../../public/img/main-img.jpg" alt="" />
          <div className="pos-block ellipse-2">
            <img
              className="pos-block"
              src="../../public/img/ellipse-2.svg"
              alt=""
            />
          </div>
          <div className="sale__card pos-block">
            <div className="pos-block sale__card-text">
              <h3>Стейк из лосося с овощами</h3>
            </div>
            <img src="../../public/img/main-bg.svg" alt="" />
          </div>
        </div>
      </div>
      <div>
        <div className="popular__title-block">
          <h1>Популярные блюда</h1>
        </div>
      </div>
      <div className="d-flex card-block justify-center flex-wrap">
        {items.map((obj) => (
          <Card
            title={obj.title}
            weight={obj.weight}
            subtitle={obj.subtitle}
            price={obj.price}
            oldPrice={obj.oldPrice}
            imageUrl={obj.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Main;
