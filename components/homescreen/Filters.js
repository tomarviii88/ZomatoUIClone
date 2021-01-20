import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import {colors} from '../../constants/theme';

const filter = [
  'Filter',
  'Rating: 4.0+',
  'Safe and Hygenic',
  'Takeaway',
  'Fastest Delivery',
];

const Filters = () => {
  const [selected, setSelected] = useState('');
  const onSelect = item => {
    if (selected.includes(item)) setSelected('');
    else setSelected(item);
  };
  const Filter = ({item}) => {
    if (item === 'Filter')
      return (
        <View style={styles.row}>
          <MaterialIcons name="filter-list" size={18} color={colors.grey} />
          <Text style={styles.text}>Filters</Text>
        </View>
      );
    return (
      <TouchableOpacity
        activeOpacity={0.3}
        onPress={() => {
          onSelect(item);
        }}>
        <View style={selected === item ? styles.rowSelected : styles.row}>
          <Text style={selected === item ? styles.textSelected : styles.text}>
            {item}
          </Text>
          {selected === item && <Entypo name="cross" size={16} />}
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        renderItem={Filter}
        data={filter}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
    overflow: 'scroll',
  },
  row: {
    flexDirection: 'row',
    padding: 7,
    borderWidth: 1,
    borderRadius: 100,
    borderColor: colors.greyLight,
    alignItems: 'center',
    marginLeft: 10,
  },
  text: {
    color: colors.grey,
  },
  rowSelected: {
    flexDirection: 'row',
    padding: 7,
    borderWidth: 1,
    borderRadius: 100,
    borderColor: colors.black,
    backgroundColor: colors.grey2,
    alignItems: 'center',
    marginLeft: 10,
  },
  textSelected: {
    color: colors.black,
  },
});

export default Filters;
