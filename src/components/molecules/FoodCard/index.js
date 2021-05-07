import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {IcArrow, IcStar} from '../../../assets';

const FoodCard = ({image, label, jarak, rating}) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.foodImage} />
      <Text style={{fontFamily: 'Poppins-Medium', fontSize: 16, marginTop: 5}}>
        {label}
      </Text>
      <View style={{flexDirection: 'row'}}>
        <Text
          style={{
            fontFamily: 'Poppins-Medium',
            fontSize: 14,
            color: '#A1A1A1',
            marginRight: 10,
          }}>
          {jarak}
        </Text>
        <IcStar />
        <Text
          style={{
            fontFamily: 'Poppins-Medium',
            fontSize: 12,
            color: 'black',
            marginRight: 10,
          }}>
          {rating}
        </Text>
      </View>
    </View>
  );
};

export default FoodCard;

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
  },

  foodImage: {
    width: 140,
    height: 100,
    borderRadius: 5,
  },
});
