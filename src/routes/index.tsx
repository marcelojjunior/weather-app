import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../screens/Home';
import { CityProvider } from '@/contexts/CityContext';
import { CitiesScreen } from '@/screens/Cities';
import { StatusBar } from 'react-native';

const Stack = createNativeStackNavigator();

export function Routes(): React.JSX.Element {
  return (
    <CityProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Cities" component={CitiesScreen} />
        </Stack.Navigator>
        <StatusBar barStyle={'light-content'} />
      </NavigationContainer>
    </CityProvider>
  );
}