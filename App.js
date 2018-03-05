import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { DrawerNavigator, StackNavigator, NavigationActions } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import configStore from './src/store/configStore';
import DomesticContainer from './src/containers/DomesticContainer';
import AbroadContainer from './src/containers/AbroadContainer';
import HomeScreen from './src/screens/HomeScreen';
import AboutScreen from './src/screens/AboutScreen';
import ContactScreen from './src/screens/ContactScreen';
import RegulationScreen from './src/screens/RegulationScreen';
import SideNav from './src/components/SideNav';


const store = configStore();

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
    Home:           { screen: HomeScreen, navigationOptions: ({navigation}) => StackOptionsFunc(navigation) },
    Domestic:       { screen: DomesticContainer, navigationOptions: {...StackOptions, title: 'Delegacja krajowa'} },
    Abroad:         { screen: AbroadContainer, navigationOptions: {...StackOptions, title: 'Delegacja zagraniczna'} }
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

const RootNavigator = DrawerNavigator(
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

export default Root = () => (
  <Provider store={store}>
      <RootNavigator />
  </Provider>
);