import React from 'react';
import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";
import configureStore from './src/redux/store';
import { Provider } from 'react-redux';
const store = configureStore();
// const preloadedState = window.__PRELOADED_STATE__;

const RNRedux = () => (
    <Provider store={store}>
        <App />
    </Provider>
);
AppRegistry.registerComponent(appName, () => RNRedux);