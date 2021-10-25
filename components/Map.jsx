import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useSelector } from "react-redux";

export default function Map() {
  const { origin } = useSelector((state) => state.location);

  return (
    <MapView
      style={styles.map}
      mapType="mutedStandard"
      initialRegion={{
        latitude: origin.locationOrigin.lat,
        longitude: origin.locationOrigin.lng,
        latitudeDelta: 0.0022,
        longitudeDelta: 0.0021,
      }}
    >
      {origin?.locationOrigin && (
        <Marker
          coordinate={{
            longitude: origin.locationOrigin.lng,
            latitude: origin.locationOrigin.lat,
          }}
          title="Origin"
          description={origin.description}
          identifier="origin"
        />
      )}
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
