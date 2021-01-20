import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import {colors} from '../../constants/theme';

const Location = () => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Feather name="map-pin" size={20} />
        <View style={{paddingBottom: 3, marginLeft: 10, borderBottomWidth: 2}}>
          <Text style={styles.locationText}>Near Shopping Complex, P..</Text>
        </View>
      </View>
      <MaterialCommunityIcons name="qrcode-scan" size={20} />
    </View>
  );
};

export default Location;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: colors.primary,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  locationText: {
    fontSize: 20,
    fontFamily: 'OpenSans-Regular',

    fontWeight: '200',
  },
});
