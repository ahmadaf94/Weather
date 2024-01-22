import {
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react-native';
import React from 'react';
import WeatherScreen from '../WeatherScreen.tsx';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      gcTime: Infinity,
    },
  },
});

describe('WeatherScreen', () => {
  const CITY = 'London';
  const SEARCH_INPUT_TEST_ID = 'searchCity';
  const SUBMIT_BUTTON_TEST_ID = 'submitButton';

  it('should show loading indicator when loading', async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <WeatherScreen />
      </QueryClientProvider>,
    );

    fireEvent.changeText(screen.getByTestId(SEARCH_INPUT_TEST_ID), CITY);
    fireEvent.press(screen.getByTestId(SUBMIT_BUTTON_TEST_ID));

    await waitFor(() =>
      expect(screen.getByTestId('loadingIndicator')).toBeVisible(),
    );
  });

  it('should show weather info after search', async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <WeatherScreen />
      </QueryClientProvider>,
    );

    fireEvent.changeText(screen.getByTestId(SEARCH_INPUT_TEST_ID), CITY);
    fireEvent.press(screen.getByTestId(SUBMIT_BUTTON_TEST_ID));

    await waitFor(() =>
      expect(screen.getByTestId('weatherContainer')).toBeVisible(),
    );
  });

  it('should show error message when error', async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <WeatherScreen />
      </QueryClientProvider>,
    );

    fireEvent.changeText(screen.getByTestId(SEARCH_INPUT_TEST_ID), 'asdfghjkl');
    fireEvent.press(screen.getByTestId(SUBMIT_BUTTON_TEST_ID));

    await waitFor(() =>
      expect(
        screen.getByText('Weather data not found for this city'),
      ).toBeVisible(),
    );
  });
});
