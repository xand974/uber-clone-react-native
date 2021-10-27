import React, { useEffect, useRef } from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { useDispatch, useSelector } from "react-redux";
import { REACT_APP_GOOGLE_API } from "@env";
import { setTravelInfos } from "../redux/locationSlice";

export default function Map() {
  const { origin, destination, travelInfos } = useSelector(
    (state) => state.location
  );
  const mapRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!origin && !destination) return;
    mapRef?.current.fitToSuppliedMarkers(["origin", "destination"], {
      edgePadding: { top: 10, bottom: 10, left: 10, right: 10 },
    });
  }, [origin, destination]);

  useEffect(() => {
    if (!origin || !destination) return;
    const getTravelInfos = async () => {
      try {
        const res = await fetch(
          `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${origin.description}&destinations=${destination.description}&key=${REACT_APP_GOOGLE_API}`
        );
        const data = await res.json();
        dispatch(setTravelInfos(data.rows[0].elements[0]));
      } catch (err) {
        console.log(err);
      }
    };
    getTravelInfos();
  }, [origin, destination, REACT_APP_GOOGLE_API]);

  return (
    <MapView
      ref={mapRef}
      style={styles.map}
      mapType="mutedStandard"
      initialRegion={{
        latitude: origin.locationOrigin.lat,
        longitude: origin.locationOrigin.lng,
        latitudeDelta: 0.0022,
        longitudeDelta: 0.0021,
      }}
    >
      {origin && destination && (
        <MapViewDirections
          origin={origin.description}
          destination={destination.description}
          apikey={REACT_APP_GOOGLE_API}
          strokeWidth={3}
          strokeColor="#161313"
        />
      )}
      {origin?.locationOrigin && (
        <Marker
          coordinate={{
            longitude: origin.locationOrigin.lng,
            latitude: origin.locationOrigin.lat,
          }}
          title="Origine"
          description={origin.description}
          identifier="origin"
        />
      )}
      {destination?.locationOrigin && (
        <Marker
          coordinate={{
            longitude: destination.locationOrigin.lng,
            latitude: destination.locationOrigin.lat,
          }}
          title="Destination"
          description={destination.description}
          identifier="destination"
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
