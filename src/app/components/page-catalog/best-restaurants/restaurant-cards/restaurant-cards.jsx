import React, {useEffect, useState} from "react";
import Slider from "react-slick";
import "./restaurant-cards.scss";
import RestaurantCard from "../restaurant-card/restaurant-card";

const restaurantCards = [
  {
    id: 1,
    restaurantName: "Blaze Pizza",
    timetable: {
      open: "11:00",
      close: "22:00"
    },
    imageName: "blaze"
  },
  {
    id: 2,
    restaurantName: "Pizza Runcho",
    timetable: {
      open: "12:00",
      close: "21:00"
    },
    imageName: "runcho"
  },
  {
    id: 3,
    restaurantName: "Pizza Hut",
    timetable: {
      open: "11:00",
      close: "22:00"
    },
    imageName: "hut"
  },
  {
    id: 4,
    restaurantName: "McDonald`s",
    timetable: {
      open: "06:00",
      close: "23:00"
    },
    imageName: "mcdonalds"
  },
  {
    id: 5,
    restaurantName: "KFC",
    timetable: {
      open: "06:00",
      close: "23:30"
    },
    imageName: "kfc"
  },
  {
    id: 6,
    restaurantName: "Star Burgers",
    timetable: {
      open: "09:00",
      close: "21:00"
    },
    imageName: "star-burgers"
  }
];

const RestaurantCards = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    window.addEventListener('load', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('load', handleResize);
    };
  }, []);

  if (screenWidth > 400) {
    return <ul className="restaurant-cards__items slider">
      {restaurantCards.map(card => <li key={card.id} className="restaurant-cards__item">
        <RestaurantCard {...card} />
      </li>)}
    </ul>;
  }
  const settings = {//https://www.npmjs.com/package/react-slick
    arrows: false,
    dots: false,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    className: "restaurant-cards__items"
  };
  return <Slider {...settings}>
    {restaurantCards.map(card => <div key={card.id} className="restaurant-cards__item">
      <RestaurantCard {...card} />
    </div>)}
  </Slider>;
}

export default RestaurantCards;