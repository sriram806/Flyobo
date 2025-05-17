import React from 'react';
import { Link } from 'react-router-dom';
import { GalleryImage } from '../../types';

// Mock data for gallery images
const galleryImages: GalleryImage[] = [
  {
    id: '1',
    src: 'https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    alt: 'Travelers at the beach in Thailand',
    location: 'Phi Phi Islands, Thailand',
    user: 'Emily W.'
  },
  {
    id: '2',
    src: 'https://images.pexels.com/photos/2245436/pexels-photo-2245436.png?auto=compress&cs=tinysrgb&w=1260&h=750',
    alt: 'Mountain hiking in Switzerland',
    location: 'Alps, Switzerland',
    user: 'Mark T.'
  },
  {
    id: '3',
    src: 'https://images.pexels.com/photos/3889843/pexels-photo-3889843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    alt: 'Ancient temple in Cambodia',
    location: 'Angkor Wat, Cambodia',
    user: 'Jessica L.'
  },
  {
    id: '4',
    src: 'https://images.pexels.com/photos/699466/pexels-photo-699466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    alt: 'Wildlife Safari in Kenya',
    location: 'Masai Mara, Kenya',
    user: 'Robert K.'
  },
  {
    id: '5',
    src: 'https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    alt: 'Northern Lights in Iceland',
    location: 'Reykjavik, Iceland',
    user: 'Sophie D.'
  },
  {
    id: '6',
    src: 'https://images.pexels.com/photos/2161467/pexels-photo-2161467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    alt: 'Santorini sunset',
    location: 'Santorini, Greece',
    user: 'Daniel P.'
  }
];

const GalleryPreview: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-medium text-gray-900">Travel Moments</h2>
          <p className="text-gray-600 mt-2">Real photos from our travelers' adventures</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div 
              key={image.id} 
              className={`relative overflow-hidden rounded-lg ${
                index === 3 || index === 4 ? 'col-span-2 md:col-span-1' : ''
              }`}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 w-full bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-white font-medium">{image.location}</p>
                  <p className="text-gray-300 text-sm">by {image.user}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link to="/gallery" className="btn btn-outline">
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;