import { StackActions, useNavigation } from '@react-navigation/native';
import moment from 'moment';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

interface HeaderProps {
    lastUpdated?: string;
    variant?: 'home' | 'cities';
}

export default function Header({ lastUpdated, variant }: HeaderProps) {
    const navigation = useNavigation();

    if (variant == "cities") {
        return (
            <View className="flex-row items-center justify-between px-4">
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image
                        source={require('@/assets/icons/back.png')}
                        className='size-5'
                    />
                </TouchableOpacity>
                <Text className="text-lg font-semibold text-white">
                    Select a City
                </Text>
                <View className='w-6' />
            </View>
        )
    }

    return (
        <View className='flex items-center justify-between flex-row px-4'>
            <Text className='text-white text-xl font-semibold'>
                {moment(lastUpdated).format('MMMM D, H:mm')}h
            </Text>
            <TouchableOpacity onPress={() => {
                navigation.dispatch(
                    StackActions.push('Cities'),
                );
            }}>
                <Image
                    source={require('@/assets/icons/menu.png')}
                    className='size-6'
                />
            </TouchableOpacity>
        </View>
    )
}
