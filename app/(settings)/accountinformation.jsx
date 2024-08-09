import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { styled } from "nativewind";

import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import images from "../../constants/images"; // Assume you have an image path here
const StyledView = styled(View);
const StyledText = styled(Text);
import { useRouter } from "expo-router";

const AccountInformation = () => {
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
            <Text className="text-xl font-bold">Account Information</Text>
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

        <StyledView className="items-center mt-6">
          <Image
            source={images.zeepic} // Example user pic
            className="w-24 h-24 rounded-full"
          />
          <TouchableOpacity onPress={() => router.back()}>
            <StyledText className="mt-2 text-blue-500 text-[14px] font-medium">
              Change profile photo
            </StyledText>
          </TouchableOpacity>
        </StyledView>

        <StyledView className="mt-8">
          <StyledText className="text-gray-400 text-[15px] font-semibold">
            Name
          </StyledText>
          <StyledText className="border-b border-gray-300 py-2 text-[15px]">
            Azizi Shafaa A.
          </StyledText>

          <StyledText className="text-gray-400 text-[15px] font-semibold mt-4">
            Username
          </StyledText>
          <StyledText className="border-b border-gray-300 py-2 text-[15px]">
            aziziasadel_
          </StyledText>

          <StyledText className="text-gray-400 text-[15px] font-semibold mt-4">
            Email
          </StyledText>
          <StyledText className="border-b border-gray-300 py-2 text-[15px]">
            aziziasadel@gmail.com
          </StyledText>

          <StyledText className="text-gray-400 text-[15px] font-semibold mt-4">
            Bio
          </StyledText>
          <StyledText className="border-b border-gray-300 py-2 text-[15px] text-blue-500">
            JKT48
          </StyledText>

          <StyledText className="text-gray-400 text-[15px] font-semibold mt-4">
            Gender
          </StyledText>
          <StyledText className="border-b border-gray-300 py-2 text-[15px] text-blue-500">
            Female
          </StyledText>
        </StyledView>
      </StyledView>
    </SafeAreaView>
  );
};

export default AccountInformation;
