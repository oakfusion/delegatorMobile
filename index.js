import React from 'react';
import { AppRegistry } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import configStore from './src/store/configStore';

const store = configStore();

const Root = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

AppRegistry.registerComponent('DelegatorMobile', () => Root);
