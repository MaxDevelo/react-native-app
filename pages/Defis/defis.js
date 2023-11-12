import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Pressable, Vibration } from "react-native";
import Stats from "../../components/Stats/stats";
export default function Mode() {
  return (
    <View style={styles.container}>
      <Stats />
      <View style={styles.block}>
        <Text style={styles.h1}>Défis</Text>

        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  block: {
    flex: 1,
    backgroundColor: "#404040",
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
    borderRadius: 20,
  },
  h1: {
    fontSize: 70,
    marginBottom: 40,
    fontWeight: "bold",
    color: "#00A67E",
  },
  button: {
    width: 200,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    borderRadius: 100,
    backgroundColor: "transparent",
    borderWidth: 5,
    borderColor: "#00A67E",
  },
  buttonHover: {
    width: 200,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    borderRadius: 100,
    backgroundColor: "#F2F2F2",
    borderWidth: 5,
    borderColor: "#00A67E",
  },
  text: {
    color: "#00A67E",
    fontSize: 30,
    fontWeight: "bold",
  },
});
