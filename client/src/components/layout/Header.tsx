import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Places', path: '/places' },
    { name: 'Packages', path: '/packages' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Blog', path: '/blog' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="fixed w-full z-50 bg-white shadow-md py-2">
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img 
            src="/logo.png" 
            alt="Flyobo Logo" 
            className="h-12 w-auto object-contain"
          />
        </Link>

        <nav className="hidden md:flex space-x-8 ml-12">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-medium transition-colors duration-200 ${
                location.pathname === link.path
                  ? 'text-primary'
                  : 'text-gray-800 hover:text-primary'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Link 
            to="/login" 
            className="font-medium text-gray-800 hover:text-primary transition-colors duration-200"
          >
            Login
          </Link>
          <Link
            to="/agency-login"
            className="btn btn-primary"
          >
            Agency Login
          </Link>
        </div>

        <button 
          className="md:hidden text-primary"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex justify-between items-center mb-8">
            <Link to="/" className="flex items-center" onClick={closeMenu}>
              <img 
                src="/logo.png" 
                alt="Flyobo Logo" 
                className="h-12 w-auto object-contain"
              />
            </Link>
            <button onClick={closeMenu} aria-label="Close menu">
              <X size={24} className="text-gray-800" />
            </button>
          </div>
          
          <nav className="flex flex-col space-y-6 mb-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-lg font-medium ${
                  location.pathname === link.path
                    ? 'text-primary'
                    : 'text-gray-800 hover:text-primary'
                }`}
                onClick={closeMenu}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          
          <div className="mt-auto flex flex-col space-y-4">
            <Link 
              to="/login" 
              className="btn btn-outline w-full"
              onClick={closeMenu}
            >
              Login
            </Link>
            <Link
              to="/agency-login"
              className="btn btn-primary w-full"
              onClick={closeMenu}
            >
              Agency Login
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;