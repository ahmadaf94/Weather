import Searchbar from '../components/Searchbar.tsx';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import useFetchWeather from '../hooks/useFetchWeather.ts';
import WeatherInfo from '../components/WeatherInfo.tsx';

export default function WeatherScreen() {
  const [city, setCity] = useState<string | undefined>();

  const {error, isLoading, data} = useFetchWeather(city);

  function renderContent() {
    if (isLoading && !data && city) {
      return (
        <View style={styles.centerContainer} testID="loadingIndicator">
          <Text>Loading...</Text>
        </View>
      );
    }

    if (city && error) {
      return (
        <View style={styles.centerContainer}>
          <Text>{error.message}</Text>
        </View>
      );
    }

    if (data) {
      return (
        <View style={styles.weatherContainer} testID="weatherContainer">
          {data.hourly.time.map((time, index) => (
            <WeatherInfo
              time={time}
              temperature={data.hourly.temperature_2m[index]}
              code={data.hourly.weathercode[index]}
              isDay={Boolean(data.hourly.is_day[index])}
              key={time}
              timeZone={data.timezone_abbreviation}
            />
          ))}
        </View>
      );
    }

    return (
      <View style={styles.centerContainer}>
        <Text>Search for a city to get the weather!</Text>
      </View>
    );
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.containerContent}
      stickyHeaderIndices={[0]}>
      <Searchbar onCityChange={setCity} />

      {renderContent()}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    padding: 16,
  },
  containerContent: {
    gap: 16,
  },
  centerContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  weatherContainer: {
    flexDirection: 'column',
    gap: 24,
  },
});
