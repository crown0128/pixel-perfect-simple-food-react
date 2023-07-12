import React from "react";
import "./stay-home.scss";
import deliveryMan from "../../../images/food-delivery-man.png";

const StayHome = () => {
  return <section className="stay-home section">
    <div className="container df-sb-aic">
      <img className="stay-home__img picture" src={deliveryMan} alt="курьер передаёт доставленную еду" />
      <span className="sr-only">курьер передаёт доставленную еду</span>
      <div className="stay-home__text">
        <h2 className="section__header">
          Оставайтесь дома,<p>а мы позаботимся о еде</p>
        </h2>
        <p className="stay-home__promise">
          У нас есть вкусная еда и мы готовы доставить её к вам домой!
          Воспользуйтесь нашей доставкой прямо сейчас и получите скидку!
        </p>
        <ul className="stay-home__advantages">
          <li className="stay-home__advantages-item stay-home__advantages-item--quick">Быстрая доставка за 15 минут</li>
          <li className="stay-home__advantages-item stay-home__advantages-item--polite">Вежливые курьеры</li>
          <li className="stay-home__advantages-item stay-home__advantages-item--outlets">Более 500 заведений</li>
        </ul>
        <a className="button stay-home__button" href="#">Подробнее</a>
      </div>
    </div>
  </section>;
}

export default StayHome;