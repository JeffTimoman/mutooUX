import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { styled } from "nativewind";
import images from "../../constants/images"; // Assume you have an image path here
const StyledView = styled(View);
const StyledText = styled(Text);
import { useRouter } from "expo-router";

const PasswordScreen = () => {
  const router = useRouter();
  return (
    <SafeAreaView className="flex-1 bg-white">
      <StyledView className="flex-1 bg-white px-4">
        <View className="flex-row items-center px-4 py-2 relative">
          <TouchableOpacity
            onPress={() => router.back()}
            className="absolute left-0 p-4 z-10"
          >
            <FontAwesome name="chevron-left" size={24} color="black" />
          </TouchableOpacity>
          <View className="flex-1 items-center">
            <Text className="text-xl font-bold">Password</Text>
          </View>
          <TouchableOpacity
            className="absolute right-0 top-3 right-2"
            onPress={() => router.back()}
          >
            <StyledText className="text-blue-500 text-[16px] font-medium">
              Done
            </StyledText>
          </TouchableOpacity>
        </View>

        <StyledView className="mt-8">
          <StyledText className="text-gray-600">Change Password</StyledText>
          <StyledText className="text-gray-500 mt-2">
            This password should be different from the previous password and
            must be: a minimum of 8 characters, containing one uppercase, one
            lowercase, one special character, and one number.
          </StyledText>

          <StyledText className="mt-6 text-gray-600">
            Current Password (Last Updated 05/12/2020)
          </StyledText>
          <TextInput
            className="border-b border-gray-300 py-2"
            placeholder="Current Password"
            secureTextEntry
          />

          <StyledText className="mt-6 text-gray-600">New Password</StyledText>
          <TextInput
            className="border-b border-gray-300 py-2"
            placeholder="New Password"
            secureTextEntry
          />

          <StyledText className="mt-6 text-gray-600">
            Re-type New Password
          </StyledText>
          <TextInput
            className="border-b border-gray-300 py-2"
            placeholder="Re-type New Password"
            secureTextEntry
          />
        </StyledView>
      </StyledView>
    </SafeAreaView>
  );
};

export default PasswordScreen;
