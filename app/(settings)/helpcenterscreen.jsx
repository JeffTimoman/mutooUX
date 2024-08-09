import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { styled } from "nativewind";
import { FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import images from "../../constants/images";

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledImage = styled(Image);

const HelpCenterScreen = () => {
  const router = useRouter();
  const instructions = [
    {
      title: "How to Post?",
      description: "Learn how to post updates on our platform.",
      instructions: [
        "1. Go to the main feed screen.",
        "2. Tap the 'Write a post' button at the bottom.",
        "3. Enter your text and tap 'Post'.",
      ],
    },
    {
      title: "How to use SkillSwap features?",
      description:
        "Find and connect with users who have the skills you're interested in.",
      instructions: [
        "1. Go to the SkillSwap section from the main menu.",
        "2. Enter the skill you're looking for in the search bar.",
        "3. Browse the list of users with that skill.",
        "4. Tap on a user's profile, then tap 'Follow' and start a message.",
      ],
    },
    {
      title: "How to get Notifications?",
      description: "Set up and manage your notifications.",
      instructions: [
        "1. Open the Settings from the main menu.",
        "2. Go to the 'Notifications' section.",
        "3. Toggle the notifications you want to receive on or off.",
      ],
    },
  ];

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StyledView className="bg-white px-4">
        <View className="flex-row items-center px-4 py-2 relative">
          <TouchableOpacity
            onPress={() => router.back()}
            className="absolute left-0 p-4 z-10"
          >
            <FontAwesome name="chevron-left" size={24} color="black" />
          </TouchableOpacity>
          <View className="flex-1 items-center">
            <Text className="text-xl font-bold">Help Center</Text>
          </View>
        </View>
      </StyledView>
      <ScrollView className="flex-1 bg-white px-4">
        <StyledImage
          className="w-100vw h-50 left-[-15px]"
          source={images.helpcarousel} // Example user pic
        />
        {instructions.map((item, index) => (
          <StyledView key={index} className="mt-8">
            <StyledText className="text-lg font-bold mb-4">
              {item.title}
            </StyledText>
            <StyledText className="mb-2">{item.description}</StyledText>
            <StyledText className="font-bold mb-2">Instructions:</StyledText>
            {item.instructions.map((instruction, idx) => (
              <StyledText key={idx} className="mb-2">
                {instruction}
              </StyledText>
            ))}
          </StyledView>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HelpCenterScreen;
