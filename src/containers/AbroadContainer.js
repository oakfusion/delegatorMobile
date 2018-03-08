import React from 'react';
import { Alert } from 'react-native';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as abroadActions from '../actions/abroadActions';

import AbroadScreenStep1 from '../screens/AbroadScreenStep1';
import AbroadScreenStep2 from '../screens/AbroadScreenStep2';
import AbroadScreenStep3 from '../screens/AbroadScreenStep3';

const AbroadScreensStack = TabNavigator(
  {
    Step1: { screen: AbroadScreenStep1, navigationOptions: { title: 'Czas podróży' } },
    Step2: { screen: AbroadScreenStep2, navigationOptions: { title: 'Cel' }  },
    Step3: { screen: AbroadScreenStep3, navigationOptions: { title: 'Dane osobowe' }  }
  }, {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Step1') {
          iconName = 'access-time';
        } else if (routeName === 'Step2') {
          iconName = 'place';
        } else if (routeName === 'Step3') {
          iconName = 'person';
        }
        return <Icon name={iconName} size={25} color={tintColor} />;
      }
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


const AbroadContainer = (props) => <AbroadScreensStack screenProps={{state: props.state, actions: props.actions}}/>

const stateParse = state => ({ state: state.abroad });
const dispatchParse = dispatch => ({ actions: bindActionCreators(abroadActions, dispatch) })
export default connect(stateParse, dispatchParse)(AbroadContainer);