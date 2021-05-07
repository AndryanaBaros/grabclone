import React, {useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('MainApp');
    }, 2000);
  }, []);

  return (
    <View
      style={{
        backgroundColor: '#33C072',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{fontSize: 32, color: 'white', fontFamily: 'Poppins-Medium'}}>
        LEMONILO
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SplashScreen;
