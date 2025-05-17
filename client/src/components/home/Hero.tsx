import React from 'react';
import HeroSearch from './HeroSearch';

const Hero: React.FC = () => {
  return (
    <section className="relative">
      {/* Hero Background */}
      <div 
        className="absolute inset-0 h-[80vh] bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750')"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
      </div>
      
      {/* Hero Content */}
      <div className="container-custom relative pt-48 pb-40 h-[80vh] flex flex-col justify-center">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
            Discover Your Perfect <span className="text-primary">Travel Experience</span>
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Explore the world with carefully curated travel packages, personalized itineraries, and unforgettable adventures.
          </p>
          <div className="flex space-x-4">
            <a href="#search" className="btn btn-primary">
              Find Your Trip
            </a>
            <a href="#featured" className="btn btn-outline border-white text-white hover:bg-white hover:text-primary">
              Explore Destinations
            </a>
          </div>
        </div>
      </div>
      
      {/* Search Section */}
      <div id="search" className="container-custom px-4 sm:px-6 lg:px-8 pb-16">
        <HeroSearch />
      </div>
    </section>
  );
};

export default Hero;