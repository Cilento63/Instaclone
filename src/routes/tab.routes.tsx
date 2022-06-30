import React from "react";


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from "react-native";
import { Feed } from "../screens/Feed";
import homeIcon from "../assets/icons/homeIcon.png"
import searchIcon from '../assets/icons/search.png'
import reelsIcon from '../assets/icons/reels.png'
import shopIcon from '../assets/icons/shop.png'
import ProfileIcon from '../assets/icons/profile.jpg'
import { NavigationContainer } from "@react-navigation/native";


const Tab = createBottomTabNavigator();

export const TabRoutes = () => {
    return (

        <Tab.Navigator screenOptions={{
            title:"",
            headerShown: false,
            tabBarStyle: { backgroundColor: "#fff", paddingBottom: 2 },
            tabBarActiveTintColor: '#000',
            tabBarInactiveTintColor: "#000"
        }} >
            <Tab.Screen name="Feed" component={Feed}
                options={{

                    tabBarIcon: ({ color }) => (
                        <Image resizeMode="contain"
                            style={{ width: 30, tintColor: color }}
                            source={homeIcon} />
                    )
                }} />

            <Tab.Screen name="Search" component={Feed}
                options={{

                    tabBarIcon: ({ color }) => (
                        <Image resizeMode="contain"
                            style={{width: 30, tintColor: color }}
                            source={searchIcon} />
                    )
                }} />

            <Tab.Screen name="Reels" component={Feed}
                options={{

                    tabBarIcon: ({ color }) => (
                        <Image resizeMode="contain"
                            style={{ width: 30, tintColor: color }}
                            source={reelsIcon} />
                    )
                }} />
            <Tab.Screen name="Shop" component={Feed}
                options={{

                    tabBarIcon: ({ color }) => (
                        <Image resizeMode="contain"
                            style={{ width: 30, tintColor: color }}
                            source={shopIcon} />
                    )
                }} />

            <Tab.Screen name="Profile" component={Feed}
                options={{

                    tabBarIcon: ({ color }) => (
                        <Image resizeMode="contain"
                            style={{ borderRadius: 50, height: 30, width: 30 }}
                            source={ProfileIcon} />
                    )
                }} />

        </Tab.Navigator>


    );
}