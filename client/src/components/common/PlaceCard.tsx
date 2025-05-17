import React from 'react';
import { Heart, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Place } from '../../types';
import { useSavedItems } from '../../context/SavedItemsContext';

interface PlaceCardProps {
  place: Place;
}

const PlaceCard: React.FC<PlaceCardProps> = ({ place }) => {
  const { isSaved, addToSaved, removeFromSaved } = useSavedItems();
  const saved = isSaved(place.id);

  const toggleSave = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (saved) {
      removeFromSaved(place.id);
    } else {
      addToSaved(place);
    }
  };

  return (
    <Link to={`/places/${place.id}`} className="card group">
      <div className="relative overflow-hidden aspect-[4/3]">
        <img 
          src={place.image} 
          alt={place.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <button
          onClick={toggleSave}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 flex items-center justify-center transition-all hover:bg-white"
          aria-label={saved ? "Remove from saved" : "Save this place"}
        >
          <Heart 
            size={18} 
            className={saved ? "fill-secondary text-secondary" : "text-gray-600"} 
          />
        </button>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <div className="flex items-center text-white mb-1">
            <Star size={16} className="text-yellow-400 mr-1" />
            <span className="text-sm">{place.rating}/5</span>
          </div>
          <h3 className="text-xl font-medium text-white">{place.name}</h3>
          <p className="text-sm text-gray-200">{place.state}, {place.country}</p>
        </div>
      </div>
      <div className="p-4">
        <p className="text-sm text-gray-600 line-clamp-2 mb-3">{place.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-medium text-primary">
            ₹{place.price.toLocaleString('en-IN')}
            <span className="text-sm text-gray-500">/night</span>
          </span>
          <button className="btn btn-sm btn-outline text-sm py-1">
            View Details
          </button>
        </div>
      </div>
    </Link>
  );
};

export default PlaceCard;