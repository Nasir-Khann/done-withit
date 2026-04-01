import React from "react";
import { View, StyleSheet, ImageBackground, Image } from "react-native";

import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import Screen from "../components/Screen";


export default function WelcomeScreen({ navigation }) {
  return (
 
    <ImageBackground
      blurRadius={7}
      source={require("../car.jpg")}
      style={styles.background}
    >
     
      <View style={styles.header}>
        <Image
          resizeMode="cover"
          style={styles.logo}
          source={require("../logoD-remove.png")}
        />
        <AppText>Sell What you Don't need</AppText>
      </View>

      <View style={styles.loginButtonContainer}>
        <AppButton onPress={() => navigation.navigate("Login")}>Login</AppButton>
      </View>

      <View style={styles.registerButtonContainer}>
        <AppButton
          colorKey="skyColor"
          onPress={() => navigation.navigate("Register")}
        >
          Register
        </AppButton>
      </View>
      
    </ImageBackground>

  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  
  header: {
    position: "absolute",
    top: 100,
    alignItems: "center",
  },
  loginButtonContainer: {
    width: "90%",
  },
  registerButtonContainer: {
    width: "90%",
    marginBottom:50,
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 999,
  },
   mainC:{
    flex:1
  },
});