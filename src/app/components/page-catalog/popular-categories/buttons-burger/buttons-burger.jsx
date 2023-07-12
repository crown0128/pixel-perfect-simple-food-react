import React from "react";
import "./buttons-burger.scss"
import ButtonBurger from "../button-burger/button-burger";

const burgerButtons = [ //todo замокать
  {
    id: 1,
    burgerName: "Бургеры",
    imageName: "burger"
  },
  {
    id: 2,
    burgerName: "Пицца",
    imageName: "pizza"
  },
  {
    id: 3,
    burgerName: "Сендвичи",
    imageName: "sandwich"
  },
  {
    id: 4,
    burgerName: "Азиатская кухня",
    imageName: "asia"
  },
  {
    id: 5,
    burgerName: "Сеты",
    imageName: "set"
  }
];

const ButtonsBurger = () => {
  return <ul className="buttons-burger">
    {burgerButtons.map(burger => <li key={burger.id}>
      <ButtonBurger {...burger} />
    </li>)}
  </ul>;
}

export default ButtonsBurger;