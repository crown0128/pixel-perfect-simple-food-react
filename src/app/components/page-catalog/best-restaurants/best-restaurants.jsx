import React from "react";
import "./best-restaurants.scss";
import RestaurantCards from "./restaurant-cards/restaurant-cards";

const BestRestaurants=()=>{
return <section className="best-restaurants section">
  <div className="container">
    <h2 className="section__header center">Лучшие рестораны</h2>
    <RestaurantCards/>
  </div>
</section>;
}

export default BestRestaurants;