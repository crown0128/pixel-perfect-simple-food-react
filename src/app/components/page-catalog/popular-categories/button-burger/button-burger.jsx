import React, {useEffect, useRef} from "react";
import "./button-burger.scss";

const ButtonBurger = ({burgerName, imageName}) => {
  const ref = useRef();

  useEffect(() => {
    (async () => ref.current.src = (await import((`../../../../images/icons/${imageName}.svg`))).default)();
  }, []);

  return <button className="button-burger" type="button">
    <img className="button-burger__img" ref={ref} alt={imageName} />
    <span>{burgerName}</span>
  </button>;
}

export default ButtonBurger;