import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const Wallets = () => {
  return (
    <View style={styles.container}>
      <View style={styles.ovo}>
        <Image
          style={styles.icon}
          source={require('../../../assets/icon/ic-ovo.png')}
        />
        <Text style={{fontSize: 15, fontFamily: 'Poppins-Medium'}}>Rp.0</Text>
      </View>
      <View style={styles.point}>
        <Image
          style={styles.icon}
          source={require('../../../assets/icon/ic-point.png')}
        />
        <Text style={{fontSize: 15, fontFamily: 'Poppins-Medium'}}>
          0 Point{' '}
        </Text>
      </View>
    </View>
  );
};

export default Wallets;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: 50,
  },

  icon: {
    height: 20,
    width: 20,
    marginRight: 10,
  },

  ovo: {
    flexDirection: 'row',
    marginLeft: -80,
    // backgroundColor: 'red',
  },

  point: {
    flexDirection: 'row',
    // backgroundColor: 'blue',
  },
});
