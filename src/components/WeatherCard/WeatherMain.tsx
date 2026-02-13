import { Sun } from 'lucide-react';

export function WeatherMain() {
  return (
    <header className="flex flex-col gap-3">
      <h1
        id="city-name"
        className="text-center text-[clamp(1rem,6vw+1rem,2.6rem)] font-semibold"
      >
        Rio de Janeiro, BR
      </h1>
      <div className="flex items-center justify-center gap-8 rounded-2xl bg-linear-to-t from-blue-500 to-blue-600 p-6">
        <Sun
          aria-hidden="false"
          role="img"
          aria-label="Sunny"
          className="size-25 fill-yellow-300 text-yellow-300"
        />
        <div className="flex flex-col">
          <div className="flex items-start leading-none">
            <data
              value="25.0"
              className="text-[clamp(1rem,13vw,4rem)] font-bold text-white"
            >
              25,0
            </data>
            <span
              aria-label="degrees Celsius"
              className="text-[clamp(1rem,4vw+1rem,3rem)] leading-none font-bold text-white"
            >
              °C
            </span>
          </div>
          <p className="mt-1 text-[clamp(1rem,6vw+1rem,1.5rem)] font-medium text-blue-50">
            Clear sky
          </p>
        </div>
      </div>
    </header>
  );
}
