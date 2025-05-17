import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Places from './pages/Places';
import Packages from './pages/Packages';
import PackageDetail from './pages/PackageDetail';
import Gallery from './pages/Gallery';
import Blog from './pages/Blog';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Profile from './pages/Profile';
import MyTrips from './pages/MyTrips';
import Saved from './pages/Saved';
import Referrals from './pages/Referrals';
import AgencyLogin from './pages/AgencyLogin';
import { AuthProvider } from './context/AuthContext';
import { SavedItemsProvider } from './context/SavedItemsContext';

function App() {
  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <Router>
        <AuthProvider>
          <SavedItemsProvider>
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/places" element={<Places />} />
                <Route path="/packages" element={<Packages />} />
                <Route path="/packages/:id" element={<PackageDetail />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/my-trips" element={<MyTrips />} />
                <Route path="/saved" element={<Saved />} />
                <Route path="/referrals" element={<Referrals />} />
                <Route path="/agency-login" element={<AgencyLogin />} />
              </Routes>
            </Layout>
          </SavedItemsProvider>
        </AuthProvider>
      </Router>
    </GoogleOAuthProvider>
  );
}

export default App;