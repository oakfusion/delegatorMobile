import { createStore } from 'redux';
import rootReducer from '../reducers';

export default function configReducer(initState) {
    const store = createStore(rootReducer, initState);
    return store;
}