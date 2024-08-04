import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const ContinueWithButton = ({logo, text}) => {
  return (
    <TouchableOpacity className="flex-row items-center bg-gray-200 p-4 rounded-lg mt-2 w-full">
      <Image source={logo} className="h-4 w-4" />
      <Text className="flex-grow text-center text-md">{text}</Text>
    </TouchableOpacity>
  );
}

export default ContinueWithButton