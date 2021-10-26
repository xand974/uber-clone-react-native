import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Map from "../components/Map";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NavigateCard from "../components/NavigateCard";
import RideOptionCard from "../components/RideOptionCard";
const Stack = createNativeStackNavigator();

export default function MapScreen() {
  return (
    <View>
      <View style={styles.top}>
        <Map />
      </View>
      <View style={styles.bottom}>
        <Stack.Navigator>
          <Stack.Screen
            name="NavigateCard"
            component={NavigateCard}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="RideOptionCard"
            component={RideOptionCard}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  top: {
    height: "50%",
  },
  bottom: {
    height: "50%",
  },
});
