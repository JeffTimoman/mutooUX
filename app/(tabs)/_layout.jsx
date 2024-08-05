import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import icons from "../../constants/icons";

const TabIcon = ({ icon, color}) => {
  return (
    <View className="flex items-center justify-center gap-2">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-5 h-5"
      />
    </View>
  );
};

const TabLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#2f27ce",
          tabBarInactiveTintColor: "gray",
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "#fff",

            height: 73,
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: true,
            headerTitle: "MUTOO",
            headerTitleAlign: "left",
            headerBackgroundContainerStyle: {
              height: 100,
              borderBottomColor: "black",
              borderBottomWidth: 0.5,
            },
            tabBarIcon: ({ color }) => (
              <TabIcon icon={icons.home} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="search"
          options={{
            title: "Search",
            headerShown: true,
            headerTitle: "Skill Swap",
            headerTitleAlign: "left",
            headerBackgroundContainerStyle: {
              height: 100,
              borderBottomColor: "black",
              borderBottomWidth: 0.5,
            },
            tabBarIcon: ({ color }) => (
              <TabIcon icon={icons.search} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: true,
            headerTitle: "Profile",
            headerTitleAlign: "left",
            headerBackgroundContainerStyle: {
              height: 100,
              borderBottomColor: "black",
              borderBottomWidth: 0.5,
            },
            tabBarIcon: ({ color }) => (
              <TabIcon icon={icons.profile} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="messages"
          options={{
            title: "Messages",
            headerShown: false,
            headerTitle: "Messages",
            headerTitleAlign: "left",
            headerBackgroundContainerStyle: {
              height: 100,
              borderBottomColor: "black",
              borderBottomWidth: 0.5,
            },
            tabBarIcon: ({ color }) => (
              <TabIcon icon={icons.bookmark} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            title: "Settings",
            headerShown: true,
            headerTitle: "Settings",
            headerTitleAlign: "left",
            headerBackgroundContainerStyle: {
              height: 73,
              borderBottomColor: "black",
              borderBottomWidth: 0.5,
            },
            tabBarIcon: ({ color }) => (
              <TabIcon icon={icons.settings} color={color} />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabLayout;

const styles = StyleSheet.create({});
