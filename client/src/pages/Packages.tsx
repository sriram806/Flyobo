import React, { useState } from 'react';
import PackageCard from '../components/common/PackageCard';
import { Package } from '../types';
import { Search, Filter, X, Calendar, DollarSign } from 'lucide-react';

// Mock data for packages
const allPackages: Package[] = [
  {
    id: '1',
    title: 'Thailand Adventure',
    destination: 'Bangkok & Phuket, Thailand',
    duration: '7 Days / 6 Nights',
    price: 1200,
    description: 'Explore the bustling streets of Bangkok and relax on the beaches of Phuket in this perfect Thai getaway.',
    image: 'https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    featured: true
  },
  {
    id: '2',
    title: 'Italian Romance',
    destination: 'Rome, Florence & Venice, Italy',
    duration: '10 Days / 9 Nights',
    price: 2400,
    description: 'Experience the romance and history of Italy\'s most beautiful cities with guided tours and authentic experiences.',
    image: 'https://images.pexels.com/photos/7245464/pexels-photo-7245464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    featured: true
  },
  {
    id: '3',
    title: 'Kenyan Safari',
    destination: 'Nairobi & Masai Mara, Kenya',
    duration: '6 Days / 5 Nights',
    price: 3200,
    description: 'Witness the spectacular wildlife of Africa on this unforgettable safari through Kenya\'s most famous reserves.',
    image: 'https://images.pexels.com/photos/7245483/pexels-photo-7245483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    featured: true
  },
  {
    id: '4',
    title: 'Bali Tranquility',
    destination: 'Ubud & Seminyak, Bali',
    duration: '8 Days / 7 Nights',
    price: 1500,
    description: 'Find your inner peace with yoga retreats, temple visits, and beach relaxation on the island of the gods.',
    image: 'https://images.pexels.com/photos/5993162/pexels-photo-5993162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    featured: true
  },
  {
    id: '5',
    title: 'Greek Island Hopping',
    destination: 'Athens, Mykonos & Santorini, Greece',
    duration: '12 Days / 11 Nights',
    price: 2800,
    description: 'Explore the ancient history of Athens and the stunning beauty of the Greek islands on this comprehensive tour.',
    image: 'https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
  },
  {
    id: '6',
    title: 'Japan Cultural Experience',
    destination: 'Tokyo, Kyoto & Osaka, Japan',
    duration: '10 Days / 9 Nights',
    price: 3500,
    description: 'Immerse yourself in Japanese culture with temple visits, tea ceremonies, and culinary experiences.',
    image: 'https://images.pexels.com/photos/1440476/pexels-photo-1440476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
  },
  {
    id: '7',
    title: 'Peru & Machu Picchu',
    destination: 'Lima, Cusco & Machu Picchu, Peru',
    duration: '9 Days / 8 Nights',
    price: 2200,
    description: 'Discover the ancient wonders of Peru, including the iconic Machu Picchu and the Sacred Valley.',
    image: 'https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
  },
  {
    id: '8',
    title: 'Australian Outback',
    destination: 'Sydney, Uluru & Cairns, Australia',
    duration: '14 Days / 13 Nights',
    price: 4100,
    description: 'Experience the diverse landscapes of Australia from cosmopolitan cities to the spiritual outback and the Great Barrier Reef.',
    image: 'https://images.pexels.com/photos/2193300/pexels-photo-2193300.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
  }
];

const Packages: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 5000 });
  const [duration, setDuration] = useState('any');
  const [filteredPackages, setFilteredPackages] = useState(allPackages);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    applyFilters();
  };

  const applyFilters = () => {
    let filtered = allPackages;
    
    if (searchTerm) {
      filtered = filtered.filter(
        (pkg) => 
          pkg.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          pkg.destination.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    filtered = filtered.filter(
      (pkg) => pkg.price >= priceRange.min && pkg.price <= priceRange.max
    );
    
    if (duration !== 'any') {
      filtered = filtered.filter((pkg) => {
        const days = parseInt(pkg.duration.split(' ')[0]);
        switch (duration) {
          case 'short': return days <= 7;
          case 'medium': return days > 7 && days <= 10;
          case 'long': return days > 10;
          default: return true;
        }
      });
    }
    
    setFilteredPackages(filtered);
  };

  const resetFilters = () => {
    setSearchTerm('');
    setPriceRange({ min: 0, max: 5000 });
    setDuration('any');
    setFilteredPackages(allPackages);
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        <div className="mb-12">
          <h1 className="text-4xl font-serif font-medium text-gray-900 mb-4">
            Travel Packages
          </h1>
          <p className="text-gray-600 max-w-3xl">
            Discover our carefully curated travel packages designed to provide unforgettable experiences. From wildlife safaris to cultural immersions, find the perfect journey for your next adventure.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <form onSubmit={handleSearch} className="flex flex-wrap items-end gap-4">
            <div className="w-full md:w-auto flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Search Packages
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search size={18} className="text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Destination or package name"
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
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                    <DollarSign size={16} className="mr-1" />
                    Price Range (per person)
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
                  <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                    <Calendar size={16} className="mr-1" />
                    Duration
                  </label>
                  <select 
                    className="form-input"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                  >
                    <option value="any">Any Duration</option>
                    <option value="short">Short Trip (≤ 7 days)</option>
                    <option value="medium">Medium Trip (8-10 days)</option>
                    <option value="long">Long Trip (&gt; 10 days)</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Trip Type
                  </label>
                  <select className="form-input">
                    <option>Any Type</option>
                    <option>Adventure</option>
                    <option>Beach</option>
                    <option>Cultural</option>
                    <option>Wildlife</option>
                    <option>Urban</option>
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPackages.length > 0 ? (
            filteredPackages.map((pkg) => (
              <PackageCard key={pkg.id} package={pkg} />
            ))
          ) : (
            <div className="col-span-full text-center py-16">
              <p className="text-gray-600 text-lg mb-4">No packages found matching your criteria.</p>
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

export default Packages;