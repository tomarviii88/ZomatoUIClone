import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {colors} from '../constants/theme';
import GlobalFont from 'react-native-global-font';

const TabNavigatorComponent = ({name, color, size, focused}) => {
  useEffect(() => {
    let fontName = 'Entypo';
    GlobalFont.applyGlobal(fontName);
  }, []);
  switch (name) {
    case 'Shop':
      return (
        <View style={focused ? styles.tabFocused : styles.tab}>
          <MaterialCommunityIcons
            name="shopping-outline"
            color={focused ? colors.black : colors.grey}
            size={size}
          />
          <Text
            style={
              focused
                ? {...styles.font, color: colors.black}
                : {...styles.font, color: colors.grey}
            }>
            Order
          </Text>
        </View>
      );
    case 'GoOut':
      return (
        <View style={focused ? styles.tabFocused : styles.tab}>
          <Foundation
            name="foot"
            color={focused ? colors.black : colors.grey}
            size={size}
          />
          <Text
            style={
              focused
                ? {...styles.font, color: colors.black}
                : {...styles.font, color: colors.grey}
            }>
            Go Out
          </Text>
        </View>
      );
    case 'Pro':
      return (
        <View style={focused ? styles.tabFocused : styles.tab}>
          <MaterialCommunityIcons
            name="professional-hexagon"
            color={focused ? colors.black : colors.grey}
            size={size}
          />
          <Text
            style={
              focused
                ? {...styles.font, color: colors.black}
                : {...styles.font, color: colors.grey}
            }>
            Pro
          </Text>
        </View>
      );
    case 'Profile':
      return (
        <View style={focused ? styles.tabFocused : styles.tab}>
          <FontAwesome
            name="user-circle"
            color={focused ? colors.black : colors.grey}
            size={size}
          />
          <Text
            style={
              focused
                ? {...styles.font, color: colors.black}
                : {...styles.font, color: colors.grey}
            }>
            Profile
          </Text>
        </View>
      );
  }
};

const styles = StyleSheet.create({
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  tabFocused: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopColor: colors.secondary,
    borderTopWidth: 2.2,
    width: '100%',
  },
  font: {
    fontFamily: 'OpenSans-Regular',
  },
});

export default TabNavigatorComponent;
