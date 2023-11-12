import React from "react";
import { StyleSheet, Text, View, Pressable, Vibration } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Icons from "react-native-vector-icons/Ionicons";
import Defis from "../../pages/Defis/defis";
import Mode from "../../pages/Mode/mode";

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#00A67E",
        tabBarInactiveTintColor: "#E0E0E0",
        tabBarLabelStyle: {
          fontSize: 16,
          fontWeight: "bold",
        },
        tabBarStyle: {
          backgroundColor: "black",
          borderTopColor: "#202020",
        },
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Mode"
        component={Mode}
        options={{
          tabBarIcon: ({ color }) => (
            <Icons name="fitness" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Defis"
        component={Defis}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="table" size={30} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tab: {
    backgroundColor: "black",
  },
});
