import React, {useEffect, useState} from 'react';
import {Button, Text, TextInput, View} from 'react-native';

function Details(props) {
  let [nameVal, setnameVal] = useState('');
  if (props.route.params) {
    /* 2. Get the param */
    //var {itemId, name} = props.route.params;
  }
  useEffect(() => {
    if (props.route.params) {
      // params got do something with `route.params.ItemID or name
      // For example, send the Id to the server to get details
    }
  }, [props.route.params]);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <TextInput
        value={nameVal}
        onChangeText={value => setnameVal(value)}
        placeholder="Enter post"
        keyboardType="name-phone-pad"
      />
      <Button
        title="Go to Details again"
        // // if here u click back button it will go to back to home page as once added in stack it will not add
        // //other details ---  [Home,Deatails]
        onPress={() => props.navigation.navigate('DetailsPage')}

        //if u want to add deatils screen all time
        //[Home,Deatails,Deatails,Deatails..... and so on]
        //now when u click on back btn it will got to deatils like poop from stack
        // onPress={() => props.navigation.push('DetailsPage')}
      />

      {/* extract data */}
      <Text>{props.route?.params?.itemId}</Text>
      <Text>{props.route?.params?.name}</Text>

      {/* we can also send data back to home page or any screen */}
      <Button
        title="Go to Home with data"
        onPress={() =>
          props.navigation.navigate({
            name: 'Home',
            params: {post: nameVal},
            merge: true,
          })
        }
      />
    </View>
  );
}

export default Details;
