import { Geolocation } from '../types';
import { apiCall } from './api-call';

const ENDPOINT = '/geo/1.0/direct';
export async function getGeolocation(city: string) {
  return apiCall(ENDPOINT, {
    q: city,
    limit: '1',
  })
    .then((response) => response.json())
    .then((data: Geolocation[]) => data);
}
