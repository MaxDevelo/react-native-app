import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Icons from "react-native-vector-icons/Ionicons";
import Stats from "../../pages/Stats/stats";
import Defis from "../../pages/Defis/defis";
import Mode from "../../pages/Mode/mode";

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Mode"
        component={Mode}
        options={{
          tabBarIcon: () => <Icons name="fitness" size={30} color="#00A67E" />,
          tabBarLabelStyle: {
            fontSize: 16,
            fontWeight: "bold",
            color: "#00A67E",
          },
        }}
      />
      <Tab.Screen
        name="Defis"
        component={Defis}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons name="table" size={30} color="#00A67E" />
          ),
          tabBarLabelStyle: {
            fontSize: 16,
            fontWeight: "bold",
            color: "#00A67E",
          },
        }}
      />
    </Tab.Navigator>
  );
}
