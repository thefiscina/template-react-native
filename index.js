/**
 * @format
 */
 import React from 'react';
 import { AppRegistry, StatusBar, SafeAreaView, Platform } from 'react-native';
 import { Provider } from 'react-redux';
 import App from './App';
 import { name as appName } from './app.json';
 import {name, version} from './package.json';
 import store from "./src/store/index";

 
 const appRootComponent = () => (
   <Provider store={store}>
     <StatusBar barStyle="dark-content" animated={true}
       backgroundColor="#006b85" />
     <App />
   </Provider>
 )
 
 AppRegistry.registerComponent(appName, () => appRootComponent);
 