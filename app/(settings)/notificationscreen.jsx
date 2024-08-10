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
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const StyledView = styled(View);
const StyledText = styled(Text);

const NotificationsScreen = () => {
  const router = useRouter();

  // State for each switch
  const [isPushNotifications, setIsPushNotifications] = useState(false);
  const [isLikes, setIsLikes] = useState(false);
  const [isComments, setIsComments] = useState(false);
  const [isNewFollowers, setIsNewFollowers] = useState(false);
  const [isDirectMessages, setIsDirectMessages] = useState(false);
  const [isMentions, setIsMentions] = useState(false);
  const [isFriendsPosts, setIsFriendsPosts] = useState(false);

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
        </View>

        <StyledView className="mt-8">
          <StyledText className="text-gray-600 mb-2">
            Push Notifications
          </StyledText>
          <StyledView className="flex-row justify-between items-center mb-6">
            <StyledText>Push Notifications</StyledText>
            <Switch
              value={isPushNotifications}
              onValueChange={setIsPushNotifications}
              trackColor={{ false: "#f4f3f4", true: "#2F27CE" }}
              thumbColor={isPushNotifications ? "#f4f3f4" : "#f4f3f4"}
            />
          </StyledView>

          <StyledText className="text-gray-500 mb-2">Interactions</StyledText>
          <StyledView className="flex-row justify-between items-center mb-4">
            <StyledText>Likes</StyledText>
            <Switch
              value={isLikes}
              onValueChange={setIsLikes}
              trackColor={{ false: "#f4f3f4", true: "#2F27CE" }}
              thumbColor={isLikes ? "#f4f3f4" : "#f4f3f4"}
            />
          </StyledView>
          <StyledView className="flex-row justify-between items-center mb-4">
            <StyledText>Comments</StyledText>
            <Switch
              value={isComments}
              onValueChange={setIsComments}
              trackColor={{ false: "#f4f3f4", true: "#2F27CE" }}
              thumbColor={isComments ? "#f4f3f4" : "#f4f3f4"}
            />
          </StyledView>
          <StyledView className="flex-row justify-between items-center mb-4">
            <StyledText>New Followers</StyledText>
            <Switch
              value={isNewFollowers}
              onValueChange={setIsNewFollowers}
              trackColor={{ false: "#f4f3f4", true: "#2F27CE" }}
              thumbColor={isNewFollowers ? "#f4f3f4" : "#f4f3f4"}
            />
          </StyledView>
          <StyledView className="flex-row justify-between items-center mb-4">
            <StyledText>Direct Messages</StyledText>
            <Switch
              value={isDirectMessages}
              onValueChange={setIsDirectMessages}
              trackColor={{ false: "#f4f3f4", true: "#2F27CE" }}
              thumbColor={isDirectMessages ? "#f4f3f4" : "#f4f3f4"}
            />
          </StyledView>
          <StyledView className="flex-row justify-between items-center mb-4">
            <StyledText>Mentions</StyledText>
            <Switch
              value={isMentions}
              onValueChange={setIsMentions}
              trackColor={{ false: "#f4f3f4", true: "#2F27CE" }}
              thumbColor={isMentions ? "#f4f3f4" : "#f4f3f4"}
            />
          </StyledView>
          <StyledView className="flex-row justify-between items-center mb-4">
            <StyledText>Friend's Posts</StyledText>
            <Switch
              value={isFriendsPosts}
              onValueChange={setIsFriendsPosts}
              trackColor={{ false: "#f4f3f4", true: "#2F27CE" }}
              thumbColor={isFriendsPosts ? "#f4f3f4" : "#f4f3f4"}
            />
          </StyledView>
        </StyledView>
      </StyledView>
    </SafeAreaView>
  );
};

export default NotificationsScreen;
