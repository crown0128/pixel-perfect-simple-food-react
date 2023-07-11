import React from "react";
import "./_menu-list.scss"

const MenuList = () => {
  // const menu =['Главная','Блюда', 'Контакты'];

    return <ul className="list">
        <li className="list__item">
            <a className="animation list__link list__link--active" href="#">Главная</a>
        </li>
        <li className="list__item">
            <a className="animation list__link" href="#popular-categories">Блюда</a>
        </li>
        <li className="list__item">
            <a className="animation list__link" href="#contact">Контакты</a>
        </li>
    </ul>;
}

export default MenuList;