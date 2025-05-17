import React from 'react';
import { Link } from 'react-router-dom';

const CallToAction: React.FC = () => {
  return (
    <section className="py-20 relative">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750')"
        }}
      >
        <div className="absolute inset-0 bg-primary/80" />
      </div>
      
      <div className="container-custom relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-medium text-white mb-6">
          Ready to Start Your Adventure?
        </h2>
        <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
          Let us help you create memories that last a lifetime. With Flyobo, every journey becomes an extraordinary experience.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link to="/packages" className="btn bg-white text-primary hover:bg-gray-100">
            Browse Packages
          </Link>
          <Link to="/contact" className="btn border-2 border-white text-white hover:bg-white/10">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;