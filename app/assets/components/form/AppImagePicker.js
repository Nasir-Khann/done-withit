import React, { useState } from "react";
import { Alert, Image, Pressable, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";

import Icons from '../Icons';
import color from '../../config/color';

function AppImagePicker({imageUri, onChangeImage}) {
    const selectImage = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images'],
            quality: 0.5,
        });
    
        if (!result.canceled) {
            onChangeImage(result.assets[0].uri);
        }
        } catch (error) {
        console.log(error);
        alert("Error while picking image");
        }
    };

     const handleChange = () => {
        if(!imageUri) {
            selectImage();
        }
        else {
            Alert.alert('Delete','Are you sure you want to delete this Image',[
            {text: 'Yes', onPress: () => onChangeImage(null) },
            {text: 'No',},
            ]);
        }         
    }
        
return (

<Pressable
        onPress={handleChange}
        style={styles.container}
      >
        {/* Icon sirf tab jab image selected NA ho */}
        {!imageUri && (
          <Icons
            name="camera"
            size={80}
            color={color.medium}
            backgroundColor={color.lightGrey}
          />
        )}

        {/* Image sirf tab jab image selected ho */}
        {imageUri && (
          <Image
            source={{ uri: imageUri }}
            style={styles.image}
          />
        )}
      </Pressable>

);
}
const styles = StyleSheet.create({
container:{
    width: 100,
    height: 100,
    backgroundColor: color.lightGrey,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    borderRadius:12
},
image:{
    width:'100%',
    height:'100%'
}
});

export default AppImagePicker