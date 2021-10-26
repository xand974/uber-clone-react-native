import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Map from "../components/Map";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NavigateCard from "../components/NavigateCard";
import RideOptionCard from "../components/RideOptionCard";
import { useSelector } from "react-redux";
const Stack = createNativeStackNavigator();

export default function MapScreen() {
  const { expand } = useSelector((state) => state.animation);

  return (
    <View>
      <View style={styles.top(expand)}>
        <Map />
      </View>
      <View style={styles.bottom(expand)}>
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
  top: (expand) => ({
    height: expand ? "0%" : "50%",
  }),
  bottom: (expand) => ({
    height: expand ? "100%" : "50%",
  }),
});
