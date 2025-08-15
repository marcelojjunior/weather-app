import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { HomeScreen } from '../screens/Home';

const Stack = createNativeStackNavigator();

export function Routes(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        {/* <Stack.Screen name="Weather" component={WeatherScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}