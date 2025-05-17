import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { MapPin, DollarSign, Calendar, X } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useSavedItems } from '../context/SavedItemsContext';

const Saved: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const { savedItems, removeFromSaved } = useSavedItems();
  const navigate = useNavigate();
  
  useEffect(() => {
    // Redirect if not authenticated
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);
  
  const handleRemove = (id: string) => {
    if (window.confirm('Are you sure you want to remove this item from your saved list?')) {
      removeFromSaved(id);
    }
  };
  
  if (!isAuthenticated) {
    return null; // Will redirect in useEffect
  }

  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        <div className="mb-12">
          <h1 className="text-4xl font-serif font-medium text-gray-900 mb-4">
            Saved Items
          </h1>
          <p className="text-gray-600 max-w-3xl">
            Review your saved destinations and travel packages
          </p>
        </div>
        
        {savedItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {savedItems.map((item) => (
              <div key={item.id} className="relative card overflow-hidden group">
                <button
                  onClick={() => handleRemove(item.id)}
                  className="absolute top-3 right-3 z-10 bg-white/80 hover:bg-white w-8 h-8 rounded-full flex items-center justify-center"
                  aria-label="Remove from saved"
                >
                  <X size={18} className="text-gray-700" />
                </button>
                
                <Link to={
                  'duration' in item 
                    ? `/packages/${item.id}` 
                    : `/places/${item.id}`
                }>
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img 
                      src={item.image} 
                      alt={item.name || item.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-medium text-gray-900 mb-2">
                      {item.name || item.title}
                    </h3>
                    
                    <div className="flex items-center text-gray-600 mb-3">
                      <MapPin size={16} className="mr-1.5 flex-shrink-0" />
                      <span>{'country' in item ? item.country : item.destination}</span>
                    </div>
                    
                    {'duration' in item && (
                      <div className="flex items-center text-gray-600 mb-3">
                        <Calendar size={16} className="mr-1.5 flex-shrink-0" />
                        <span>{item.duration}</span>
                      </div>
                    )}
                    
                    <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                      {item.description}
                    </p>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex items-center text-lg font-medium text-primary">
                        <DollarSign size={18} className="mr-0.5" />
                        {item.price}
                        <span className="text-sm text-gray-500 ml-1">
                          {'rating' in item ? '/night' : '/person'}
                        </span>
                      </div>
                      
                      <button className="btn btn-sm btn-outline">
                        View Details
                      </button>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <p className="text-gray-600 text-lg mb-4">
              You don't have any saved items yet.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/places" className="btn btn-outline">
                Explore Destinations
              </Link>
              <Link to="/packages" className="btn btn-primary">
                Browse Packages
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Saved;