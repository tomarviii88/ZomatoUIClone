import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Card from '../components/homescreen/Cards';
import {colors} from '../constants/theme';
import Items from '../components/homescreen/Items';
import Restaurants from '../components/homescreen/Restaurants';
import SearchBar from '../components/homescreen/SearchBar';
import Location from '../components/homescreen/Location';
import Filters from '../components/homescreen/Filters';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Location />
      <SearchBar />
      <Filters />
      <ScrollView>
        <Card />
        <Items />
        <Restaurants />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
});

export default HomeScreen;
