import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Users, ThumbsUp } from 'lucide-react';

const AboutPreview: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.pexels.com/photos/5502227/pexels-photo-5502227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                alt="Our team planning trips"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg max-w-xs hidden md:block">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Award size={24} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Award Winning</h4>
                  <p className="text-sm text-gray-600">Named "Best Travel Experience Provider" for 3 consecutive years</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-serif font-medium text-gray-900 mb-6">About Flyobo</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Founded in 2020, Flyobo has grown from a small startup to a trusted name in travel experiences. Our mission is to create meaningful connections between travelers and destinations through thoughtfully curated journeys that respect local cultures and environments.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Users size={24} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Expert Team</h4>
                  <p className="text-sm text-gray-600">Our travel specialists have first-hand experience of all destinations</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <ThumbsUp size={24} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Satisfaction Guaranteed</h4>
                  <p className="text-sm text-gray-600">98% of our clients rate their experience as "Excellent"</p>
                </div>
              </div>
            </div>
            
            <Link to="/about" className="btn btn-outline">
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;