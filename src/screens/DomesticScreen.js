import React, { Component } from 'react';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

import DomesticScreenStep1 from './DomesticScreenStep1';
import DomesticScreenStep2 from './DomesticScreenStep2';

export default TabNavigator(
  {
    Step1: { screen: DomesticScreenStep1, navigationOptions: { title: 'Czas i cel' } },
    Step2: { screen: DomesticScreenStep2, navigationOptions: { title: 'Dane osobowe' }  },
  }, {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ _, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Step1') {
          iconName = 'access-time';
        } else if (routeName === 'Step2') {
          iconName = 'person';
        }
        return <Icon name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    lazy: false,
    tabBarOptions: {
      style: {
        backgroundColor: '#3b3a3e'
      },
      activeTintColor: '#fff'
    }
  }
)
