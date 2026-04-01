import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Icons({name, size=50, color='white', backgroundColor='black'}) {
  return (
    <View style={{
        width:size,
        height:size,
        backgroundColor,
        color,
        borderRadius: size/2,
        alignItems:'center',
        justifyContent:'center'
    }}
    >
     <MaterialCommunityIcons 
     name={name}
     color={color}
     size={size*0.5}
     /> 
    </View>
  )
}

const styles = StyleSheet.create({})