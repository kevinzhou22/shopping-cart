import React from 'react';
import { Link, useParams } from 'react-router-dom';
import items from '../items';
import '../css/item-page.css';
import shoppingCart from '../shoppingCart';

const useIndividualItemDetails = function useIndividualItemDetails(id) {
  // get item details
  const individualItemDetails = items.getItemDetails(id);
  // return relevant information
  const {
    title,
    price,
    largeImageUrl,
  } = individualItemDetails;
  const relevantIndividualItemDetails = {
    id,
    title,
    price,
    largeImageUrl,
  };
  return relevantIndividualItemDetails;
};

function ItemPage() {
  const { id } = useParams();
  const {
    title,
    price,
    largeImageUrl,
  } = useIndividualItemDetails(Number(id));

  const handleAddItemToCartButtonClick = function handleAddItemToCartButtonClick() {
    shoppingCart.incrementItem(Number(id));
  };

  return (
    <div className="item-page">
      <img src={largeImageUrl} alt={title} />
      <div className="item-details">
        <h3>{title}</h3>
        <div className="item-page-price">
          {`$${price}`}
        </div>
        <button
          type="button"
          onClick={handleAddItemToCartButtonClick}
          className="add-to-cart"
        >
          Add to Cart
        </button>
        <Link to="/supplies">
          <i className="fas fa-chevron-left" />
          <span>Back to Supplies</span>
        </Link>
      </div>
    </div>
  );
}

export default ItemPage;
