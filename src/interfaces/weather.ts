export interface WeatherData {
  city: string;
  countryCode: string;
  weatherCode: number;
  temp: number;
  tempMax: number;
  tempMin: number;
  humidity: number;
  windSpeed: number;
}

export interface UseWeatherReturn {
  weatherData: WeatherData | null;
  isLoading: boolean;
  error: null | string;
  handleReceive: (city: string) => void;
}
