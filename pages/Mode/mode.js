import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Pressable, Vibration } from "react-native";
import Stats from "../../components/Stats/stats";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function Mode() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);
  const [background, setBackground] = useState("#404040");

  useEffect(() => {
    let timer;

    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [isRunning]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes < 10 ? "0" : ""}${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`;
  };

  const handleTouch = () => {
    Vibration.vibrate(10);
    setTimeout(() => {
      setBackground("#404040");
    }, 50);
    setCount((prevCount) => prevCount + 1);
    setBackground("#A0A0A0");
  };

  const handleStartStop = () => {
    Vibration.vibrate(50);
    setCount(0);
    setTime(0);
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setCount(0);
    setTime(0);
    setIsRunning(false);
  };

  return (
    <View style={styles.container}>
      <Stats />

      <View style={styles.block} backgroundColor={background}>
        <Pressable
          style={styles.button}
          onPress={handleTouch}
          disabled={!isRunning}
        >
          <View>
            <Text style={styles.h1}>{count}</Text>
          </View>
          <View>
            <Text style={styles.timeText}>{formatTime(time)}</Text>
          </View>
        </Pressable>

        <Pressable style={styles.startStopButton} onPress={handleStartStop}>
          <Text style={styles.text}>
            {isRunning ? (
              <MaterialCommunityIcons name="stop" size={80} color="#00A67E" />
            ) : (
              <MaterialCommunityIcons name="play" size={80} color="#00A67E" />
            )}
          </Text>
        </Pressable>
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
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
    borderRadius: 20,
  },
  h1: {
    fontSize: 100,
    fontWeight: "500",
    color: "white",
  },
  timeText: {
    fontSize: 30,
    color: "white",
    marginTop: 10,
  },
  button: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  startStopButton: {
    backgroundColor: "transparent",
    marginBottom: 100,
  },
  text: {
    color: "#00A67E",
    fontSize: 40,
    fontWeight: "bold",
  },
});
