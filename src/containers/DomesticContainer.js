import React from 'react';
import { TabNavigator, TabBarBottom, StackNavigator } from 'react-navigation';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as domesticActions from '../actions/domesticActions';

import DomesticScreen from '../screens/DomesticScreen';

const DomesticContainer = (props) => <DomesticScreen state={props.state} actions={props.actions} />

const stateParse = state => ({ state: state.domestic });
const dispatchParse = dispatch => ({ actions: bindActionCreators(domesticActions, dispatch) })
export default connect(stateParse, dispatchParse)(DomesticContainer);