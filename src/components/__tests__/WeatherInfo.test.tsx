import React from 'react';
import {render, screen} from '@testing-library/react-native';
import WeatherInfo from '../WeatherInfo.tsx';

describe('WeatherInfo', () => {
  const weatherData = {
    time: '2021-05-24T09:00',
    temperature: 20,
    code: 0,
    isDay: true,
    timeZone: 'GMT',
  };

  it('should show weather info', () => {
    const {getByTestId} = render(<WeatherInfo {...weatherData} />);

    expect(getByTestId('time')).toHaveTextContent(
      `${new Date(weatherData.time).toLocaleString()}, ${weatherData.timeZone}`,
    );
    expect(getByTestId('temperature')).toHaveTextContent('20');
    expect(
      screen.getByTestId(
        `icon_${weatherData.code}_${weatherData.isDay ? 'day' : 'night'}`,
      ),
    ).toBeVisible();
  });
});
