import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import LoginScreen from "../assets/screens/LoginScreen";
import WelcomeScreen from "../assets/screens/WelcomeScreen";
import RegisterScreen from "../assets/screens/RegisterScreen";

const Stack = createStackNavigator();

const AuthNavigator = () => {
    return (
    <Stack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Register" component={RegisterScreen}/>
    </Stack.Navigator>
    );
}

export default AuthNavigator;