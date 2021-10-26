import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { setDestination } from "../redux/locationSlice";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { REACT_APP_GOOGLE_API } from "@env";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "react-native-elements/dist/icons/Icon";
import HistoryLink from "./HistoryLink";

export default function NavigateCard() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.navigateCardContainer}>
      <Text style={styles.textPresentation}>Bonjour Alexandre</Text>
      <View style={styles.googleWrapper}>
        <View>
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
              navigation.navigate("RideOptionCard");
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
        <View style={styles.navCardLink}>
          <View style={styles.navCardDrive}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("RideOptionCard");
              }}
            >
              <Icon name="car" type="antdesign" color="white" />
              <Text style={{ color: "white" }}>Voyager</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.navCardEat}>
            <TouchableOpacity>
              <Icon name="pizza-outline" type="ionicon" color="black" />
              <Text>Manger</Text>
            </TouchableOpacity>
          </View>
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
  placeLink: {
    flex: 1,
    padding: 20,
  },
  navCardLink: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 40,
  },
  navCardDrive: {
    backgroundColor: "black",
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 5,
    paddingTop: 5,
    borderRadius: 10,
  },
  navCardEat: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 5,
    paddingTop: 5,
    borderRadius: 10,
  },
});

const googleInput = {
  container: {
    flex: 0,
  },
  textInput: {
    backgroundColor: "#eaeaea",
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    color: "black",
    borderRadius: 0,
  },
};
