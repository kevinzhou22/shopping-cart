/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';

function ItemDescription(props) {
  const {
    image,
    title,
    price,
    id,
  } = props;
  return (
    <div className="item-description">
      <Link to={`/supplies/${id}`}>
        <img src={image} alt={`${title}`} />
      </Link>
      <Link to={`/supplies/${id}`}>
        <h3>{title}</h3>
      </Link>
      <div className="item-description-price">{`$${price}`}</div>
    </div>
  );
}

export default ItemDescription;
