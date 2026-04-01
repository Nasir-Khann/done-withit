import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

import FeedNavigator from "./FeedNavigator";
import AccountNavigator from "./AccountNavigator";
import ListingEditScreen from "../assets/screens/ListingEditScreen";
import AppNavigationButton from "./AppNavigationButton";
import AppText from "../assets/components/AppText";

const HeaderName = ({ title }) => {
  return <AppText>{title}</AppText>;
};

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Feed"
        component={FeedNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="ListingDetails"
        component={ListingEditScreen}
        options={{
          title: "Listing Details",
          headerShown: false,
          tabBarButton: (props) => <AppNavigationButton {...props} />,
        }}
      />

      <Tab.Screen
        name="AccountTab"
        component={AccountNavigator}
        options={() => {

          return {
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account" color={color} size={size} />
            ),
            headerShown:false,
          };
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;