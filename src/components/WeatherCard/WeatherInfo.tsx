import {
  ThermometerSun,
  ThermometerSnowflake,
  Droplet,
  Wind,
} from 'lucide-react';

export function WeatherInfo() {
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
              value="25.6"
              aria-label="25.6 degrees Celsius"
              className="flex items-start gap-1"
            >
              <span aria-hidden="true">25,6</span>
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
              value="24.7"
              aria-label="24.7 degrees Celsius"
              className="flex items-start gap-1"
            >
              <span aria-hidden="true">24,7</span>
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
            <data value="57">57%</data>
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
            <data value="12" aria-label="12 kilometers per hour">
              12 km/h
            </data>
          </dd>
        </div>
      </div>
    </dl>
  );
}
