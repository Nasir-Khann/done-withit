import React, { useState } from "react";
import {
  StyleSheet,
  Pressable,
  View,
  Modal,
  Button,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../config/Styles";
import AppText from "./AppText";
import PickerItem from "./PickerItem";
export default function AppPicker({
  icon,
  items,
  PickerItemComponent = PickerItem,
  numberOfColumns=1,
  placeholder,
  onSelectItem,
  selectedItem,
  width="100%"
}) {
  const [modalVisible, setModalisVisiable] = useState(false);
  let isPressed = false;
  return (
    <>
      <Pressable onPress={() => setModalisVisiable(true)}>
        <View style={[styles.container,{width}]}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={defaultStyles.colors.medium}
              style={{ marginRight: 5 }}
            />
          )}
          {selectedItem ? (
            <AppText style={[defaultStyles.text, styles.textSelect]}>
              {selectedItem.label}
            </AppText>
          ) : (
            <AppText style={styles.placeholder}>{placeholder}</AppText>
          )}

          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={defaultStyles.colors.medium}
          />
        </View>
      </Pressable>
      <Modal visible={modalVisible} animationType="slide">
        <Button
          title="close"
          onPress={() => setModalisVisiable(false)}
          color={defaultStyles.colors.skyColor}
        />
        <FlatList
          data={items} // it's coming from AppFormPicker an Array of Object [{},{},{}]
          keyExtractor={(item) => item.value.toString()} // to Extract uniqe Value in Array of Objects
          numColumns={numberOfColumns}
          columnWrapperStyle={numberOfColumns > 1 ? styles.columnWrapper : undefined}
          renderItem={({ item }) => ( // it runs function and that functions has data we want to show, 
          //The data from Item and this function has style or Ui the way we want to show it on Screen
            <PickerItemComponent // it is Component in we want to show data, array of Object
              item={item}
              label={item.label}  // here item is one Object in array and label is his key, and we are Sending label key value to PickerItemComponent
              onPress={() => { // when we press that label setModal, that is slide disappear, and because we have set setModalVisible to False
                setModalisVisiable(false);
                onSelectItem(item); // Now onSelectItem has that object and calling funciton that is AppFormPicker
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
    marginVertical: 10,
    backgroundColor: defaultStyles.colors.lightGrey,
    borderRadius: 999,
    padding: 10,
  },
  placeholder: { flex: 1, color: defaultStyles.colors.medium },
  textSelect: {
    flex: 1,
  },
  columnWrapper:{
    justifyContent:'center'
  }
});
