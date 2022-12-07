/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import {
  View
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import { appLoaded, authenticaded, signInSuccess } from './src/store/actions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Texto } from './src/assets/style';
import colors from './src/assets/colors';
import apiBase from './src/service/api';
const App = () => {
  const dispatch = useDispatch();
  const authState = useSelector(state => state.authState);
  const user = useSelector(state => state.authState.user);

  //VALIDAR SE O USUÁRIO JÁ FEZ LOGIN
  const checkUserLogin = async () => {
    const isLoggin = await AsyncStorage.getItem('@PROJETOAULATOKEN')

    if (isLoggin) {
      await setBearer(isLoggin);
      var decoded = `JWT_AQUI`;
      dispatch(signInSuccess(isLoggin, decoded));
      dispatch(authenticaded(true));
    } else {
      console.log('SEM LOGIN');
    }
    setTimeout(() => {
      dispatch(appLoaded(true));
    }, 200);

  }


  const setBearer = async (token) => {
    var tokenAuth = `bearer ${token}`;
    apiBase.defaults.headers.Authorization = tokenAuth.replace('""', "");

  }

  useEffect(() => {
    checkUserLogin();
  }, []);

  return (
    <NavigationContainer>
      {
        authState.app_started ?
          Routes(authState.authenticaded)
          : <View style={{ flex: 1, backgroundColor: colors.backgroundColor, paddingHorizontal: 20, justifyContent: 'center', alignItems: 'center' }}>

          </View>
      }
    </NavigationContainer>
  )
};
export default App;
