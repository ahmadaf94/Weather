export type Weather = {
  timezone_abbreviation: string;
  hourly: {
    temperature_2m: Array<number>;
    time: Array<string>;
    weathercode: Array<number>;
    is_day: Array<number>;
  };
};

const FORECAST_HOURS = 5;

export async function fetchWeather(city: string): Promise<Weather> {
  try {
    const geoResult = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en`,
    ).then(res => res.json());

    const {latitude, longitude} = geoResult.results[0];

    return await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&forecast_hours=${FORECAST_HOURS}&hourly=weathercode,temperature_2m,is_day&temperature_unit=celsius&timezone=auto`,
    ).then(res => res.json());
  } catch (e) {
    throw new Error('Weather data not found for this city');
  }
}
