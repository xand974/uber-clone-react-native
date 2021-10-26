import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { linkNavData } from "../linkData";
import { Icon } from "react-native-elements/dist/icons/Icon";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

export default function NavLinks() {
  const { origin } = useSelector((state) => state.location);
  const navigation = useNavigation();
  return (
    <View>
      <FlatList
        data={linkNavData}
        contentContainerStyle={styles.flatList}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={origin && (() => navigation.navigate(item.screen))}
            >
              <View style={styles.container(origin)}>
                <Image style={styles.img} source={{ uri: item.image }} />
                <Text style={styles.text}>{item.title}</Text>
                <View style={styles.icon_wrapper}>
                  <Icon
                    style={styles.icon}
                    name="arrowright"
                    color="white"
                    type="antdesign"
                  />
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  flatList: {
    flex: 1,
    justifyContent: "space-around",
    marginBottom: 0,
  },
  container: (origin) => ({
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    opacity: !origin ? 0.3 : 1,
    elevation: 2,
    textAlign: "center",
    padding: 20,
    width: 170,
    height: 200,
  }),
  icon_wrapper: {
    alignItems: "flex-start",
  },
  img: {
    height: 90,
    width: 90,
    resizeMode: "contain",
    marginBottom: 10,
  },
  text: {
    fontWeight: "bold",
  },
  icon: {
    backgroundColor: "black",
    padding: 6,
    borderRadius: 50,
    marginTop: 10,
  },
});
