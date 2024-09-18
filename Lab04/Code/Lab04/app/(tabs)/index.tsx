import React from "react";
import Tiki_OK from "@/components/layout/Tiki_OK";
import Generate_Password from "@/components/layout/Generate_Password";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";

export default function App() {
  const Tabs = createBottomTabNavigator();

  return (
    <Tabs.Navigator>
      <Tabs.Screen
        name="Tiki_OK"
        component={Tiki_OK}
        options={{
          tabBarIcon: ({ color }) => <FontAwesome name="shopping-cart" size={24} color={color} />,
          headerShown: false,
          unmountOnBlur: true,
        }}
      />
      <Tabs.Screen
        name="Generate_Password"
        component={Generate_Password}
        options={{
          tabBarIcon: ({ color }) => <FontAwesome name="lock" size={24} color={color} />,
          headerShown: false,
          unmountOnBlur: true,
        }}
      />
    </Tabs.Navigator>
  );
}
