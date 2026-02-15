import { SearchBar } from './SearchBar';
import { WeatherMain } from './WeatherMain';
import { WeatherInfo } from './WeatherInfo';

import { useWeather } from '../../custom-hooks/useWeather';

export function WeatherCard() {
  const { weatherData, isLoading, error, handleReceive } = useWeather();
  return (
    <article
      aria-labelledby="city-name"
      className="flex w-full flex-col gap-6 rounded-2xl bg-white p-6 shadow-[0_0_7px_3px_rgba(0,0,0,0.2)] md:w-auto"
    >
      <SearchBar onSubmit={handleReceive} isLoading={isLoading} />
      {error && (
        <p className="text-center text-2xl font-medium text-red-500">{error}</p>
      )}
      {isLoading && (
        <p className="text-center text-2xl font-medium">Loading...</p>
      )}
      {weatherData && !isLoading && (
        <>
          <WeatherMain weatherData={weatherData} />
          <WeatherInfo weatherData={weatherData} />
        </>
      )}
    </article>
  );
}
