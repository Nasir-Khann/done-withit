import { DefaultTheme } from "@react-navigation/native";

import color from "../assets/config/color";

export default  {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary:color.primary,
        background:color.secondary,
    }
}

