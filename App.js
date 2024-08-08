import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert, Image, ImageBackground, FlatList } from 'react-native';

export default function App() {
  const [counting, setCounting] = useState(0);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const clickCounter = (btnType) => {
    if (btnType=="increase"){
      setCounting(counting+1)
    } else if (btnType=="decrease"){
      if (counting>0) {
        setCounting(counting-1);
      }
    }
  };
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    try {
      const response = await fetch('https://dummyjson.com/products');
      const jsonData = await response.json();
      setData(jsonData.products);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      Alert.alert('Data not available');
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Text style={styles.headText}>Deepak Kumar</Text>
      </View>
      <Text style={styles.count}>{counting}</Text>
      <View style={styles.fixToText}>
        <Button
          title="Decrease"
          onPress={ (e) => clickCounter("decrease") }
        />
        <Button
          title="Increase"
          color="#f194ff"
          onPress={ (e) => clickCounter("increase") }
        />
      </View>

      <FlatList
        data={data}
        renderItem={
          ({ item }) => (
            <View style={styles.item}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.price}>{item.price}</Text>
            </View>
          )
        }
        keyExtractor={(item) => item.id.toString()}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  head: {
    height: 80,
    marginTop:30,
    backgroundColor: "silver",
    borderColor: "red",
    borderBottomWidth:1,
  },
  headText: {
    color: "green",
    fontSize: 20,
    textAlign:"center",
  },
  count: {
    marginTop: 30,
    fontSize:30,
    fontWeight:"bold",
    textAlign:"center",
  },
  fixToText: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  item: {
    backgroundColor: '#f9c2ff',
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 10, 
    borderBottomWidth: 2, 
    borderBottomColor: 'gray'
  },
  title: {
    fontSize: 24,
  },
  price: {
    fontSize: 18,
    color: 'green',
  },
});
