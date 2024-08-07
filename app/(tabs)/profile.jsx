import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { styled } from "nativewind";
import { Link } from "expo-router";
import images from "../../constants/images";
import icons from "../../constants/icons";
import Post from "../../constants/classes/Post";
import { Ionicons, MaterialIcons } from "@expo/vector-icons"; // Ensure these are installed via expo

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledImage = styled(Image);

const formatNumber = (number) => {
  if (number === undefined || number === null) {
    return "0";
  }
  if (number >= 1000000000) {
    return (number / 1000000000).toFixed(0) + "B";
  } else if (number >= 1000000) {
    return (number / 1000000).toFixed(0) + "M";
  } else if (number >= 1000) {
    return (number / 1000).toFixed(0) + "K";
  } else {
    return number.toString();
  }
};

const Profile = () => {
  const [activeTab, setActiveTab] = useState("Posts");

  const posts = [
    new Post(
      "Azizi Shafaa A.",
      "Haloo, udah malem nih, km ga bobo?",
      314000,
      29500,
      150000000,
      "zeepic",
      null
    ),
    new Post(
      "Azizi Shafaa A.",
      "GUYSS, Mauuu ceritaaa! Jadi kemarin tuh aku mau olahraga nah tapi...",
      314000,
      29500,
      150000000,
      "zeepic",
      null
    ),
    new Post(
      "Azizi Shafaa A.",
      "3 Musketeer 🤭🤭🤭",
      314000,
      29500,
      150000000,
      "zeepic",
      "post1"
    ),
    new Post(
      "Azizi Shafaa A.",
      "Pagi yang cerah, semangat pagi!",
      314000,
      29500,
      150000000,
      "zeepic",
      "zeepic1"
    ),
  ];

  const likedPosts = [
    new Post(
      "Nick Mathew",
      "Day 1! Let's go! #PEJUANGCIBITUNG",
      541,
      143,
      24321,
      "nick",
      "cibitung"
    ),
    new Post(
      "Nick Mathew",
      "Sehat-Sehat Kalian Semua! #WASPADAMONTY",
      1200,
      300,
      5000,
      "nick",
      "batamis"
    ),
    new Post(
      "Marcelino Joshua",
      "Bakal kangen Widiancok nih! #H-2",
      123,
      3022,
      2432,
      "josh",
      "widi"
    ),
    new Post("Nick Mathew", "❤️❤️❤️", 123, 3022, 2432, "nick", "artemians"),
  ];

  const handleTabPress = (tab) => {
    setActiveTab(tab);
  };

  const renderPosts = () =>
    posts.map((post, index) => (
      <StyledView
        key={index}
        className="flex-row px-5 pt-2 pb-1 bg-white border-b border-gray-300 w-full"
      >
        <StyledImage
          className="w-10 h-10 rounded-full"
          source={images[post.getProfile()]}
        />
        <StyledView className="flex-col ml-4 pt-1">
          <StyledText className="font-bold text-base">
            @{post.getUsername()}
          </StyledText>
          <StyledText className="text-gray-600 mt-1 w-full max-w-[75vw] text-base">
            {post.getContent()}{" "}
          </StyledText>
          {post.getPostImage() && (
            <StyledImage
              className="w-full w-[70vw] h-[150px] mt-2 rounded-lg"
              source={images[post.getPostImage()]}
              resizeMethod="contain"
            />
          )}
          <StyledView className="flex-row mt-2 justify-between w-[220px]">
            <StyledView className="flex-row items-center">
              <StyledImage source={icons.comment} className="w-5 h-5 mr-1" />
              <StyledText className="text-gray-700">
                {formatNumber(post.getComment())}
              </StyledText>
            </StyledView>
            <StyledView className="flex-row items-center">
              <StyledImage source={icons.retweet} className="w-4 h-4 mr-1" />
              <StyledText className="text-gray-700">
                {formatNumber(post.getRetweet())}
              </StyledText>
            </StyledView>
            <StyledView className="flex-row items-center">
              <StyledImage
                source={icons.likes_filled}
                className="w-4 h-4 mr-1"
              />
              <StyledText className="text-pink-700">
                {formatNumber(post.getLikes())}
              </StyledText>
            </StyledView>
            <StyledImage source={icons.share} className="w-4 h-4" />
          </StyledView>
        </StyledView>
      </StyledView>
    ));

  const renderLikes = () =>
    likedPosts.map((post, index) => (
      <StyledView
        key={index}
        className="flex-row px-5 pt-2 pb-1 bg-white border-b border-gray-300 w-full"
      >
        <StyledImage
          className="w-10 h-10 rounded-full"
          source={images[post.getProfile()]}
        />
        <StyledView className="flex-col ml-4 pt-1">
          <StyledText className="font-bold text-base">
            @{post.getUsername()}
          </StyledText>
          <StyledText className="text-gray-600 mt-1 w-full max-w-[75vw] text-base">
            {post.getContent()}{" "}
          </StyledText>
          {post.getPostImage() && (
            <StyledImage
              className="w-full w-[70vw] h-[150px] mt-2 rounded-lg"
              source={images[post.getPostImage()]}
              resizeMethod="contain"
            />
          )}
          <StyledView className="flex-row mt-2 justify-between w-[220px]">
            <StyledView className="flex-row items-center">
              <StyledImage source={icons.comment} className="w-5 h-5 mr-1" />
              <StyledText className="text-gray-700">
                {formatNumber(post.getComment())}
              </StyledText>
            </StyledView>
            <StyledView className="flex-row items-center">
              <StyledImage source={icons.retweet} className="w-4 h-4 mr-1" />
              <StyledText className="text-gray-700">
                {formatNumber(post.getRetweet())}
              </StyledText>
            </StyledView>
            <StyledView className="flex-row items-center">
              <StyledImage
                source={icons.likes_filled}
                className="w-4 h-4 mr-1"
              />
              <StyledText className="text-pink-700">
                {formatNumber(post.getLikes())}
              </StyledText>
            </StyledView>
            <StyledImage source={icons.share} className="w-4 h-4" />
          </StyledView>
        </StyledView>
      </StyledView>
    ));

  return (
    <ScrollView className="bg-white">
      <StyledView className="relative">
        <StyledImage
          source={images.profile_background}
          className="w-full h-40"
        />
        <StyledView className="absolute top-24 left-5 flex-row items-center">
          <StyledImage
            source={images.zeepic}
            className="w-24 h-24 rounded-full border-4 border-white"
          />
          <TouchableOpacity className="bg-gray-200 py-2 px-4 rounded-full mt-20 ml-24 left-16">
            <StyledText className="text-gray-700 font-bold">
              Edit Profile
            </StyledText>
          </TouchableOpacity>
        </StyledView>
      </StyledView>

      <StyledView className="px-5">
        <StyledText className="text-2xl font-bold mt-12">
          Azizi Shafaa A.
        </StyledText>
        <StyledText className="text-gray-600">@aziziasadel_</StyledText>
        <StyledView className="flex-row mt-2">
          <StyledText className="text-gray-700 mr-5">
            <MaterialIcons name="calendar-today" size={16} color="black" />{" "}
            Joined May 14th 2018
          </StyledText>
          <StyledText className="text-gray-700">
            <Ionicons name="star" size={16} color="black" /> 3 Skills Mastered
          </StyledText>
        </StyledView>

        <StyledView className="flex-row justify-around mt-5">
          <TouchableOpacity onPress={() => handleTabPress("Following")}>
            <StyledText className="text-gray-700">2M Following</StyledText>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleTabPress("Followers")}>
            <StyledText className="text-gray-700">1.403 Followers</StyledText>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleTabPress("Swappers")}>
            <StyledText className="text-gray-700">12 Swappers</StyledText>
          </TouchableOpacity>
        </StyledView>

        <StyledView className="flex-row mt-5 border-b border-gray-300">
          <TouchableOpacity
            onPress={() => handleTabPress("Posts")}
            className="flex-1"
          >
            <StyledView className="relative items-center">
              <StyledText
                className={`font-bold text-center py-2 ${
                  activeTab === "Posts" ? "text-[#2f27ce]" : "text-gray-700"
                }`}
              >
                Posts
              </StyledText>
              {activeTab === "Posts" && (
                <StyledView className="absolute bottom-0 left-0 right-0 h-1 bg-[#2f27ce]" />
              )}
            </StyledView>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleTabPress("My Skills")}
            className="flex-1"
          >
            <StyledView className="relative items-center">
              <StyledText
                className={`font-bold text-center py-2 ${
                  activeTab === "My Skills" ? "text-[#2f27ce]" : "text-gray-700"
                }`}
              >
                My Skills
              </StyledText>
              {activeTab === "My Skills" && (
                <StyledView className="absolute bottom-0 left-0 right-0 h-1 bg-[#2f27ce]" />
              )}
            </StyledView>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleTabPress("Recent Swap")}
            className="flex-1"
          >
            <StyledView className="relative items-center">
              <StyledText
                className={`font-bold text-center py-2 ${
                  activeTab === "Recent Swap"
                    ? "text-[#2f27ce]"
                    : "text-gray-700"
                }`}
              >
                Recent Swap
              </StyledText>
              {activeTab === "Recent Swap" && (
                <StyledView className="absolute bottom-0 left-0 right-0 h-1 bg-[#2f27ce]" />
              )}
            </StyledView>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleTabPress("Likes")}
            className="flex-1"
          >
            <StyledView className="relative items-center">
              <StyledText
                className={`font-bold text-center py-2 ${
                  activeTab === "Likes" ? "text-[#2f27ce]" : "text-gray-700"
                }`}
              >
                Likes
              </StyledText>
              {activeTab === "Likes" && (
                <StyledView className="absolute bottom-0 left-0 right-0 h-1 bg-[#2f27ce]" />
              )}
            </StyledView>
          </TouchableOpacity>
        </StyledView>
      </StyledView>

      {activeTab === "Posts" && renderPosts()}

      {activeTab === "My Skills" && (
        <StyledView className="mt-10 px-5">
          <StyledText className="font-bold">Expertize</StyledText>
          <StyledText className="text-gray-700 mt-2">
            Fencing - Mastered Since 2018
          </StyledText>
          <StyledText className="font-bold mt-5">Learning</StyledText>
          <StyledText className="text-gray-700 mt-2">
            Coding - Learning Since 2023
          </StyledText>
          <StyledText className="font-bold mt-5">Wishlist</StyledText>
          <StyledText className="text-gray-700 mt-2">
            Hacking - Want to learn in 2024
          </StyledText>
        </StyledView>
      )}

      {activeTab === "Recent Swap" && (
        <StyledView className="mt-10 px-5">
          <StyledText className="font-bold">Today</StyledText>
          <StyledText className="text-gray-700 mt-2">
            Nick Mathew @niickmathew
          </StyledText>
          <StyledText className="font-bold mt-5">This Week</StyledText>
          <StyledText className="text-gray-700 mt-2">
            Marcelino Joe @joshua__
          </StyledText>
        </StyledView>
      )}

      {activeTab === "Likes" && renderLikes()}
    </ScrollView>
  );
};

export default Profile;
