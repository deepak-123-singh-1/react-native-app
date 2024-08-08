// views/AddItem.js
import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { addItem } from '../controllers/itemController';

const AddItem = ({ navigation }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleAddItem = () => {
    addItem(name, description);
    navigation.goBack();
  };

  return (
    <View>
      <TextInput placeholder="Name" value={name} onChangeText={setName} />
      <TextInput placeholder="Description" value={description} onChangeText={setDescription} />
      <Button title="Add Item" onPress={handleAddItem} />
    </View>
  );
};

export default AddItem;
