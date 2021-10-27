import React from "react";
import { View, StyleSheet, Image, SafeAreaView } from "react-native";
import HistoryLink from "../components/HistoryLink";
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
      <View style={styles.googleWrapper}>
        <GooglePlacesAutocomplete
          placeholder="Votre Position"
          nearbyPlacesAPI="GoogleSearchPlaces"
          debounce={400}
          styles={googleStyle}
          enablePoweredByContainer={false}
          minLength={4}
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
      </View>
      <View style={styles.placeLink}>
        <HistoryLink />
      </View>
      <View style={styles.navLink}>
        <NavLinks />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  home: { height: "100%" },
  img: {
    height: 90,
    width: 90,
    resizeMode: "contain",
    marginLeft: 20,
    marginBottom: 30,
  },
  googleWrapper: { height: "20%", zIndex: 100 },
  placeLink: {},
  navLink: { height: "100%" },
});

const googleStyle = {
  container: {},
  textInput: {},
};
