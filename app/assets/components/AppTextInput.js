import React, { useState } from "react";
import { StyleSheet, Switch, TextInput, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../config/Styles";

export default function AppTextInput({ icon, width="100%", ...otherProps }) {
  return (
    <View style={[styles.container, {width}]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={defaultStyles.colors.medium}
          style={{ marginRight: 5 }}
        />
      )}
      <TextInput
        placeholderTextColor={defaultStyles.colors.medium}
        style={[defaultStyles.text, styles.input,]}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
    backgroundColor: defaultStyles.colors.lightGrey,
    borderRadius: 999,
    padding: 10,
  },
  input: {
    paddingVertical: 0,
    paddingHorizontal: 0,
    margin: 0,
    flex:1,
    //  lineHeight: 22,
  },
});
