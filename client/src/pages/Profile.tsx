import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserCircle, Mail, Phone, Smartphone, Globe, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Profile: React.FC = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredCurrency: 'USD',
    preferredLanguage: 'English',
    notifications: true
  });
  
  useEffect(() => {
    // Redirect if not authenticated
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }
    
    // Populate form data with user info
    if (user) {
      setFormData({
        name: user.name || '',
        email: user.email || '',
        phone: user.phone || '',
        preferredCurrency: 'USD',
        preferredLanguage: 'English',
        notifications: true
      });
    }
  }, [user, isAuthenticated, navigate]);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would update the user profile
    alert('Profile updated successfully!');
  };
  
  const handleLogout = () => {
    logout();
    navigate('/');
  };
  
  if (!isAuthenticated || !user) {
    return null; // Will redirect in useEffect
  }

  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        <div className="mb-12">
          <h1 className="text-4xl font-serif font-medium text-gray-900 mb-4">
            Your Profile
          </h1>
          <p className="text-gray-600 max-w-3xl">
            Manage your account settings and preferences
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 text-center mb-6">
              <div className="mb-4 flex justify-center">
                {user.avatar ? (
                  <img 
                    src={user.avatar} 
                    alt={user.name} 
                    className="w-24 h-24 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
                    <UserCircle size={48} className="text-primary" />
                  </div>
                )}
              </div>
              <h2 className="text-xl font-medium">{user.name}</h2>
              <p className="text-gray-600 text-sm mb-4">{user.email}</p>
              
              <button 
                onClick={handleLogout}
                className="btn btn-outline w-full flex items-center justify-center"
              >
                <LogOut size={18} className="mr-2" />
                Log Out
              </button>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <nav>
                <a href="/profile" className="flex items-center px-6 py-3 bg-primary/5 text-primary border-l-4 border-primary">
                  <UserCircle size={20} className="mr-3" />
                  Profile
                </a>
                <a href="/my-trips" className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-50">
                  <Globe size={20} className="mr-3" />
                  My Trips
                </a>
                <a href="/saved" className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-50">
                  <Heart size={20} className="mr-3" />
                  Saved Items
                </a>
                <a href="/referrals" className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-50">
                  <Users size={20} className="mr-3" />
                  Referrals
                </a>
              </nav>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-medium text-gray-900 mb-6">Account Settings</h2>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-input"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail size={18} className="text-gray-400" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-input pl-10"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Phone size={18} className="text-gray-400" />
                      </div>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="form-input pl-10"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="preferredCurrency" className="block text-sm font-medium text-gray-700 mb-1">
                      Preferred Currency
                    </label>
                    <select
                      id="preferredCurrency"
                      name="preferredCurrency"
                      className="form-input"
                      value={formData.preferredCurrency}
                      onChange={handleChange}
                    >
                      <option value="USD">USD - US Dollar</option>
                      <option value="EUR">EUR - Euro</option>
                      <option value="GBP">GBP - British Pound</option>
                      <option value="JPY">JPY - Japanese Yen</option>
                      <option value="AUD">AUD - Australian Dollar</option>
                      <option value="CAD">CAD - Canadian Dollar</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="preferredLanguage" className="block text-sm font-medium text-gray-700 mb-1">
                      Preferred Language
                    </label>
                    <select
                      id="preferredLanguage"
                      name="preferredLanguage"
                      className="form-input"
                      value={formData.preferredLanguage}
                      onChange={handleChange}
                    >
                      <option value="English">English</option>
                      <option value="Spanish">Spanish</option>
                      <option value="French">French</option>
                      <option value="German">German</option>
                      <option value="Japanese">Japanese</option>
                      <option value="Chinese">Chinese</option>
                    </select>
                  </div>
                </div>
                
                <h3 className="text-lg font-medium text-gray-900 mb-4">Communication Preferences</h3>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="emailNotifications"
                      name="notifications"
                      className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
                      checked={formData.notifications}
                      onChange={handleChange}
                    />
                    <label htmlFor="emailNotifications" className="ml-2 block text-gray-700">
                      Email notifications about special offers and deals
                    </label>
                  </div>
                  
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="smsNotifications"
                      className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
                      defaultChecked
                    />
                    <label htmlFor="smsNotifications" className="ml-2 block text-gray-700">
                      SMS notifications about booking confirmations and updates
                    </label>
                  </div>
                  
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="newsletterSubscription"
                      className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
                      defaultChecked
                    />
                    <label htmlFor="newsletterSubscription" className="ml-2 block text-gray-700">
                      Subscribe to our weekly travel newsletter
                    </label>
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <button type="submit" className="btn btn-primary">
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Heart = ({ size, className }: { size: number, className: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  </svg>
);

export default Profile;