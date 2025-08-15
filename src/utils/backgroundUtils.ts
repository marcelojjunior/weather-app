import { WeatherConditionCode } from '../@types/Conditions';

import backgroundNeutral from '../assets/images/background/backgroundSearchLocation.jpeg';
import backgroundCloudDay from '../assets/images/background/CloudDay.jpeg';
import backgroundCloudNight from '../assets/images/background/CloudNight.jpeg';
import backgroundDay from '../assets/images/background/Day.jpeg';
import backgroundNight from '../assets/images/background/Night.jpeg';
import backgroundRainyDay from '../assets/images/background/RainyDay.jpeg';
import backgroundRainyNight from '../assets/images/background/RainyNight.jpeg';

export function getNeutralBackgroundImage(): any {
  return backgroundNeutral;
}

export function getBackgroundImage(conditionCode: number, isDay: number, isLoading: boolean = false): any {
  if (isLoading) {
    return backgroundNeutral;
  }

  const isDayTime = isDay === 1;

  if ([
    WeatherConditionCode.PatchyRainPossible,
    WeatherConditionCode.LightDrizzle,
    WeatherConditionCode.ModerateDrizzle,
    WeatherConditionCode.DenseDrizzle,
    WeatherConditionCode.LightFreezingDrizzle,
    WeatherConditionCode.DenseFreezingDrizzle,
    WeatherConditionCode.PatchyRain,
    WeatherConditionCode.ModerateRainAtTimes,
    WeatherConditionCode.ModerateRain,
    WeatherConditionCode.HeavyRainAtTimes,
    WeatherConditionCode.HeavyRain,
    WeatherConditionCode.LightFreezingRain,
    WeatherConditionCode.ModerateOrHeavyFreezingRain,
    WeatherConditionCode.PatchyThunderstormsPossible,
    WeatherConditionCode.ModerateOrHeavyThunderstormsAtTimes,
    WeatherConditionCode.ModerateOrHeavyThunderstorms,
    WeatherConditionCode.ThunderstormsWithHail,
    WeatherConditionCode.ThunderstormsWithSevereHail,
    WeatherConditionCode.Thunderstorm,
    WeatherConditionCode.HeavyThunderstorm,
    WeatherConditionCode.SevereHailStorm
  ].includes(conditionCode)) {
    return isDayTime ? backgroundRainyDay : backgroundRainyNight;
  }

  if ([
    WeatherConditionCode.PartlyCloudy,
    WeatherConditionCode.Cloudy,
    WeatherConditionCode.Overcast,
    WeatherConditionCode.Mist,
    WeatherConditionCode.Fog,
    WeatherConditionCode.FreezingFog
  ].includes(conditionCode)) {
    return isDayTime ? backgroundCloudDay : backgroundCloudNight;
  }

  if ([
    WeatherConditionCode.PatchySnowPossible,
    WeatherConditionCode.LightSnowShowers,
    WeatherConditionCode.ModerateOrHeavySnowShowers,
    WeatherConditionCode.LightSnow,
    WeatherConditionCode.ModerateSnow,
    WeatherConditionCode.HeavySnow,
    WeatherConditionCode.IcePellets,
    WeatherConditionCode.LightSleet,
    WeatherConditionCode.ModerateOrHeavySleet
  ].includes(conditionCode)) {
    return isDayTime ? backgroundCloudDay : backgroundCloudNight;
  }

  return isDayTime ? backgroundDay : backgroundNight;
}
