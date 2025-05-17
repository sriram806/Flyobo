import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Calendar, 
  Users, 
  Clock, 
  DollarSign, 
  Map, 
  Utensils, 
  Home, 
  Plane, 
  Check,
  Heart,
  ChevronRight,
  Phone,
  Mail
} from 'lucide-react';
import { Package } from '../types';
import { useSavedItems } from '../context/SavedItemsContext';

// Mock package data with itinerary
const packageData: Package = {
  id: '1',
  title: 'Thailand Adventure',
  destination: 'Bangkok & Phuket, Thailand',
  duration: '7 Days / 6 Nights',
  price: 1200,
  description: 'Experience the perfect blend of city exploration and beach relaxation in this carefully crafted Thailand adventure. Begin in vibrant Bangkok where ancient temples stand alongside modern skyscrapers before heading to the tropical paradise of Phuket for pristine beaches and crystal-clear waters.',
  image: 'https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
  featured: true,
  itinerary: [
    {
      day: 1,
      title: 'Arrival in Bangkok',
      description: 'Welcome to Thailand! Upon arrival at Bangkok International Airport, you\'ll be met by your guide and transferred to your hotel. Rest and relax before a welcome dinner cruise on the Chao Phraya River.'
    },
    {
      day: 2,
      title: 'Bangkok Temple Tour',
      description: 'Explore Bangkok\'s most famous temples including Wat Arun (Temple of Dawn), the Grand Palace, and Wat Pho (Temple of the Reclining Buddha). Afternoon at leisure to explore local markets.'
    },
    {
      day: 3,
      title: 'Bangkok City Tour',
      description: 'Discover modern Bangkok with visits to Jim Thompson House, a canal boat tour, and shopping at Siam Square. Evening street food tour to experience authentic Thai cuisine.'
    },
    {
      day: 4,
      title: 'Bangkok to Phuket',
      description: 'Morning flight to Phuket. Check in to your beach resort and enjoy a free afternoon to relax by the ocean or pool. Welcome dinner at the resort.'
    },
    {
      day: 5,
      title: 'Phi Phi Islands Excursion',
      description: 'Full-day speedboat tour to the stunning Phi Phi Islands. Snorkel in crystal clear waters, visit Maya Bay (made famous by "The Beach"), and enjoy a beachside lunch.'
    },
    {
      day: 6,
      title: 'Phuket Free Day',
      description: 'Enjoy a free day in Phuket. Optional activities include spa treatments, cooking classes, or visiting the Big Buddha. Farewell dinner with traditional Thai performance.'
    },
    {
      day: 7,
      title: 'Departure',
      description: 'Transfer to Phuket International Airport for your departure flight. End of services.'
    }
  ]
};

// Mock related packages
const relatedPackages: Package[] = [
  {
    id: '3',
    title: 'Kenyan Safari',
    destination: 'Nairobi & Masai Mara, Kenya',
    duration: '6 Days / 5 Nights',
    price: 3200,
    description: 'Witness the spectacular wildlife of Africa on this unforgettable safari through Kenya\'s most famous reserves.',
    image: 'https://images.pexels.com/photos/7245483/pexels-photo-7245483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
  },
  {
    id: '4',
    title: 'Bali Tranquility',
    destination: 'Ubud & Seminyak, Bali',
    duration: '8 Days / 7 Nights',
    price: 1500,
    description: 'Find your inner peace with yoga retreats, temple visits, and beach relaxation on the island of the gods.',
    image: 'https://images.pexels.com/photos/5993162/pexels-photo-5993162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
  }
];

const PackageDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);
  const { isSaved, addToSaved, removeFromSaved } = useSavedItems();
  const [activeTab, setActiveTab] = useState('overview');
  
  useEffect(() => {
    // In a real app, this would fetch from an API based on id
    setSelectedPackage(packageData);
  }, [id]);
  
  const handleWhatsApp = () => {
    if (!selectedPackage) return;
    
    const message = `Hi, I'm interested in the ${selectedPackage.title} package. Can you provide more information?`;
    const waLink = `https://wa.me/1234567890?text=${encodeURIComponent(message)}`;
    window.open(waLink, '_blank');
  };
  
  const toggleSave = () => {
    if (!selectedPackage) return;
    
    if (isSaved(selectedPackage.id)) {
      removeFromSaved(selectedPackage.id);
    } else {
      addToSaved(selectedPackage);
    }
  };
  
  if (!selectedPackage) {
    return (
      <div className="pt-24 pb-16">
        <div className="container-custom">
          <div className="text-center py-16">
            <p className="text-gray-600 text-lg">Loading package details...</p>
          </div>
        </div>
      </div>
    );
  }
  
  const saved = isSaved(selectedPackage.id);

  return (
    <>
      {/* Hero Section */}
      <div className="relative pt-16">
        <div 
          className="relative h-[60vh] bg-cover bg-center"
          style={{ backgroundImage: `url(${selectedPackage.image})` }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="absolute inset-0 flex items-center">
          <div className="container-custom text-white">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-serif font-medium mb-4">
                {selectedPackage.title}
              </h1>
              <div className="flex items-center text-lg mb-6">
                <Map size={20} className="mr-2" />
                {selectedPackage.destination}
              </div>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center bg-white/20 px-4 py-2 rounded-lg">
                  <Calendar size={18} className="mr-2" />
                  {selectedPackage.duration}
                </div>
                <div className="flex items-center bg-white/20 px-4 py-2 rounded-lg">
                  <Users size={18} className="mr-2" />
                  Max 12 travelers
                </div>
                <div className="flex items-center bg-white/20 px-4 py-2 rounded-lg">
                  <DollarSign size={18} className="mr-2" />
                  From ${selectedPackage.price}/person
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Content Section */}
      <div className="container-custom py-10">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="w-full lg:w-2/3">
            {/* Tabs */}
            <div className="border-b mb-8">
              <nav className="flex space-x-8">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`py-4 px-1 font-medium border-b-2 ${
                    activeTab === 'overview'
                      ? 'border-primary text-primary'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Overview
                </button>
                <button
                  onClick={() => setActiveTab('itinerary')}
                  className={`py-4 px-1 font-medium border-b-2 ${
                    activeTab === 'itinerary'
                      ? 'border-primary text-primary'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Itinerary
                </button>
                <button
                  onClick={() => setActiveTab('includes')}
                  className={`py-4 px-1 font-medium border-b-2 ${
                    activeTab === 'includes'
                      ? 'border-primary text-primary'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  What's Included
                </button>
              </nav>
            </div>
            
            {/* Tab Content */}
            <div className="mb-10">
              {activeTab === 'overview' && (
                <div>
                  <h2 className="text-2xl font-serif font-medium text-gray-900 mb-4">
                    Package Overview
                  </h2>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {selectedPackage.description}
                  </p>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Immerse yourself in Thailand's rich culture, from exploring ancient temples to sampling street food delicacies. Witness the perfect harmony of tradition and modernity in Bangkok before unwinding on Phuket's stunning beaches and taking boat trips to nearby islands with crystal clear waters.
                  </p>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    This carefully crafted itinerary balances guided excursions with free time, allowing you to explore at your own pace. Whether you're seeking cultural insights, adventure activities, or simply relaxation, this Thailand package offers the perfect blend of experiences.
                  </p>
                  
                  <h3 className="text-xl font-medium text-gray-900 mb-3">
                    Trip Highlights
                  </h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-4 mb-6">
                    <li className="flex items-center">
                      <Check size={18} className="text-primary mr-2 flex-shrink-0" />
                      <span>Bangkok temple tour including Wat Arun and Grand Palace</span>
                    </li>
                    <li className="flex items-center">
                      <Check size={18} className="text-primary mr-2 flex-shrink-0" />
                      <span>Authentic Thai street food experience</span>
                    </li>
                    <li className="flex items-center">
                      <Check size={18} className="text-primary mr-2 flex-shrink-0" />
                      <span>Speedboat tour to the stunning Phi Phi Islands</span>
                    </li>
                    <li className="flex items-center">
                      <Check size={18} className="text-primary mr-2 flex-shrink-0" />
                      <span>Snorkeling in crystal clear waters</span>
                    </li>
                    <li className="flex items-center">
                      <Check size={18} className="text-primary mr-2 flex-shrink-0" />
                      <span>Welcome dinner cruise on the Chao Phraya River</span>
                    </li>
                    <li className="flex items-center">
                      <Check size={18} className="text-primary mr-2 flex-shrink-0" />
                      <span>Relaxation time at a premium beach resort</span>
                    </li>
                  </ul>
                </div>
              )}
              
              {activeTab === 'itinerary' && (
                <div>
                  <h2 className="text-2xl font-serif font-medium text-gray-900 mb-6">
                    Day-by-Day Itinerary
                  </h2>
                  
                  <div className="space-y-6">
                    {selectedPackage.itinerary?.map((day) => (
                      <div key={day.day} className="border-l-4 border-primary pl-6 relative">
                        <div className="absolute -left-4 top-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-medium">
                          {day.day}
                        </div>
                        <h3 className="text-xl font-medium text-gray-900 mb-2 pt-1">
                          {day.title}
                        </h3>
                        <p className="text-gray-700">
                          {day.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {activeTab === 'includes' && (
                <div>
                  <h2 className="text-2xl font-serif font-medium text-gray-900 mb-6">
                    What's Included
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-primary/5 p-6 rounded-lg">
                      <h3 className="font-medium text-gray-900 mb-4 flex items-center">
                        <Plane size={20} className="text-primary mr-2" />
                        Transportation
                      </h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Check size={16} className="text-primary mr-2 mt-1 flex-shrink-0" />
                          <span>Airport transfers in Bangkok and Phuket</span>
                        </li>
                        <li className="flex items-start">
                          <Check size={16} className="text-primary mr-2 mt-1 flex-shrink-0" />
                          <span>Domestic flight from Bangkok to Phuket</span>
                        </li>
                        <li className="flex items-start">
                          <Check size={16} className="text-primary mr-2 mt-1 flex-shrink-0" />
                          <span>Air-conditioned transportation for all tours</span>
                        </li>
                        <li className="flex items-start">
                          <Check size={16} className="text-primary mr-2 mt-1 flex-shrink-0" />
                          <span>Speedboat for Phi Phi Islands excursion</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-primary/5 p-6 rounded-lg">
                      <h3 className="font-medium text-gray-900 mb-4 flex items-center">
                        <Home size={20} className="text-primary mr-2" />
                        Accommodation
                      </h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Check size={16} className="text-primary mr-2 mt-1 flex-shrink-0" />
                          <span>3 nights in 4-star hotel in Bangkok</span>
                        </li>
                        <li className="flex items-start">
                          <Check size={16} className="text-primary mr-2 mt-1 flex-shrink-0" />
                          <span>3 nights in 4-star beach resort in Phuket</span>
                        </li>
                        <li className="flex items-start">
                          <Check size={16} className="text-primary mr-2 mt-1 flex-shrink-0" />
                          <span>Daily breakfast at all hotels</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-primary/5 p-6 rounded-lg">
                      <h3 className="font-medium text-gray-900 mb-4 flex items-center">
                        <Users size={20} className="text-primary mr-2" />
                        Guide & Activities
                      </h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Check size={16} className="text-primary mr-2 mt-1 flex-shrink-0" />
                          <span>English-speaking local guides</span>
                        </li>
                        <li className="flex items-start">
                          <Check size={16} className="text-primary mr-2 mt-1 flex-shrink-0" />
                          <span>All entrance fees as per itinerary</span>
                        </li>
                        <li className="flex items-start">
                          <Check size={16} className="text-primary mr-2 mt-1 flex-shrink-0" />
                          <span>Snorkeling equipment during island tour</span>
                        </li>
                        <li className="flex items-start">
                          <Check size={16} className="text-primary mr-2 mt-1 flex-shrink-0" />
                          <span>Traditional Thai performance at farewell dinner</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-primary/5 p-6 rounded-lg">
                      <h3 className="font-medium text-gray-900 mb-4 flex items-center">
                        <Utensils size={20} className="text-primary mr-2" />
                        Meals
                      </h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Check size={16} className="text-primary mr-2 mt-1 flex-shrink-0" />
                          <span>Daily breakfast</span>
                        </li>
                        <li className="flex items-start">
                          <Check size={16} className="text-primary mr-2 mt-1 flex-shrink-0" />
                          <span>Welcome dinner cruise in Bangkok</span>
                        </li>
                        <li className="flex items-start">
                          <Check size={16} className="text-primary mr-2 mt-1 flex-shrink-0" />
                          <span>Street food tour in Bangkok</span>
                        </li>
                        <li className="flex items-start">
                          <Check size={16} className="text-primary mr-2 mt-1 flex-shrink-0" />
                          <span>Lunch during Phi Phi Islands excursion</span>
                        </li>
                        <li className="flex items-start">
                          <Check size={16} className="text-primary mr-2 mt-1 flex-shrink-0" />
                          <span>Farewell dinner in Phuket</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-6">
                    <h3 className="font-medium text-gray-900 mb-4">
                      Not Included
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2 font-medium">×</span>
                        <span>International flights</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2 font-medium">×</span>
                        <span>Travel insurance</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2 font-medium">×</span>
                        <span>Optional activities and personal expenses</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2 font-medium">×</span>
                        <span>Meals not mentioned in the itinerary</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2 font-medium">×</span>
                        <span>Tips for guides and drivers</span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
            
            {/* Related Packages */}
            <div>
              <h2 className="text-2xl font-serif font-medium text-gray-900 mb-6">
                You Might Also Like
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedPackages.map((pkg) => (
                  <Link key={pkg.id} to={`/packages/${pkg.id}`} className="group">
                    <div className="card overflow-hidden">
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={pkg.image} 
                          alt={pkg.title} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-medium text-lg mb-1 group-hover:text-primary transition-colors">
                          {pkg.title}
                        </h3>
                        <p className="text-sm text-gray-500 mb-2">{pkg.destination}</p>
                        <div className="flex justify-between items-center">
                          <span className="text-primary font-medium">${pkg.price}/person</span>
                          <span className="text-sm text-gray-500">{pkg.duration}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="w-full lg:w-1/3">
            <div className="sticky top-24">
              <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
                <div className="bg-primary p-6 text-white">
                  <h3 className="text-xl font-medium mb-2">Book This Package</h3>
                  <p className="text-white/80">
                    Contact us via WhatsApp for the latest availability and pricing
                  </p>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-center py-3 border-b">
                    <span className="text-gray-600">Starting From</span>
                    <span className="text-xl font-medium text-primary">${selectedPackage.price}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b">
                    <span className="text-gray-600">Duration</span>
                    <span className="font-medium">{selectedPackage.duration}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b">
                    <span className="text-gray-600">Group Size</span>
                    <span className="font-medium">Max 12 people</span>
                  </div>
                  <div className="flex justify-between items-center py-3 mb-6">
                    <span className="text-gray-600">Tour Type</span>
                    <span className="font-medium">Adventure, Cultural</span>
                  </div>
                  
                  <div className="space-y-4">
                    <button 
                      onClick={handleWhatsApp}
                      className="btn w-full bg-green-600 hover:bg-green-700 text-white"
                    >
                      Enquire via WhatsApp
                    </button>
                    
                    <button 
                      onClick={toggleSave}
                      className={`btn w-full flex justify-center items-center ${
                        saved
                          ? 'bg-secondary/10 text-secondary border border-secondary hover:bg-secondary/20'
                          : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <Heart 
                        size={18} 
                        className={`mr-2 ${saved ? 'fill-secondary text-secondary' : ''}`} 
                      />
                      {saved ? 'Saved to Wishlist' : 'Save to Wishlist'}
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h3 className="text-lg font-medium mb-4">Need Help?</h3>
                  <p className="text-gray-600 mb-4">
                    Our travel experts are ready to assist you with any questions about this package.
                  </p>
                  <div className="space-y-3">
                    <a 
                      href="tel:+1234567890" 
                      className="flex items-center text-gray-700 hover:text-primary"
                    >
                      <Phone size={18} className="mr-2" />
                      +1 (234) 567-8910
                    </a>
                    <a 
                      href="mailto:bookings@flyobo.com" 
                      className="flex items-center text-gray-700 hover:text-primary"
                    >
                      <Mail size={18} className="mr-2" />
                      bookings@flyobo.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Breadcrumbs */}
      <div className="container-custom mb-16">
        <div className="flex items-center text-sm text-gray-500">
          <Link to="/" className="hover:text-primary">Home</Link>
          <ChevronRight size={14} className="mx-1" />
          <Link to="/packages" className="hover:text-primary">Packages</Link>
          <ChevronRight size={14} className="mx-1" />
          <span className="text-gray-700">{selectedPackage.title}</span>
        </div>
      </div>
    </>
  );
};

export default PackageDetail;