import React from "react";
import "./footer.scss"
import Contacts from "../common/contacts/contacts";
import logo from "../../images/icons/logo.svg";
import telegram from "../../images/icons/telegram.svg";
import packageJson from "../../../../package.json";

const Footer = () => {
  return <footer className="footer" id="contact">
    <div className="container">
      <div className="footer-top">
        <div className="footer-top__item">
          <a className="logo" href="#">
            <img className="logo__img picture" src={logo} alt="logo" width="200" height="39" />
          </a>
          <form className="form" action="#">
            <label className="sr-only" htmlFor="email"></label>
            <input className="form__input" id="email" name="email" type="email" placeholder="Ваш email" required />
            <button className="form__button button" type="submit">
              <img className="form__button-img" src={telegram} alt="telegram" />
              Подписаться
            </button>
          </form>
        </div>

        <ul className="footer-top__list">
          <li className="footer-top__list-item">
            <a className="animation footer-top__link" href="#">Как это работает</a>
          </li>
          <li className="footer-top__list-item">
            <a className="animation footer-top__link" href="#">Продукты</a>
          </li>
          <li className="footer-top__list-item">
            <a className="animation footer-top__link" href="#">Блюда</a>
          </li>
          <li className="footer-top__list-item">
            <a className="animation footer-top__link" href="#">Меню</a>
          </li>
          <li className="footer-top__list-item">
            <a className="animation footer-top__link" href="#">О нас</a>
          </li>
          <li className="footer-top__list-item">
            <a className="animation footer-top__link" href="#">Новости</a>
          </li>
          <li className="footer-top__list-item">
            <a className="animation footer-top__link" href="#">Партнеры</a>
          </li>
          <li className="footer-top__list-item">
            <a className="animation footer-top__link" href="#">ЧаВо</a>
          </li>
          <li className="footer-top__list-item">
            <a className="animation footer-top__link" href="#">Скачать приложение</a>
          </li>
          <li className="footer-top__list-item">
            <a className="animation footer-top__link" href="#">Блог</a>
          </li>
          <li className="footer-top__list-item">
            <a className="animation footer-top__link" href="#">Что нового?</a>
          </li>
          <li className="footer-top__list-item">
            <a className="animation footer-top__link" href="#">Карта сайта</a>
          </li>
        </ul>

        <div className="footer-top__item">
          <Contacts />
        </div>

      </div>
    </div>

    <div className="footer-bottom">
      <span className="footer-bottom__copy">© 2023 Simple Food</span>
      <span className="footer-bottom__version">{packageJson.version}</span>
    </div>

  </footer>;
}

export default Footer;