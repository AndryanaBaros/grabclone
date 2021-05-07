import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {SlideMenu} from '../../atoms';
import Card from '../../atoms/Card';

const CardMenu = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topUp}>
        <Image
          style={styles.icon}
          source={require('../../../assets/icon/ic-wallet.png')}
        />
        <Text
          style={{fontFamily: 'Poppins-Bold', fontSize: 14, marginLeft: 10}}>
          Top Up
        </Text>
        <Text
          style={{fontFamily: 'Poppins-Medium', fontSize: 14, marginLeft: 10}}>
          Wallet
        </Text>
      </View>
      <Card />
    </View>
  );
};

export default CardMenu;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginTop: 10,
    height: 280,
    alignItems: 'center',
  },
  topUp: {
    backgroundColor: 'white',
    width: 170,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
});
