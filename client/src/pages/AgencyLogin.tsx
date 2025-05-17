import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Building2, Mail, Lock } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const AgencyLogin: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [forgotPasswordSuccess, setForgotPasswordSuccess] = useState(false);
  
  const { agencyLogin } = useAuth();
  const navigate = useNavigate();
  
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }
    
    setIsLoading(true);
    setError('');
    
    try {
      const success = await agencyLogin(email, password);
      if (success) {
        navigate('/profile');
      } else {
        setError('Invalid credentials. Please try again.');
      }
    } catch (err) {
      setError('Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleForgotPassword = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!forgotPasswordEmail) {
      setError('Please enter your email address');
      return;
    }
    
    // In a real app, this would send a password reset email
    setForgotPasswordSuccess(true);
    setTimeout(() => {
      setShowForgotPassword(false);
      setForgotPasswordSuccess(false);
      setForgotPasswordEmail('');
    }, 3000);
  };

  return (
    <div className="pt-24 pb-16 flex items-center justify-center min-h-screen">
      <div className="container-custom">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-serif font-medium text-gray-900 mb-2">
              Agency Login
            </h1>
            <p className="text-gray-600">
              Log in to your travel agency account to manage bookings and create packages
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            {!showForgotPassword ? (
              <div className="p-8">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Building2 size={32} className="text-primary" />
                  </div>
                </div>
                
                <h2 className="text-xl font-medium text-center mb-6">
                  Sign in to your account
                </h2>
                
                {error && (
                  <div className="bg-error/10 border border-error text-error p-3 rounded-lg mb-4 text-sm">
                    {error}
                  </div>
                )}
                
                <form onSubmit={handleLogin}>
                  <div className="mb-4">
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
                        placeholder="your@email.com"
                        className="form-input pl-10"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-1">
                      <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        Password
                      </label>
                      <button
                        type="button"
                        onClick={() => setShowForgotPassword(true)}
                        className="text-xs text-primary hover:underline"
                      >
                        Forgot password?
                      </button>
                    </div>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Lock size={18} className="text-gray-400" />
                      </div>
                      <input
                        type="password"
                        id="password"
                        placeholder="••••••••"
                        className="form-input pl-10"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="btn btn-primary w-full"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Logging in...' : 'Log In'}
                  </button>
                </form>
                
                <div className="text-center mt-6">
                  <p className="text-sm text-gray-600">
                    Don't have an agency account?{' '}
                    <a href="mailto:partners@flyobo.com" className="text-primary hover:underline">
                      Contact us
                    </a>
                  </p>
                </div>
              </div>
            ) : (
              <div className="p-8">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Lock size={32} className="text-primary" />
                  </div>
                </div>
                
                <h2 className="text-xl font-medium text-center mb-6">
                  Reset Password
                </h2>
                
                {error && (
                  <div className="bg-error/10 border border-error text-error p-3 rounded-lg mb-4 text-sm">
                    {error}
                  </div>
                )}
                
                {forgotPasswordSuccess ? (
                  <div className="bg-success/10 border border-success text-success p-4 rounded-lg mb-6">
                    Password reset instructions have been sent to your email.
                  </div>
                ) : (
                  <form onSubmit={handleForgotPassword}>
                    <div className="mb-6">
                      <p className="text-sm text-gray-600 mb-4">
                        Enter your email address and we'll send you instructions to reset your password.
                      </p>
                      <label htmlFor="forgotPasswordEmail" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Mail size={18} className="text-gray-400" />
                        </div>
                        <input
                          type="email"
                          id="forgotPasswordEmail"
                          placeholder="your@email.com"
                          className="form-input pl-10"
                          value={forgotPasswordEmail}
                          onChange={(e) => setForgotPasswordEmail(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    
                    <button 
                      type="submit" 
                      className="btn btn-primary w-full mb-4"
                    >
                      Send Reset Instructions
                    </button>
                    
                    <button 
                      type="button" 
                      onClick={() => {
                        setShowForgotPassword(false);
                        setError('');
                      }}
                      className="btn w-full border border-gray-300 text-gray-700 hover:bg-gray-50"
                    >
                      Back to Login
                    </button>
                  </form>
                )}
              </div>
            )}
          </div>
          
          <div className="text-center mt-6">
            <Link to="/login" className="text-primary hover:underline text-sm">
              Switch to Customer Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgencyLogin;