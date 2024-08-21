import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { styled } from "nativewind";
import images from "../../constants/images";
import { useRouter } from "expo-router";
import { launchImageLibrary } from "react-native-image-picker";

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTextInput = styled(TextInput);
const StyledTouchableOpacity = styled(TouchableOpacity);

const PostScreen = () => {
  const router = useRouter();
  const [postContent, setPostContent] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [dropdownVisible, setDropdownVisible] = useState(false); // State to manage dropdown visibility
  const [selectedOption, setSelectedOption] = useState("Everyone"); // State to manage selected option

  // Function to open the image picker
  const openGallery = () => {
    const options = {
      mediaType: "photo",
      quality: 1,
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.errorCode) {
        console.log("ImagePicker Error: ", response.errorMessage);
      } else if (response.assets && response.assets.length > 0) {
        const source = { uri: response.assets[0].uri };
        setSelectedImage(source); // Save the selected image
      }
    });
  };

  const handlePost = () => {
    const newPost = {
      content: postContent,
      image: selectedImage,
      visibility: selectedOption, // Add visibility option to the post
    };

    // Navigate back to the Profile screen with the new post
    router.push({
      pathname: "/profile",
      params: { newPost },
    });
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setDropdownVisible(false); // Hide dropdown after selecting an option
  };

  return (
    <StyledView className="flex-1 bg-white pt-10">
      {/* Header */}
      <StyledView className="flex-row justify-between items-center p-4 border-b border-gray-800">
        <StyledTouchableOpacity onPress={() => router.back()}>
          <StyledText className="text-black">Cancel</StyledText>
        </StyledTouchableOpacity>
        <StyledTouchableOpacity
          className="bg-blue-500 py-2 px-4 rounded-full"
          onPress={handlePost} // Handle post click
        >
          <StyledText className="text-white font-bold">Post</StyledText>
        </StyledTouchableOpacity>
      </StyledView>

      {/* Post Input Area */}
      <StyledView className="flex-row items-start p-4">
        <Image
          source={images.zeepic} // Replace with a valid image URL
          className="w-[60px] h-[60px] rounded-full"
        />
        <StyledView className="flex-1 ml-4">
          {/* Visibility Option */}
          <StyledTouchableOpacity
            className="flex-row items-center mb-2"
            onPress={() => setDropdownVisible(!dropdownVisible)} // Toggle dropdown visibility
          >
            <StyledText className="text-blue-400">{selectedOption}</StyledText>
            <Ionicons name="chevron-down" size={16} color="blue" />
          </StyledTouchableOpacity>

          {/* Dropdown List */}
          {dropdownVisible && (
            <StyledView className="bg-white border border-gray-300 rounded-lg mt-2">
              {["Everyone", "Private", "Friends"].map((option) => (
                <StyledTouchableOpacity
                  key={option}
                  onPress={() => handleOptionSelect(option)} // Handle option select
                  className="p-2"
                >
                  <StyledText className="text-black">{option}</StyledText>
                </StyledTouchableOpacity>
              ))}
            </StyledView>
          )}

          <StyledTextInput
            value={postContent}
            onChangeText={setPostContent}
            placeholder="What's happening?"
            placeholderTextColor="#666"
            multiline
            className="text-black text-lg"
            style={{ minHeight: 100 }}
          />
          {/* Display the selected image */}
          {selectedImage && (
            <Image
              source={selectedImage}
              className="w-full h-[200px] mt-4 rounded-lg"
              resizeMode="cover"
            />
          )}
        </StyledView>
      </StyledView>

      {/* Footer Icons */}
      <StyledView className="flex-row justify-between items-center px-4 py-2 border-t border-gray-800">
        <StyledText className="text-blue-400">Everyone can reply</StyledText>
        <StyledView className="flex-row">
          <Ionicons name="attach-outline" size={24} color="blue" />
          <MaterialCommunityIcons
            name="image-outline"
            size={24}
            color="blue"
            style={{ marginLeft: 15 }}
            onPress={openGallery} // Open gallery on press
          />
        </StyledView>
      </StyledView>
    </StyledView>
  );
};

export default PostScreen;
