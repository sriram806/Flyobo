import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Share2, Copy, Check, Users, Gift } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { Referral } from '../types';

// Mock referral data
const referralData: Referral = {
  id: '1',
  code: 'FRIENDFLYOBO',
  credits: 250,
  history: [
    {
      id: '1',
      date: '2025-02-15',
      name: 'John Smith',
      amount: 100
    },
    {
      id: '2',
      date: '2025-01-20',
      name: 'Sarah Johnson',
      amount: 100
    },
    {
      id: '3',
      date: '2024-12-05',
      name: 'Michael Brown',
      amount: 50
    }
  ]
};

const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

const Referrals: React.FC = () => {
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();
  const [referral, setReferral] = useState<Referral | null>(null);
  const [copied, setCopied] = useState(false);
  
  useEffect(() => {
    // Redirect if not authenticated
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }
    
    // In a real app, this would fetch from an API
    setReferral(referralData);
  }, [isAuthenticated, navigate]);
  
  const copyReferralCode = () => {
    if (referral) {
      navigator.clipboard.writeText(referral.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };
  
  const shareViaWhatsApp = () => {
    if (referral && user) {
      const message = `Hey! Use my referral code ${referral.code} when booking your next trip on Flyobo and get $50 off your first booking. I'll get travel credits too!`;
      const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    }
  };
  
  if (!isAuthenticated || !referral) {
    return null; // Will redirect in useEffect
  }

  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        <div className="mb-12">
          <h1 className="text-4xl font-serif font-medium text-gray-900 mb-4">
            Refer Friends & Earn
          </h1>
          <p className="text-gray-600 max-w-3xl">
            Share Flyobo with your friends and family. You'll both get rewards when they book their first trip.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Referral Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <div className="flex flex-col md:flex-row items-center md:items-start mb-8">
                <div className="bg-primary/10 p-6 rounded-full mb-6 md:mb-0 md:mr-6">
                  <Users size={48} className="text-primary" />
                </div>
                
                <div className="text-center md:text-left">
                  <h2 className="text-2xl font-medium text-gray-900 mb-2">
                    How It Works
                  </h2>
                  <p className="text-gray-600 mb-4">
                    Share your unique referral code with friends. When they book a trip, you both get rewarded.
                  </p>
                  
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="bg-primary/20 w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-0.5 text-primary font-medium flex-shrink-0">
                        1
                      </span>
                      <span className="text-gray-700">Share your unique referral code with friends</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-primary/20 w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-0.5 text-primary font-medium flex-shrink-0">
                        2
                      </span>
                      <span className="text-gray-700">They sign up using your code</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-primary/20 w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-0.5 text-primary font-medium flex-shrink-0">
                        3
                      </span>
                      <span className="text-gray-700">They get $50 off their first booking</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-primary/20 w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-0.5 text-primary font-medium flex-shrink-0">
                        4
                      </span>
                      <span className="text-gray-700">You earn $100 in travel credits after they complete their trip</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  Your Referral Code
                </h3>
                
                <div className="flex flex-col md:flex-row items-center">
                  <div className="relative flex-grow mb-4 md:mb-0 md:mr-4">
                    <input
                      type="text"
                      value={referral.code}
                      className="form-input pr-12 font-medium text-center"
                      readOnly
                    />
                    <button 
                      onClick={copyReferralCode}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-primary"
                      aria-label="Copy referral code"
                    >
                      {copied ? <Check size={20} className="text-success" /> : <Copy size={20} />}
                    </button>
                  </div>
                  
                  <button 
                    onClick={shareViaWhatsApp}
                    className="btn bg-green-600 hover:bg-green-700 text-white w-full md:w-auto flex justify-center items-center"
                  >
                    <Share2 size={18} className="mr-2" />
                    Share via WhatsApp
                  </button>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-medium text-gray-900 mb-6">
                Referral History
              </h3>
              
              {referral.history.length > 0 ? (
                <div className="overflow-x-auto">
                  <table className="min-w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="py-3 px-4 text-left font-medium text-gray-700">Date</th>
                        <th className="py-3 px-4 text-left font-medium text-gray-700">Friend</th>
                        <th className="py-3 px-4 text-right font-medium text-gray-700">Credits Earned</th>
                      </tr>
                    </thead>
                    <tbody>
                      {referral.history.map((item) => (
                        <tr key={item.id} className="border-b last:border-0">
                          <td className="py-3 px-4 text-gray-700">{formatDate(item.date)}</td>
                          <td className="py-3 px-4 text-gray-700">{item.name}</td>
                          <td className="py-3 px-4 text-right font-medium text-success">+${item.amount}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <p className="text-gray-600 text-center py-6">
                  You haven't referred anyone yet. Start sharing your code!
                </p>
              )}
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-medium text-gray-900">
                  Your Credits
                </h3>
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Gift size={24} className="text-primary" />
                </div>
              </div>
              
              <div className="flex items-center justify-center py-6">
                <span className="text-4xl font-bold text-primary">${referral.credits}</span>
              </div>
              
              <p className="text-center text-gray-600 mb-6">
                Use your credits on your next booking
              </p>
              
              <button className="btn btn-primary w-full">
                Browse Packages
              </button>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Program Rules
              </h3>
              
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start">
                  <div className="bg-primary/20 w-2 h-2 rounded-full mt-1.5 mr-2"></div>
                  <span>Referral bonuses are applied after your friend completes their first trip.</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary/20 w-2 h-2 rounded-full mt-1.5 mr-2"></div>
                  <span>Credits can be applied to any booking valued at $200 or more.</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary/20 w-2 h-2 rounded-full mt-1.5 mr-2"></div>
                  <span>Credits are valid for 12 months from the date they are earned.</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary/20 w-2 h-2 rounded-full mt-1.5 mr-2"></div>
                  <span>There is no limit to how many friends you can refer.</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary/20 w-2 h-2 rounded-full mt-1.5 mr-2"></div>
                  <span>Flyobo reserves the right to modify or terminate this program at any time.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Referrals;