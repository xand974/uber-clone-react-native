import React from "react";
import { View, Text, StyleSheet, Image, SafeAreaView } from "react-native";
import NavLinks from "../components/NavLinks";

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
