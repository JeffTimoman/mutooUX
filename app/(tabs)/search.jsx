import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // or 'react-native-vector-icons/Ionicons'
import images from "../../constants/images";

// Custom class to store user information
class UserInfo {
  constructor(
    skills,
    image_name,
    distance,
    address,
    popularity,
    skillswap,
    added = false // New property to track if the user has been added
  ) {
    this.skills = skills;
    this.image_name = image_name;
    this.distance = distance;
    this.address = address;
    this.popularity = popularity;
    this.added = added; // Initialize as false
  }
}

const initialUserList = [
  new UserInfo(
    ["Tennis Player", "Soccer Player", "Basketball Player"],
    images.userpic4,
    80,
    "Pondok Gede, Jakarta Timur",
    Math.floor(Math.random() * 100) + 1,
    true
  ),
  new UserInfo(
    ["Tennis Player"],
    images.userpic5,
    100,
    "Pondok Gede, Jakarta Timur",
    Math.floor(Math.random() * 100) + 1,
    false
  ),
  new UserInfo(
    ["Tennis Player", "Basketball Player"],
    images.userpic5,
    100,
    "Pondok Gede, Jakarta Timur",
    Math.floor(Math.random() * 100) + 1,
    false
  ),
  new UserInfo(
    ["Tennis Player", "Basketball Player"],
    images.userpic5,
    100,
    "Pondok Gede, Jakarta Timur",
    Math.floor(Math.random() * 100) + 1,
    false
  ),
  new UserInfo(
    ["Tennis Player", "Basketball Player"],
    images.userpic5,
    100,
    "Pondok Gede, Jakarta Timur",
    Math.floor(Math.random() * 100) + 1,
    false
  ),
];

