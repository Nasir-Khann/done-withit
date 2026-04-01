import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler"; // bilkul top par
import { GestureHandlerRootView } from "react-native-gesture-handler";
import netinfo, { useNetInfo } from "@react-native-community/netinfo";


import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
// import ListingScreen from "./app/assets/screens/ListingScreen";




export default function App() {
    
   return ( 
  
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer theme={navigationTheme}>
        <AppNavigator />
      </NavigationContainer>
    </GestureHandlerRootView>

   )
}

// const styles = StyleSheet.create({
//   container:{
//     alignItems: "center",
//     justifyContent: "center",
//     flex: 1,
//   }
// })

// import React, { useEffect, useState } from "react";
// import { View, Text, Image, FlatList } from "react-native";

// export default function App() {
//   const [listings, setListings] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:9000/api/listings")
//       .then((response) => response.json())
//       .then((data) => setListings(data))
//       .catch((error) => console.log(error));
//   }, []);

//   return (
//     <FlatList
//       data={listings}
//       keyExtractor={(item) => item.id.toString()}
//       renderItem={({ item }) => (
//         <View style={{ padding: 20 }}>
//           <Text>{item.title}</Text>
//           <Text>{item.price}</Text>
//           <Image
//             source={{ uri: item.images[0].url }}
//             style={{ width: 200, height: 150 }}
//           />
//         </View>
//       )}
//     />
//   );
// }