import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Redirect, Stack } from "expo-router";

const AuthLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="aboutscreen"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="accountinformation"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="helpcenterscreen"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="notificationscreen"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="passwordscreen"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="privacysafetyscreen"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </>
  );
};

export default AuthLayout;

const styles = StyleSheet.create({});
