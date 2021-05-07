import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {IcArrow} from '../../assets';
import {Asinan} from '../../assets/dummy';
import {Header, SlideMenu} from '../../components';
import CardMenu from '../../components/molecules/CardMenu';
import FoodCard from '../../components/molecules/FoodCard';
import Wallets from '../../components/molecules/Wallets';

const Home = () => {
  return (
    <ScrollView>
      <View>
        <Header />
        <Wallets />
        <CardMenu />
        <SlideMenu />
        <View style={styles.title}>
          <Text
            style={{
              fontFamily: 'Poppins-Medium',
              fontSize: 16,
              marginRight: 10,
            }}>
            Restaurant you may like
          </Text>
          <IcArrow />
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={{flexDirection: 'row'}}>
            <FoodCard
              image={Asinan}
              label="Asinan"
              jarak="3.1 km"
              rating="4.5"
            />
            <FoodCard
              image={Asinan}
              label="Asinan"
              jarak="3.1 km"
              rating="4.5"
            />
            <FoodCard
              image={Asinan}
              label="Asinan"
              jarak="3.1 km"
              rating="4.5"
            />
            <FoodCard
              image={Asinan}
              label="Asinan"
              jarak="3.1 km"
              rating="4.5"
            />
          </View>
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  title: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginLeft: 20,
    marginTop: 20,
  },
});
