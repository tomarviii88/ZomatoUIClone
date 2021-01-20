import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {colors} from '../../constants/theme';

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <Feather name="search" color={colors.secondary} size={20} />
        <TextInput
          onChangeText={text => onChangeText(text)}
          placeholder="Restaurant name, cuisine, or a dish..."
          style={styles.input}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  search: {
    flexDirection: 'row',
    elevation: 1.4,
    borderRadius: 100,
    alignItems: 'center',
    paddingLeft: 10,
  },
  input: {
    flex: 1,
    fontFamily: 'OpenSans-Regular',
    fontSize: 16,
    marginLeft: 10,
  },
});

export default SearchBar;
