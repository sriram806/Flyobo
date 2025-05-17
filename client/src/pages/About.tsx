import React from 'react';
import { Award, Users, ThumbsUp, Target, Heart, Globe } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        {/* Hero Section */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-medium text-gray-900 mb-6">
            About Flyobo
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're a team of passionate travelers dedicated to creating unforgettable experiences that connect people with the world's most amazing destinations.
          </p>
        </div>
        
        {/* Our Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-serif font-medium text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Founded in 2020, Flyobo was born from a simple idea: travel should be transformative, accessible, and sustainable. Our founders, avid travelers themselves, saw a gap in the market for truly personalized travel experiences that go beyond the typical tourist trail.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              What started as a small team operating out of a shared workspace has grown into a global network of travel specialists, local guides, and destination experts. Despite our growth, we've stayed true to our core mission of creating meaningful connections between travelers and destinations.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Today, we proudly serve thousands of travelers each year, helping them discover the world on their terms. Our commitment to responsible tourism, cultural respect, and environmental sustainability guides everything we do.
            </p>
          </div>
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/5255849/pexels-photo-5255849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
              alt="Flyobo team" 
              className="rounded-lg shadow-xl"
            />
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
        </div>
        
        {/* Mission & Vision */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-medium text-gray-900 mb-4">
              Our Mission & Vision
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We believe in the power of travel to transform lives, broaden perspectives, and create positive change in the world.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-primary/5 p-8 rounded-lg">
              <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Target size={32} className="text-primary" />
              </div>
              <h3 className="text-2xl font-medium text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To create meaningful travel experiences that enrich lives, foster cultural understanding, and preserve the world's natural and cultural heritage for future generations. We strive to make responsible travel accessible to all, connecting people with authentic local experiences while ensuring positive impacts on communities and environments.
              </p>
            </div>
            
            <div className="bg-primary/5 p-8 rounded-lg">
              <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Heart size={32} className="text-primary" />
              </div>
              <h3 className="text-2xl font-medium text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To be the world's most trusted provider of transformative travel experiences. We envision a world where travel is a force for good, where cultural exchange leads to greater global understanding, and where tourism supports rather than depletes local communities and ecosystems. We aim to set new standards for responsible, sustainable, and memorable travel.
              </p>
            </div>
          </div>
        </div>
        
        {/* Core Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-medium text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do, from designing our travel packages to interacting with our clients and partners.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Sustainability</h3>
              <p className="text-gray-600">
                We prioritize environmental protection and support local communities through responsible tourism practices.
              </p>
            </div>
            
            <div className="p-6 text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ThumbsUp size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Quality</h3>
              <p className="text-gray-600">
                We maintain the highest standards in every aspect of our service, from itinerary planning to on-the-ground experiences.
              </p>
            </div>
            
            <div className="p-6 text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Authenticity</h3>
              <p className="text-gray-600">
                We create genuine connections with local cultures and communities, going beyond superficial tourist experiences.
              </p>
            </div>
          </div>
        </div>
        
        {/* Our Team */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-medium text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              The passionate people behind Flyobo who work tirelessly to create unforgettable travel experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="rounded-full overflow-hidden w-40 h-40 mx-auto mb-4">
                <img 
                  src="https://randomuser.me/api/portraits/women/65.jpg"
                  alt="Sarah Johnson" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-medium text-lg text-gray-900">Sarah Johnson</h3>
              <p className="text-primary mb-2">Founder & CEO</p>
              <p className="text-gray-600 text-sm">
                With over 15 years in the travel industry and visits to 70+ countries, Sarah brings unparalleled expertise and vision.
              </p>
            </div>
            
            <div className="text-center">
              <div className="rounded-full overflow-hidden w-40 h-40 mx-auto mb-4">
                <img 
                  src="https://randomuser.me/api/portraits/men/86.jpg"
                  alt="David Chen" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-medium text-lg text-gray-900">David Chen</h3>
              <p className="text-primary mb-2">Co-Founder & COO</p>
              <p className="text-gray-600 text-sm">
                Former expedition leader turned operations expert, David ensures our journeys run smoothly and exceed expectations.
              </p>
            </div>
            
            <div className="text-center">
              <div className="rounded-full overflow-hidden w-40 h-40 mx-auto mb-4">
                <img 
                  src="https://randomuser.me/api/portraits/women/33.jpg"
                  alt="Maria Rodriguez" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-medium text-lg text-gray-900">Maria Rodriguez</h3>
              <p className="text-primary mb-2">Head of Sustainability</p>
              <p className="text-gray-600 text-sm">
                Environmental scientist who leads our initiatives to minimize ecological impact and maximize community benefits.
              </p>
            </div>
            
            <div className="text-center">
              <div className="rounded-full overflow-hidden w-40 h-40 mx-auto mb-4">
                <img 
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="James Wilson" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-medium text-lg text-gray-900">James Wilson</h3>
              <p className="text-primary mb-2">Experience Designer</p>
              <p className="text-gray-600 text-sm">
                Cultural anthropologist with a talent for creating immersive travel experiences that tell a destination's authentic story.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;