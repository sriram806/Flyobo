import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import PlaceCard from '../common/PlaceCard';
import { Place } from '../../types';
import { Link } from 'react-router-dom';

// Mock data for places
const places: Place[] = [
  {
    id: '1',
    name: 'Taj Lake Palace',
    state: 'Rajasthan',
    country: 'India',
    description: 'Experience royal luxury in this iconic floating palace hotel on Lake Pichola.',
    image: 'https://images.pexels.com/photos/5087163/pexels-photo-5087163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    rating: 4.9,
    price: 35000,
    featured: true
  },
  {
    id: '2',
    name: 'Kumarakom Resort',
    state: 'Kerala',
    country: 'India',
    description: 'Luxury lakeside resort offering traditional Kerala architecture and Ayurvedic spa.',
    image: 'https://images.pexels.com/photos/5087164/pexels-photo-5087164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    rating: 4.7,
    price: 15000,
    featured: true
  },
  {
    id: '3',
    name: 'The Oberoi Wildflower Hall',
    state: 'Himachal Pradesh',
    country: 'India',
    description: 'Former residence of Lord Kitchener, offering luxury amidst Himalayan cedar forests.',
    image: 'https://images.pexels.com/photos/5087166/pexels-photo-5087166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    rating: 4.8,
    price: 45000,
    featured: true
  },
  {
    id: '4',
    name: 'Evolve Back Coorg',
    state: 'Karnataka',
    country: 'India',
    description: 'Luxury resort inspired by local Kodava architecture, surrounded by coffee plantations.',
    image: 'https://images.pexels.com/photos/5087167/pexels-photo-5087167.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    rating: 4.6,
    price: 25000,
    featured: true
  }
];

const FeaturedPlaces: React.FC = () => {
  const scrollLeft = () => {
    const container = document.getElementById('featured-places-container');
    if (container) {
      container.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    const container = document.getElementById('featured-places-container');
    if (container) {
      container.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section id="featured" className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-serif font-medium text-gray-900">Featured Destinations</h2>
            <p className="text-gray-600 mt-2">Explore our handpicked selection of stunning locations</p>
          </div>
          <div className="flex items-center space-x-2">
            <button 
              onClick={scrollLeft}
              className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={scrollRight}
              className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
        
        <div 
          id="featured-places-container"
          className="flex overflow-x-auto space-x-6 pb-6 hide-scrollbar"
          style={{ scrollbarWidth: 'none' }}
        >
          {places.map((place) => (
            <div key={place.id} className="min-w-[280px] sm:min-w-[320px]">
              <PlaceCard place={place} />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Link to="/places" className="btn btn-outline">
            View All Destinations
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPlaces;