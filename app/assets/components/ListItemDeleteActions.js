import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import color from "../config/color";

export default function ListItemDeleteActions({ onPress }) {
  return (
    <Pressable style={styles.iconContainer} onPress={onPress}>
      <View style={styles.swipeIcon}>
        <MaterialCommunityIcons
          name="trash-can"
          size={35}
          color={color.black}
        />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  swipeIcon: {
    width: 80,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: color.lightGrey,
  },
});
