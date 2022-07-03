import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {Button, Pressable, StyleSheet, Text, View} from 'react-native';

function Home(props) {
  let [name, setName] = useState();

  useEffect(()=>{
    getData()
  },[])
  const getData = () => {
    try {
      AsyncStorage.getItem('UserName').then(val => {
        if (val != null) {
          setName(val);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  const removeData= async()=>{
    await AsyncStorage.removeItem('UserName');
    props.navigation.navigate('Login');
  }
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{...styles.TextStyle, fontWeight: '700',color:'black'}}> Welcome {name}</Text>
      <Pressable onPress={removeData}style={styles.ButtonStyle}>
        <Text style={{...styles.TextStyle, fontWeight: '700'}}>LOGOUT</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  viewStyle: {
    alignItems: 'center',
    marginTop: 32,
    padding: 20,
  },
  TextStyle: {
    marginTop: 20,
    marginBottom: 20,
    fontSize: 30,
    color: '#fff',
  },
  TextInputStyle: {
    backgroundColor: '#fff',
    width: '80%',
    borderRadius: 10,
    padding: 20,
    fontSize: 20,
  },
  ButtonStyle: {
    margin: 20,
    backgroundColor: '#89eb34',
    width: '50%',
    borderRadius: 10,
    alignItems: 'center',
  },
});

export default Home;
