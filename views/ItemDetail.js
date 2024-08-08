// views/ItemDetail.js
import React from 'react';
import { View, Text } from 'react-native';
import { getItem } from '../controllers/itemController';

const ItemDetail = ({ route }) => {
  const { id } = route.params;
  const item = getItem(id);

  return (
    <View>
      <Text>{item.name}</Text>
      <Text>{item.description}</Text>
    </View>
  );
};

export default ItemDetail;
