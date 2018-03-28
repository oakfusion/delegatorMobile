import React from 'react';
import { DrawerNavigator, StackNavigator } from 'react-navigation';

import DomesticContainer from './src/containers/DomesticContainer';
import AbroadContainer from './src/containers/AbroadContainer';

import HomeScreen from './src/screens/HomeScreen';
import AboutScreen from './src/screens/AboutScreen';
import ContactScreen from './src/screens/ContactScreen';
import RegulationScreen from './src/screens/RegulationScreen';
import PDFScreen from './src/screens/PdfScreen';

import SideNav from './src/components/SideNav';
import DrawerButton from './src/components/DrawerButton';


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
    Abroad:         { screen: AbroadContainer, navigationOptions: {...StackOptions, title: 'Delegacja zagraniczna'} },
    Pdf:            { screen: PDFScreen, navigationOptions: {...StackOptions, title: 'Rozliczenie delegacji'} } 
  }
)

const AboutStack = StackNavigator(
  { 
    About: { screen: AboutScreen, navigationOptions: ({navigation}) => StackOptionsFunc(navigation) }
  }
)

const RegulationStack = StackNavigator(
  { 
    Regulation:    { screen: RegulationScreen, navigationOptions: ({navigation}) => StackOptionsFunc(navigation) }
  }
)

export default DrawerNavigator(
  {
    'Rozliczenie delegacji' : { screen: MainStack },
    'O Aplikacji'           : { screen: AboutStack },
    'Kontakt'               : { screen: ContactScreen },
    'Regulamin'             : { screen: RegulationStack }
  },{ 
    contentComponent: SideNav,
    drawerBackgroundColor: '#3b3a3e',
  }
);