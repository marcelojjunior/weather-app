import { WeatherData } from '@/@types/Weather';
import React from 'react';
import { Image, Text, View } from 'react-native';

interface CurrentWeatherProps {
    data: WeatherData | null | undefined;
    selectedCity: string;
}

export default function CurrentWeather({ data, selectedCity }: CurrentWeatherProps) {
    return (
        <View className='items-center'>
            <Text className='text-white text-xl font-regular mt-4'>
                Now in{' '}
                <Text className='font-bold'>{selectedCity}</Text>
            </Text>

            <View className='flex-row px-4 items-center'>
                <View className='items-center'>
                    <View className='flex-row'>
                        <Text className='text-white text-[100px] leading-tight font-bold'>
                            {Math.round(data?.current.temp_c ?? 0)}
                        </Text>
                        <Text className='text-white text-3xl font-medium mt-3'>°C</Text>
                    </View>

                    <View className='-mt-4 items-center'>
                        <Text className='text-white text-lg font-medium'>
                            {data?.current.condition.text}
                        </Text>

                        <View className='flex-row items-center'>
                            <Image source={require('../../assets/icons/up-arrow.png')} className='w-3 h-3 mr-1' />
                            <Text className='text-white text-base font-medium mr-2'>
                                {Math.round(data?.forecast?.forecastday[0].day.maxtemp_c ?? 0)}°C
                            </Text>
                            <Image source={require('../../assets/icons/up-arrow.png')} className='w-3 h-3 mr-1 rotate-180' />
                            <Text className='text-white text-base font-medium'>
                                {Math.round(data?.forecast?.forecastday[0].day.mintemp_c ?? 0)}°C
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}
