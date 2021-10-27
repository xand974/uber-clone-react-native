import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import { Icon } from "react-native-elements/dist/icons/Icon";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { rideOptions } from "../linkData";
import { useState } from "react";
export default function RideOptionCard() {
  const navigation = useNavigation();
  const [selectedItem, setSelectedItem] = useState(null);
  const { travelInfos } = useSelector((state) => state.location);

  console.log(travelInfos);

  const CHARGE_RATE = 1.5;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <TouchableOpacity style={styles.icon}>
          <Icon
            onPress={() => {
              navigation.navigate("NavigateCard");
            }}
            name="left"
            type="antdesign"
            color="#a3a3a3"
          />
        </TouchableOpacity>
        <Text style={styles.title}>Selectionnez votre trajet</Text>
      </View>
      {travelInfos?.status === "ZERO_RESULTS" ? (
        <Text style={styles.errorText}>Votre recherche n'est pas correct</Text>
      ) : (
        <>
          <View style={styles.flatListContainer}>
            <FlatList
              data={rideOptions}
              contentContainerStyle={styles.flatList}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.flatListItem(item, selectedItem)}
                  onPress={() => setSelectedItem(item)}
                >
                  <Image
                    style={styles.flatListImg}
                    source={{ uri: item.image }}
                  />
                  <View>
                    <Text style={styles.flatListTitle}>{item.title}</Text>
                    <Text style={styles.flatListTime}>
                      temps trajet : {travelInfos?.duration?.text}
                    </Text>
                  </View>
                  <View>
                    <Text style={styles.flatListPrice}>
                      €
                      {new Intl.NumberFormat("fr-FR", {
                        style: "currency",
                        currency: "EUR",
                      }).format(
                        (travelInfos?.duration?.value *
                          CHARGE_RATE *
                          item.multiplier) /
                          100
                      )}
                    </Text>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
          <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.btnText}>
                {selectedItem
                  ? `Choisir ${selectedItem?.title}`
                  : "Veuillez choisir un trajet "}
              </Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    padding: 10,
  },
  title: {
    textAlign: "center",
    fontWeight: "200",
    fontSize: 20,
    flex: 2,
  },
  errorText: {
    textAlign: "center",
    height: "100%",
    paddingTop: "50%",
    fontWeight: "bold",
    fontSize: 20,
  },
  flatListContainer: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  flatListItem: (item, selected) => ({
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: item.id === selected?.id ? "#eaeaea" : "white",
  }),
  flatListImg: {
    height: 70,
    width: 70,
    resizeMode: "contain",
    marginLeft: 10,
  },
  flatListTitle: {
    fontWeight: "bold",
    marginBottom: 3,
    fontSize: 16,
  },
  flatListTime: {
    fontSize: 11,
  },
  flatListPrice: {
    marginRight: 10,
    fontSize: 17,
    fontWeight: "bold",
  },
  btnContainer: {
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 10,
  },
  btn: { width: "90%", backgroundColor: "black", padding: 15 },
  btnText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
  },
});
