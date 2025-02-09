import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";

const TabLayout = () => {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" size={size} color="blue" />
          ),
          tabBarLabel: "Home",
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="user" size={size} color="blue" />
          ),
          tabBarLabel: "Profile",
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
