import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import AppText from './AppText';
import Icons from "../components/Icons"
import color from "../config/color";

export default function AccountList({title, icon}) {
  return (
    <View style={styles.listing}>
       <Icons
        name={icon}
        size={50}
        color={color.secondary}
        backgroundColor="red"
      />
        <AppText style={styles.text}>{title}</AppText>
    </View>
    
  )
}

const styles = StyleSheet.create({
    text:{
        color:color.black,
        marginLeft:10,
        fontSize:16,
        fontWeight:600
    },
    listing:{
        flexDirection:'row',
        alignItems:'center',
        padding:20,
        backgroundColor:color.secondary
    }
})
