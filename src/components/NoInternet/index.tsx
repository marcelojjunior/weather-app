import backgroundImage from '@/assets/images/background/backgroundSearchLocation.jpeg';
import React from 'react';
import { Image, ImageBackground, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../Header';

interface NoInternetProps { }

export default function NoInternet({ }: NoInternetProps) {
    return (
        <ImageBackground
            source={backgroundImage}
            className='flex-1'
            resizeMode="cover"
        >
            <SafeAreaView className="flex-1" edges={['top', 'left', 'right']}>
                <Header variant="cities" />

                <View className="flex-1 mt-8 items-center px-8">
                    <Image
                      source={require('@/assets/icons/no-wifi.png')}
                      className='size-14'
                    />
                    <Text className="text-white text-xl font-semibold text-center mt-4 mb-2">
                        No Internet Connection
                    </Text>
                    <Text className="text-white text-base font-regular text-center opacity-80">
                        You need an internet connection to search for cities. Please check your connection and try again.
                    </Text>
                </View>
            </SafeAreaView>
        </ImageBackground>
    )
}
