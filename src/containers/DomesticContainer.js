import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as domesticActions from '../actions/domesticActions';

import DomesticScreenStep1 from '../screens/DomesticScreenStep1';
import DomesticScreenStep2 from '../screens/DomesticScreenStep2';

const DomesticScreensStack = TabNavigator(
  {
    Step1: { screen: DomesticScreenStep1, navigationOptions: { title: 'Czas i cel' } },
    Step2: { screen: DomesticScreenStep2, navigationOptions: { title: 'Dane osobowe' }  },
  }, {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
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

const DomesticContainer = (props) => <DomesticScreensStack screenProps={{state: props.state, actions: props.actions}}/>

const stateParse = state => ({ state: state.domestic });
const dispatchParse = dispatch => ({ actions: bindActionCreators(domesticActions, dispatch) })
export default connect(stateParse, dispatchParse)(DomesticContainer);