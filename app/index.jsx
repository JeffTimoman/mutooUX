import {
  View,
  Text,
  Image,
  Animated,
  PanResponder,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React, { useRef, useEffect, useState } from "react";
import images from "../constants/images";
import { router } from "expo-router";

const Index = () => {
  const [pan, setPan] = useState(new Animated.Value(0));
  const [panOffset, setPanOffset] = useState(0);

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const translateAnim = useRef(new Animated.Value(-10)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.parallel([
          Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
          }),
          Animated.timing(translateAnim, {
            toValue: 10,
            duration: 0,
            useNativeDriver: true,
          }),
        ]),
        Animated.parallel([
          Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 1500,
            useNativeDriver: true,
          }),
          Animated.timing(translateAnim, {
            toValue: -10,
            duration: 1500,
            useNativeDriver: true,
          }),
        ]),
      ])
    ).start();
  }, [fadeAnim, translateAnim]);

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (evt, gestureState) => {
        return Math.abs(gestureState.dx) > 10;
      },
      onPanResponderMove: (evt, gestureState) => {
        if (Math.abs(gestureState.dx) > Math.abs(gestureState.dy)) {
          if (gestureState.dx < 0) {
            pan.setValue(gestureState.dx + panOffset);
          }
        }
      },
      onPanResponderRelease: (evt, gestureState) => {
        if (gestureState.dx < -20) {
          Animated.timing(pan, {
            toValue: -350,
            duration: 300,
            useNativeDriver: true,
          }).start(() => router.push("(auth)/sign-in"));
        } else {
          Animated.timing(pan, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
          }).start();
        }
        setPanOffset(panOffset + gestureState.dx);
      },
    })
  ).current;

  return (
    <SafeAreaView className="flex-1 justify-center items-center">
      <ScrollView
        horizontal
        pagingEnabled
        scrollEnabled={false}
        contentContainerStyle={{ height: "100%", width: "100%" }}
        {...panResponder.panHandlers}
      >
        <Animated.View
          style={{
            transform: [{ translateX: pan }],
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
          className="flex-1 justify-center items-center"
        >
          <Image
            source={images.logo}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          />
          <Image
            source={images.cards}
            className="max-w-[380px] w-full h-[298px]"
            resizeMode="contain"
          />
          <View className="mt-5">
            <Text className="text-3xl font-bold text-center">
              Learn new skills{"\n"}
              & {"\n"}
              Make more friends
            </Text>
          </View>

          <Animated.View
            style={{
              opacity: fadeAnim,
              transform: [{ translateX: translateAnim }],
              marginTop: 20,
            }}
            className="items-center"
          >
            <Text className="text-lg font-bold text-center">
              {"< < <"} Swipe left to continue
            </Text>
          </Animated.View>
        </Animated.View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Index;
