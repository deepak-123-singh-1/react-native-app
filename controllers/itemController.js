// controllers/itemController.js
import Item from '../models/Item';

let items = [];

export const addItem = (name, description) => {
  const newItem = new Item(Date.now().toString(), name, description);
  items.push(newItem);
  return newItem;
};

export const getItems = () => {
  return items;
};

export const getItem = (id) => {
  return items.find(item => item.id === id);
};

export const updateItem = (id, name, description) => {
  const itemIndex = items.findIndex(item => item.id === id);
  if (itemIndex !== -1) {
    items[itemIndex].name = name;
    items[itemIndex].description = description;
    return items[itemIndex];
  }
  return null;
};

export const deleteItem = (id) => {
  items = items.filter(item => item.id !== id);
};
