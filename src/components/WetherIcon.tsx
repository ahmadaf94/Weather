import React from 'react';
import {StyleSheet} from 'react-native';
import {WEATHER_CODES} from '../utils/constants.tsx';

type Props = {code: number; isDay: boolean};

export default function WeatherIcon({code, isDay}: Props) {
  const {label, DayComponent, NightComponent} =
    WEATHER_CODES[code as keyof typeof WEATHER_CODES];

  const IconComponent = isDay ? DayComponent : NightComponent;

  return (
    <IconComponent
      style={styles.icon}
      accessibilityLabel={label}
      testID={`icon_${code}_${isDay ? 'day' : 'night'}`}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  icon: {
    width: 60,
    height: 60,
  },
});
