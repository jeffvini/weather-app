import { useState, useEffect, useCallback } from 'react';

import axios from 'axios';

import type { WeatherData } from '../interfaces/weather';
import type { UseWeatherReturn } from '../interfaces/weather';

export function useWeather(): UseWeatherReturn {
  const [cityQuery, setCityQuery] = useState<string>('Rio de Janeiro');
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<null | string>(null);

  const handleReceive = useCallback((city: string): void => {
    setCityQuery(city);
  }, []);

  useEffect(() => {
    const controller = new AbortController();

    (async () => {
      setIsLoading(true);
      setWeatherData(null);
      setError(null);

      try {
        const geoResponse = await axios.get(
          'https://geocoding-api.open-meteo.com/v1/search',
          {
            signal: controller.signal,
            params: {
              name: cityQuery,
              count: 1,
              language: 'en',
            },
          },
        );

        if (!geoResponse.data?.results?.[0]) {
          throw new Error('City not found.');
        }

        const { latitude, longitude, name, country_code } =
          geoResponse.data.results[0];

        const weatherResponse = await axios.get(
          'https://api.open-meteo.com/v1/forecast',
          {
            signal: controller.signal,
            params: {
              latitude,
              longitude,
              current:
                'temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code',
              daily: 'temperature_2m_max,temperature_2m_min',
              timezone: 'auto',
            },
          },
        );

        if (!weatherResponse.data?.current || !weatherResponse.data?.daily) {
          throw new Error('City not found.');
        }

        const { current, daily } = weatherResponse.data;

        setWeatherData({
          city: name,
          countryCode: country_code,
          weatherCode: current.weather_code,
          temp: current.temperature_2m,
          tempMax: daily.temperature_2m_max[0],
          tempMin: daily.temperature_2m_min[0],
          humidity: current.relative_humidity_2m,
          windSpeed: current.wind_speed_10m,
        });
      } catch (err) {
        if (axios.isCancel(err)) {
          console.log('Search cancelled: A new search has been initiated.');
        } else if (err instanceof Error && err.message === 'City not found.') {
          setError(`The city "${cityQuery}" was not found.`);
        } else {
          setError('Unable to load data. Check your connection.');
          console.error('Error in request:', err);
        }
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    })();

    return () => {
      controller.abort();
    };
  }, [cityQuery]);

  return { weatherData, isLoading, error, handleReceive };
}
