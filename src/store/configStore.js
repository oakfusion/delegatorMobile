import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from '../reducers';

export default function configReducer(initState) {
    const store = createStore(rootReducer, initState, applyMiddleware(thunk, logger));
    return store;
}