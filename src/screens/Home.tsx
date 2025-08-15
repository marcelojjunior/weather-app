import { ImageBackground, Keyboard, KeyboardAvoidingView, Platform, Text, TouchableWithoutFeedback, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function HomeScreen() {

  return (
     <KeyboardAvoidingView
      className="flex-1 w-full bg-gray-900"
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView className="flex-1 bg-gray-900 py-12 px-8 items-center">
          <Text className="text-white flex-1 font-bold text-2xl">
            WeatherAppK
          </Text>
          <View className="flex-1" />
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}