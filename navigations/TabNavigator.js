import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import TabNavigatorComponent from './TabNavigatorComponent';
import HomeScreen from '../screens/HomeScreen';
import GoOut from '../screens/GoOut';
import ProScreen from '../screens/ProScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          return (
            <TabNavigatorComponent
              name={route.name}
              color={color}
              size={size}
              focused={focused}
            />
          );
        },
      })}
      tabBarOptions={{
        showLabel: false,
        activeTintColor: 'blue',
        inactiveTintColor: 'white',
        tabStyle: {},
        style: {
          backgroundColor: 'white',
          marginTop: 0,
          borderTopWidth: 0,
          elevation: 10,
          height: 56,
        },
        iconStyle: {
          margin: 0,
        },
      }}>
      <Tab.Screen name="Shop" component={HomeScreen} />
      <Tab.Screen name="GoOut" component={GoOut} />
      <Tab.Screen name="Pro" component={ProScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({});
