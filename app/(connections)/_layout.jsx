import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import icons from "../../constants/icons";
import { Stack } from "expo-router";

const ConnectionsLayout = () => {
  return (
    <Stack>
      {/* This will render `connections.jsx` as the default screen for this stack */}
      <Stack.Screen name="connections" options={{ headerShown: true }} />
      {/* This will render `postscreen.jsx` when the route is `connections/post` */}
      <Stack.Screen name="posts" options={{ headerShown: false }} />
      <Stack.Screen name="postscreen" options={{ headerShown: false }} />
    </Stack>
  );
};

export default ConnectionsLayout;
