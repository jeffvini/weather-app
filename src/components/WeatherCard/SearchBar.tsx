import { useState } from 'react';
import { MapPin } from 'lucide-react';
import { X } from 'lucide-react';
import { Search } from 'lucide-react';

export function SearchBar() {
  const [city, setCity] = useState<string>('');
  return (
    <form
      role="search"
      className="flex items-center gap-2 rounded-xl p-2 shadow-[0_0_3px_1px_rgba(0,0,0,0.2)] focus-within:ring-1 focus-within:ring-gray-600"
    >
      <MapPin className="fill-gray-700 text-white" />
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        aria-label="Search city"
        placeholder="Search city..."
        className="min-w-0 flex-1 bg-transparent py-1 outline-0"
      />
      {city.length > 0 && (
        <button
          type="button"
          onClick={() => setCity('')}
          aria-label="Clear search input"
          className="p-1"
        >
          <X className="text-gray-500" />
        </button>
      )}
      <button type="submit" aria-label="Submit search" className="p-1">
        <Search className="text-gray-500" />
      </button>
    </form>
  );
}
