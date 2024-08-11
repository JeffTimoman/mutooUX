import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router';

const MessageLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="messagedetail"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </>
  );
}

export default MessageLayout

const styles = StyleSheet.create({})