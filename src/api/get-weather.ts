import { Weather } from '../types';
import { apiCall } from './api-call';
import { getGeolocation } from './get-geolocation';

interface Response {
  weather: {
    id: number;
    main: string;
  }[];
  main: {
    temp: number;
    temp_max: number;
    temp_min: number;
    humidity: number;
  };
  name: string;
  sys: {
    country: string;
  };
}

const ENDPOINT = '/data/2.5/weather';
export async function getWeather(city: string) {
  const locations = await getGeolocation(city);
  if (locations.length === 0 || !locations[0]) {
    return undefined;
  }

  const { lat, lon, country, name } = locations[0];
  return apiCall(ENDPOINT, { lat: lat.toString(), lon: lon.toString(), units: 'metric' })
    .then((response) => response.json())
    .then(
      (data: Response): Weather => ({
        city: name,
        country,
        date: new Date(),
        temperature: Number(data.main.temp.toFixed(1)),
        description: data.weather[0].main,
        descriptionId: data.weather[0].id,
        high: Math.round(data.main.temp_max),
        low: Math.round(data.main.temp_min),
        humidity: data.main.humidity,
      })
    );
}
