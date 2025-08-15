import React from 'react';
import { Image, View } from 'react-native';

import LoadingImage from '@/assets/icons/loading.png';

interface LoadingSpinnerProps {
  size?: number;
}

export default function LoadingSpinner({ size = 40 }: LoadingSpinnerProps) {
  return (
    <View className="p-4 items-center">
      <View className="animate-spin">
        <Image
          source={LoadingImage}
          style={{ width: size, height: size }}
          className=""
        />
      </View>
    </View>
  );
}
