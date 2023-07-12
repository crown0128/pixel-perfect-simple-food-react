import React from "react";
import "./popular-categories.scss";
import cheese from "../../../images/cheese.png";
import beef from "../../../images/beef.png";
import queen from "../../../images/queen.png";
import black from "../../../images/black.png";
import chicken from "../../../images/chicken.png";
import ButtonsBurger from "./buttons-burger/buttons-burger";

const PopularCategories = () =>  {
  return <section className="popular-categories section"  id="popular-categories">
    <div className="container">
      <h2 className="section__header center">Популярные категории </h2>
      <ButtonsBurger/>

      <ul className="popular-categories__content">
        <li className="mix burger">
          <article className="product-card">
            <img className="product-card__img picture" src={cheese}
              alt="Чизбургер с листьями салата" width="140" height="140"/>
              <span className="product-card__name">Чизбургер с листьями салата</span>
              <span className="product-card__price">160 <span className="currency">грн.</span></span>
              <button className="button product-card__button" type="button">В корзину</button>
          </article>
        </li>
        <li className="mix pizza">
          <article className="product-card">
            <img className="product-card__img picture" src={beef} alt="Бифбургер" width="140" height="140"/>
              <span className="product-card__name">Бифбургер</span>
              <span className="product-card__price">190 <span className="currency">грн.</span></span>
              <button className="button product-card__button" type="button">В корзину</button>
          </article>
        </li>
        <li className="mix sandwich">
          <article className="product-card">
            <img className="product-card__img picture" src={queen} alt="Королевский чизбургер" width="140"
              height="140"/>
              <span className="product-card__name">Королевский чизбургер</span>
              <span className="product-card__price">260 <span className="currency">грн.</span></span>
              <button className="button product-card__button" type="button">В корзину</button>
          </article>
        </li>
        <li className="mix asia">
          <article className="product-card">
            <img className="product-card__img picture" src={black} alt="Черный гамбургер" width="140"
              height="140"/>
              <span className="product-card__name">Черный гамбургер</span>
              <span className="product-card__price">199 <span className="currency">грн.</span></span>
              <button className="button product-card__button" type="button">В корзину</button>
          </article>
        </li>
        <li className="mix set">
          <article className="product-card">
            <img className="product-card__img picture" src={chicken} alt="Чикен бургер" width="140"
              height="140"/>
              <span className="product-card__name">Чикен бургер</span>
              <span className="product-card__price">180 <span className="currency">грн.</span></span>
              <button className="button product-card__button" type="button">В корзину</button>
          </article>
        </li>
        <li className="mix burger">
          <article className="product-card">
            <img className="product-card__img picture" src={cheese} alt="Чизбургер с листьями салата"
              width="140"              height="140"/>
              <span className="product-card__name">Чизбургер с листьями салата</span>
              <span className="product-card__price">160 <span className="currency">грн.</span></span>
              <button className="button product-card__button" type="button">В корзину</button>
          </article>
        </li>
        <li className="mix pizza">
          <article className="product-card">
            <img className="product-card__img picture" src={beef} alt="Бифбургер" width="140" height="140"/>
              <span className="product-card__name">Бифбургер</span>
              <span className="product-card__price">190 <span className="currency">грн.</span></span>
              <button className="button product-card__button" type="button">В корзину</button>
          </article>
        </li>
        <li className="mix sandwich">
          <article className="product-card">
            <img className="product-card__img picture" src={queen} alt="Королевский чизбургер" width="140"
              height="140"/>
              <span className="product-card__name">Королевский чизбургер</span>
              <span className="product-card__price">260 <span className="currency">грн.</span></span>
              <button className="button product-card__button" type="button">В корзину</button>
          </article>
        </li>
        <li className="mix asia">
          <article className="product-card">
            <img className="product-card__img picture" src={black} alt="Черный гамбургер" width="140"
              height="140"/>
              <span className="product-card__name">Черный гамбургер</span>
              <span className="product-card__price">199 <span className="currency">грн.</span></span>
              <button className="button product-card__button" type="button">В корзину</button>
          </article>
        </li>
        <li className="mix set">
          <article className="product-card">
            <img className="product-card__img picture" src={chicken} alt="Чикен бургер" width="140"
              height="140"/>
              <span className="product-card__name">Чикен бургер</span>
              <span className="product-card__price">180 <span className="currency">грн.</span></span>
              <button className="button product-card__button" type="button">В корзину</button>
          </article>
        </li>
      </ul>
      <a className="animation hyperlink" href="#">Показать ещё</a>
    </div>
  </section>;
}

export default PopularCategories;