import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {colors} from '../../constants/theme';
import {item} from './constants/items';

const ItemCard = ({item}) => {
  return (
    <View style={styles.item}>
      <Image source={item.image} style={styles.imageOverlay} />
      <View style={styles.overlay}></View>
      <Text style={styles.itemName}>{item.name}</Text>
    </View>
  );
};

const Items = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Eat what makes you happy</Text>
      <View style={styles.itemContainer}>
        {item.map(item => {
          return <ItemCard item={item} />;
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    padding: 10,
  },
  header: {
    fontSize: 25,
    fontFamily: 'OpenSans-Regular',
    fontWeight: '700',
  },
  itemContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  item: {
    width: 80,
    height: 80,
    backgroundColor: 'grey',
    borderRadius: 20,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  imageOverlay: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    borderRadius: 15,
  },
  overlay: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundColor: colors.black,
    borderRadius: 14,
    opacity: 0.5,
  },
  itemName: {
    color: colors.primary,
    textAlign: 'center',
    marginBottom: 5,
    fontFamily: 'OpenSans-Regular',
  },
});

export default Items;
