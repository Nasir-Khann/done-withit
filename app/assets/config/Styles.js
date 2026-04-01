import { Platform } from "react-native";

import color from "./color";

export default {
  colors: color,
  text: {
    fontSize: 18,
    color: color.dark,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
};
