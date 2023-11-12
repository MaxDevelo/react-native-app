import * as React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Stats from "../Stats/stats";

export default function Header() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen component={Stats} name="HomeScreen" />
        <Stack.Screen component={Stats} name="ProfileScreen" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
