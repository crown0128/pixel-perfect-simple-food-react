import React, {useEffect, useRef} from "react";
import "./button-burger.scss";

const ButtonBurger = ({burgerName, imageName}) => {
  const ref = useRef();

  useEffect(() => {
    (async () => ref.current.src = (await import((`../../../../images/icons/${imageName}.svg`))).default)();
  }, [imageName]);


  const filterName = imageName === "burger" ? "all" : `.${imageName}`;

  return <button className="button-burger" type="button" data-filter={filterName} >
    <img className="button-burger__img" ref={ref} alt={imageName} />
    <span>{burgerName}</span>
  </button>;
}

export default ButtonBurger;