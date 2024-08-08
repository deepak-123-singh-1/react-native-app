// views/HomeScreen.js
import React from 'react';
import { View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Button title="Add Item" onPress={() => navigation.navigate('AddItem')} />
      <Button title="Item List" onPress={() => navigation.navigate('ItemList')} />
    </View>
  );
};

export default HomeScreen;
