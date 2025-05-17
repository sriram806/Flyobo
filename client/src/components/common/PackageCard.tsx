import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Calendar, MapPin } from 'lucide-react';
import { Package } from '../../types';
import { useSavedItems } from '../../context/SavedItemsContext';

interface PackageCardProps {
  package: Package;
}

const PackageCard: React.FC<PackageCardProps> = ({ package: travelPackage }) => {
  const { isSaved, addToSaved, removeFromSaved } = useSavedItems();
  const saved = isSaved(travelPackage.id);
  
  const handleWhatsApp = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    const message = `Hi, I'm interested in the ${travelPackage.title} package. Can you provide more information?`;
    const waLink = `https://wa.me/1234567890?text=${encodeURIComponent(message)}`;
    window.open(waLink, '_blank');
  };
  
  const toggleSave = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (saved) {
      removeFromSaved(travelPackage.id);
    } else {
      addToSaved(travelPackage);
    }
  };

  return (
    <Link to={`/packages/${travelPackage.id}`} className="card group">
      <div className="relative overflow-hidden aspect-video">
        <img 
          src={travelPackage.image} 
          alt={travelPackage.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <button
          onClick={toggleSave}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 flex items-center justify-center transition-all hover:bg-white"
          aria-label={saved ? "Remove from saved" : "Save this package"}
        >
          <Heart 
            size={18} 
            className={saved ? "fill-secondary text-secondary" : "text-gray-600"} 
          />
        </button>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <h3 className="text-xl font-medium text-white">{travelPackage.title}</h3>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center text-gray-600 mb-2">
          <MapPin size={16} className="mr-1" />
          <span className="text-sm">{travelPackage.destination}</span>
        </div>
        <div className="flex items-center text-gray-600 mb-3">
          <Calendar size={16} className="mr-1" />
          <span className="text-sm">{travelPackage.duration}</span>
        </div>
        <p className="text-sm text-gray-600 line-clamp-2 mb-3">{travelPackage.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-medium text-primary">
            ₹{travelPackage.price.toLocaleString('en-IN')}
            <span className="text-sm text-gray-500">/person</span>
          </span>
          <button 
            onClick={handleWhatsApp}
            className="btn btn-sm bg-green-600 hover:bg-green-700 text-white text-sm py-1"
          >
            Enquire via WhatsApp
          </button>
        </div>
      </div>
    </Link>
  );
};

export default PackageCard;