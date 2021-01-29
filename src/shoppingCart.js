import events from './events';
import items from './items';

const itemsList = [];

const EVENTS_EMITTED = {
  // no event data attached
  SHOPPING_CART_UPDATED: 'SHOPPING_CART_UPDATED',
};

class ShoppingCartItem {
  constructor(id, quantity) {
    this.quantity = quantity;
    const {
      title,
      price,
      smallImageUrl,
      largeImageUrl,
    } = items.getItemDetails(id);
    this.title = title;
    this.price = price;
    this.smallImageUrl = smallImageUrl;
    this.largeImageUrl = largeImageUrl;
    this.id = id;
  }

  getSubtotal() {
    return this.price * this.quantity;
  }
}

const getItemWithId = function getItemWithId(id) {
  let searchedItem = null;
  itemsList.forEach((item) => {
    if (item.id === id) {
      searchedItem = item;
    }
  });
  return searchedItem;
};

const isItemInShoppingCart = function isItemInShoppingCart(id) {
  let doesItemExist = false;
  itemsList.forEach((item) => {
    if (item.id === id) {
      doesItemExist = true;
    }
  });
  return doesItemExist;
};

const incrementItem = function incrementItem(id) {
  if (isItemInShoppingCart(id)) {
    const item = getItemWithId(id);
    item.quantity += 1;
  } else {
    itemsList.push(new ShoppingCartItem(id, 1));
  }
  events.emit(EVENTS_EMITTED.SHOPPING_CART_UPDATED, null);
};

const decrementItem = function decrementItem(id) {
  const item = getItemWithId(id);
  item.quantity -= 1;
  if (item.quantity === 0) {
    const index = itemsList.indexOf(item);
    itemsList.splice(index, 1);
  }
  events.emit(EVENTS_EMITTED.SHOPPING_CART_UPDATED, null);
};

// ignores any invocations when quantity < 0
const changeItemQuantity = function changeItemQuantity(id, quantity) {
  if (quantity === 0 && isItemInShoppingCart(id)) {
    const item = getItemWithId(id);
    const index = itemsList.indexOf(item);
    itemsList.splice(index, 1);
    events.emit(EVENTS_EMITTED.SHOPPING_CART_UPDATED, null);
  }

  if (quantity > 0) {
    if (isItemInShoppingCart(id)) {
      const item = getItemWithId(id);
      item.quantity = quantity;
    } else {
      itemsList.push(new ShoppingCartItem(id, quantity));
    }
    events.emit(EVENTS_EMITTED.SHOPPING_CART_UPDATED, null);
  }
};

const getTotalCost = function getTotalCost() {
  let sum = 0;
  itemsList.forEach((item) => {
    sum += item.getSubtotal();
  });
  return sum;
};

const getShoppingCartItems = function getShoppingCartItems() {
  const itemsListCopy = [];
  itemsList.forEach((item) => {
    itemsListCopy.push({ ...item });
  });
  return itemsListCopy;
};

const shoppingCart = {
  incrementItem,
  decrementItem,
  changeItemQuantity,
  getTotalCost,
  getShoppingCartItems,
};

export default shoppingCart;
