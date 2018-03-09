import React from 'react';
import { TabNavigator, TabBarBottom, StackNavigator } from 'react-navigation';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as abroadActions from '../actions/abroadActions';

import AbroadScreen from '../screens/AbroadScreen';

const AbroadContainer = (props) => <AbroadScreen state={props.state} actions={props.actions} />

const stateParse = state => ({ state: state.abroad });
const dispatchParse = dispatch => ({ actions: bindActionCreators(abroadActions, dispatch) })
export default connect(stateParse, dispatchParse)(AbroadContainer);