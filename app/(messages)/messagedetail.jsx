import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import images from "../../constants/images";
import icons from "../../constants/icons";
import {router} from "expo-router";

const MessageDetail = () => {
  // State to manage messages and the current input
  const [messages, setMessages] = useState([
    {
      id: "1",
      text: "I've been looking to improve my game, Bayu..",
      timestamp: "15:22",
      sender: "me",
    },
    {
      id: "2",
      text: "That's a great idea! I'd love to share my knowledge.",
      timestamp: "15:56",
      sender: "other",
    },
    {
      id: "3",
      text: "Well, I'm a relatively new player",
      timestamp: "07:20",
      sender: "me",
    },
    {
      id: "4",
      text: "I'm hoping to work on the basics",
      timestamp: "07:20",
      sender: "me",
    },
    {
      id: "5",
      text: "I'd also like to work on strategy and tactics for singles and doubles",
      timestamp: "07:21",
      sender: "me",
    },
    {
      id: "6",
      text: "Sorry Rania, I didn't open Mutoo yesterday",
      timestamp: "01:10",
      sender: "other",
    },
    {
      id: "7",
      text: "I can definitely help you",
      timestamp: "01:10",
      sender: "other",
    },
    {
      id: "8",
      text: "Please tell me for the next meeting, I can't wait to see you!",
      timestamp: "02:11",
      sender: "me",
    },
  ]);

  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      const newMessage = {
        id: (messages.length + 1).toString(),
        text: input,
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        sender: "me",
      };
      setMessages([...messages, newMessage]);
      setInput("");
    }
  };

  return (
    <View className="flex-1 bg-white p-4 w-full">
      {/* Header */}
      <View className="mt-6">
        <TouchableOpacity
          onPress={() => router.back()}
          className="absolute left-0 p-4 z-10"
        >
          <FontAwesome name="chevron-left" size={24} color="black" />
        </TouchableOpacity>
        <View className="flex-column items-center justify-between mb-4">
          <Text className="text-lg font-bold">Bayu Adimas</Text>
          <Text className="text-sm text-gray-500">Tennis Player</Text>
        </View>
      </View>

      {/* Messages */}
      <ScrollView className="flex-1">
        <View className="space-y-3">
          {/* Messages */}
          {messages.map((message) => (
            <View
              key={message.id}
              className={`flex-row ${
                message.sender === "me" ? "justify-end" : ""
              }`}
            >
              {message.sender === "other" && (
                <Image
                  source={images.userpic3}
                  className="h-8 w-8 rounded-full"
                />
              )}
              <View
                className={`flex-row items-center ${
                  message.sender === "me" ? "ml-2" : ""
                }`}
              >
                {message.sender === "me" && (
                  <Text className="text-gray-500 text-xs mr-2">
                    {message.timestamp}
                  </Text>
                )}
                <View
                  className={`bg-${
                    message.sender === "me" ? "main" : "gray-300"
                  } rounded-lg p-2 max-w-[70vw]`}
                >
                  <Text
                    className={`${message.sender === "me" ? "text-white" : ""}`}
                  >
                    {message.text}
                  </Text>
                </View>
                {message.sender === "other" && (
                  <Text className="text-gray-500 text-xs ml-2">
                    {message.timestamp}
                  </Text>
                )}
              </View>
            </View>
          ))}

        </View>
      </ScrollView>

      {/* Footer */}
      <View className="flex-row items-center space-x-3 p-2 bg-gray-100 rounded-3xl">
        <TouchableOpacity>
          <Image source={icons.mail_img} className="h-5 w-5 text-gray-500" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={icons.mail_link} className="h-4 w-4 text-gray-500" />
        </TouchableOpacity>
        <TextInput
          placeholder="Write your message..."
          value={input}
          onChangeText={setInput}
          className="flex-1 p-2 rounded-lg"
        />
        <View className="bg-main rounded-2xl justify-center items-center flex w-7 h-7">
          <TouchableOpacity onPress={handleSend}>
            <Image source={icons.mail_send} className="h-5 w-5 mt-2" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default MessageDetail;
