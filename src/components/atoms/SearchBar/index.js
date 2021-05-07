import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';

export default function Searchbar({value, updateSearch, style}) {
  const [query, setQuery] = useState();
  return (
    <View style={[styles.container, style]}>
      <View style={styles.searchContainer}>
        <View style={styles.vwSearch}>
          <Image
            style={styles.icSearch}
            source={require('../../../assets/icon/ic-scan.png')}
          />
        </View>

        <TextInput
          value={query}
          placeholder="Offers,food,and places to go"
          style={styles.textInput}
        />
        <TouchableOpacity onPress={() => setQuery('')} style={styles.vwClear}>
          <Image
            style={styles.icClear}
            // source={require('../../assets/images/ic_clear.png')}
          />
        </TouchableOpacity>
        <View style={styles.vwClear} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  txtError: {
    marginTop: '2%',
    width: '89%',
    color: 'white',
  },
  vwClear: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    // backgroundColor: 'green',
    flex: 1,
  },

  vwSearch: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    // width: 40,
    // backgroundColor: 'red'
  },
  icSearch: {
    height: 18,
    width: 18,
  },
  searchContainer: {
    backgroundColor: 'white',
    width: '90%',
    height: 40,
    flexDirection: 'row',
    borderRadius: 5,
  },
  container: {
    height: 80,
    alignItems: 'center',
    // height: '100%', width: '100%'
  },
});
