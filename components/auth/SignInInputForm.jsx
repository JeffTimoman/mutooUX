import { View, TextInput, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import icons from "../../constants/icons";
const SignInInputForm = ({
  type,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  inputStyles,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View>
      <View
        className={`w-full h-12 px-4 rounded-2xl border-2 border-gray-300 flex flex-row items-center focus:border-accent ${otherStyles}`}
      >
        <TextInput
          className={`flex-1 text-gray-500 ${inputStyles}`}
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#090909"
          onChangeText={handleChangeText}
          secureTextEntry={type === "password" && !showPassword}
          {...props}
        />

        {type === "password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.eye_hide}
              className="w-6 h-6"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default SignInInputForm;
