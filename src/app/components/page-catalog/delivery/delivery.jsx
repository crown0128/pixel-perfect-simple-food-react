import React from "react";
import "./delivery.scss"
import scooter from "../../../images/scooter-guy.png";

const Delivery =()=> {
return  <section className="delivery section">
    <h1 className="sr-only">Сервис доставки еды</h1>
    <div className="container df-sb-aic">
      <div className="delivery__promise">
        <h2 className="delivery__header">
          Доставка
          <span className="delivery__time">за 15 минут</span>
        </h2>
        <p className="delivery__description">Самый быстрый сервис доставки еды в вашем городе.
          Не уложимся в срок - доставка за наш счёт
        </p>
        <a className="delivery__button button" href="#">Заказать</a>
        <a className="animation hyperlink delivery__hyperlink" href="#">Подробнее</a>
      </div>
      <img className="delivery__img picture" src={scooter} alt="реклама доставки еды" />
    </div>
  </section>;
}

export default Delivery;