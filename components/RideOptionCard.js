import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { useSelector } from "react-redux";
export default function RideOptionCard() {
  const { destination } = useSelector((state) => state.location);

  console.log(destination);

  return (
    <SafeAreaView>
      <Text>ride option card</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {},
});
