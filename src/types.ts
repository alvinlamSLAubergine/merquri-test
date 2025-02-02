export type SearchHistory = {
  id: string;
  country: string;
  date: Date;
};

export type Weather = {
  city: string;
  country: string;
  date: Date;
  temperature: number;
  description: string;
  descriptionId: number;
  high: number;
  low: number;
  humidity: number;
};

export type Geolocation = {
  name: string;
  lat: number;
  lon: number;
  country: string;
};
