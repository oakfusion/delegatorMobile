import { combineReducers } from 'redux';
import domestic from './domestic';
import abroad from './abroad';

export default combineReducers({
    domestic,
    abroad
})