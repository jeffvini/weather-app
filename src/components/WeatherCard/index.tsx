import { SearchBar } from './SearchBar';
import { WeatherMain } from './WeatherMain';
import { WeatherInfo } from './WeatherInfo';

export function WeatherCard() {
  return (
    <article
      aria-labelledby="city-name"
      className="mx-4 flex w-full flex-col rounded-2xl bg-white shadow-[0_15px_10px_-10px_rgba(0,0,0,0.3)] md:w-auto"
    >
      <SearchBar />
      <WeatherMain />
      <WeatherInfo />
    </article>
  );
}
