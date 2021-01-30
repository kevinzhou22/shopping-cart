import React from 'react';
import ItemDescription from './ItemDescription';
import '../css/supplies-page.css';
import items from '../items';

const useItemDetails = function useItemDetails() {
  const allItemDetails = items.getAllItemDetails();
  const relevantItemDetails = [];
  allItemDetails.forEach((item) => {
    const {
      id,
      title,
      price,
      smallImageUrl,
    } = item;
    relevantItemDetails.push({
      id,
      title,
      price,
      smallImageUrl,
    });
  });
  return relevantItemDetails;
};

function SuppliesPage() {
  const itemDetails = useItemDetails();

  const itemDescriptions = itemDetails.map((item) => {
    const {
      id,
      title,
      price,
      smallImageUrl,
    } = item;
    return (
      <ItemDescription
        image={smallImageUrl}
        title={title}
        price={price}
        id={id}
        key={id}
      />
    );
  });

  return (
    <div className="supplies-page">
      <div className="items-container">
        {itemDescriptions}
      </div>
    </div>
  );
}

export default SuppliesPage;
