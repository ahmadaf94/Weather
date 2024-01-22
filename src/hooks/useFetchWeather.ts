import {useQuery} from '@tanstack/react-query';
import {fetchWeather} from '../api/weather.ts';

export default function useFetchWeather(city: string | undefined) {
  return useQuery({
    queryKey: ['weather', city],
    queryFn: city ? () => fetchWeather(city) : undefined,
  });
}
