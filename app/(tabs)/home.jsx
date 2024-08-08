import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { styled } from "nativewind";
import images from "../../constants/images";
import icons from "../../constants/icons";

import Post from "../../constants/classes/Post";
import { Link } from "expo-router";

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

const Home = () => {
  const posts = [];
  posts.push(
    new Post(
      "Cucurella",
      "cucurella",
      "GUYSS, Mauuu ceritaaa! Jadi kemarin tuh aku mau olahraga nah tapiii aku gampang bosenan nii olahraganyaa...",
      314000,
      29500,
      150000000,
      "userpic1",
      null
    )
  );
  posts.push(
    new Post(
      "Caramela Hadid",
      "caramelaHadid",
      "GUYSS, Mauuu ceritaaa! Jadi kemarin tuh aku mau olahraga nah tapi...",
      314000,
      29500,
      150000000,
      "userpic2",
      null
    )
  );
  posts.push(
    new Post(
      "Cucurella",
      "cucurella",
      "GUYSS, Mauuu ceritaaa! Jadi kemarin tuh aku mau olahraga nah tapiii aku gampang bosenan nii olahraganyaa...",
      314000,
      29500,
      150000000,
      "userpic1",
      "post1"
    )
  );
  posts.push(
    new Post(
      "Cucurella",
      "cucurella",
      "GUYSS, Mauuu ceritaaa! Jadi kemarin tuh aku mau olahraga nah tapiii aku gampang bosenan nii olahraganyaa...",
      314000,
      29500,
      150000000,
      "userpic1",
      null
    )
  );
  posts.push(
    new Post(
      "Caramela Hadid",
      "caramelaHadid",
      "GUYSS, Mauuu ceritaaa! Jadi kemarin tuh aku mau olahraga nah tapi...",
      314000,
      29500,
      150000000,
      "userpic2",
      null
    )
  );
  posts.push(
    new Post(
      "Cucurella",
      "cucurella",
      "GUYSS, Mauuu ceritaaa! Jadi kemarin tuh aku mau olahraga nah tapiii aku gampang bosenan nii olahraganyaa...",
      314000,
      29500,
      150000000,
      "userpic1",
      "post1"
    )
  );
  posts.push(
    new Post(
      "Cucurella",
      "cucurella",
      "GUYSS, Mauuu ceritaaa! Jadi kemarin tuh aku mau olahraga nah tapiii aku gampang bosenan nii olahraganyaa...",
      314000,
      29500,
      150000000,
      "userpic1",
      null
    )
  );
  posts.push(
    new Post(
      "Caramela Hadid",
      "caramelaHadid",
      "GUYSS, Mauuu ceritaaa! Jadi kemarin tuh aku mau olahraga nah tapi...",
      314000,
      29500,
      150000000,
      "userpic2",
      null
    )
  );
  posts.push(
    new Post(
      "Caramela Hadid",
      "cucurella",
      "GUYSS, Mauuu ceritaaa! Jadi kemarin tuh aku mau olahraga nah tapiii aku gampang bosenan nii olahraganyaa...",
      314000,
      29500,
      150000000,
      "userpic1",
      "post1"
    )
  );

  return (
    <ScrollView className="bg-white">
      {posts.map((post, index) => (
        <View
          key={index}
          className="flex-row px-5 pt-2 pb-1 bg-white border-b border-gray-300 w-full"
        >
          <Image className="w-10 h-10" source={images[post.profile]} />
          <View className="flex-col ml-4 pt-1">
            <StyledView className="flex-row items-center">
              <StyledText className="font-bold text-base">
                {post.getName()}
              </StyledText>
              <StyledText className="font-semibold text-base ml-2 opacity-50">
                @{post.getUsername()}
              </StyledText>
            </StyledView>
            <Text className="text-gray-600 mt-1 w-full max-w-[75vw] text-base">
              {post.getContent()}
              <Link href="/home" className="text-blue-400">
                Show More
              </Link>
            </Text>
            {post.getPostImage() ? (
              <Image
                className="w-full max-w-[70vw] max-h-[150px] mt-2 rounded-lg"
                source={images[post.getPostImage()]}
                resizeMethod="contain"
              />
            ) : null}
            <View className="flex-row mt-2 justify-between w-[220px]">
              <View className="flex-row align-center justify-center">
                <Image source={icons.comment} className="w-5 h-5" />
                <Text className="text-gray-700">
                  {formatNumber(post.getComment())}
                </Text>
              </View>
              <View className="flex-row align-center justify-center gap-1">
                <Image source={icons.retweet} className="w-4 h-4" />
                <Text className="text-gray-700">
                  {formatNumber(post.getRetweet())}
                </Text>
              </View>
              <View className="flex-row align-center justify-center gap-1">
                <Image source={icons.likes_filled} className="w-4 h-4" />
                <Text className="text-pink-700">
                  {formatNumber(post.getLikes())}
                </Text>
              </View>
              <View className="flex-row align-center justify-center gap-1">
                <Image source={icons.share} className="w-4 h-4" />
              </View>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default Home;
