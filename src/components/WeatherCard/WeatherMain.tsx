import type { WeatherProps } from '../../interfaces/weatherProps';

import { weatherCodes } from '../../utils/weatherCodes';

export function WeatherMain({ weatherData }: WeatherProps) {
  const Icon = weatherCodes[weatherData!.weatherCode].icon;
  return (
    <header className="flex flex-col gap-3">
      <h1
        id="city-name"
        className="text-center text-[clamp(1rem,6vw+1rem,2.6rem)] font-semibold"
      >
        {weatherData?.city}, {weatherData?.countryCode}
      </h1>
      <div className="flex items-center justify-center gap-8 rounded-2xl bg-linear-to-t from-blue-500 to-blue-600 p-6">
        <Icon
          aria-hidden="false"
          role="img"
          aria-label={weatherCodes[weatherData!.weatherCode].label}
          className={`size-25 ${weatherCodes[weatherData!.weatherCode].colorClass}`}
        />
        <div className="flex flex-col">
          <div
            role="term"
            aria-label={`Temperature: ${weatherData?.temp} degrees Celsius`}
            className="flex items-start leading-none"
          >
            <data
              aria-hidden="true"
              value={weatherData?.temp}
              className="text-[clamp(1rem,13vw,4rem)] font-bold text-white"
            >
              {weatherData?.temp}
            </data>
            <span
              aria-hidden="true"
              className="text-[clamp(1rem,4vw+1rem,3rem)] leading-none font-bold text-white"
            >
              °C
            </span>
          </div>
          <p className="mt-1 text-[clamp(1rem,6vw+1rem,1.5rem)] font-medium text-blue-50">
            {weatherCodes[weatherData!.weatherCode].label}
          </p>
        </div>
      </div>
    </header>
  );
}
