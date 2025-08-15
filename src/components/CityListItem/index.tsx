import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

interface CityListItemProps {
  name: string;
  country: string;
  region?: string;
  onPress: () => void;
  showIcon?: boolean;
  // iconName?: keyof typeof Ionicons.glyphMap;
}

export default function CityListItem({ 
  name, 
  country, 
  region, 
  onPress, 
  showIcon = false,
  // iconName = 'time-outline'
}: CityListItemProps) {
  return (
    <TouchableOpacity
      className="flex-row items-center justify-between py-4 px-4 border-b border-gray-200"
      onPress={onPress}
    >
      <View className="flex-row items-center flex-1">
        {/* {showIcon && (
          <Ionicons name={iconName} size={20} color="#fff" className="mr-3" />
        )} */}
        <View className="flex-1">
          <Text className="text-base font-poppins-medium text-white">
            {name}
          </Text>
          <Text className="text-sm font-poppins-regular text-white">
            {region ? `${region} - ${country}` : country}
          </Text>
        </View>
      </View>
      {/* <Ionicons name="chevron-forward" size={20} color="#fff" /> */}
    </TouchableOpacity>
  );
}
