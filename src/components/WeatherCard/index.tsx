import { SearchBar } from './SearchBar';
import { WeatherMain } from './WeatherMain';
import { WeatherInfo } from './WeatherInfo';

export function WeatherCard() {
  return (
    <article
      aria-labelledby="city-name"
      className="flex w-full flex-col gap-6 rounded-2xl bg-white p-6 shadow-[0_0_7px_3px_rgba(0,0,0,0.2)] md:w-auto"
    >
      <SearchBar />
      <WeatherMain />
      <WeatherInfo />
    </article>
  );
}
