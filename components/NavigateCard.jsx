import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import { setDestination } from "../redux/locationSlice";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { REACT_APP_GOOGLE_API } from "@env";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { setExpandTrue, setExpandFalse } from "../redux/animationSlice";

export default function NavigateCard() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleTouchStart = () => {
    dispatch(setExpandTrue());
  };
  return (
    <SafeAreaView style={styles.navigateCardContainer}>
      <Text style={styles.textPresentation}>Bonjour Alexandre</Text>
      <View style={styles.googleWrapper}>
        <View onTouchStart={handleTouchStart}>
          <GooglePlacesAutocomplete
            placeholder="Où allez vous ?"
            nearbyPlacesAPI="GoogleSearchPlaces"
            debounce={400}
            enablePoweredByContainer={false}
            minLength={4}
            styles={googleInput}
            currentLocation={true}
            currentLocationLabel="Ma Localisation"
            onPress={(data, details = null) => {
              dispatch(
                setDestination({
                  locationOrigin: details.geometry.location,
                  description: data.description,
                })
              );
              dispatch(setExpandFalse());
              navigation.navigate("RideOptionCard");
            }}
            fetchDetails={true}
            query={{
              key: REACT_APP_GOOGLE_API,
              language: "en",
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  navigateCardContainer: {
    backgroundColor: "white",
    flex: 1,
  },
  textPresentation: {
    fontSize: 20,
    marginTop: 20,
    textAlign: "center",
    fontWeight: "200",
    letterSpacing: 1,
  },
  googleWrapper: {
    height: "100%",
  },
});

const googleInput = {
  container: {
    flex: 0,
  },
  textInput: {
    backgroundColor: "#d1d1d1",
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    color: "white",
    borderRadius: 0,
  },
};
