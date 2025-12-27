// AppNavigator.js
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Detail from "./components/detail";
import Home from "./components/home";
import Login from "./components/login";
const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
