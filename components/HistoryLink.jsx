import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";

import { linkPlacesData } from "../linkData";
import { Icon } from "react-native-elements/dist/icons/Icon";

export default function HistoryLink() {
  return (
    <FlatList
      data={linkPlacesData}
      containerContentStyle={styles.flatList}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity>
          <View style={styles.flatListItem}>
            <Icon
              name={item.icon}
              style={styles.flatListIcon}
              type={item.by}
              color="black"
            />
            <View>
              <Text style={styles.flatListItemTitle}>{item.title}</Text>
              <Text style={styles.flatListItemDescription}>
                {item.description}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  flatListItem: {
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
    backgroundColor: "#eaeaea",
    padding: 10,
    borderRadius: 10,
  },
  flatListIcon: {
    marginRight: 10,
  },
  flatListItemTitle: {
    fontWeight: "bold",
  },
});
