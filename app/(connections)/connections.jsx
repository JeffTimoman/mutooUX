import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { styled } from "nativewind";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import images from "../../constants/images";
import icons from "../../constants/icons";
import Post from "../../constants/classes/Post";

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

const Connections = () => {
  const [activeTab, setActiveTab] = useState("Posts");

  const connections = {
    following: 1403,
    followers: 2400000,
    swappers: 17,
  };

  const posts = [
    new Post(
      "Azizi Shafaa A.",
      "aziziasadel_",
      "Haloo, udah malem nih, km ga bobo?",
      314000,
      29500,
      150000000,
      "zeepic",
      null
    ),
    new Post(
      "Azizi Shafaa A.",
      "aziziasadel_",
      "GUYSS, Mauuu ceritaaa! Jadi kemarin tuh aku mau olahraga nah tapi ada Monty... Jadi aku kabur deh, soalnya kan #WASPADAMONTY",
      314000,
      29500,
      150000000,
      "zeepic",
      null
    ),
    new Post(
      "Azizi Shafaa A.",
      "aziziasadel_",
      "3 Musketeer 🤭🤭🤭",
      314000,
      29500,
      150000000,
      "zeepic",
      "post1"
    ),
    new Post(
      "Azizi Shafaa A.",
      "aziziasadel_",
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
      "niickmathew",
      "Day 1! Let's go! #PEJUANGCIBITUNG",
      541,
      143,
      24321,
      "nick",
      "cibitung"
    ),
    new Post(
      "Nick Mathew",
      "niickmathew",
      "Sehat-Sehat Kalian Semua! #WASPADAMONTY",
      1200,
      300,
      5000,
      "nick",
      "batamis"
    ),
    new Post(
      "Marcelino Joshua",
      "joshua__",
      "Bakal kangen Widiancok nih! #H-2",
      123,
      3022,
      2432,
      "josh",
      "widi"
    ),
    new Post(
      "Nick Mathew",
      "niickmathew",
      "❤️❤️❤️",
      123,
      3022,
      2432,
      "nick",
      "artemians"
    ),
  ];

  const skills = [
    { skill: "Fencing", masteredSince: "2018" },
    { skill: "Cooking", masteredSince: "2013" },
    { skill: "Roasting", masteredSince: "Born" },
    { skill: "Analyzing", masteredSince: "2019" },
    { skill: "Swimming", masteredSince: "2020" },
  ];

  const learning = [
    { skill: "Tennis", learningFor: "3" },
    { skill: "Muay Thai", learningFor: "5" },
    { skill: "Singing", learningFor: "" },
  ];

  const wishlist = [
    { skill: "Hacking", listedFrom: "4" },
    { skill: "Coding", listedFrom: "7" },
    { skill: "Sky Diving", listedFrom: "Born" },
    { skill: "Bullying", listedFrom: "15" },
  ];

  const recentToday = [
    { name: "Nick Mathew", username: "@niickmathew" },
    { name: "Marcelino Joshua", username: "@joshua__" },
  ];

  const recentWeek = [
    ...recentToday,
    { name: "Mirzha Chaerani", username: "@mirzhachrn_" },
    { name: "Clarensia Novia", username: "@clarennov" },
  ];

  const recentMonth = [
    ...recentWeek,
    { name: "Jefferson Timotius M.", username: "@jefftimoman" },
  ];

  const handleTabPress = (tab) => setActiveTab(tab);

  const renderPosts = () =>
    posts.map((post, index) => (
      <StyledView
        key={index}
        className="flex-row px-5 pt-2 pb-1 bg-white border-b border-gray-300 w-screen"
      >
        <StyledImage
          className="w-10 h-10 rounded-full"
          source={images[post.getProfile()]}
        />
        <StyledView className="flex-col ml-4 pt-1">
          <StyledView className="flex-row items-center">
            <StyledText className="font-bold text-base">
              {post.getName()}
            </StyledText>
            <StyledText className="font-semibold text-base ml-2 opacity-50">
              @{post.getUsername()}
            </StyledText>
          </StyledView>
          <StyledText className="text-gray-600 mt-1 w-full max-w-[75vw] text-base">
            {post.getContent()}{" "}
          </StyledText>
          {post.getPostImage() && (
            <StyledImage
              className="w-[75vw] h-[150px] mt-2 rounded-lg"
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
          <StyledView className="flex-row items-center">
            <StyledText className="font-bold text-base">
              {post.getName()}
            </StyledText>
            <StyledText className="font-semibold text-base ml-2 opacity-50">
              @{post.getUsername()}
            </StyledText>
          </StyledView>
          <StyledText className="text-gray-600 mt-1 w-full max-w-[75vw] text-base">
            {post.getContent()}{" "}
          </StyledText>
          {post.getPostImage() && (
            <StyledImage
              className="w-[75vw] h-[150px] mt-2 rounded-lg"
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

  const renderSkills = () =>
    skills.map((skill, index) => (
      <StyledView key={index} className="border-2 p-2 mt-2 mx-2 rounded">
        <StyledText className="text-gray-700 pl-1 pr-4 mb-2 font-extrabold">
          {skill.skill}
        </StyledText>
        <StyledText className="text-gray-700 pl-1 pr-4 my-2">
          Mastered Since {skill.masteredSince}
        </StyledText>
      </StyledView>
    ));

  const renderLearning = () =>
    learning.map((skill, index) => (
      <StyledView key={index} className="border-2 p-2 mt-2 mx-2 rounded">
        <StyledText className="text-gray-700 pl-1 pr-4 mb-2 font-extrabold">
          {skill.skill}
        </StyledText>
        <StyledText className="text-gray-700 pl-1 pr-4 my-2">
          Currently learning for {skill.learningFor} month(s)
        </StyledText>
      </StyledView>
    ));

  const renderWishlist = () =>
    wishlist.map((skill, index) => (
      <StyledView key={index} className="border-2 p-2 mt-2 mx-2 rounded">
        <StyledText className="text-gray-700 pl-1 pr-4 mb-2 font-extrabold">
          {skill.skill}
        </StyledText>
        <StyledText className="text-gray-700 pl-1 pr-4 my-2">
          Listed from {skill.listedFrom} month(s) ago
        </StyledText>
      </StyledView>
    ));

  const renderRecent = (recentItems) =>
    recentItems.map((recent, index) => (
      <StyledView key={index} className="border-2 p-2 mt-2 mx-2 rounded">
        <StyledText className="text-gray-700 pl-1 pr-4 mb-2 font-extrabold">
          {recent.name}
        </StyledText>
        <StyledText className="text-gray-700 pl-1 pr-4 my-2">
          {recent.username}
        </StyledText>
      </StyledView>
    ));

  const renderConnections = () => (
    <StyledView className="flex-row justify-around mt-5">
      <TouchableOpacity
        className="flex-1 items-center"
        onPress={() => handleTabPress("Followers")}
      >
        <StyledText className="text-gray-700 text-xl font-bold">
          {formatNumber(connections.followers)}
        </StyledText>
        <StyledText className="text-gray-500">Followers</StyledText>
      </TouchableOpacity>
      <TouchableOpacity
        className="flex-1 items-center"
        onPress={() => handleTabPress("Following")}
      >
        <StyledText className="text-gray-700 text-xl font-bold">
          {formatNumber(connections.following)}
        </StyledText>
        <StyledText className="text-gray-500">Following</StyledText>
      </TouchableOpacity>
      <TouchableOpacity
        className="flex-1 items-center"
        onPress={() => handleTabPress("Swappers")}
      >
        <StyledText className="text-gray-700 text-xl font-bold">
          {formatNumber(connections.swappers)}
        </StyledText>
        <StyledText className="text-gray-500">Swappers</StyledText>
      </TouchableOpacity>
    </StyledView>
  );

  return (
    <ScrollView className="bg-white">
      <StyledView className="relative">
        <StyledImage
          source={images.profile_background}
          className="w-full h-40"
        />
        <StyledView className="absolute top-24 left-5 flex-row items-center justify-between w-full">
          <StyledImage
            source={images.zeepic}
            className="w-24 h-24 rounded-full border-4 border-white"
          />
          <TouchableOpacity className="bg-gray-200 py-2 px-4 rounded-full mt-20 mr-10">
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
            <Ionicons name="star" size={16} color="black" /> 5 Skills Mastered
          </StyledText>
        </StyledView>

        {renderConnections()}

        <StyledView className="flex-row mt-5 border-b-2 border-gray-300 w-[100vw] left-[-20px]">
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
          <ScrollView className="flex-row" horizontal={true}>
            {renderSkills()}
          </ScrollView>

          <StyledText className="font-bold mt-5">Learning</StyledText>
          <ScrollView className="flex-row" horizontal={true}>
            {renderLearning()}
          </ScrollView>

          <StyledText className="font-bold mt-5">Wishlist</StyledText>
          <ScrollView className="flex-row" horizontal={true}>
            {renderWishlist()}
          </ScrollView>
        </StyledView>
      )}
      {activeTab === "Recent Swap" && (
        <StyledView className="mt-10 px-5">
          <StyledText className="font-bold">Today</StyledText>
          <ScrollView className="flex-row" horizontal={true}>
            {renderRecent(recentToday)}
          </ScrollView>

          <StyledText className="font-bold mt-5">This Week</StyledText>
          <ScrollView className="flex-row" horizontal={true}>
            {renderRecent(recentWeek)}
          </ScrollView>

          <StyledText className="font-bold mt-5">This Month</StyledText>
          <ScrollView className="flex-row" horizontal={true}>
            {renderRecent(recentMonth)}
          </ScrollView>
        </StyledView>
      )}
      {activeTab === "Likes" && renderLikes()}
    </ScrollView>
  );
};

export default Connections;
