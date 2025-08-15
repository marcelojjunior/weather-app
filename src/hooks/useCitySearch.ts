import { useCallback, useEffect, useState } from 'react';
import { searchCities } from '../services/weatherService';

interface City {
  id: number;
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
}

interface CitySearchResult {
  data: City[];
  loading: boolean;
  error: string | null;
}

export default function useCitySearch(): CitySearchResult & {
  searchCities: (query: string) => void;
  clearResults: () => void;
} {
  const [data, setData] = useState<City[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchTimeout, setSearchTimeout] = useState<number | null>(null);

  const performSearch = useCallback(async (query: string) => {
    if (!query.trim()) {
      setData([]);
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const result = await searchCities(query);
      setData(result);
    } catch (err) {
      setError('Failed to search cities');
      setData([]);
    } finally {
      setLoading(false);
    }
  }, []);

  const searchCitiesWithDebounce = useCallback((query: string) => {
    if (searchTimeout) {
      clearTimeout(searchTimeout);
    }

    if (!query.trim()) {
      setData([]);
      setLoading(false);
      return;
    }

    const timeout = setTimeout(() => {
      performSearch(query);
    }, 500);

    setSearchTimeout(timeout);
  }, [performSearch, searchTimeout]);

  const clearResults = useCallback(() => {
    setData([]);
    setLoading(false);
    setError(null);
    if (searchTimeout) {
      clearTimeout(searchTimeout);
    }
  }, [searchTimeout]);

  useEffect(() => {
    return () => {
      if (searchTimeout) {
        clearTimeout(searchTimeout);
      }
    };
  }, [searchTimeout]);

  return {
    data,
    loading,
    error,
    searchCities: searchCitiesWithDebounce,
    clearResults,
  };
}
