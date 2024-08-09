import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Switch,
  SafeAreaView,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { styled } from "nativewind";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const StyledView = styled(View);
const StyledText = styled(Text);

const PrivacySafetyScreen = () => {
  const router = useRouter();

  // State for switches and radio buttons
  const [isPrivateAccount, setIsPrivateAccount] = useState(false);
  const [allowSharePost, setAllowSharePost] = useState(false);
  const [allowProfileSharing, setAllowProfileSharing] = useState(false);

  // Radio button state
  const [replyOption, setReplyOption] = useState("Everyone");
  const [messageOption, setMessageOption] = useState("Everyone");

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
            <Text className="text-xl font-bold">Privacy and Safety</Text>
          </View>
          <TouchableOpacity
            className="absolute right-0 top-3 right-2"
            onPress={() => router.back()}
          ></TouchableOpacity>
        </View>

        <StyledView className="mt-8">
          <StyledText className="text-gray-600 mb-2">
            Account Privacy
          </StyledText>
          <StyledView className="flex-row justify-between items-center mb-6">
            <StyledText>Private Account</StyledText>
            <Switch
              value={isPrivateAccount}
              onValueChange={(value) => setIsPrivateAccount(value)}
              trackColor={{ false: "#f4f3f4", true: "#2F27CE" }}
              thumbColor={isPrivateAccount ? "#f4f3f4" : "#f4f3f4"}
            />
          </StyledView>

          <StyledText className="text-gray-600 mb-2">Sharing</StyledText>
          <StyledView className="flex-row justify-between items-center mb-6">
            <StyledText>Allow others to share your post</StyledText>
            <Switch
              value={allowSharePost}
              onValueChange={(value) => setAllowSharePost(value)}
              trackColor={{ false: "#f4f3f4", true: "#2F27CE" }}
              thumbColor={isPrivateAccount ? "#f4f3f4" : "#f4f3f4"}
            />
          </StyledView>
          <StyledView className="flex-row justify-between items-center mb-6">
            <StyledText>Allow profile sharing in messages</StyledText>
            <Switch
              value={allowProfileSharing}
              onValueChange={(value) => setAllowProfileSharing(value)}
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={allowProfileSharing ? "#f5dd4b" : "#f4f3f4"}
            />
          </StyledView>

          <StyledText className="text-gray-600 mb-2">
            Who can reply to your posts
          </StyledText>
          <StyledView className="mb-4">
            {[
              "Everyone",
              "All followers",
              "Followers you follow back",
              "Don’t allow post replies",
            ].map((option) => (
              <TouchableOpacity
                key={option}
                onPress={() => setReplyOption(option)}
                className="flex-row items-center mb-2"
              >
                <Ionicons
                  name={
                    replyOption === option
                      ? "radio-button-on"
                      : "radio-button-off"
                  }
                  size={24}
                  color={replyOption === option ? "#2F27CE" : "#ccc"}
                />
                <StyledText className="ml-2">{option}</StyledText>
              </TouchableOpacity>
            ))}
          </StyledView>

          <StyledText className="text-gray-600 mb-2">
            Who can send you direct messages
          </StyledText>
          <StyledView className="mb-4">
            {[
              "Everyone",
              "All followers",
              "Followers you follow back",
              "Don’t allow messages",
            ].map((option) => (
              <TouchableOpacity
                key={option}
                onPress={() => setMessageOption(option)}
                className="flex-row items-center mb-2"
              >
                <Ionicons
                  name={
                    messageOption === option
                      ? "radio-button-on"
                      : "radio-button-off"
                  }
                  size={24}
                  color={messageOption === option ? "#2F27CE" : "#ccc"}
                />
                <StyledText className="ml-2">{option}</StyledText>
              </TouchableOpacity>
            ))}
          </StyledView>
        </StyledView>
      </StyledView>
    </SafeAreaView>
  );
};

export default PrivacySafetyScreen;
