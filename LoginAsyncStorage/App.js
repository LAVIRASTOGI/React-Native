/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './components/screens/Login';
import Home from './components/screens/Home';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <View style={{flex:1}}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login"  component={Login} options={{header:()=>null}}/>
        <Stack.Screen name="Home">
          {props => <Home {...props} extraData="Lavi" />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
    </View>
  );
};

export default App;
