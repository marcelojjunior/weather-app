# WeatherApp

> React Native application for weather forecasting with intelligent city search

## 📱 About the Project

WeatherApp is a mobile application developed in React Native that allows users to check weather forecasts for any city in the world. The app offers intelligent search with real-time suggestions, detailed current weather information, and extended forecast for the next 6 days.

## ✨ Features

- 🔍 Intelligent city search with automatic suggestions
- 🌡️ Real-time current temperature display
- 🌤️ Detailed weather conditions (sunny, cloudy, rain, etc.)
- ⏰ Date and time of last data update
- 📅 Weather forecast for the next 6 days
- 💾 Local storage of searched cities
- 🌐 Network connectivity verification

## 🛠️ Technologies Used

- [React Native](https://reactnative.dev/) - 0.81.0
- [TypeScript](https://www.typescriptlang.org/)
- [React Navigation](https://reactnavigation.org/)
- [Axios](https://axios-http.com/)
- [Async Storage](https://react-native-async-storage.github.io/async-storage/)
- [NativeWind](https://www.nativewind.dev/)
- [Moment.js](https://momentjs.com/)
- [NetInfo](https://github.com/react-native-netinfo/react-native-netinfo)

## 🌐 API Used

The application uses [WeatherAPI](https://www.weatherapi.com/) to obtain meteorological data:
- **Search Endpoint**: For real-time city suggestions
- **Current Weather Endpoint**: For current meteorological data
- **Forecast Endpoint**: For 6-day forecast

## 📱 Screenshots

| Current Weather | 6-Day Forecast | City Search | Recent | No Internet |
|----------------|----------------|-------------|---------|-------------|
| ![Current](./public/screenshots/current.PNG) | ![Forecast](./public/screenshots/forecast.PNG) | ![Search](./public/screenshots/search.PNG) | ![Recent](./public/screenshots/recents.PNG) | ![No Internet](./public/screenshots/no-internet.PNG) |

## 📋 Prerequisites

Before starting, make sure you have the following tools installed:

- [Node.js](https://nodejs.org/) (version 18 or higher)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)
- [React Native CLI](https://reactnative.dev/docs/environment-setup)
- [Android Studio](https://developer.android.com/studio) (for Android)
- [Xcode](https://developer.apple.com/xcode/) and [CocoaPods](https://cocoapods.org/) (for iOS - macOS only)
- [Ruby](https://www.ruby-lang.org/) and [Bundler](https://bundler.io/) (for CocoaPods management)

## 🚀 How to Run the Project

### Cloning the Repository

```bash
git clone https://github.com/marcelojjunior/weather-app.git
cd weather-app
```

### Installing Dependencies

```bash
# Using npm
npm install

# OR using Yarn
yarn
```

### iOS Configuration (macOS only)

When cloning the project for the first time, install Ruby bundler:

```bash
bundle install
```

Then install CocoaPods dependencies:

```bash
bundle exec pod install
```

> **Note**: Run `bundle exec pod install` whenever you update native dependencies.

### API Configuration

1. Sign up at [WeatherAPI](https://www.weatherapi.com/) to get a free key
2. Add your key in the src/services/api.ts file, replacing YOUR_KEY with your key value:

```typescript
const api = axios.create({
  baseURL: "https://api.weatherapi.com/v1/",
  timeout: 5000,
  params: {
    key: YOUR_KEY,
  },
});
```

### Running the Project

```bash
# Start Metro Server
npm start
# or
yarn start

# For Android (in another terminal)
npm run android
# or
yarn android

# For iOS (macOS only, in another terminal)
npm run ios
# or
yarn ios
```

## 👥 Author

- **Marcelo Junior** - [marcelojjunior](https://github.com/marcelojjunior)

## 📞 Contact

- Email: marcelovfjjunior@gmail.com
- LinkedIn: [Marcelo Junior](https://www.linkedin.com/in/marcelojjunior/)

---

⭐ If this project helped you, don't forget to give it a star!