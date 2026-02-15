import {
  Sun,
  CloudSun,
  Cloud,
  CloudFog,
  CloudDrizzle,
  CloudRain,
  CloudSnow,
  Snowflake,
  CloudRainWind,
  CloudLightning,
} from 'lucide-react';

import type { LucideIcon } from 'lucide-react';

interface WeatherConfig {
  label: string;
  icon: LucideIcon;
  colorClass: string;
}

export const weatherCodes: Record<number, WeatherConfig> = {
  0: { label: 'Clear Sky', icon: Sun, colorClass: 'text-yellow-300' },

  1: { label: 'Mainly Clear', icon: CloudSun, colorClass: 'text-yellow-200' },
  2: { label: 'Partly Cloudy', icon: CloudSun, colorClass: 'text-blue-100' },

  3: { label: 'Overcast', icon: Cloud, colorClass: 'text-gray-200' },

  45: { label: 'Fog', icon: CloudFog, colorClass: 'text-gray-300' },
  48: {
    label: 'Depositing Rime Fog',
    icon: CloudFog,
    colorClass: 'text-gray-300',
  },

  51: {
    label: 'Light Drizzle',
    icon: CloudDrizzle,
    colorClass: 'text-cyan-200',
  },
  53: {
    label: 'Moderate Drizzle',
    icon: CloudDrizzle,
    colorClass: 'text-cyan-300',
  },
  55: {
    label: 'Dense Drizzle',
    icon: CloudDrizzle,
    colorClass: 'text-cyan-400',
  },

  56: {
    label: 'Light Freezing Drizzle',
    icon: CloudSnow,
    colorClass: 'text-white',
  },
  57: {
    label: 'Dense Freezing Drizzle',
    icon: CloudSnow,
    colorClass: 'text-white',
  },

  61: { label: 'Slight Rain', icon: CloudRain, colorClass: 'text-blue-100' },
  63: { label: 'Moderate Rain', icon: CloudRain, colorClass: 'text-blue-200' },
  65: { label: 'Heavy Rain', icon: CloudRain, colorClass: 'text-white' },

  66: {
    label: 'Light Freezing Rain',
    icon: CloudSnow,
    colorClass: 'text-cyan-100',
  },
  67: {
    label: 'Heavy Freezing Rain',
    icon: CloudSnow,
    colorClass: 'text-white',
  },

  71: { label: 'Slight Snow Fall', icon: Snowflake, colorClass: 'text-white' },
  73: {
    label: 'Moderate Snow Fall',
    icon: Snowflake,
    colorClass: 'text-white',
  },
  75: { label: 'Heavy Snow Fall', icon: Snowflake, colorClass: 'text-white' },
  77: { label: 'Snow Grains', icon: Snowflake, colorClass: 'text-white' },

  80: {
    label: 'Slight Rain Showers',
    icon: CloudRainWind,
    colorClass: 'text-blue-100',
  },
  81: {
    label: 'Moderate Rain Showers',
    icon: CloudRainWind,
    colorClass: 'text-blue-200',
  },
  82: {
    label: 'Violent Rain Showers',
    icon: CloudRainWind,
    colorClass: 'text-white',
  },

  85: {
    label: 'Slight Snow Showers',
    icon: CloudSnow,
    colorClass: 'text-white',
  },
  86: {
    label: 'Heavy Snow Showers',
    icon: CloudSnow,
    colorClass: 'text-white',
  },

  95: {
    label: 'Thunderstorm',
    icon: CloudLightning,
    colorClass: 'text-yellow-400',
  },
  96: {
    label: 'Thunderstorm with Slight Hail',
    icon: CloudLightning,
    colorClass: 'text-yellow-300',
  },
  99: {
    label: 'Thunderstorm with Heavy Hail',
    icon: CloudLightning,
    colorClass: 'text-yellow-200',
  },
};
