import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {colors} from '../../constants/theme';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

const BookMark = () => {
  return (
    <View style={styles.bookmark}>
      <Feather name="bookmark" size={24} />
    </View>
  );
};

const Promoted = () => {
  return (
    <View style={styles.promoted}>
      <Text style={styles.promotedText1}>Promoted</Text>
      <Text style={styles.promotedText2}>zomato's choice</Text>
    </View>
  );
};

const Discount = () => {
  return (
    <View style={styles.discount}>
      <Text style={styles.promotedText2}>pro extra 20% OFF</Text>
      <Text style={styles.discountText}>50% OFF</Text>
    </View>
  );
};

const Distance = () => {
  return (
    <View style={styles.distance}>
      <Text style={{color: colors.black, fontFamily: 'OpenSans-Regular'}}>
        50 mins
      </Text>
    </View>
  );
};

const RestaurantCard = () => {
  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <BookMark />
        <Promoted />
        <Discount />
        <Distance />
        <Image source={require('./assets/sushi.jpg')} style={styles.image} />
      </View>
      <View style={styles.detailss}>
        <View style={styles.row}>
          <View style={{flex: 1}}>
            <Text style={styles.text1}>Oriental Fusion</Text>
            <Text style={styles.text2}>Asian, Chinese, Thai</Text>
          </View>
          <View style={{alignItems: 'flex-end'}}>
            <View style={styles.row}>
              <FontAwesome name="star" size={20} color={colors.secondary} />
              <Text style={styles.text3}>4.2</Text>
              <Text style={styles.text4}>/5</Text>
            </View>
            <Text style={styles.text2}>&#8377; 300 for one</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const Restaurants = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>1281 Restaurants around you</Text>
      <View style={styles.restaurantContainer}>
        <RestaurantCard />
        <RestaurantCard />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    margin: 10,
  },
  header: {
    fontSize: 20,
    fontFamily: 'OpenSans-Regular',
    fontWeight: '700',
  },
  restaurantContainer: {
    marginTop: 10,
  },
  card: {
    width: '100%',
    borderRadius: 20,
    elevation: 10,
    marginBottom: 20,
  },
  imageContainer: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  image: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  details: {
    borderBottomColor: colors.grey,
    borderBottomWidth: 0.4,
    backgroundColor: colors.primary,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    paddingTop: 5,
    backgroundColor: colors.primary,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  text1: {
    fontFamily: 'OpenSans-Regular',
    fontWeight: '300',
    fontSize: 20,
  },
  text2: {
    color: colors.grey,
    fontFamily: 'OpenSans-Regular',
  },
  text3: {
    fontFamily: 'OpenSans-Regular',
    fontWeight: '300',
    fontSize: 16,
  },
  text4: {
    color: colors.grey,
    fontFamily: 'OpenSans-Regular',
    fontSize: 16,
  },
  bookmark: {
    position: 'absolute',
    right: 10,
    zIndex: 10,
    backgroundColor: colors.primary,
    padding: 5,
    borderRadius: 100,
    top: 10,
  },
  promoted: {
    position: 'absolute',
    zIndex: 20,
    top: 10,
    left: 10,
  },
  promotedText1: {
    fontFamily: 'OpenSans-Regular',
    color: colors.primary,
  },
  promotedText2: {
    fontFamily: 'OpenSans-Regular',
    color: colors.primary,
    padding: 3,
    backgroundColor: colors.red,
    borderRadius: 5,
  },
  discount: {
    position: 'absolute',
    zIndex: 20,
    bottom: 10,
    left: 0,
    flexDirection: 'row',
  },
  discountText: {
    backgroundColor: colors.blue,
    marginLeft: 10,
    color: colors.primary,
    padding: 3,
    borderRadius: 5,
  },
  distance: {
    bottom: 10,
    right: 10,
    zIndex: 10,
    position: 'absolute',
    padding: 3,
    backgroundColor: colors.greyLight,
    borderRadius: 5,
  },
});

export default Restaurants;
