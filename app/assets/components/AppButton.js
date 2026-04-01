import { Text , TouchableOpacity, StyleSheet} from 'react-native'
import React, { Children } from 'react'


import styles from './styles';
import color from '../config/color';

function AppButton ({ children , onPress, colorKey ="lightPink",disabled, style})  {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress} disabled={disabled}>
        <Text style={[styles.button, {backgroundColor: color[colorKey]}, style]}>{children}</Text>
    </TouchableOpacity>
  ) ;
}



export default AppButton;
