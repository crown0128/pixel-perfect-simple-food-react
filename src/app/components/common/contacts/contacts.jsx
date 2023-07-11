import React from "react";
import "./contacts.scss";
import facebook from "../../../images/icons/facebook.svg";
import twitter from "../../../images/icons/twitter.svg";
import instagram from "../../../images/icons/instagram.svg";

const Contacts = () => {
  return <>
    <ul className="address">
      <li className="address__item">
        <a className="animation address__contact address__contact--address" href="#">ул. Т.Г.Шевченко, 1</a>
      </li>
      <li className="address__item">
        <a className="animation address__contact address__contact--phone"
          href="tel:+380501112233">380501112233</a>
      </li>
      <li className="address__item">
        <a className="animation address__contact address__contact--email"
          href="mailto:support@sfood.com">support@sfood.com</a>
      </li>
    </ul>

    <ul className="social-list">
      <li className="social-list__item">
        <a className="social-list__link" href="#" target="_blank">
          <span className="sr-only">facebook</span>
          <img className="social-list__img" src={facebook} alt="facebook" />
        </a>
      </li>
      <li className="social-list__item">
        <a className="social-list__link" href="#" target="_blank">
          <span className="sr-only">twitter</span>
          <img className="social-list__img" src={twitter} alt="twitter" />
        </a>
      </li>
      <li className="social-list__item">
        <a className="social-list__link" href="#" target="_blank">
          <span className="sr-only">instagram</span>
          <img className="social-list__img" src={instagram} alt="instagram" />
        </a>
      </li>
    </ul>
  </>;
}

export default Contacts;