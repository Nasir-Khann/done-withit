import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
} from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import AppText from "./AppText"; // Assuming this is your custom text component
import color from "../config/color"; // Assuming this is your custom color config

export default function ListItemP({
  title,
  subTitle,
  image,
  onPress,
  onDelete, // Pass onDelete prop from parent to delete the item
}) {
  const [swipeX, setSwipeX] = useState(0);

  // Define the gesture event handler
  const onGestureEvent = (event) => {
    setSwipeX(event.nativeEvent.translationX);
  };

  const onSwipeRelease = () => {
    // Delete item if swiped beyond threshold (for example, 100px)
    if (swipeX < -100) {
      console.log("Item deleted");
      onDelete(); // Trigger delete action passed from parent
    }
    setSwipeX(0); // Reset swipe position
  };

  return (
    <PanGestureHandler
      onGestureEvent={onGestureEvent}
      onHandlerStateChange={onSwipeRelease} // Detect when swipe ends
    >
      <TouchableHighlight
        underlayColor={color.lightGrey}
        onPress={onPress}
      >
        <View style={styles.detailContainer}>
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.infoContainer}>
            <AppText style={styles.title}>{title}</AppText>
            {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
          </View>
          <View style={styles.iconContainer}>
            <MaterialCommunityIcons
              name="chevron-down"
              size={25}
              color={color.medium}
            />
          </View>
        </View>
      </TouchableHighlight>
    </PanGestureHandler>
  );
}

const styles = StyleSheet.create({
  detailContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 1,
    borderColor: color.lightGrey,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  infoContainer: {
    marginLeft: 15,
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
    color: color.black,
  },
  subTitle: {
    fontSize: 13,
    fontWeight: "bold",
    color: color.medium,
  },
  iconContainer: {
    padding: 5,
  },
});
