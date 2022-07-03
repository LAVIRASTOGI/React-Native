import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

function Login(props) {
  let [nameVal, setNameVal] = useState('');

  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    try {
      AsyncStorage.getItem('UserName').then(val => {
        if (val != null) {
          props.navigation.navigate('Home');
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  const setData = async () => {
    if (nameVal.length === 0) {
      Alert.alert('WARNING!', 'Please enter name of user');
    } else {
      try {
        await AsyncStorage.setItem('UserName', nameVal);
        props.navigation.navigate('Home');
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <View style={{backgroundColor: 'blue', flex: 1}}>
      <View style={styles.viewStyle}>
        <FontAwesome5 name="box" size={55} color="#f0f" />
        <Text style={styles.TextStyle}>Async Storage</Text>
      </View>
      <View style={styles.viewStyle}>
        <Text style={styles.TextStyle}>ENTER THE USER NAME TO LOGIN</Text>
        <TextInput
          placeholder="Enter Name"
          style={styles.TextInputStyle}
          value={nameVal}
          onChangeText={val => setNameVal(val)}></TextInput>
        <Pressable style={styles.ButtonStyle}>
          <Text
            style={{...styles.TextStyle, fontWeight: '700'}}
            onPress={setData}>
            LOGIN
          </Text>
        </Pressable>
      </View>
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

export default Login;
