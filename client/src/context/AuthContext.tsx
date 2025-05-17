import React, { createContext, useState, useContext, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import { User } from '../types';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (phone: string) => Promise<void>;
  verifyOtp: (otp: string) => Promise<boolean>;
  logout: () => void;
  agencyLogin: (email: string, password: string) => Promise<boolean>;
  handleGoogleLogin: (credential: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem('flyobo_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }
  }, []);

  const handleGoogleLogin = async (credential: string) => {
    try {
      const decoded: any = jwtDecode(credential);
      const googleUser: User = {
        id: decoded.sub,
        name: decoded.name,
        email: decoded.email,
        avatar: decoded.picture,
      };
      
      setUser(googleUser);
      setIsAuthenticated(true);
      localStorage.setItem('flyobo_user', JSON.stringify(googleUser));
    } catch (error) {
      console.error('Google login failed:', error);
      throw error;
    }
  };

  const login = async (phone: string): Promise<void> => {
    console.log(`Sending OTP to ${phone}`);
    localStorage.setItem('flyobo_phone', phone);
    return Promise.resolve();
  };

  const verifyOtp = async (otp: string): Promise<boolean> => {
    if (otp.length === 4) {
      const mockUser: User = {
        id: '1',
        name: 'Demo User',
        email: 'user@example.com',
        phone: localStorage.getItem('flyobo_phone') || '',
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      };
      
      setUser(mockUser);
      setIsAuthenticated(true);
      localStorage.setItem('flyobo_user', JSON.stringify(mockUser));
      return Promise.resolve(true);
    }
    return Promise.resolve(false);
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('flyobo_user');
    localStorage.removeItem('flyobo_phone');
  };

  const agencyLogin = async (email: string, password: string): Promise<boolean> => {
    if (email && password) {
      const mockAgencyUser: User = {
        id: '2',
        name: 'Agency User',
        email: email,
      };
      
      setUser(mockAgencyUser);
      setIsAuthenticated(true);
      localStorage.setItem('flyobo_user', JSON.stringify(mockAgencyUser));
      return Promise.resolve(true);
    }
    return Promise.resolve(false);
  };

  const value = {
    user,
    isAuthenticated,
    login,
    verifyOtp,
    logout,
    agencyLogin,
    handleGoogleLogin,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};