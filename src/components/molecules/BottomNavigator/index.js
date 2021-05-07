import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {
  IcAccountOff,
  IcAccountOn,
  IcActivityiOff,
  IcActivityiOn,
  IcHomeOff,
  IcHomeOn,
  IcMessageOff,
  IcMessageOn,
  IcPaymentOff,
  IcPaymentOn,
} from '../../../assets/icon';

const Icon = ({label, focus}) => {
  switch (label) {
    case 'Home':
      return focus ? <IcHomeOn /> : <IcHomeOff />;
    case 'Activity':
      return focus ? <IcActivityiOn /> : <IcActivityiOff />;
    case 'Payment':
      return focus ? <IcPaymentOn /> : <IcPaymentOff />;
    case 'Message':
      return focus ? <IcMessageOn /> : <IcMessageOff />;
    case 'Account':
      return focus ? <IcAccountOn /> : <IcAccountOff />;
  }
  return <IcHomeOn />;
};

const BottomNavigator = ({state, descriptors, navigation}) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{flex: 1}}>
            <Icon label={label} focus={isFocused} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default BottomNavigator;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingTop: 15,
    paddingBottom: 13,
    justifyContent: 'space-between',
    paddingLeft: 25,
  },
});
