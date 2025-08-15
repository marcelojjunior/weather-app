import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

interface CityListItemProps {
  name: string;
  country: string;
  region?: string;
  onPress: () => void;
  showIcon?: boolean;
}

export default function CityListItem({
  name,
  country,
  region,
  onPress,
  showIcon = false,
}: CityListItemProps) {
  return (
    <TouchableOpacity
      className="flex-row items-center justify-between py-4 px-4 border-b border-gray-200"
      onPress={onPress}
    >
      <View className="flex-row items-center flex-1">
          <Image
            source={require('@/assets/icons/location.png')}
            className='size-5 mr-3'
          />
        <View className="flex-1">
          <Text className="text-base font-semibold text-white">
            {name}
          </Text>
          <Text className="text-sm font-regular text-white">
            {region ? `${region} - ${country}` : country}
          </Text>
        </View>
      </View>
      <Image
        source={require('@/assets/icons/back.png')}
        className='size-5 rotate-180'
      />
    </TouchableOpacity>
  );
}
