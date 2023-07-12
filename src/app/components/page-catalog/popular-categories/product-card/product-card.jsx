import React, {useEffect, useRef} from "react";
import "./product-card.scss";

const ProductCard = ({description, imageName, price}) => {
  const ref = useRef();

  useEffect(() => {
    (async () => ref.current.src = (await import((`../../../../images/${imageName}.png`))).default)();
  }, [imageName]);

  return <article className="product-card">
    <img className="product-card__img picture" ref={ref}
      alt={description} width="140" height="140" />
    <span className="product-card__name">{description}</span>
    <span className="product-card__price">{price} <span className="currency">грн.</span></span>
    <button className="button product-card__button" type="button">В корзину</button>
  </article>;
}

export default ProductCard;