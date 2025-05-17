import React, { useState, useEffect } from 'react';
import { GalleryImage } from '../types';

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
  },
  {
    id: '7',
    src: 'https://images.pexels.com/photos/3757144/pexels-photo-3757144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    alt: 'Pyramids in Egypt',
    location: 'Giza, Egypt',
    user: 'Michael S.'
  },
  {
    id: '8',
    src: 'https://images.pexels.com/photos/33041/antelope-canyon-lower-canyon-arizona.jpg?auto=compress&cs=tinysrgb&w=1260&h=750',
    alt: 'Antelope Canyon',
    location: 'Arizona, USA',
    user: 'Lauren H.'
  },
  {
    id: '9',
    src: 'https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    alt: 'Beach in Thailand',
    location: 'Krabi, Thailand',
    user: 'Jason M.'
  },
  {
    id: '10',
    src: 'https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    alt: 'Amazing sunset over mountains',
    location: 'Patagonia, Argentina',
    user: 'Olivia P.'
  },
  {
    id: '11',
    src: 'https://images.pexels.com/photos/3293148/pexels-photo-3293148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    alt: 'Safari wildlife',
    location: 'Serengeti, Tanzania',
    user: 'Thomas G.'
  },
  {
    id: '12',
    src: 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    alt: 'Great Wall of China',
    location: 'Beijing, China',
    user: 'Emma L.'
  }
];

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [filteredImages, setFilteredImages] = useState<GalleryImage[]>(galleryImages);
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const filterImages = (region: string) => {
    setActiveFilter(region);
    
    if (region === 'all') {
      setFilteredImages(galleryImages);
      return;
    }
    
    // Simple filter by regions (in a real app, this would be more sophisticated)
    const regions: { [key: string]: string[] } = {
      asia: ['Thailand', 'Cambodia', 'Indonesia', 'China'],
      europe: ['Greece', 'Switzerland', 'Iceland'],
      africa: ['Egypt', 'Kenya', 'Tanzania', 'Morocco'],
      americas: ['USA', 'Argentina']
    };
    
    const filtered = galleryImages.filter((image) => {
      const country = image.location.split(', ')[1];
      return regions[region].includes(country);
    });
    
    setFilteredImages(filtered);
  };

  // Close lightbox on escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeLightbox();
      }
    };
    
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        <div className="mb-12">
          <h1 className="text-4xl font-serif font-medium text-gray-900 mb-4">
            Travel Gallery
          </h1>
          <p className="text-gray-600 max-w-3xl">
            Explore stunning photographs captured by our travelers during their adventures. These images showcase the beauty, culture, and experiences that await you.
          </p>
        </div>
        
        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => filterImages('all')}
            className={`px-4 py-2 rounded-lg ${
              activeFilter === 'all'
                ? 'bg-primary text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All Regions
          </button>
          <button
            onClick={() => filterImages('asia')}
            className={`px-4 py-2 rounded-lg ${
              activeFilter === 'asia'
                ? 'bg-primary text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Asia
          </button>
          <button
            onClick={() => filterImages('europe')}
            className={`px-4 py-2 rounded-lg ${
              activeFilter === 'europe'
                ? 'bg-primary text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Europe
          </button>
          <button
            onClick={() => filterImages('africa')}
            className={`px-4 py-2 rounded-lg ${
              activeFilter === 'africa'
                ? 'bg-primary text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Africa
          </button>
          <button
            onClick={() => filterImages('americas')}
            className={`px-4 py-2 rounded-lg ${
              activeFilter === 'americas'
                ? 'bg-primary text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Americas
          </button>
        </div>
        
        {/* Masonry Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image) => (
            <div 
              key={image.id} 
              onClick={() => openLightbox(image)}
              className={`${
                image.id === '4' || image.id === '9' ? 'row-span-2' : ''
              } overflow-hidden rounded-lg cursor-pointer relative group`}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 w-full bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-white font-medium">{image.location}</p>
                  <p className="text-gray-300 text-sm">by {image.user}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 sm:p-10">
            <div 
              className="absolute inset-0 cursor-pointer"
              onClick={closeLightbox}
            ></div>
            <div className="relative max-w-6xl max-h-full z-10">
              <img 
                src={selectedImage.src} 
                alt={selectedImage.alt}
                className="max-w-full max-h-[85vh] object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <h3 className="text-white font-medium text-xl">{selectedImage.location}</h3>
                <p className="text-gray-300">Photo by {selectedImage.user}</p>
              </div>
              <button 
                onClick={closeLightbox}
                className="absolute top-4 right-4 text-white text-2xl bg-black/50 w-10 h-10 rounded-full flex items-center justify-center"
              >
                ×
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;