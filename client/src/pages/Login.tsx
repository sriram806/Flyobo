import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Smartphone, ArrowRight } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { GoogleLogin } from '@react-oauth/google';

const Login: React.FC = () => {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  
  const { login, verifyOtp, handleGoogleLogin } = useAuth();
  const navigate = useNavigate();
  
  const handlePhoneSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!phone || phone.length < 10) {
      setError('Please enter a valid phone number');
      return;
    }
    
    setIsLoading(true);
    setError('');
    
    try {
      await login(phone);
      setStep(2);
    } catch (err) {
      setError('Failed to send OTP. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleOtpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!otp || otp.length < 4) {
      setError('Please enter a valid OTP');
      return;
    }
    
    setIsLoading(true);
    setError('');
    
    try {
      const success = await verifyOtp(otp);
      if (success) {
        navigate('/profile');
      } else {
        setError('Invalid OTP. Please try again.');
      }
    } catch (err) {
      setError('Failed to verify OTP. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="pt-24 pb-16 flex items-center justify-center min-h-screen">
      <div className="container-custom">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-serif font-medium text-gray-900 mb-2">
              Welcome to Flyobo
            </h1>
            <p className="text-gray-600">
              Log in to access your trips, wishlist, and personalized recommendations
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            {step === 1 ? (
              <div className="p-8">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Smartphone size={32} className="text-primary" />
                  </div>
                </div>
                
                <h2 className="text-xl font-medium text-center mb-6">
                  Sign in with OTP
                </h2>
                
                {error && (
                  <div className="bg-error/10 border border-error text-error p-3 rounded-lg mb-4 text-sm">
                    {error}
                  </div>
                )}
                
                <form onSubmit={handlePhoneSubmit}>
                  <div className="mb-6">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Mobile Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      placeholder="Enter phone number"
                      className="form-input"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      We'll send you a one-time password to verify your number
                    </p>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="btn btn-primary w-full"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Sending OTP...' : 'Send OTP'}
                  </button>
                </form>
                
                <div className="relative flex items-center justify-center my-6">
                  <div className="border-t border-gray-300 w-full"></div>
                  <span className="bg-white px-3 text-sm text-gray-500">or</span>
                  <div className="border-t border-gray-300 w-full"></div>
                </div>

                <div className="mb-6">
                  <GoogleLogin
                    onSuccess={(credentialResponse) => {
                      handleGoogleLogin(credentialResponse.credential!)
                        .then(() => navigate('/profile'))
                        .catch(() => setError('Google login failed'));
                    }}
                    onError={() => setError('Google login failed')}
                  />
                </div>
                
                <div className="text-center">
                  <Link to="/agency-login" className="text-primary hover:underline flex items-center justify-center">
                    Agency Login <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            ) : (
              <div className="p-8">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Smartphone size={32} className="text-primary" />
                  </div>
                </div>
                
                <h2 className="text-xl font-medium text-center mb-6">
                  Verify OTP
                </h2>
                
                {error && (
                  <div className="bg-error/10 border border-error text-error p-3 rounded-lg mb-4 text-sm">
                    {error}
                  </div>
                )}
                
                <form onSubmit={handleOtpSubmit}>
                  <div className="mb-6">
                    <label htmlFor="otp" className="block text-sm font-medium text-gray-700 mb-1">
                      Enter OTP
                    </label>
                    <input
                      type="text"
                      id="otp"
                      placeholder="Enter 4-digit OTP"
                      className="form-input text-center text-xl tracking-widest"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      maxLength={4}
                      required
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      OTP sent to {phone}
                    </p>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="btn btn-primary w-full"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Verifying...' : 'Verify & Login'}
                  </button>
                </form>
                
                <div className="text-center mt-6 space-y-2">
                  <button 
                    onClick={() => setStep(1)} 
                    className="text-gray-600 hover:text-primary text-sm"
                  >
                    Change Phone Number
                  </button>
                  <br />
                  <button 
                    onClick={() => {
                      setError('');
                      alert('OTP resent successfully!');
                    }} 
                    className="text-primary hover:underline text-sm"
                  >
                    Resend OTP
                  </button>
                </div>
              </div>
            )}
          </div>
          
          <p className="text-center text-sm text-gray-600 mt-6">
            By continuing, you agree to Flyobo's <Link to="/terms" className="text-primary hover:underline">Terms of Service</Link> and <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;