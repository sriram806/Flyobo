import React, { useState } from 'react';
import PlaceCard from '../components/common/PlaceCard';
import { Place } from '../types';
import { MapPin, Filter, X } from 'lucide-react';

// Mock data for places
const allPlaces: Place[] = [
  {
    id: '1',
    name: 'Santorini Retreat',
    country: 'Greece',
    description: 'Experience the beauty of white-washed buildings and blue domes overlooking the Aegean Sea.',
    image: 'https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    rating: 4.8,
    price: 120,
    featured: true
  },
  {
    id: '2',
    name: 'Kyoto Gardens',
    country: 'Japan',
    description: 'Immerse yourself in the tranquil beauty of traditional Japanese gardens and temples.',
    image: 'https://images.pexels.com/photos/402028/pexels-photo-402028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    rating: 4.7,
    price: 95,
    featured: true
  },
  {
    id: '3',
    name: 'Maldives Paradise',
    country: 'Maldives',
    description: 'Relax in overwater bungalows with pristine turquoise waters and white sandy beaches.',
    image: 'https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    rating: 4.9,
    price: 350,
    featured: true
  },
  {
    id: '4',
    name: 'Alpine Chalet',
    country: 'Switzerland',
    description: 'Stay in a cozy chalet surrounded by breathtaking mountain views and fresh Alpine air.',
    image: 'https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    rating: 4.6,
    price: 180,
    featured: true
  },
  {
    id: '5',
    name: 'Marrakech Riad',
    country: 'Morocco',
    description: 'Experience the vibrant colors and rich culture of Morocco in a traditional riad.',
    image: 'https://images.pexels.com/photos/2084166/pexels-photo-2084166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    rating: 4.5,
    price: 85
  },
  {
    id: '6',
    name: 'Amalfi Coast Villa',
    country: 'Italy',
    description: 'Enjoy the stunning views of the Mediterranean from a cliffside villa on the Amalfi Coast.',
    image: 'https://images.pexels.com/photos/2132008/pexels-photo-2132008.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    rating: 4.9,
    price: 250
  },
  {
    id: '7',
    name: 'Bali Beach Resort',
    country: 'Indonesia',
    description: 'Unwind at a luxurious beachfront resort surrounded by lush tropical gardens.',
    image: 'https://images.pexels.com/photos/237272/pexels-photo-237272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    rating: 4.7,
    price: 120
  },
  {
    id: '8',
    name: 'New York Loft',
    country: 'USA',
    description: 'Stay in a trendy loft apartment in the heart of Manhattan, close to all attractions.',
    image: 'https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    rating: 4.4,
    price: 200
  }
];

const Places: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 400 });
  const [rating, setRating] = useState(0);
  const [filteredPlaces, setFilteredPlaces] = useState(allPlaces);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    applyFilters();
  };

  const applyFilters = () => {
    let filtered = allPlaces;
    
    if (searchTerm) {
      filtered = filtered.filter(
        (place) => 
          place.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          place.country.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    filtered = filtered.filter(
      (place) => 
        place.price >= priceRange.min && 
        place.price <= priceRange.max &&
        place.rating >= rating
    );
    
    setFilteredPlaces(filtered);
  };

  const resetFilters = () => {
    setSearchTerm('');
    setPriceRange({ min: 0, max: 400 });
    setRating(0);
    setFilteredPlaces(allPlaces);
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        <div className="mb-12">
          <h1 className="text-4xl font-serif font-medium text-gray-900 mb-4">
            Discover Amazing Places
          </h1>
          <p className="text-gray-600 max-w-3xl">
            Explore our collection of handpicked destinations and find your perfect stay. From beachfront resorts to mountain retreats, we have something for every traveler.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <form onSubmit={handleSearch} className="flex flex-wrap items-end gap-4">
            <div className="w-full md:w-auto flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Search Destinations
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MapPin size={18} className="text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="City, country, or property name"
                  className="form-input pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            
            <div className="flex gap-2">
              <button 
                type="button" 
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
              >
                <Filter size={18} className="mr-2" />
                Filters
              </button>
              
              <button type="submit" className="btn btn-primary">
                Search
              </button>
            </div>
          </form>
          
          {showFilters && (
            <div className="mt-6 pt-6 border-t">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium">Filters</h3>
                <button 
                  onClick={resetFilters}
                  className="text-sm text-primary flex items-center"
                >
                  <X size={14} className="mr-1" />
                  Reset All
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Price Range (per night)
                  </label>
                  <div className="flex items-center gap-4">
                    <input
                      type="number"
                      min="0"
                      max={priceRange.max}
                      className="form-input w-24"
                      value={priceRange.min}
                      onChange={(e) => setPriceRange({ ...priceRange, min: parseInt(e.target.value) })}
                    />
                    <span>to</span>
                    <input
                      type="number"
                      min={priceRange.min}
                      className="form-input w-24"
                      value={priceRange.max}
                      onChange={(e) => setPriceRange({ ...priceRange, max: parseInt(e.target.value) })}
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Minimum Rating
                  </label>
                  <select 
                    className="form-input"
                    value={rating}
                    onChange={(e) => setRating(parseFloat(e.target.value))}
                  >
                    <option value="0">Any Rating</option>
                    <option value="3">3+ Stars</option>
                    <option value="4">4+ Stars</option>
                    <option value="4.5">4.5+ Stars</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Property Type
                  </label>
                  <select className="form-input">
                    <option>Any Type</option>
                    <option>Hotel</option>
                    <option>Resort</option>
                    <option>Villa</option>
                    <option>Apartment</option>
                    <option>Cabin</option>
                  </select>
                </div>
              </div>
              
              <div className="flex justify-end mt-6">
                <button 
                  onClick={applyFilters}
                  className="btn btn-primary"
                >
                  Apply Filters
                </button>
              </div>
            </div>
          )}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPlaces.length > 0 ? (
            filteredPlaces.map((place) => (
              <PlaceCard key={place.id} place={place} />
            ))
          ) : (
            <div className="col-span-full text-center py-16">
              <p className="text-gray-600 text-lg mb-4">No places found matching your criteria.</p>
              <button 
                onClick={resetFilters}
                className="btn btn-outline"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Places;