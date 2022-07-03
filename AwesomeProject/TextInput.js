import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import {styles} from './AppStyles';

function TextInput7() {
  const [name, setName] = useState('lala');
  const changeHandler = text => {
    setName(text);
  };
  const Blurdosomething = () => {
    setName('lAVI');
  };
  
  return (
    <View>
      <Text> Enter Name</Text>
      <TextInput
        value={name}
        style={styles.inputEle}
        onChangeText={changeHandler}
        placeholder="Enter name"
        keyboardType='name-phone-pad'
        maxLength={7}
        onBlur={Blurdosomething}
      />
      <Text>Name is {name}</Text>
    </View>
  );
}

export default TextInput7;
