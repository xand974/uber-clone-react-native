import React from "react";
import { View, Text, StyleSheet, Image, SafeAreaView } from "react-native";
import NavLinks from "../components/NavLinks";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { REACT_APP_GOOGLE_API } from "@env";
import { useDispatch } from "react-redux";
import { setOrigin } from "../redux/locationSlice";

export default function Home() {
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.home}>
      <Image
        style={styles.img}
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png",
        }}
      />
      <GooglePlacesAutocomplete
        placeholder="rechercher"
        nearbyPlacesAPI="GoogleSearchPlaces"
        debounce={400}
        enablePoweredByContainer={false}
        minLength={2}
        currentLocation={true}
        currentLocationLabel="Ma Localisation"
        onPress={(data, details = null) => {
          dispatch(
            setOrigin({
              locationOrigin: details.geometry.location,
              description: data.description,
            })
          );
        }}
        fetchDetails={true}
        query={{
          key: REACT_APP_GOOGLE_API,
          language: "en",
        }}
      />
      <NavLinks />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  home: {
    padding: 20,
    height: "70%",
  },
  img: {
    height: 90,
    width: 90,
    resizeMode: "contain",
    marginLeft: 20,
    marginBottom: 30,
  },
});
