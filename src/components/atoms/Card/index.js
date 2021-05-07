import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Entypto from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Card = () => {
  return (
    <View style={{marginLeft: 20}}>
      <View style={styles.categoryContainer}>
        <View>
          <View style={styles.categoryIcon}>
            <Feather name="box" size={30} color="#33C072" />
          </View>
          <Text style={styles.labelLong}>Express</Text>
        </View>
        <View>
          <View style={styles.categoryIcon}>
            <Ionicon name="fast-food" size={30} color="#33C072" />
          </View>
          <Text style={styles.label}>Food</Text>
        </View>
        <View>
          <View style={styles.categoryIcon}>
            <Entypto name="shop" size={30} color="#33C072" />
          </View>
          <Text style={{marginLeft: 15}}>Mart</Text>
        </View>
        <View>
          <View style={styles.categoryIcon}>
            <Fontisto name="shopping-package" size={30} color="#33C072" />
          </View>
          <Text style={styles.labelLong}>Packages</Text>
        </View>
      </View>
      <View style={styles.categoryContainer2}>
        <View>
          <View style={styles.categoryIcon}>
            <Icon name="car" size={30} color="#33C072" />
          </View>
          <Text style={styles.label}>Car</Text>
        </View>
        <View>
          <View style={styles.categoryIcon}>
            <MaterialCommunityIcons
              name="motorbike"
              size={30}
              color="#33C072"
            />
          </View>
          <Text style={styles.label}>Bike</Text>
        </View>
        <View>
          <View style={styles.categoryIcon}>
            <FontAwesome5 name="money-check-alt" size={30} color="#33C072" />
          </View>
          <Text style={styles.label}>Bills</Text>
        </View>
        <View>
          <View style={styles.categoryIconMore}>
            <Feather name="more-horizontal" size={30} color="#33C072" />
          </View>
          <Text style={styles.label}>More</Text>
        </View>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  categoryContainer: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    marginTop: 25,
    marginBottom: 10,
    justifyContent: 'center',
  },
  categoryContainer2: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 10,
    justifyContent: 'center',
  },
  categoryIcon: {
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 60,
    height: 60,
    backgroundColor: '#E0FBEC' /* '#FF6347' */,
    borderRadius: 50,
    marginRight: 30,
    marginBottom: 5,
  },
  categoryIconMore: {
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 60,
    height: 60,
    backgroundColor: '#EFEFEF' /* '#FF6347' */,
    borderRadius: 50,
    marginRight: 30,
    marginBottom: 5,
  },
  label: {
    fontFamily: 'Poppins-Medium',
    marginLeft: 15,
  },
  labelLong: {
    fontFamily: 'Poppins-Medium',
    alignItems: 'center',
  },
});
