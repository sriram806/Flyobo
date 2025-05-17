import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Calendar, MapPin, Clock, Share2 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { Trip } from '../types';

// Mock trips data
const trips: Trip[] = [
  {
    id: '1',
    packageId: '1',
    packageTitle: 'Thailand Adventure',
    destination: 'Bangkok & Phuket, Thailand',
    startDate: '2025-06-15',
    endDate: '2025-06-22',
    status: 'upcoming',
    image: 'https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
  },
  {
    id: '2',
    packageId: '3',
    packageTitle: 'Kenyan Safari',
    destination: 'Nairobi & Masai Mara, Kenya',
    startDate: '2025-08-10',
    endDate: '2025-08-16',
    status: 'upcoming',
    image: 'https://images.pexels.com/photos/7245483/pexels-photo-7245483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
  },
  {
    id: '3',
    packageId: '2',
    packageTitle: 'Italian Romance',
    destination: 'Rome, Florence & Venice, Italy',
    startDate: '2024-09-05',
    endDate: '2024-09-15',
    status: 'past',
    image: 'https://images.pexels.com/photos/7245464/pexels-photo-7245464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
  }
];

const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

const MyTrips: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState<'upcoming' | 'past' | 'all'>('all');
  const [filteredTrips, setFilteredTrips] = useState<Trip[]>(trips);
  
  useEffect(() => {
    // Redirect if not authenticated
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }
    
    // Filter trips
    if (activeFilter === 'all') {
      setFilteredTrips(trips);
    } else {
      setFilteredTrips(trips.filter(trip => trip.status === activeFilter));
    }
  }, [isAuthenticated, navigate, activeFilter]);
  
  const handleShare = (tripId: string) => {
    // In a real app, this would generate a shareable link
    alert(`Sharing trip ${tripId} via WhatsApp`);
  };
  
  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        <div className="mb-12">
          <h1 className="text-4xl font-serif font-medium text-gray-900 mb-4">
            My Trips
          </h1>
          <p className="text-gray-600 max-w-3xl">
            View and manage your upcoming and past travel experiences
          </p>
        </div>
        
        {/* Filters */}
        <div className="flex mb-8">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 rounded-lg mr-2 ${
              activeFilter === 'all'
                ? 'bg-primary text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All Trips
          </button>
          <button
            onClick={() => setActiveFilter('upcoming')}
            className={`px-4 py-2 rounded-lg mr-2 ${
              activeFilter === 'upcoming'
                ? 'bg-primary text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Upcoming
          </button>
          <button
            onClick={() => setActiveFilter('past')}
            className={`px-4 py-2 rounded-lg ${
              activeFilter === 'past'
                ? 'bg-primary text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Past Trips
          </button>
        </div>
        
        {/* Trips List */}
        <div className="space-y-6">
          {filteredTrips.length > 0 ? (
            filteredTrips.map((trip) => (
              <div key={trip.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-3">
                  <div className="relative h-64 md:h-auto">
                    <img 
                      src={trip.image} 
                      alt={trip.packageTitle}
                      className="w-full h-full object-cover"
                    />
                    {trip.status === 'upcoming' && (
                      <div className="absolute top-4 left-4 bg-primary text-white text-xs font-medium px-2.5 py-1 rounded">
                        Upcoming
                      </div>
                    )}
                    {trip.status === 'past' && (
                      <div className="absolute top-4 left-4 bg-gray-600 text-white text-xs font-medium px-2.5 py-1 rounded">
                        Completed
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6 md:col-span-2">
                    <h2 className="text-2xl font-medium text-gray-900 mb-2">
                      {trip.packageTitle}
                    </h2>
                    
                    <div className="flex items-center text-gray-600 mb-4">
                      <MapPin size={18} className="mr-2" />
                      {trip.destination}
                    </div>
                    
                    <div className="flex flex-wrap gap-y-3 mb-6">
                      <div className="flex items-center mr-6">
                        <Calendar size={18} className="text-primary mr-2" />
                        <div>
                          <p className="text-sm text-gray-500">Departure</p>
                          <p className="font-medium">{formatDate(trip.startDate)}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center mr-6">
                        <Calendar size={18} className="text-primary mr-2" />
                        <div>
                          <p className="text-sm text-gray-500">Return</p>
                          <p className="font-medium">{formatDate(trip.endDate)}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <Clock size={18} className="text-primary mr-2" />
                        <div>
                          <p className="text-sm text-gray-500">Duration</p>
                          <p className="font-medium">
                            {Math.ceil((new Date(trip.endDate).getTime() - new Date(trip.startDate).getTime()) / (1000 * 60 * 60 * 24))} Days
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-3">
                      <Link 
                        to={`/packages/${trip.packageId}`}
                        className="btn btn-outline"
                      >
                        View Package
                      </Link>
                      
                      {trip.status === 'upcoming' && (
                        <button 
                          onClick={() => handleShare(trip.id)}
                          className="btn bg-green-600 hover:bg-green-700 text-white"
                        >
                          <Share2 size={18} className="mr-2" />
                          Share Itinerary
                        </button>
                      )}
                      
                      {trip.status === 'past' && (
                        <Link 
                          to="/gallery"
                          className="btn btn-secondary"
                        >
                          Upload Photos
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <p className="text-gray-600 text-lg mb-4">
                {activeFilter === 'upcoming' 
                  ? "You don't have any upcoming trips."
                  : activeFilter === 'past'
                  ? "You don't have any past trips."
                  : "You don't have any trips yet."}
              </p>
              <Link to="/packages" className="btn btn-primary">
                Browse Travel Packages
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyTrips;