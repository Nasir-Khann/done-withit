import { FlatList, StyleSheet, View } from "react-native";
import React, { useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";

import Screen from "../components/Screen";
import Card from "../components/Card";
import listings from "../../api/listings";
import color from "../config/color";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import useApi from "../../hooks/useApi";
// import ActivityIndicatorC from '../components/ActivityIndicatorC';

export default function ListingScreen({ navigation }) {
  // const {data:listingsS, error, loading ,request:loadListings } = useApi(listings.getListings);
  const getListingsApi = useApi(listings.getListings);
  const loadListings = useCallback(() => {
    getListingsApi.request();
  }, [getListingsApi.request]);

  useFocusEffect(
    useCallback(() => {
      loadListings();
    }, [loadListings]),
  );

  const feedData = Array.isArray(getListingsApi.data)
    ? [...getListingsApi.data].sort((a, b) => b.id - a.id)
    : [];

  return (
    <Screen style={styles.screen}>
      {getListingsApi.error && (
        <View style={styles.reload}>
          <AppText>Could not retrive the listings</AppText>
          <AppButton onPress={loadListings}>Retry</AppButton>
        </View>
      )}
      {/* <ActivityIndicatorC visible={loading}/> */}
      <FlatList
        data={feedData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            imageUrl={item.images[0]?.url}
            onPress={() =>
              navigation?.navigate?.("ListingDetail", { listing: item })
            }
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: color.lightGrey,
    flex: 1,
  },
  reload: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
