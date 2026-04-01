// app/assets/components/styles.js
import { StyleSheet } from 'react-native';

import color from '../config/color';  // same fix as above

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
    backgroundColor: color.lightPink,   // default – or use prop later
    color: color.secondary,             // white text
    fontSize: 18,
    width:'100%',
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop:18
  },
});

export default styles;