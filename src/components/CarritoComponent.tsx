export const CarritoComponent = () => {
  
  return (
    <div>
      <button className="cart__button">Volver</button>
      <div className="cart__list">
        <div className="cart__list__item">
          <img src="" alt="pocionLogo"  className="cart__list__item__icon"></img>
          <p className="cart__list__item__name">HP 500</p>
          <button className="cart__list__item__del">X</button>
        </div>
      </div>
    <button className="cart__buy-button"></button>
    </div>
  );
};
