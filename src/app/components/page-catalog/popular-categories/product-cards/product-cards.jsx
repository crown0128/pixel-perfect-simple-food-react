import React from "react";
import "./product-cards.scss"
import ProductCard from "../product-card/product-card";

const productCards = [
  {
    id: 1,
    description: "Чизбургер с листьями салата",
    imageName: "cheese",
    price: 160,
    category: "burger"
  },
  {
    id: 2,
    description: "Бифбургер",
    imageName: "beef",
    price: 190,
    category: "pizza"
  },
  {
    id: 3,
    description: "Королевский чизбургер",
    imageName: "queen",
    price: 260,
    category: "sandwich"
  },
  {
    id: 4,
    description: "Черный гамбургер",
    imageName: "black",
    price: 199,
    category: "asia"
  },
  {
    id: 5,
    description: "Чикен бургер",
    imageName: "chicken",
    price: 180,
    category: "set"
  },
];

const ProductCards = () => {
  return <ul className="product-cards">
    {productCards.map(card => <li key={card.id} className={`mix ${card.category}`}>
      <ProductCard {...card} />
    </li>)}
  </ul>;
}

export default ProductCards;