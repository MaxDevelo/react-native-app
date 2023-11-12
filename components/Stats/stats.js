import React from "react";
import { StyleSheet, Text, View, Pressable, Vibration } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function Stats() {
  return (
    <View style={styles.block}>
      <Text style={styles.text}>TEST</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 0.2,
    backgroundColor: "black",
    alignItems: "",
    justifyContent: "center",
    alignItems: "center",
    height: 100,
  },
  text: {
    color: "#00A67E",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 50,
  },
});
