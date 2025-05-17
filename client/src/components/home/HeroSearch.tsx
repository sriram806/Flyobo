import React, { useState } from 'react';
import { Calendar, MapPin, DollarSign, Filter } from 'lucide-react';

interface DateRange {
  startDate: string;
  endDate: string;
}

const HeroSearch: React.FC = () => {
  const [destination, setDestination] = useState('');
  const [dateRange, setDateRange] = useState<DateRange>({
    startDate: '',
    endDate: '',
  });
  const [budget, setBudget] = useState(1000);
  const [showFilters, setShowFilters] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Search logic would go here
    console.log({ destination, dateRange, budget });
    alert('Search functionality would be implemented here');
  };

  return (
    <div className="relative z-10 bg-white rounded-lg shadow-xl p-6 md:p-8 max-w-5xl mx-auto -mt-16 transform translate-y-0">
      <form onSubmit={handleSearch}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Destination
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MapPin size={18} className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Where to?"
                className="form-input pl-10"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Dates
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Calendar size={18} className="text-gray-400" />
              </div>
              <input
                type="date"
                className="form-input pl-10"
                value={dateRange.startDate}
                onChange={(e) => 
                  setDateRange({ ...dateRange, startDate: e.target.value })
                }
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Return Date
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Calendar size={18} className="text-gray-400" />
              </div>
              <input
                type="date"
                className="form-input pl-10"
                value={dateRange.endDate}
                onChange={(e) => 
                  setDateRange({ ...dateRange, endDate: e.target.value })
                }
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Budget (Max ${budget})
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <DollarSign size={18} className="text-gray-400" />
              </div>
              <input
                type="range"
                min="100"
                max="10000"
                step="100"
                className="form-input pl-10 h-10"
                value={budget}
                onChange={(e) => setBudget(parseInt(e.target.value))}
              />
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between">
          <button
            type="button"
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center text-primary mb-4 md:mb-0"
          >
            <Filter size={18} className="mr-1" />
            {showFilters ? 'Hide Filters' : 'More Filters'}
          </button>
          
          <button type="submit" className="btn btn-primary">
            Search Packages
          </button>
        </div>
        
        {showFilters && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 pt-6 border-t">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Trip Type
              </label>
              <select className="form-input">
                <option>Any Type</option>
                <option>Beach</option>
                <option>Mountain</option>
                <option>City</option>
                <option>Cultural</option>
                <option>Adventure</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Travelers
              </label>
              <select className="form-input">
                <option>1 Person</option>
                <option>2 People</option>
                <option>3 People</option>
                <option>4+ People</option>
                <option>Group (10+)</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Accommodation
              </label>
              <select className="form-input">
                <option>Any Type</option>
                <option>Hotel</option>
                <option>Resort</option>
                <option>Villa</option>
                <option>Apartment</option>
                <option>Hostel</option>
              </select>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default HeroSearch;