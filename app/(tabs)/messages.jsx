import { View, Text, ScrollView, TextInput, Image } from "react-native";
import React, { useState } from "react";
import images from "../../constants/images";

const chats = [
  {
    name: "Bayu Adimas",
    message:
      "Please tell me for the next meeting, I can't wait to see you again. Bayu, can..",
    time: "02.11",
    image: images.userpic3,
  },
  {
    name: "Angel Curtiz",
    message: "Yeah, I know it, Ran",
    time: "01.15",
    image: images.userpic3,
    unread: 1,
  },
  {
    name: "Mima Holly",
    message: "Oh, okay thank youuu",
    time: "Yesterday",
    image: images.userpic3,
    unread: 2,
  },
  {
    name: "Adam Brams",
    message: "Practice it two times a week, I believe it",
    time: "Yesterday",
    image: images.userpic3,
  },
  {
    name: "Kevin Amiro",
    message: "Practice it two times a week, I believe it",
    time: "Sunday",
    image: images.userpic3,
  },
  {
    name: "Rose Yamai B.",
    message: "Oh, okay thank youuu",
    time: "11/5/24",
    image: images.userpic3,
    unread: 2,
  },
  {
    name: "Bayu Adimas",
    message:
      "Please tell me for the next meeting, I can't wait to see you again. Bayu, can..",
    time: "02.11",
    image: images.userpic3,
  },
  {
    name: "Angel Curtiz",
    message: "Yeah, I know it, Ran",
    time: "01.15",
    image: images.userpic3,
    unread: 1,
  },
  {
    name: "Mima Holly",
    message: "Oh, okay thank youuu",
    time: "Yesterday",
    image: images.userpic3,
    unread: 2,
  },
  {
    name: "Adam Brams",
    message: "Practice it two times a week, I believe it",
    time: "Yesterday",
    image: images.userpic3,
  },
  {
    name: "Kevin Amiro",
    message: "Practice it two times a week, I believe it",
    time: "Sunday",
    image: images.userpic3,
  },
  {
    name: "Rose Yamai B.",
    message: "Oh, okay thank youuu",
    time: "11/5/24",
    image: images.userpic3,
    unread: 2,
  },
];

const Message = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (text) => {
    setSearchQuery(text);
  };

  // Filter chats based on the search query
  const filteredChats = chats.filter((chat) =>
    chat.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View className="flex-1 bg-white">
      <View className="flex flex-row align-center mt-12 p-5">
        <Image source={images.userpic3} className="w-11 h-11 rounded-full" />
        <Text className="mt-2 text-2xl font-bold ml-2 text-center">
          @raniazia_
        </Text>
      </View>
      <View className="px-4">
        <View className="flex flex-row items-center bg-gray-200 rounded-full px-4 pt-2 pb-3 mb-4">
          <TextInput
            placeholder="Search"
            className="flex-1 text-lg align-items-center"
            value={searchQuery}
            onChangeText={handleSearchChange}
          />
        </View>
      </View>
      <ScrollView className="flex-1">
        <Text className="px-4 text-xl"> Chats</Text>
        {filteredChats.map((chat, index) => (
          <View key={index} className="flex flex-row items-center mb-4 px-4">
            <Image
              source={chat.image}
              className="w-12 h-12 rounded-full mr-4"
            />
            <View className="flex-1">
              <Text className="text-lg font-semibold">{chat.name}</Text>
              <Text className="text-gray-500">{chat.message}</Text>
            </View>
            <View className="items-end">
              <Text className="text-gray-400">{chat.time}</Text>
              {chat.unread && (
                <View className="bg-blue-500 rounded-full w-6 h-6 flex items-center justify-center mt-1">
                  <Text className="text-white text-xs">{chat.unread}</Text>
                </View>
              )}
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Message;
