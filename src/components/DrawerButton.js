import React from 'react';
import { View, TouchableNativeFeedback, TouchableOpacity, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';


const Touchable = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;

export default DrawerButton = (props) => {
	return (
    <Touchable onPress={() => {props.navigation.navigate('DrawerOpen')}} background={TouchableNativeFeedback.Ripple('rgba(0, 0, 0, .32)', true)}>
      <View style={{padding: 15}}>
        <Icon name="menu" size={30} color="#fff" />
      </View>
    </Touchable>
  );
};