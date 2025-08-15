import { WeatherConditionCode } from "@/@types/Conditions";
import CurrentWeather from "@/components/CurrentWeather";
import ForecastList from "@/components/ForecastList";
import Header from "@/components/Header";
import LoadingSpinner from "@/components/LoadingSpinner";
import WeatherCards from "@/components/WeatherCards";
import useWeather from "@/hooks/useWeather";
import { getBackgroundImage } from "@/utils/backgroundUtils";
import { ImageBackground, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function HomeScreen() {
    const { data, loading, error } = useWeather("São Paulo", 7);

    return (
        <ImageBackground
            source={getBackgroundImage(data?.current.condition.code ?? WeatherConditionCode.Clear, data?.current.is_day ?? 1, loading)}
            className='flex-1'
            resizeMode="cover"
        >
            <SafeAreaView className="flex-1" edges={['top', 'left', 'right']}>
                <ScrollView
                    className="flex-1"
                    contentContainerClassName='pb-[50px]'
                >
                    <Header lastUpdated={data?.current.last_updated!} />

                    {loading || error ? (
                        <View className='mt-4 justify-center items-center w-full'>
                            <Text className='text-white text-lg font-poppins-regular'>
                                {loading ? <LoadingSpinner /> : 'Error loading weather data'}
                            </Text>
                        </View>
                    ) : (
                        <View className='mt-4 justify-center w-full'>
                            <CurrentWeather data={data} selectedCity={'Balsas'} />
                            <WeatherCards data={data} />
                        </View>
                    )}

                    {!loading && !error && <ForecastList data={data} />}
                </ScrollView>
            </SafeAreaView>
        </ImageBackground>
    );
}