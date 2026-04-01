import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Pressable } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AccountScreen from "../assets/screens/AccountScreen";
import MessagesScreen from "../assets/screens/MessagesScreen";

const Stack = createNativeStackNavigator();

const AccountNavigator = () => {
  
  return (
    <Stack.Navigator >
      <Stack.Screen name="Account" component={AccountScreen} />

      <Stack.Screen name="Messages" component={MessagesScreen}
       options={({ navigation }) => ({
          title: "Messages",
          headerLeft: () => (
            <Pressable
              onPress={() => navigation.goBack()}
              style={{ paddingHorizontal: 10 }}
            >
              <MaterialCommunityIcons name="arrow-left" size={24} color="black" />
            </Pressable>
          ),
        })}/>
    </Stack.Navigator>
  );
};

export default AccountNavigator;