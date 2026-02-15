import { useState, useEffect } from 'react';

import { SearchBar } from './SearchBar';
import { WeatherMain } from './WeatherMain';
import { WeatherInfo } from './WeatherInfo';

interface WeatherData {
  city: string;
  countryCode: string;
  weatherCode: number;
  temp: number;
  tempMax: number;
  tempMin: number;
  humidity: number;
  windSpeed: number;
}

export function WeatherCard() {
  const [cityQuery, setCityQuery] = useState<string>('Rio de Janeiro');
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleReceive = (city: string): void => {
    setCityQuery(city);
    setIsLoading(true);
  };

  return (
    <article
      aria-labelledby="city-name"
      className="flex w-full flex-col gap-6 rounded-2xl bg-white p-6 shadow-[0_0_7px_3px_rgba(0,0,0,0.2)] md:w-auto"
    >
      <SearchBar onSubmit={handleReceive} isLoading={isLoading} />
      <WeatherMain />
      <WeatherInfo />
    </article>
  );
}
