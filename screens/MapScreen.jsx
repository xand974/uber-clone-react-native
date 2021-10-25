import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Map from "../components/Map";

export default function MapScreen() {
  return (
    <View>
      <View style={styles.top}>
        <Map />
      </View>
      <View style={styles.bottom}>
        <Text>dzadz</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  top: {
    height: "50%",
  },
  bottom: {
    backgroundColor: "red",
    height: "50%",
  },
});
