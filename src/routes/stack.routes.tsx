import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Logo from '../assets/images/instagram.png'

const { Screen, Navigator } = createNativeStackNavigator();

import { Login, Splash } from '../screens/Login';
import { Help } from '../screens/Help';
import { TabRoutes } from './tab.routes';


export const StackRoutes = () => {
    return (
        <Navigator screenOptions={{
            headerShown: false
        }} >

            <Screen
                name='Splash'
                component={Splash}
            />

            <Screen
                name='Login'
                component={Login}
            />

            <Screen
                name='Help'
                component={Help}
            />

            <Screen
                name='Post'
                component={TabRoutes}
            />

        </Navigator>




    )
}




