import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Pressable, Vibration } from "react-native";

export default function Mode() {
  let [count, setCount] = useState(0);
  const handlePressIn = () => {
    setCount(count + 1);
    Vibration.vibrate(1);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>{count}</Text>
      <Pressable
        style={({ pressed }) => ({
          ...(pressed ? styles.buttonHover : styles.button),
        })}
        onPress={handlePressIn}
      >
        <Text style={styles.text}>Push Ups</Text>
      </Pressable>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
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
