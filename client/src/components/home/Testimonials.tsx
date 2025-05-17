import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Testimonial } from '../../types';

// Mock data for testimonials
const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    location: 'New York, USA',
    comment: 'My trip to Bali was absolutely incredible! The Flyobo team took care of everything, from accommodation to activities. I didn\'t have to worry about a thing!',
    rating: 5,
    avatar: 'https://randomuser.me/api/portraits/women/32.jpg'
  },
  {
    id: '2',
    name: 'Michael Chen',
    location: 'Toronto, Canada',
    comment: 'The safari package exceeded all my expectations. Our guide was knowledgeable and friendly, and we saw all the Big Five! Would definitely book with Flyobo again.',
    rating: 5,
    avatar: 'https://randomuser.me/api/portraits/men/46.jpg'
  },
  {
    id: '3',
    name: 'Emma Rodriguez',
    location: 'Sydney, Australia',
    comment: 'Japan during cherry blossom season was magical. The itinerary was perfectly balanced between cultural immersion and relaxation. Absolutely recommend!',
    rating: 4,
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg'
  },
  {
    id: '4',
    name: 'James Wilson',
    location: 'London, UK',
    comment: 'Our family trip to Thailand was the best vacation we\'ve ever had. The kids loved the elephant sanctuary, and the beach resort was stunning. Perfect balance!',
    rating: 5,
    avatar: 'https://randomuser.me/api/portraits/men/22.jpg'
  }
];

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="py-16 bg-primary/5">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-medium text-gray-900">What Our Travelers Say</h2>
          <p className="text-gray-600 mt-2">Hear from those who have experienced our journeys</p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="min-w-full px-4"
                >
                  <div className="bg-white rounded-lg shadow-md p-8 text-center">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
                    />
                    
                    <div className="flex justify-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={18} 
                          className={i < testimonial.rating ? "text-yellow-400" : "text-gray-300"} 
                          fill={i < testimonial.rating ? "currentColor" : "none"}
                        />
                      ))}
                    </div>
                    
                    <p className="text-gray-700 mb-6 italic">
                      "{testimonial.comment}"
                    </p>
                    
                    <h3 className="font-medium text-lg">{testimonial.name}</h3>
                    <p className="text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            onClick={prevTestimonial}
            className="absolute top-1/2 -left-5 transform -translate-y-1/2 p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute top-1/2 -right-5 transform -translate-y-1/2 p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>
        
        <div className="flex justify-center mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`w-3 h-3 mx-1 rounded-full transition-colors ${
                i === activeIndex ? 'bg-primary' : 'bg-gray-300'
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;