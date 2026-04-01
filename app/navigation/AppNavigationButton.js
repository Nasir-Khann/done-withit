import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import color from "../assets/config/color";

function AppNavigationButton({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8} style={styles.container}>
      <View style={styles.button}>
        <MaterialCommunityIcons
          name="plus-circle"
          size={32}
          color={color.secondary}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    top: -20,            // ✅ tab bar ke upar uthayega
    alignSelf: "center", // ✅ bilkul center
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: color.primary,
    borderColor: color.secondary,
    borderRadius: 40,
    borderWidth: 10,
    height: 80,
    width: 80,
  },
});

export default AppNavigationButton;