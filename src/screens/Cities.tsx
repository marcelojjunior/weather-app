import React, { useState } from 'react';
import { Alert, FlatList, Image, ImageBackground, Keyboard, KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { City } from '../@types/City';
import CityListItem from '../components/CityListItem';
import LoadingSpinner from '../components/LoadingSpinner';
import { useCity } from '../contexts/CityContext';
import useCitySearch from '../hooks/useCitySearch';
import useNetworkStatus from '../hooks/useNetworkStatus';

import Header from '../components/Header';
import NoInternet from '@/components/NoInternet';
import { useNavigation } from '@react-navigation/native';
import EmptyState from '@/components/EmptyState';

export function CitiesScreen() {
  const [searchText, setSearchText] = useState<string>('');
  const { setSelectedCity, recentCities, clearRecentCities, addRecentCity } = useCity();
  const { data: searchResults, loading, error, searchCities, clearResults } = useCitySearch();
  const { isConnected, isLoading: isNetworkLoading } = useNetworkStatus();

  const navigation = useNavigation();

  const handleSearchTextChange = (text: string) => {
    setSearchText(text);
    if (isConnected) {
      searchCities(text);
    }
  };

  const handleCitySelect = (city: City) => {
    setSelectedCity(city.name);
    addRecentCity(city);
    navigation.goBack();
  };

  const handleClearSearch = () => {
    setSearchText('');
    clearResults();
  };

  const handleClearRecentCities = () => {
    Alert.alert(
      'Clear Recent Locations',
      'Are you sure you want to clear all recent locations? This action cannot be undone.',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Clear',
          style: 'destructive',
          onPress: clearRecentCities,
        },
      ]
    );
  };

  if (!isNetworkLoading && !isConnected) {
    return <NoInternet />;
  }

  return (
    <ImageBackground
      source={require('@/assets/images/background/backgroundSearchLocation.jpeg')}
      className='flex-1'
      resizeMode="cover"
    >
      <KeyboardAvoidingView
        className="flex-1 w-full"
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <SafeAreaView className="flex-1" edges={['top', 'left', 'right']}>
            <Header variant="cities" />

            <View className="p-4">
              <View className="flex-row items-center bg-gray-100 rounded-lg px-4 py-3">
                <Image
                  source={require('@/assets/icons/search.png')}
                  className='size-5'
                />
                <TextInput
                  className="flex-1 ml-3 text-base leading-tight font-medium text-gray-800"
                  placeholder="Search for a city..."
                  placeholderTextColor="#999"
                  value={searchText}
                  onChangeText={handleSearchTextChange}
                />
                {searchText.length > 0 && (
                  <TouchableOpacity onPress={handleClearSearch}>
                    <Image
                      source={require('@/assets/icons/cross.png')}
                      className='size-5'
                    />
                  </TouchableOpacity>
                )}
              </View>
            </View>

            <View className="flex-1">
              {loading && <LoadingSpinner />}

              {error && (
                <EmptyState text={error} />
              )}

              {!isConnected && searchText.length > 0 && (
                <EmptyState text="No internet connection. Please check your connection and try again." />
              )}

              {searchResults.length === 0 && searchText.length > 0 && !loading && !error && isConnected && (
                <EmptyState text="No results found" />
              )}

              {searchText.length > 0 && !loading && !error && isConnected && (
                <FlatList
                  data={searchResults}
                  keyExtractor={(item) => `${item.name}-${item.country}`}
                  renderItem={({ item }) => (
                    <CityListItem
                      name={item.name}
                      country={item.country}
                      region={item.region}
                      onPress={() => handleCitySelect(item)}
                      showIcon={true}
                    />
                  )}
                  showsVerticalScrollIndicator={false}
                />
              )}

              {searchText.length === 0 && !loading && !error && recentCities.length > 0 && (
                <View className="flex-1">
                  <View className="flex-row items-center justify-between p-4">
                    <Text className="text-lg font-semibold text-white">
                      Recent Cities
                    </Text>
                    {recentCities.length > 0 && (
                      <TouchableOpacity onPress={handleClearRecentCities}>
                        <Text className="text-white font-medium">Clear</Text>
                      </TouchableOpacity>
                    )}
                  </View>

                  {recentCities.length > 0 ? (
                    <FlatList
                      data={recentCities}
                      keyExtractor={(item) => `${item.name}-${item.country}`}
                      renderItem={({ item }) => (
                        <CityListItem
                          name={item.name}
                          country={item.country}
                          region={item.region}
                          onPress={() => handleCitySelect(item)}
                          showIcon={true}
                        />
                      )}
                      showsVerticalScrollIndicator={false}
                    />
                  ) : (
                    <EmptyState text="No recent locations" />
                  )}
                </View>
              )}
            </View>
          </SafeAreaView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}