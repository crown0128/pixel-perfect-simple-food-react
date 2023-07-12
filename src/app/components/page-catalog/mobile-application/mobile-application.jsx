import React from "react";
import "./mobile-application.scss";
import appStore from "../../../images/app-store.jpg";
import googlePlay from "../../../images/google-play.jpg";
import app from "../../../images/app.jpg";

const MobileApplication = () => {
  return <section className="mobile-application section">
    <div className="container df-sb-aic">
      <div className="mobile-application__description">
        <h2 className="mobile-application__header">Скачайте мобильное приложение</h2>
        <p className="mobile-application__text">
          Рестораны, которые вы любите - в ваших руках. Устанавливайте приложение и заказывайте еду в любом удобном
          месте.
        </p>
        <ul className="mobile-application__list">
          <li className="mobile-application__item">
            <a href="https://apps.apple.com/" target="_blank">
              <img src={appStore} alt="App Store" width="120" height="40" />
            </a>
          </li>
          <li className="mobile-application__item">
            <a href="https://play.google.com/" target="_blank">
              <img src={googlePlay} alt="Google Play" width="135" height="40" />
            </a>
          </li>
        </ul>
      </div>
      <img className="mobile-application__img picture" src={app} alt="реклама мобильного приложения" />
    </div>
  </section>;
}

export default MobileApplication;
