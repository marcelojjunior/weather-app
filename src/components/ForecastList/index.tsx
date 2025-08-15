import { WeatherData } from '@/@types/Weather';
import moment from 'moment';
import React from 'react';
import { Image, Text, View } from 'react-native';

interface ForecastListProps {
  data: WeatherData | null | undefined;
}

export default function ForecastList({ data }: ForecastListProps) {
  function formatDate(dateString: string): string {
    const date = moment(dateString).toDate();
    const today = moment().toDate();
    const tomorrow = moment(today).add(1, 'days').toDate();

    if (date.toDateString() === tomorrow.toDateString()) return 'Tomorrow';

    return moment(date).format('dddd');
  }

  if (!data?.forecast?.forecastday) {
    return null;
  }

  return (
    <View className='px-4 mt-6'>
      <View className="bg-gray-500/50 backdrop-blur-xl rounded-3xl px-4 overflow-hidden">
        {data.forecast.forecastday.slice(1).map((day) => (
          <View key={day.date} className="flex-row items-center justify-between py-4 border-b border-white/20">
            <View className="flex-1">
              <Text className="text-white text-base font-semibold">
                {formatDate(day.date)}
              </Text>
              <Text className="text-white text-sm font-regular capitalize">
                {day.day.condition.text}
              </Text>
            </View>

            <View className="flex-row items-center">
              <Image
                source={{ uri: `https:${day.day.condition.icon}` }}
                className="w-10 h-10 mr-4"
              />
              <View className='flex-row items-center'>
                <Image source={require('@/assets/icons/up-arrow.png')} className='w-3 h-3 mr-1' />
                <Text className='text-white text-base font-medium mr-2'>
                  {Math.round(day.day.maxtemp_c)}°
                </Text>
                <Image source={require('@/assets/icons/up-arrow.png')} className='w-3 h-3 mr-1 rotate-180' />
                <Text className='text-white text-base font-medium'>
                  {Math.round(day.day.mintemp_c)}°
                </Text>
              </View>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}
