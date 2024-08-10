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
    </Stack>
  );
};

export default ConnectionsLayout;
