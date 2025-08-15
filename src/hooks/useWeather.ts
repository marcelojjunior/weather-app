import { useCallback, useEffect, useState } from 'react';
import { WeatherData } from '../@types/Weather';
import { getCurrentWeather, getForecast } from '../services/weatherService';

interface UseWeatherReturn {
  data: WeatherData | null;
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

export default function useWeather(
  query: string,
  days: number = 1
): UseWeatherReturn {
  const [data, setData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchWeather = useCallback(async () => {
    if (!query) return;
    setLoading(true);
    setError(null);

    try {
      const current = await getCurrentWeather(query);
      const forecast = await getForecast(query, days);

      const combined: WeatherData = {
        location: current.location,
        current: current.current,
        forecast: forecast.forecast,
      };

      setData(combined);
    } catch (err: any) {
      setError(err.message || 'Error fetching weather data');
    } finally {
      setLoading(false);
    }
  }, [query, days]);

  useEffect(() => {
    fetchWeather();
  }, [fetchWeather]);

  useEffect(() => {
    setData(null);
    setError(null);
  }, [query]);

  return { data, loading, error, refetch: fetchWeather };
}