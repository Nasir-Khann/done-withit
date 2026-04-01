import { StyleSheet, View, Image, TouchableHighlight } from "react-native";
import React from "react";
import Swipeable from "react-native-gesture-handler/Swipeable";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import AppText from "./AppText";
import color from "../config/color";

export default function ListItem({
  title,
  subTitle,
  ImageComponent,
  image,
  onPress,
  renderRightActions,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={color.lightGrey} onPress={onPress}>
        <View style={styles.detailContainer}>
          {ImageComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.infoContainer}>
            <AppText style={styles.title}>{title}</AppText>
            {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
          </View>
          <View>
            <MaterialCommunityIcons
              name="chevron-down"
              size={25}
              color={color.medium}
            />
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  detailContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
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
});
