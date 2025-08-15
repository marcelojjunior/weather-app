import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { City } from '../@types/City';

interface CityContextType {
  selectedCity: string;
  setSelectedCity: (city: string) => void;
  recentCities: City[];
  addRecentCity: (city: City) => void;
  clearRecentCities: () => void;
}

const CityContext = createContext<CityContextType | undefined>(undefined);

interface CityProviderProps {
  children: ReactNode;
}

const RECENT_CITIES_KEY = 'recent_cities';
const MAX_RECENT_CITIES = 6;

export function CityProvider({ children }: CityProviderProps) {
  const [selectedCity, setSelectedCity] = useState<string>('São Paulo');
  const [recentCities, setRecentCities] = useState<City[]>([]);

  useEffect(() => {
    loadRecentCities();
  }, []);

  const loadRecentCities = async () => {
    try {
      const stored = await AsyncStorage.getItem(RECENT_CITIES_KEY);
      if (stored) {
        setRecentCities(JSON.parse(stored));
      }
    } catch (error) {
      console.error('Error loading recent cities:', error);
    }
  };

  const saveRecentCities = async (cities: City[]) => {
    try {
      await AsyncStorage.setItem(RECENT_CITIES_KEY, JSON.stringify(cities));
    } catch (error) {
      console.error('Error saving recent cities:', error);
    }
  };

  const addRecentCity = (city: City) => {
    const normalizedCity = {
      name: city.name.trim(),
      country: city.country.trim(),
      region: city.region.trim()
    };
    
    if (!normalizedCity.name) return;

    setRecentCities(prevCities => {
      const filteredCities = prevCities.filter(c => 
        c.name.toLowerCase() !== normalizedCity.name.toLowerCase()
      );
      
      const newCities = [normalizedCity, ...filteredCities];
      
      const limitedCities = newCities.slice(0, MAX_RECENT_CITIES);
      
      saveRecentCities(limitedCities);
      
      return limitedCities;
    });
  };

  const clearRecentCities = async () => {
    try {
      await AsyncStorage.removeItem(RECENT_CITIES_KEY);
      setRecentCities([]);
    } catch (error) {
      console.error('Error clearing recent cities:', error);
    }
  };

  const handleSetSelectedCity = (city: string) => {
    setSelectedCity(city);
    addRecentCity({ name: city, country: '', region: '' });
  };

  return (
    <CityContext.Provider value={{ 
      selectedCity, 
      setSelectedCity: handleSetSelectedCity, 
      recentCities,
      addRecentCity,
      clearRecentCities
    }}>
      {children}
    </CityContext.Provider>
  );
}

export function useCity() {
  const context = useContext(CityContext);
  if (context === undefined) {
    throw new Error('useCity must be used within a CityProvider');
  }
  return context;
} 