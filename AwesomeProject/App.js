/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {NavigationContainer} from '@react-navigation/native';
import React, {useState} from 'react';

import {
  Button,
  Image,
  Linking,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {styles} from './AppStyles';
import ImageExample from './ImageExample';
import ListArray from './ListArray';
import ModalExample from './ModalExample';
import TextInput7 from './TextInput';
import TouchPressable from './TouchPressable';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './components/Home';
import {ScreenStack} from 'react-native-screens';
import Details from './components/Details';
import TabNvigationExample from './components/TabNvigationExample';
const Stack = createNativeStackNavigator();

const App = () => {
  let [count, setCount] = useState(0);
  let [nameval, setnameval] = useState('clikced');

  const countHandler = e => {
    console.log(e.target._nativeTag);
    setCount(count + 1);
    setnameval(`changing ${count + 1} times`);
  };

  //we can also add out own component in the header
  function LogoTitle({name}) {
    return (
      <>
        <Image
          style={{width: 50, height: 50}}
          source={require('./assests/capture1.png')}
        />
        <Text>{name}</Text>
      </>
    );
  }

  const Section1 = () => {
    return (
      <>
        {/* automatically evrything will come below the bar */}
        <SafeAreaView>
          {/* vie wis like a div */}
          <View style={styles.body}>
            {/* text is like a html */}
            <Text style={styles.textContent} selectionColor={'yellow'}>
              Hello Counter {count}
            </Text>
            <Button title="Press Me" onPress={e => countHandler(e)} />
            {/* youtube channel go */}
            <Button
              title="Press Me youtube"
              onPress={() =>
                Linking.openURL(
                  'https://www.youtube.com/watch?v=1lg_IXtjles&t=384s&ab_channel=ProgrammingwithMash',
                )
              }
            />
            {/*  alone button hass no syle so we have to put in view or touchables*/}
            <View style={styles.button}>
              <Button
                title="Press Me styling with view not alone"
                onPress={() =>
                  Linking.openURL(
                    'https://www.youtube.com/watch?v=1lg_IXtjles&t=384s&ab_channel=ProgrammingwithMash',
                  )
                }
              />
            </View>
            <Home nameval={nameval} />
          </View>
        </SafeAreaView>
      </>
    );
  };
  return (
    <>
      {/* status bar is what you see on top  */}
      {/* <StatusBar barStyle="dark-content" /> */}

      {/*  start with view/text  1*/}
      {/* {Section1()}   */}

      {/* flat list and section list 2 */}
      {/* <ListArray/> */}

      {/* On text Input 3 */}
      {/* <TextInput7/> */}

      {/* On touchable opcaity / without feedback and highlight and pressable  4 */}
      {/* <TouchPressable /> */}

      {/* Modal  5*/}
      {/* <ModalExample/> */}

      {/* Image  and image background component 6 */}
      {/* <ImageExample/> */}

      {/* Navigation 7 */}
      {/* wrapt the whole app inside   <NavigationContainer>npm install @react-navigation/native-stack*/}
      <NavigationContainer>
        <Stack.Navigator
          ///* to remove HEDAER
          //screenOptions={{header:()=>null}}
          //render intial route
          // initialRouteName="DetailsPage"

          //styling header common we can style individula also by placing options in particular screen
          screenOptions={{
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}>
          {/* <Stack.Screen name='Home'
            // component={Home} 
            // wee can pass title to show in header
            options={{title:'Overview'}}
            /> */}
          {/* if we want to pass additonnal */}
          <Stack.Screen
            name="Home"
            //we can add our own component on headerTitle
            options={{
              headerTitle: props => <LogoTitle {...props} name="HomeScreen" />,
            }}>
            {props => <Home {...props} extraData="Lavi" />}
          </Stack.Screen>
          <Stack.Screen
            name="DetailsPage"
            component={Details}
            initialParams={{itemId: 42}}></Stack.Screen>

          <Stack.Screen
            name="TabNavigation"
            component={TabNvigationExample}
             ></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
