import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import React from "react";
import { styled } from "nativewind";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import icons from "../../constants/icons"; // Your icons

const StyledView = styled(View);
const StyledText = styled(Text);

const settings = [
  {
    icon: icons.accountinformation,
    text: "Account Information",
    description: "See information about your account.",
    path: "accountinformation",
  },
  {
    icon: icons.lock,
    text: "Password",
    description: "Change your password any time.",
    path: "passwordscreen",
  },
  {
    icon: icons.shield,
    text: "Privacy and Safety",
    description: "",
    path: "privacysafetyscreen",
  },
  {
    icon: icons.bell,
    text: "Notifications",
    description: "",
    path: "notificationscreen",
  },
  {
    icon: icons.question,
    text: "Help",
    description: "",
    path: "helpcenterscreen",
  },
  {
    icon: icons.info,
    text: "About",
    description: "",
    path: "aboutscreen",
  },
  {
    icon: icons.logout,
    text: "Logout",
    description: "",
  },
];

const Settings = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1 bg-white">
        <StyledText className="text-center text-xl font-bold mt-2 mb-6">
          Settings
        </StyledText>

        <StyledView className="px-4">
          {/* Your Account Section */}
          <StyledText className="text-gray-500 font-semibold mb-3">
            Your Account
          </StyledText>
          {settings.slice(0, 2).map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => item.path && router.push(item.path)}
              className="flex flex-row items-center mb-6"
            >
              <Image source={item.icon} style={{ width: 24, height: 24 }} />
              <StyledView className="ml-4 flex-1">
                <StyledText className="text-lg font-semibold">
                  {item.text}
                </StyledText>
                {item.description ? (
                  <StyledText className="text-gray-400 text-sm">
                    {item.description}
                  </StyledText>
                ) : null}
              </StyledView>
              <Ionicons name="chevron-forward-outline" size={20} color="gray" />
            </TouchableOpacity>
          ))}

          {/* Preferences Section */}
          <StyledText className="text-gray-500 font-semibold mb-3">
            Preferences
          </StyledText>
          {settings.slice(2, 4).map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => item.path && router.push(item.path)}
              className="flex flex-row items-center mb-6"
            >
              <Image source={item.icon} style={{ width: 24, height: 24 }} />
              <StyledView className="ml-4 flex-1">
                <StyledText className="text-lg font-semibold">
                  {item.text}
                </StyledText>
              </StyledView>
              <Ionicons name="chevron-forward-outline" size={20} color="gray" />
            </TouchableOpacity>
          ))}

          {/* Information and Support Section */}
          <StyledText className="text-gray-500 font-semibold mb-3">
            Information and Support
          </StyledText>
          {settings.slice(4, 6).map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => item.path && router.push(item.path)}
              className="flex flex-row items-center mb-6"
            >
              <Image source={item.icon} style={{ width: 24, height: 24 }} />
              <StyledView className="ml-4 flex-1">
                <StyledText className="text-lg font-semibold">
                  {item.text}
                </StyledText>
              </StyledView>
              <Ionicons name="chevron-forward-outline" size={20} color="gray" />
            </TouchableOpacity>
          ))}

          {/* Login Section */}
          <StyledText className="text-gray-500 font-semibold mb-3">
            Login
          </StyledText>
          <TouchableOpacity
            onPress={() => {
              // Handle logout logic here
            }}
            className="flex flex-row items-center mb-6"
          >
            <Image source={icons.logout} style={{ width: 24, height: 24 }} />
            <StyledView className="ml-4 flex-1">
              <StyledText className="text-lg font-semibold">Logout</StyledText>
            </StyledView>
            <Ionicons name="chevron-forward-outline" size={20} color="gray" />
          </TouchableOpacity>
        </StyledView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Settings;
