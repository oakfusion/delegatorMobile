import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as domesticActions from '../actions/domesticActions';
import DomesticScreensStack from '../screens/DomesticScreen';

const DomesticContainer = (props) => <DomesticScreensStack screenProps={{state: props.state, actions: props.actions}}/>

const stateParse = state => ({ state: state.domestic });

const dispatchParse = dispatch => ({ actions: bindActionCreators(domesticActions, dispatch) })

export default connect(stateParse, dispatchParse)(DomesticContainer);