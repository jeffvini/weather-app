import type { WeatherProps } from '../../interfaces/weatherProps';

import {
  ThermometerSun,
  ThermometerSnowflake,
  Droplet,
  Wind,
} from 'lucide-react';

export function WeatherInfo({ weatherData }: WeatherProps) {
  return (
    <dl
      aria-label="Weather details"
      className="grid grid-cols-1 gap-3 md:grid-cols-2"
    >
      <div className="flex items-center gap-3 rounded-xl border-2 border-gray-300 p-3">
        <ThermometerSun className="fill-amber-100 text-amber-500" />
        <div>
          <dt>
            <abbr
              title="Maximum Temperature"
              className="cursor-help font-medium no-underline"
            >
              Temp. Max
            </abbr>
          </dt>
          <dd>
            <data
              value={weatherData?.tempMax}
              aria-label={`${weatherData?.tempMax} degrees Celsius`}
              className="flex items-start gap-1"
            >
              <span aria-hidden="true">{weatherData?.tempMax}</span>
              <span aria-hidden="true" className="text-[0.8rem]">
                °C
              </span>
            </data>
          </dd>
        </div>
      </div>
      <div className="flex items-center gap-3 rounded-xl border-2 border-gray-300 p-3">
        <ThermometerSnowflake className="fill-blue-100 text-blue-500" />
        <div>
          <dt>
            <abbr
              title="Minimum Temperature"
              className="cursor-help font-medium no-underline"
            >
              Temp. Min
            </abbr>
          </dt>
          <dd>
            <data
              value={weatherData?.tempMin}
              aria-label={`${weatherData?.tempMin} degrees Celsius`}
              className="flex items-start gap-1"
            >
              <span aria-hidden="true">{weatherData?.tempMin}</span>
              <span aria-hidden="true" className="text-[0.8rem]">
                °C
              </span>
            </data>
          </dd>
        </div>
      </div>
      <div className="flex items-center gap-3 rounded-xl border-2 border-gray-300 p-3">
        <Droplet className="fill-blue-300 text-blue-500" />
        <div>
          <dt>
            <span className="font-medium">Humidity</span>
          </dt>
          <dd>
            <data value={weatherData?.humidity}>{weatherData?.humidity}%</data>
          </dd>
        </div>
      </div>
      <div className="flex items-center gap-3 rounded-xl border-2 border-gray-300 p-3">
        <Wind className="text-blue-500" />
        <div>
          <dt>
            <span className="font-medium">Wind</span>
          </dt>
          <dd>
            <data
              value={weatherData?.windSpeed}
              aria-label={`${weatherData?.windSpeed} kilometers per hour`}
            >
              {weatherData?.windSpeed} km/h
            </data>
          </dd>
        </div>
      </div>
    </dl>
  );
}
