/* eslint-disable */
import React from 'react';

function CartItem(props) {
  const { title, price, quantity, image } = props;

  const handleQuantityChange = function handleQuantityChange(event) {
    const { value } = event.target;
    const numberValue = Number(value);
    if (numberValue !== NaN) {
      props.onQuantityChange(numberValue);
    }
  };

  const handleQuantityIncrement = function handleQuantityIncrement(event) {
    props.onQuantityIncrement();
  };

  const handleQuantityDecrement = function handleQuantityDecrement(event) {
    props.onQuantityDecrement();
  };

  return (
    <div className="cart-item">
      <img src={image} alt="" />
      <div className="item-details">
        <div className="row-1">
          <h4>{title}</h4>
          <div className="price">{`$${price}`}</div>
        </div>
        <div className="quantity-container">
          <button onClick={handleQuantityDecrement} type="button" className="decrement">−</button>
          <input onChange={handleQuantityChange} className="quantity" value={quantity} type="tel" />
          <button onClick={handleQuantityIncrement} type="button" className="increment">+</button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
