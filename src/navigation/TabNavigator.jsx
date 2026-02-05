import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Ionicons } from "@expo/vector-icons";
import CartScreen from "../screens/CartScreen";
import InfoScreen from "../screens/InfoScreen";
import HomeNavigator from "./HomeNavigator";
import CartNavigator from "./CartNavigator";
export default function TabNavigator() {
  const Tabs = createBottomTabNavigator();

  return (
    <Tabs.Navigator>
      <Tabs.Screen
        name="HomeTab"
        component={HomeNavigator}
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={28} color={color} />
          ),
          // headerShown: false,
        }}
      />
      <Tabs.Screen
        name="CartStack"
        component={CartNavigator}
        options={{
          title: "Cart",
          tabBarIcon: ({ color }) => (
            <Ionicons name="cart" size={28} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="Info"
        component={InfoScreen}
        options={{
          title: "Info",
          tabBarIcon: ({ color }) => (
            <Ionicons name="information-circle" size={28} color={color} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
}
