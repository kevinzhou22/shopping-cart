import React, { useEffect, useState } from 'react';
import CartItem from './CartItem';
import events from '../events';
import shoppingCart from '../shoppingCart';
import '../css/cart-page.css';

const useShoppingCart = function useShoppingCart() {
  const [items, setItems] = useState([]);
  const [totalCost, setTotalCost] = useState(0);

  const updateCart = function updateCart() {
    setItems(shoppingCart.getShoppingCartItems());
    setTotalCost(shoppingCart.getTotalCost());
  };
  useEffect(() => {
    updateCart();
  }, []);

  const {
    incrementItem,
    decrementItem,
    changeItemQuantity,
  } = shoppingCart;

  events.on('SHOPPING_CART_UPDATED', () => {
    updateCart();
  });

  return {
    items,
    totalCost,
    incrementItem,
    decrementItem,
    changeItemQuantity,
  };
};

function CartPage() {
  const {
    items,
    totalCost,
    incrementItem,
    decrementItem,
    changeItemQuantity,
  } = useShoppingCart();

  const handleIncrement = function handleIncrement(id) {
    incrementItem(id);
  };

  const handleDecrement = function handleDecrement(id) {
    decrementItem(id);
  };

  const handleQuantityChange = function handleQuantityChange(id, value) {
    changeItemQuantity(id, value);
  };

  const handleCheckoutClick = function handleCheckoutClick() {
    alert('Thank you for shopping!');
  };

  const displayedCartItems = items.map((item) => {
    const {
      id,
      title,
      price,
      quantity,
      smallImageUrl,
    } = item;

    return (
      <CartItem
        title={title}
        price={price}
        quantity={quantity}
        image={smallImageUrl}
        onQuantityChange={(value) => handleQuantityChange(id, value)}
        onQuantityIncrement={() => handleIncrement(id)}
        onQuantityDecrement={() => handleDecrement(id)}
        key={id}
      />
    );
  });

  return (
    <div className="cart-page">
      <h3>Your Shopping Cart</h3>
      <div className="page-items">
        <div className="items-container">
          {displayedCartItems}
        </div>
        <div className="subtotal">
          <span>Subtotal: </span>
          <span className="subtotal-figure">{`$${totalCost}`}</span>
        </div>
        <button onClick={handleCheckoutClick} type="button" className="checkout">CHECKOUT</button>
      </div>
    </div>
  );
}

export default CartPage;
