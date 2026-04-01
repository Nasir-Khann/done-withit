import { StyleSheet, Text, View, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'

import Icons from './Icons';
import AppText from './AppText';
import { TouchableWithoutFeedback } from 'react-native-web';

export default function CategoryItems({item, onPress}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.touchable}>
    <View style={styles.container}>
        <Icons backgroundColor={item.backgroundColor} name={item.icon}  size={40} />
        <AppText style={styles.label}>{item.label}</AppText>
    </View>
   </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    touchable:{
        width:'33%'
    },
    container:{
        // paddingHorizontal:20,
        paddingVertical:20,
        alignItems:'center',
        width:'100%'
    },
    label:{
        marginTop:5,
        textAlign:'center'
    }
})