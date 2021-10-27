import React from "react";
import { StyleSheet, View, TouchableOpacity, SafeAreaView } from "react-native";
import Map from "../components/Map";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NavigateCard from "../components/NavigateCard";
import RideOptionCard from "../components/RideOptionCard";
const Stack = createNativeStackNavigator();
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
export default function MapScreen() {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        style={styles.icon}
        onPress={() => navigation.navigate("HomeScreen")}
      >
        <Icon name="bars" color="black" size={30} />
      </TouchableOpacity>
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
  icon: {
    position: "absolute",
    top: 60,
    left: 20,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 100,
    shadowColor: "#000",
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.2,
    elevation: 1,
    zIndex: 200,
  },
});
