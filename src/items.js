// import all the images needed for items
import ClothMasksLargeImage from './images/cloth-masks-large.jpg';
import ClothMasksSmallImage from './images/cloth-masks-small.jpg';
import GlovesLargeImage from './images/gloves-large.jpg';
import GlovesSmallImage from './images/gloves-small.jpg';
import HandSanitizerLargeImage from './images/hand-sanitizer-large.jpg';
import HandSanitizerSmallImage from './images/hand-sanitizer-small.jpg';
import DisinfectingWipesLargeImage from './images/disinfecting-wipes-large.jpg';
import DisinfectingWipesSmallImage from './images/disinfecting-wipes-small.jpg';
import ToiletPaperLargeImage from './images/toilet-paper-large.jpg';
import ToiletPaperSmallImage from './images/toilet-paper-small.jpg';
import N95MasksLargeImage from './images/n95-masks-large.jpg';
import N95MasksSmallImage from './images/n95-masks-small.jpg';
import HandWashLargeImage from './images/hand-wash-large.jpg';
import HandWashSmallImage from './images/hand-wash-small.jpg';
import FaceShieldLargeImage from './images/face-shield-large.jpg';
import FaceShieldSmallImage from './images/face-shield-small.jpg';

class Item {
  constructor(id, title, price, smallImageUrl, largeImageUrl) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.smallImageUrl = smallImageUrl;
    this.largeImageUrl = largeImageUrl;
  }
}

const itemsList = [];

let latestId = 0;
const addNewItem = function addNewItem(title, price, smallImageUrl, largeImageUrl) {
  itemsList.push(
    new Item(latestId, title, price, smallImageUrl, largeImageUrl),
  );
  latestId += 1;
};

const getItemDetails = function getItemDetails(id) {
  let requestedItem = null;
  itemsList.forEach((item) => {
    if (item.id === id) {
      requestedItem = { ...item };
    }
  });
  return requestedItem;
};

const getAllItemDetails = function getAllItemDetails() {
  const copiedItemsList = [];
  itemsList.forEach((item) => {
    copiedItemsList.push({ ...item });
  });
  return copiedItemsList;
};

addNewItem('Cloth Masks', 30, ClothMasksSmallImage, ClothMasksLargeImage);
addNewItem('Gloves', 10, GlovesSmallImage, GlovesLargeImage);
addNewItem('Hand Sanitizer', 15, HandSanitizerSmallImage, HandSanitizerLargeImage);
addNewItem('Disinfecting Wipes', 15, DisinfectingWipesSmallImage, DisinfectingWipesLargeImage);
addNewItem('Toilet Paper', 500, ToiletPaperSmallImage, ToiletPaperLargeImage);
addNewItem('N95 Masks', 200, N95MasksSmallImage, N95MasksLargeImage);
addNewItem('Hand Wash', 20, HandWashSmallImage, HandWashLargeImage);
addNewItem('Face Shield', 40, FaceShieldSmallImage, FaceShieldLargeImage);

const items = {
  getItemDetails,
  getAllItemDetails,
};

export default items;
