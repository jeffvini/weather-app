import { useState } from 'react';

import { SearchBar } from './SearchBar';
import { WeatherMain } from './WeatherMain';
import { WeatherInfo } from './WeatherInfo';

export function WeatherCard() {
  const [_cityQuery, setCityQuery] = useState<string>('');
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
