import React from "react";
import { View, Text, StyleSheet, Image, SafeAreaView } from "react-native";
import NavLinks from "../components/NavLinks";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { REACT_APP_GOOGLE_API } from "@env";

export default function Home() {
  return (
    <SafeAreaView style={styles.nav}>
      <Image
        style={styles.img}
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png",
        }}
      />
      <NavLinks />
      <GooglePlacesAutocomplete
        placeholder="rechercher"
        nearbyPlacesAPI="GoogleSearchPlaces"
        debounce={400}
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
        }}
        query={{
          key: REACT_APP_GOOGLE_API,
          language: "en",
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  nav: {
    padding: 20,
    height: "100%",
  },
  img: {
    height: 90,
    width: 90,
    resizeMode: "contain",
    marginLeft: 20,
  },
});
