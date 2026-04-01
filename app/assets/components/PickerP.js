import React, { useState } from "react";
import {
  StyleSheet,
  Switch,
  TextInput,
  View,
  Pressable,
  Modal,
  Button,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../config/Styles";
import AppText from "./AppText";
import PickerItem from "./PickerItem";

const categories = [
  {
    title: "Furniture",
    id: 1,
  },
  {
    title: "Electronics",
    id: 2,
  },
  {
    title: "Clothes",
    id: 3,
  },
];

export default function PickerP({
  icon,
  placeholder,
  onSelectItem,
  selectedItem,
}) {
  const [isVisiable, setVisiable] = useState(false);

  return (
    <>
      <Pressable onPress={() => setVisiable(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={defaultStyles.colors.medium}
              style={{ marginRight: 10 }}
            />
          )}
          <AppText style={styles.text}>
            {selectedItem ? selectedItem.title : placeholder}
          </AppText>
          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={defaultStyles.colors.medium}
            style={{ marginRight: 10 }}
          />
        </View>
      </Pressable>
      <Modal visible={isVisiable} animationType="slide">
        <Pressable style={styles.closeBtn} onPress={() => setVisiable(false)}>
          <MaterialCommunityIcons
            name="close-circle"
            size={25}
            color={defaultStyles.colors.black}
          />
        </Pressable>
        <FlatList
          data={categories}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <PickerItem
              label={item.title}
              onPress={() => {
                setVisiable(false);
                onSelectItem(item);
              }}
            />
          )}
        />
      </Modal>
    </>
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
  text: {
    flex: 1,
  },
  closeBtn: {
    alignSelf: "center",
  },
});
