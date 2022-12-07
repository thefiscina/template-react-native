import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
//telas
import LoginScreen from './pages/login';
import HomeScreen from './pages/home';

const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen}
                options={{
                    headerShown: false,
                }} />

        </Stack.Navigator>
    );
}

const AuthStackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={LoginScreen}
                options={{
                    headerShown: false,
                }} />
        </Stack.Navigator>
    );
}

const Routes = (authenticaded) => {
    return (
        !authenticaded ?
            <AuthStackNavigator /> :
            <MainStackNavigator />

    );
}

export default Routes;