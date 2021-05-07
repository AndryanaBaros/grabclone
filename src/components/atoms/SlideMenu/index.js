import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import Swiper from 'react-native-swiper';

const SlideMenu = () => {
  return (
    <View style={styles.sliderContainer}>
      <Swiper autoplay horizontal={false} height={200} activeDotColor="#33C072">
        <View style={styles.slide}>
          <Image
            source={require('../../../assets/dummy/swiper1.jpeg')}
            resizeMode="cover"
            style={styles.sliderImage}
          />
        </View>
        <View style={styles.slide}>
          <Image
            source={require('../../../assets/dummy/swiper2.jpeg')}
            resizeMode="cover"
            style={styles.sliderImage}
          />
        </View>
        <View style={styles.slide}>
          <Image
            source={require('../../../assets/dummy/swiper3.jpeg')}
            resizeMode="cover"
            style={styles.sliderImage}
          />
        </View>
      </Swiper>
      <Text style={styles.desc}>Diskonya banyak hari ini!</Text>
    </View>
  );
};

export default SlideMenu;

const styles = StyleSheet.create({
  sliderContainer: {
    height: 200,
    width: '90%',
    marginTop: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 8,
  },
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: 8,
  },
  sliderImage: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
  },
  desc: {
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
    marginTop: 10,
  },
});
