import React from "react";
import "./popular-categories.scss";
import ButtonsBurger from "./buttons-burger/buttons-burger";
import ProductCards from "./product-cards/product-cards";

const PopularCategories = () => {
  return <section className="popular-categories section" id="popular-categories">
    <div className="container">
      <h2 className="section__header center">Популярные категории </h2>
      <ButtonsBurger />
      <ProductCards />
      <ProductCards />
      <a className="animation hyperlink" href="#">Показать ещё</a>
    </div>
  </section>;
}

export default PopularCategories;