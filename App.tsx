import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Routes  } from "./src/routes";
import { View, Button, Text, StyleSheet } from "react-native";




export default function App() {
  return (

    
    <NavigationContainer>
      
      <Routes />
    
     </NavigationContainer>
  );
}