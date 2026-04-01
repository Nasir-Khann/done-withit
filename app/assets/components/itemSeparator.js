import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import color from '../config/color'

export default function itemSeparator() {
  return (
    <View style={styles.separator}/>
  )
}

const styles = StyleSheet.create({
    separator:{
        width:'100%',
        height:1,
        backgroundColor:color.grey,
    }
})