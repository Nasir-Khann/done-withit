import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import ListingScreen from "../assets/screens/ListingScreen";
import ListingDetailScreen from "../assets/screens/ListingDetailScreen";

const Stack = createNativeStackNavigator();

const FeedNavigator = () => {
    return (
    <Stack.Navigator mode='modal' screenOptions={{ presentation: "modal",
      animation: "slide_from_bottom", }}>
        <Stack.Screen name="FeedItems" component={ListingScreen} />
        <Stack.Screen name="ListingDetail" component={ListingDetailScreen} />
    </Stack.Navigator>
    );
}

export default FeedNavigator;