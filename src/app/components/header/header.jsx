import React, {useEffect} from "react";
import "./header.scss";
import logo from "../../images/icons/logo.svg";
import search from "../../images/icons/search.svg";
import cart from "../../images/icons/cart.svg"
import MenuList from "./menu-list/menu-list";

const Header = () => {
  useEffect(()=>{
    document.addEventListener('click', e => {
      const mobileMenu = document.querySelector('.mobile-menu');
      const burger = document.querySelector('.burger-button');
      if (e.target !== burger && e.target !== mobileMenu) {
        mobileMenu.classList.remove('active');
        const bodyLock = document.querySelector('body');
        bodyLock.classList.remove('lock');
      }
    })
  },[]);

  const handleClick = () => {
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.classList.toggle('active');
    if (mobileMenu.classList.contains('active')) {
      const bodyLock = document.querySelector('body');
      bodyLock.classList.add('lock')
    }
  }

  return <header className="header">
    <div className="container">
      <nav className="menu">
        <a className="logo" href="#">
          <img className="logo__img picture" src={logo} alt="logo" width="200" height="39">
          </img>
        </a>

        <div className="menu-right">
          <div className="menu-list-show">
            <MenuList />
          </div>
          <ul className="user-nav">
            <li className="user-nav__item">
              <a className="user-nav__link" href="#">
                <span className="sr-only"> поиск товара на странице</span>
                <img className="user-nav__link-img" src={search} alt="" />
              </a>
            </li>
            <li className="user-nav__item">
              <a className="user-nav__link" href="#">
                <span className="sr-only"> перейти к выбранным товарам</span>
                <img className="user-nav__link-img" src={cart} alt="" />
                <span className="user-nav__num">4</span>
              </a>
            </li>
          </ul>

          <button className="burger-button" type="button" onClick={handleClick}>
            <span className="burger-button__line"></span>
            <span className="sr-only">Открыть меню</span>
          </button>

        </div>
      </nav>
    </div>
  </header>;
}

export default Header;