import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SearchBar} from '../../atoms';

const Header = () => {
  const [value, setValue] = useState();
  function updateSearch(value) {}

  return (
    <View style={styles.content}>
      <SearchBar
        value={value}
        updateSearch={updateSearch}
        style={styles.search}
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  content: {
    backgroundColor: '#33C072',
    height: 60,
    justifyContent: 'center',
  },
  search: {
    marginTop: 40,
  },
});
