// views/EditItem.js
import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { getItem, updateItem } from '../controllers/itemController';

const EditItem = ({ route, navigation }) => {
  const { id } = route.params;
  const item = getItem(id);
  const [name, setName] = useState(item.name);
  const [description, setDescription] = useState(item.description);

  const handleUpdateItem = () => {
    updateItem(id, name, description);
    navigation.goBack();
  };

  return (
    <View>
      <TextInput placeholder="Name" value={name} onChangeText={setName} />
      <TextInput placeholder="Description" value={description} onChangeText={setDescription} />
      <Button title="Update Item" onPress={handleUpdateItem} />
    </View>
  );
};

export default EditItem;
