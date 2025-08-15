import React from 'react';
import { ScrollView } from 'react-native';
import { WeatherData } from '@/@types/Weather';
import CardConditionsDetails, { CardConditionsDetailsIcons } from '../CardConditionsDetails';

interface WeatherCardsProps {
  data: WeatherData | null | undefined;
}

export default function WeatherCards({ data }: WeatherCardsProps) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ gap: 8, paddingHorizontal: 16 }}
      className='mt-4'
    >
      <CardConditionsDetails
        title="Wind"
        number={data?.current.wind_kph ?? 0}
        unit="km/h"
        icon={CardConditionsDetailsIcons.Wind}
      />
      <CardConditionsDetails
        title="Humidity"
        number={data?.current.humidity ?? 0}
        unit="%"
        icon={CardConditionsDetailsIcons.Humidity}
      />
      <CardConditionsDetails
        title="Rain Chance"
        number={parseInt(data?.forecast?.forecastday[0].day.daily_chance_of_rain ?? '0')}
        unit="%"
        icon={CardConditionsDetailsIcons.Rain}
      />
      <CardConditionsDetails
        title="Feels Like"
        number={Math.round(data?.current.feelslike_c ?? 0)}
        unit="°C"
        icon={CardConditionsDetailsIcons.FeelsLike}
      />
    </ScrollView>
  );
}
