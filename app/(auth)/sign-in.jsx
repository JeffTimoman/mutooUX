import {
  View,
  Text,
  ScrollView,
  Image,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "../../constants/images";
import SignInInputForm from "../../components/auth/SignInInputForm";
import SubmitButton from "../../components/auth/SubmitButton";
import icons from "../../constants/icons";
import ContinueWithButton from "../../components/auth/ContinueWithButton";
import { Link, router } from "expo-router";

const SignIn = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const [isSubmit, setIsSubmit] = useState(false);
  const submitForm = () => {
    if (form.username === "" || form.password === "") {
      Alert.alert("Please fill in all fields.");
      return;
    }
    if (
      form.username.toLocaleLowerCase() == "unregistered" ||
      form.username == "unregistered@gmail.com"
    ) {
      Alert.alert("User not found, try registering instead.");
      return;
    }
    router.push("/home");
  };
  return (
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
        keyboardVerticalOffset={Platform.select({ ios: 0, android: 500 })}
        className="flex-1 bg-white h-full w-full justify-center mt-3"
      >
        <ScrollView>
          <View className="w-full flex justify-center items-center h-[85vh] px-4 my-6">
            <Image
              source={images.logo}
              className="w-[130px] h-[84px]"
              resizeMode="contain"
            />
            <SignInInputForm
              type="text"
              placeholder="Username or email"
              handleChangeText={(e) => {
                setForm({ ...form, username: e });
              }}
            />
            <SignInInputForm
              type="password"
              placeholder="Password"
              handleChangeText={(e) => {
                setForm({ ...form, password: e });
              }}
              otherStyles={`mt-2 bg-gray-300`}
            />
            <View className="mt-2 w-full px-2">
              <Text className="w-full text-right ">Forgot password?</Text>
            </View>
            <SubmitButton
              title="Sign in"
              handlePress={submitForm}
              containerStyles={`w-full mt-4`}
              isLoading={isSubmit}
            />
            <View className="w-full flex justify-center items-center mt-4">
              <View className="flex flex-row items-center w-full">
                <View className="border-b border-black flex-grow mr-2" />
                <Text className="mx-2">OR</Text>
                <View className="border-b border-black flex-grow ml-2" />
              </View>
            </View>
            <View className="justify-center items-center mt-2">
              <ContinueWithButton
                logo={icons.google}
                text="Continue with Google"
              />
              <ContinueWithButton logo={icons.meta} text="Continue with Meta" />
              <ContinueWithButton
                logo={icons.apple}
                text="Continue with Apple"
              />
            </View>
            <View className="border-t border-gray-700 w-full mt-16 flex items-center w-full opacity-70 ">
              <Text className="mt-1">
                {`Still don't have an account? `}
                <Link href="/sign-up" className="underline decoration-1 ">
                  Register Now
                </Link>
              </Text>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
  );
};

export default SignIn;
