import React from 'react';
import { Image, Text, View } from 'react-native';

export enum CardConditionsDetailsIcons {
    Wind = require('@/assets/icons/windy.png'),
    Humidity = require('@/assets/icons/humidity.png'),
    FeelsLike = require('@/assets/icons/thermometer.png'),
    Rain = require('@/assets/icons/rain.png'),
}

interface CardConditionsDetailsProps {
    title: string;
    number: number;
    unit: string;
    icon?: CardConditionsDetailsIcons;
}

export default function CardConditionsDetails({ title, number, unit, icon }: CardConditionsDetailsProps) {
    return (
        <View className='bg-gray-500/50 backdrop-blur-xl rounded-lg p-4 w-40 justify-between'>
            <Image
                source={icon}
                className='size-8'
            />
            <View className='mt-4'>
                <Text className='text-white text-sm font-poppins-regular'>
                    {title}
                </Text>
                <View className='flex-row items-end gap-1'>
                    <Text className='text-white text-2xl font-poppins-bold'>
                        {number}
                    </Text>
                    <Text className='text-white text-base font-poppins-regular mb-px'>
                        {unit}
                    </Text>
                </View>
            </View>
        </View>
    )
}
