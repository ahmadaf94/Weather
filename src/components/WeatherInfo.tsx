import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import WeatherIcon from './WetherIcon.tsx';

type Props = {
  time: string;
  temperature: number;
  code: number;
  isDay: boolean;
  timeZone: string;
};

export default function WeatherInfo({
  time,
  temperature,
  code,
  isDay,
  timeZone,
}: Props) {
  const dateTime = new Date(time);
  const formattedDateTime = `${dateTime.toLocaleString()}, ${timeZone}`;

  return (
    <View style={styles.container}>
      <WeatherIcon code={code} isDay={isDay} />
      <View style={styles.info}>
        <Text testID="time">{formattedDateTime}</Text>
        <Text style={styles.temperature} testID="temperature">
          {temperature}°C
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  info: {
    flexDirection: 'column',
    gap: 8,
  },
  temperature: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
