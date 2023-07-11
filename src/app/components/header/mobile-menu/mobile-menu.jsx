import React from "react";
import "./mobile-menu.scss"
import MenuList from "../menu-list/menu-list";
import logo from "../../../images/icons/logo.svg"
import close from "../../../images/icons/close.svg"
import Contacts from "../../common/contacts/contacts";

const MobileMenu = () => {

  return <aside className="mobile-menu">
    <header className="mobile-menu__header">
      <a className="logo" href="#">
        <img className="logo__img picture" src={logo} alt="logo" width="200" height="39" />
      </a>
      <button className="mobile-menu__button" type="button">
        <img className="mobile-menu__img" src={close} alt="кнопка закрыть" />
      </button>
    </header>
    <hr className="mobile-menu__hr"></hr>
    <MenuList />
    <hr className="mobile-menu__hr"></hr>
    <Contacts/>
  </aside>;
}

export default MobileMenu;