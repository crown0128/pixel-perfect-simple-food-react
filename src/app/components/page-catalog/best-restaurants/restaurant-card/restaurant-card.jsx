import React, {useEffect, useRef} from "react";
import "./restaurant-card.scss";
import arrow from "../../../../images/icons/arrow.svg";

const RestaurantCard = ({restaurantName, timetable, imageName}) => {
  const ref = useRef();

  useEffect(() => {
    (async () => ref.current.src = (await import((`../../../../images/restaurants/${imageName}.jpg`))).default)();
  }, [imageName]);

  return <article className="restaurant-card">
    <img className="restaurant-card__img" ref={ref} alt={restaurantName} width="370" height="300" />
    <h3 className="restaurant-card__name">{restaurantName}</h3>
    <div className="restaurant-card__timetable">
      <div className="restaurant-card__timetable-time">
        <time title={timetable.open}>{timetable.open}</time>
        -
        <time title={timetable.close}>{timetable.close}</time>
      </div>
      <a className="restaurant-card__timetable-link" href="#">
        <img className="restaurant-card__timetable-img picture" src={arrow} alt="arrow" />
      </a>
    </div>
  </article>;
}

export default RestaurantCard;