const Search = () => {
  const [userList, setUserList] = useState(initialUserList);
  const [filter, setFilter] = useState("All Categories");
  const [showSkillDropdown, setShowSkillDropdown] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState("");

  // Extract unique skills from all users
  const allSkills = [
    ...new Set(userList.flatMap((user) => user.skills)),
  ].sort();
  const applyFilter = (filter) => {
    let sortedList;
    switch (filter) {
      case "Popular":
        sortedList = [...userList].sort(
          (a, b) => b.skills.length - a.skills.length
        );
        break;
      case "Closest to You":
        sortedList = [...userList].sort((a, b) => a.distance - b.distance);
        break;
      case "Trending People":
        sortedList = [...userList].sort((a, b) => b.popularity - a.popularity);
        break;
      case "Skill Swap":
        sortedList = selectedSkill
          ? initialUserList.filter((user) =>
              user.skills.includes(selectedSkill)
            )
          : initialUserList;
        break;
      default:
        sortedList = initialUserList;
    }
    setUserList(sortedList);
    setFilter(filter);
  };

  const handleAddPerson = (index) => {
    const updatedUserList = [...userList];
    updatedUserList[index].added = !updatedUserList[index].added; // Toggle the added state
    setUserList(updatedUserList);
  };

  const handleSkillSelect = (skill) => {
    setSelectedSkill(skill);
    applyFilter("Skill Swap");
    setShowSkillDropdown(false); // Hide the dropdown after selecting a skill
  };

  return (
    <View className="bg-white h-full w-full p-0 m-0">
      {/* Search Bar */}
      <View className="px-4 mt-3 w-full">
        <View className="flex-row items-center bg-gray-200 px-4 py-2 rounded-l-lg rounded-tr-lg ">
          <TextInput
            placeholder="Search Skill, People, Location..."
            placeholderTextColor="#A0A0A0"
            className="flex-1 text-gray-800"
          />
          <Ionicons name="search" size={20} color="#A0A0A0" />
        </View>

        {/* Location Info */}
        <View className="pl-3">
          <View className="flex-row items-center bg-white px-4 py-2 rounded-bl-lg rounded-br-lg shadow-md ">
            <Ionicons name="location" size={20} color="#5F5CE6" />
            <Text className="ml-2 text-lg font-bold text-gray-800">
              Jalan Bala No. 13, Jakarta Timur
            </Text>
          </View>
        </View>
      </View>

      {/* Filter and Category Selection */}
      <View className="">
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View className="flex-row items-center mt-4 px-4 space-x-3">
            {/* Filter Icon */}
            <TouchableOpacity className="bg-indigo-500 p-1.5 rounded-xl">
              <Ionicons name="options" size={20} color="white" />
            </TouchableOpacity>

            {/* All Categories Button */}
            <TouchableOpacity
              className={`${
                filter === "All Categories"
                  ? "bg-indigo-500"
                  : "border border-indigo-500"
              } px-4 py-2 rounded-lg`}
              onPress={() => applyFilter("All Categories")}
            >
              <Text
                className={`${
                  filter === "All Categories" ? "text-white" : "text-indigo-500"
                } font-bold`}
              >
                All Categories
              </Text>
            </TouchableOpacity>

            {/* Skill Swap Dropdown */}
            <View>
              <TouchableOpacity
                className={`${
                  filter === "Skill Swap"
                    ? "bg-indigo-500"
                    : "border border-indigo-500"
                } px-4 py-2 rounded-lg`}
                onPress={() => setShowSkillDropdown(!showSkillDropdown)}
              >
                <Text
                  className={`${
                    filter === "Skill Swap" ? "text-white" : "text-indigo-500"
                  } font-bold`}
                >
                  Skill Swap
                </Text>
              </TouchableOpacity>

              {/* Dropdown List */}
            </View>

            {/* Trending People */}
            <TouchableOpacity
              className={`${
                filter === "Trending People"
                  ? "bg-indigo-500"
                  : "border border-indigo-500"
              } px-4 py-2 rounded-lg`}
              onPress={() => applyFilter("Trending People")}
            >
              <Text
                className={`${
                  filter === "Trending People"
                    ? "text-white"
                    : "text-indigo-500"
                } font-bold`}
              >
                Trending People
              </Text>
            </TouchableOpacity>

            {/* Closest to You */}
            <TouchableOpacity
              className={`${
                filter === "Closest to You"
                  ? "bg-indigo-500"
                  : "border border-indigo-500"
              } px-4 py-2 rounded-lg`}
              onPress={() => applyFilter("Closest to You")}
            >
              <Text
                className={`${
                  filter === "Closest to You" ? "text-white" : "text-indigo-500"
                } font-bold`}
              >
                Closest to You
              </Text>
            </TouchableOpacity>

            {/* Popular Skills */}
            <TouchableOpacity
              className={`${
                filter === "Popular"
                  ? "bg-indigo-500"
                  : "border border-indigo-500"
              } px-4 py-2 rounded-lg`}
              onPress={() => applyFilter("Popular")}
            >
              <Text
                className={`${
                  filter === "Popular" ? "text-white" : "text-indigo-500"
                } font-bold`}
              >
                Popular Skills
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
      {showSkillDropdown && (
        <View
          className="absolute mt-2 bg-white border border-indigo-500 rounded-lg shadow-lg w-[200px] mt-36 ml-24"
          style={{ zIndex: 999, elevation: 5 }}
        >
          <ScrollView>
            {allSkills.map((skill, index) => (
              <TouchableOpacity
                key={index}
                className="px-4 py-2 hover:bg-gray-200"
                onPress={() => handleSkillSelect(skill)}
              >
                <Text className="text-gray-800">{skill}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      )}

      {/* Users List */}
      <View className="pb-15 flex-1">
        <ScrollView className="p-2">
          {userList.map((user, index) => (
            <View
              key={index}
              className="flex-row p-4 flex items-center"
              style={{
                borderBottomWidth: 1,
                borderBottomColor: "black",
              }}
            >
              <Image
                source={user.image_name}
                className="w-[13vh] h-[13vh]"
                resizeMode="stretch"
              />
              <View className="w-[60vw] ml-2">
                <View className="flex-row flex justify-between items-center">
                  <Text className="font-bold text-lg">{`User ${
                    index + 1
                  }`}</Text>
                  <TouchableOpacity className="bg-indigo-500 px-2 py-1 rounded-lg">
                    <Text className="text-white font-bold text-sm">
                      View Profile
                    </Text>
                  </TouchableOpacity>
                </View>
                <View className="flex-row mt-2 items-center">
                  <Ionicons name="location-outline" size={20} color="black" />
                  <Text className="ml-1 text-gray-600">{user.address}</Text>
                </View>
                <View className="flex-row mt-2 items-center">
                  <Ionicons name="bag-outline" size={20} color="black" />
                  <Text className="ml-1 text-gray-600">
                    {user.skills[0]} {user.skills.length > 1 ? "and more" : ""}
                  </Text>
                </View>
                <View className="flex-row mt-2 items-center pr-5">
                  <Text className="ml-1 text font-light mr-2">
                    Saya adalah seorang pemain tennis berpengalaman selama 7
                    tahun ...
                  </Text>
                  <TouchableOpacity
                    onPress={() => handleAddPerson(index)} // Handle icon click
                    className="rounded-full p-1"
                    style={{
                      borderWidth: 1,
                      borderColor: "black",
                    }}
                  >
                    <Ionicons
                      name={user.added ? "person-add" : "person-add-outline"} // Use filled icon if added
                      size={20}
                      color={user.added ? "#2f27ce" : "black"} // Change color if added
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default Search;
