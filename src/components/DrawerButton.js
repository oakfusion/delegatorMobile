import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default DrawerButton = (props) => {
	return (
    <View>
      <TouchableOpacity style={{paddingLeft: 15}} onPress={() => {props.navigation.navigate('DrawerOpen')}}>
        <Icon name="menu" size={30} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};