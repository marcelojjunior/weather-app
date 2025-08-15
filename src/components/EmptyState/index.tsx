import React from 'react';
import { Text, View } from 'react-native';


interface EmptyStateProps {
  text?: string;
}

export default function EmptyState({ text }: EmptyStateProps) {
  return (
    <View className="p-4 items-center">
      <Text className="text-white font-regular">
        {text}
      </Text>
    </View>
  );
}
