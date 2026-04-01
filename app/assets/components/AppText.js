import { Text } from 'react-native';
import React from 'react';

import color from '../config/color';  // from components → config (one level up)

function AppText({ children, style }) {
  return (
    <Text style={[{ color: color.black, fontSize: 18 }, style]}>
      {children}
    </Text>
  );
}

export default AppText;