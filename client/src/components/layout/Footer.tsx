import React from 'react';
import { Link } from 'react-router-dom';
import { 
  PlaneTakeoff, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube 
} from 'lucide-react';

const Footer: React.FC = () => {
  const [email, setEmail] = React.useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Newsletter signup functionality would go here
    alert(`Thank you for subscribing with: ${email}`);
    setEmail('');
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <PlaneTakeoff size={32} className="text-primary" />
              <span className="text-2xl font-serif font-bold text-white">Flyobo</span>
            </div>
            <p className="text-gray-400 mb-6">
              Experience the world your way with our curated travel experiences and personalized itineraries.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-400 hover:text-primary" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" className="text-gray-400 hover:text-primary" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-primary" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://youtube.com" className="text-gray-400 hover:text-primary" aria-label="Youtube">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/places" className="text-gray-400 hover:text-primary">Destinations</Link></li>
              <li><Link to="/packages" className="text-gray-400 hover:text-primary">Travel Packages</Link></li>
              <li><Link to="/gallery" className="text-gray-400 hover:text-primary">Travel Gallery</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-primary">Travel Blog</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-primary">About Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-primary mt-1 flex-shrink-0" />
                <span className="text-gray-400">123 Travel Street, Adventure City, AC 12345</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-primary flex-shrink-0" />
                <span className="text-gray-400">+1 (234) 567-8910</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-primary flex-shrink-0" />
                <a href="mailto:info@flyobo.com" className="text-gray-400 hover:text-primary">
                  info@flyobo.com
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-6">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to get special offers, travel tips, and updates on our latest deals.
            </p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button 
                type="submit" 
                className="w-full btn btn-primary"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Flyobo. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/terms" className="text-gray-500 text-sm hover:text-primary">Terms & Conditions</Link>
              <Link to="/privacy" className="text-gray-500 text-sm hover:text-primary">Privacy Policy</Link>
              <Link to="/contact" className="text-gray-500 text-sm hover:text-primary">Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;