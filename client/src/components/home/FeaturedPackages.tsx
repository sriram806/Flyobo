import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import PackageCard from '../common/PackageCard';
import { Package } from '../../types';
import { Link } from 'react-router-dom';

// Mock data for packages
const packages: Package[] = [
  {
    id: '1',
    title: 'Kerala Backwaters',
    destination: 'Kochi & Alleppey, Kerala',
    duration: '5 Days / 4 Nights',
    price: 25000,
    description: 'Experience the serene backwaters, lush landscapes, and rich culture of God\'s Own Country.',
    image: 'https://images.pexels.com/photos/5087165/pexels-photo-5087165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    featured: true
  },
  {
    id: '2',
    title: 'Rajasthan Heritage',
    destination: 'Jaipur, Udaipur & Jodhpur',
    duration: '7 Days / 6 Nights',
    price: 45000,
    description: 'Explore the majestic forts, palaces, and vibrant culture of royal Rajasthan.',
    image: 'https://images.pexels.com/photos/5087162/pexels-photo-5087162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    featured: true
  },
  {
    id: '3',
    title: 'Himalayan Adventure',
    destination: 'Manali & Leh-Ladakh',
    duration: '8 Days / 7 Nights',
    price: 55000,
    description: 'Journey through the breathtaking landscapes of the Himalayas and experience high-altitude adventures.',
    image: 'https://images.pexels.com/photos/5087156/pexels-photo-5087156.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    featured: true
  },
  {
    id: '4',
    title: 'Goa Beach Escape',
    destination: 'North & South Goa',
    duration: '4 Days / 3 Nights',
    price: 20000,
    description: 'Relax on pristine beaches, enjoy water sports, and experience the vibrant nightlife of Goa.',
    image: 'https://images.pexels.com/photos/5087159/pexels-photo-5087159.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    featured: true
  }
];

const FeaturedPackages: React.FC = () => {
  const scrollLeft = () => {
    const container = document.getElementById('featured-packages-container');
    if (container) {
      container.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    const container = document.getElementById('featured-packages-container');
    if (container) {
      container.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16">
      <div className="container-custom">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-serif font-medium text-gray-900">Featured Packages</h2>
            <p className="text-gray-600 mt-2">All-inclusive packages for your dream vacation</p>
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
          id="featured-packages-container"
          className="flex overflow-x-auto space-x-6 pb-6 hide-scrollbar"
          style={{ scrollbarWidth: 'none' }}
        >
          {packages.map((pkg) => (
            <div key={pkg.id} className="min-w-[300px] sm:min-w-[340px]">
              <PackageCard package={pkg} />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Link to="/packages" className="btn btn-outline">
            View All Packages
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPackages;