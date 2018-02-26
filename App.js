import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { DrawerNavigator, StackNavigator } from 'react-navigation';

import HomeScreen from './src/screens/HomeScreen';
import DomesticScreen from './src/screens/DomesticScreen';
import AbroadScreen from './src/screens/AbroadScreen';
import AboutScreen from './src/screens/AboutScreen';
import ContactScreen from './src/screens/ContactScreen';
import RegulationScreen from './src/screens/RegulationScreen';
import SideNav from './src/components/SideNav';

import Icon from 'react-native-vector-icons/MaterialIcons';

const DrawerButton = (props) => {
	return (
    <View>
      <TouchableOpacity style={{paddingLeft: 15}} onPress={() => {props.navigation.navigate('DrawerOpen')}}>
        <Icon name="menu" size={30} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const StackOptions = {
  headerStyle: {
    backgroundColor: '#3b3a3e'
  },
  headerTintColor: '#fff'
}

const StackOptionsFunc = (navigation) => {
  return {
    headerLeft: <DrawerButton navigation={navigation}/>,
    ...StackOptions
  }
}

const MainStack = StackNavigator(
  {
    Home:       { screen: HomeScreen, navigationOptions: ({navigation}) => StackOptionsFunc(navigation) },
    Domestic:   { screen: DomesticScreen, navigationOptions: {...StackOptions, title: 'Delegacja krajowa'} },
    Abroad:     { screen: AbroadScreen, navigationOptions: {...StackOptions, title: 'Delegacja zagraniczna'} }
  }
)

const AboutStack = StackNavigator(
  { About:      { screen: AboutScreen }}, 
  { navigationOptions: ({navigation}) => StackOptionsFunc(navigation) }
)

const ContactStack = StackNavigator(
  { Contact:    { screen: ContactScreen }}, 
  { navigationOptions: ({navigation}) => StackOptionsFunc(navigation) }
)

const RegulationStack = StackNavigator(
  { Regulation:    { screen: RegulationScreen }}, 
  { navigationOptions: ({navigation}) => StackOptionsFunc(navigation) }
)

export default DrawerNavigator(
  {
    'Rozliczenie delegacji' : { screen: MainStack },
    'O Aplikacji'           : { screen: AboutStack },
    'Kontakt'               : { screen: ContactStack },
    'Regulamin'             : { screen: RegulationStack }             
  },{ 
    contentComponent: SideNav,
    drawerBackgroundColor: '#3b3a3e',
  }
);