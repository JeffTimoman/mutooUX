import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, FlatList, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useRouter, useLocalSearchParams } from "expo-router";
import images from "../../constants/images";
import icons from "../../constants/icons";
import User from "../../constants/classes/User";

const tabs = ["Followers", "Following", "Swappers"];

const Connections = () => {
  const router = useRouter();
  const { tab } = useLocalSearchParams(); // Get the tab parameter from the route
  const [selectedTab, setSelectedTab] = useState(tab || "Followers");

  const [followersData, setFollowersData] = useState([
    new User("Nick Mathew", "niickmathew", images.nick, true, true, false),
    new User("Jane Doe", "janedoe", images.userpic1, false, true, false),
    new User("Alice Johnson", "alicej", images.userpic2, false, true, false),
    new User("Michael Smith", "mikesmith", images.userpic3, true, true, false),
    new User("Sarah Connor", "sconnor", images.widi, true, true, false),
    new User("David Brown", "dbrown", images.zeepic, false, true, false),
    new User("Chris Evans", "cevans", images.zeepic1, false, true, false),
    new User("Emily White", "ewhite", images.batamis, false, true, false),
    new User(
      "Robert Pattinson",
      "rpattinson",
      images.artemians,
      false,
      true,
      false
    ),
    new User("Emma Watson", "ewatson", images.cibitung, false, true, false),
    new User("Daniel Radcliffe", "dradcliffe", images.josh, false, true, false),
  ]);

  const [followingData, setFollowingData] = useState([
    new User("Nick Mathew", "niickmathew", images.nick, true, true, false),
    new User("Michael Smith", "mikesmith", images.userpic3, true, true, false),
    new User("Sarah Connor", "sconnor", images.widi, true, true, false),
    new User("David Brown", "dbrown", images.zeepic, true, true, false),
    new User("Chris Evans", "cevans", images.zeepic1, true, true, false),
    new User("Emily White", "ewhite", images.batamis, true, true, false),
    new User(
      "Robert Pattinson",
      "rpattinson",
      images.artemians,
      true,
      true,
      false
    ),
    new User("Emma Watson", "ewatson", images.cibitung, true, true, false),
    new User("Daniel Radcliffe", "dradcliffe", images.josh, true, true, false),
    new User("Mark Ruffalo", "mruffalo", images.nick, true, true, false),
    new User(
      "Scarlett Johansson",
      "sjohansson",
      images.userpic1,
      true,
      true,
      false
    ),
  ]);

  const [swappersData, setSwappersData] = useState([
    new User("Nick Mathew", "niickmathew", images.nick, true, false, true),
    new User("Jane Doe", "janedoe", images.userpic1, true, false, true),
    new User("Alice Johnson", "alicej", images.userpic2, true, false, true),
    new User("Michael Smith", "mikesmith", images.userpic3, true, false, true),
    new User("Sarah Connor", "sconnor", images.widi, true, false, true),
    new User("David Brown", "dbrown", images.zeepic, true, false, true),
    new User("Chris Evans", "cevans", images.zeepic1, true, false, true),
    new User("Emily White", "ewhite", images.batamis, true, false, true),
    new User(
      "Robert Pattinson",
      "rpattinson",
      images.artemians,
      true,
      false,
      true
    ),
    new User("Emma Watson", "ewatson", images.cibitung, true, false, true),
    new User("Daniel Radcliffe", "dradcliffe", images.josh, true, false, true),
    new User("Tom Holland", "tholland", images.nick, true, false, true),
    new User(
      "Chris Hemsworth",
      "chemsworth",
      images.userpic1,
      true,
      false,
      true
    ),
  ]);

  useEffect(() => {
    if (tab) {
      setSelectedTab(tab); // Update the selected tab based on the passed parameter
    }
  }, [tab]);

  const getData = () => {
    switch (selectedTab) {
      case "Following":
        return followingData;
      case "Swappers":
        return swappersData;
      default:
        return followersData;
    }
  };

  const toggleFollow = (username) => {
    // Update the state for the relevant tab
    const updateData = (data, setData) => {
      const updatedData = data.map((user) => {
        if (user.getUsername() === username) {
          return new User(
            user.getName(),
            user.getUsername(),
            user.getProfile(),
            !user.getIsFollowing(), // Toggle following status
            user.getIsFollowers(),
            user.getIsSwappers()
          );
        }
        return user;
      });
      setData(updatedData);
    };

    switch (selectedTab) {
      case "Following":
        updateData(followingData, setFollowingData);
        break;
      case "Swappers":
        updateData(swappersData, setSwappersData);
        break;
      default:
        updateData(followersData, setFollowersData);
        break;
    }
  };

  const renderItem = ({ item }) => (
    <View className="flex-row justify-between items-center my-2">
      <View className="flex-row items-center">
        <Image
          source={item.getProfile()}
          className="w-10 h-10 rounded-full mr-2"
        />
        <View>
          <Text className="text-base font-semibold">{item.getName()}</Text>
          <Text className="text-gray-500">@{item.getUsername()}</Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => toggleFollow(item.getUsername())}
        className={`px-4 py-2 border ${
          item.getIsFollowing()
            ? "bg-[#2f27ce] border-[#2f27ce]"
            : "border-[#2f27ce]"
        } rounded-full flex-row items-center`}
      >
        <Text
          className={`${
            item.getIsFollowing() ? "text-white" : "text-blue-600"
          } font-semibold`}
        >
          {item.getIsFollowing() ? "Following" : "Follow"}
        </Text>
        <Image
          source={item.getIsFollowing() ? icons.check : icons.add}
          className="w-auto h-4"
        />
      </TouchableOpacity>
    </View>
  );

  return (
    <View className="flex-1 bg-white">
      <View className="flex-row items-center px-4 py-2 relative">
        <TouchableOpacity
          onPress={() => router.back()}
          className="absolute left-0 p-4 z-10"
          style={{ zIndex: 1 }}
        >
          <FontAwesome name="chevron-left" size={24} color="black" />
        </TouchableOpacity>
        <View className="flex-1 items-center gap-2">
          <Text className="text-xl font-bold">Azizi Shafaa A.</Text>
          <Text className="text-gray-600 text-[18px] font-bold mb-[2px]">
            Lists
          </Text>
        </View>
      </View>
      <View className="flex-row justify-between px-4 my-3 border-b border-gray-200">
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab}
            onPress={() => setSelectedTab(tab)}
            className={`flex-1 items-center pb-2 ${
              selectedTab === tab ? "border-b-2 border-[#2f27ce]" : ""
            }`}
          >
            <Text
              className={`${
                selectedTab === tab ? "text-[#2f27ce]" : "text-gray-500"
              } font-bold text-[16px]`}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <FlatList
        data={getData()}
        renderItem={renderItem}
        keyExtractor={(item) => item.username}
        contentContainerStyle={{ paddingHorizontal: 16, paddingTop: 8 }}
      />
    </View>
  );
};

export default Connections;
