import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Button, Text, View} from 'react-native';
import ContactScreen from './ContactScreen';
import SettingScreen from './SettingScreen';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();
function TabNvigationExample(props) {
  return (
    <>
      <Button
        title="Go to Home Page"
        onPress={() => props.navigation.navigate('Home')}
      />
      <Tab.Navigator
        // to display the tab
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, size, color}) => {
            let iconname;
            if (route.name == 'ContactTab') {
              iconname = 'address-book';
              size = focused ? 30 : 20;
              color = focused ? '#f0f' : '#555';
            } else if (route.name == 'SettingsTab') {
              iconname = 'bug';
              color = focused ? '#f0f' : '#555';
            }
            return <FontAwesome5 name={iconname} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#f0f',
          inactiveTintColor: '#555',
          activeBackgroundColor: '#fff',
          inactiveBackgroundColor: '#999',
        }}>
        <Tab.Screen
          name="ContactTab"
          component={ContactScreen}
          options={{tabBarBadge: 3, tabBarLabel: 'Contact'}}
        />
        <Tab.Screen
          name="SettingsTab"
          component={SettingScreen}
          options={{
            tabBarLabel: 'Settings',
          }}
        />
      </Tab.Navigator>
    </>
  );
}

export default TabNvigationExample;
