// views/ItemList.js
import React from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getItems } from '../controllers/itemController';

const ItemList = () => {
  const navigation = useNavigation();
  const items = getItems();

  return (
    <View>
      <FlatList
        data={items}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
            <Button title="View" onPress={() => navigation.navigate('ItemDetail', { id: item.id })} />
            <Button title="Edit" onPress={() => navigation.navigate('EditItem', { id: item.id })} />
            <Button title="Delete" onPress={() => { deleteItem(item.id); /* Refresh list */ }} />
          </View>
        )}
      />
    </View>
  );
};

export default ItemList;
