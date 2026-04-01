import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AppText from './AppText'

export default function PickerItem({item, onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
    <AppText style={styles.text} onPress={onPress}> 
        {item.label}
    </AppText>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    text:{
        padding:10,
        fontSize:18,

    }
})