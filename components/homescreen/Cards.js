import React from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import {colors} from '../../constants/theme';
const data = ['1', '2', '3', '4'];

const Card = () => {
  const renderItem = () => {
    return (
      <View style={styles.cardContainer}>
        <Image
          source={require('./assets/burger.jpg')}
          style={{
            width: '100%',
            height: '100%',
            borderRadius: 14,
            position: 'absolute',
          }}
        />
        <View style={styles.overlay}></View>
        <View style={styles.details}>
          <Text style={styles.text}>EPIC</Text>
          <Text style={styles.text}>DEALS</Text>
          <Text style={styles.text2}>40% OFF</Text>
          <Text style={styles.text3}>On legendary restaurants</Text>
        </View>
      </View>
    );
  };
  return (
    <>
      <FlatList
        renderItem={renderItem}
        data={data}
        horizontal={true}
        keyExtractor={item => item}
        showsHorizontalScrollIndicator={false}
      />
    </>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: 320,
    backgroundColor: 'red',
    height: 190,
    borderRadius: 14,
    marginRight: 10,
    margin: 10,
  },
  overlay: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundColor: colors.black,
    borderRadius: 14,
    opacity: 0.5,
  },
  details: {
    padding: 15,
  },
  text: {
    color: colors.primary,
    fontSize: 40,
    fontWeight: 'bold',
    fontFamily: 'OpenSans-Regular',
  },
  text2: {
    color: colors.primary,
    fontSize: 20,
    fontWeight: '700',
    fontFamily: 'OpenSans-Regular',
  },
  text3: {
    color: colors.primary,
    fontSize: 12,
    marginTop: 10,
    fontFamily: 'OpenSans-Regular',
  },
});

export default Card;
