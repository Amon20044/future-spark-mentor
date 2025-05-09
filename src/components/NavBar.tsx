import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Home, List, Search, Mail } from 'lucide-react';
import { Button } from './ui/button';

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const navItems = [
    { label: 'Home', path: '/', icon: <Home className="h-4 w-4 mr-1" /> },
    { label: 'Services', path: '/services', icon: <List className="h-4 w-4 mr-1" /> },
    { label: 'AI Assessment', path: '/assessment', icon: <Search className="h-4 w-4 mr-1" /> },
    { label: 'Contact', path: '/contact', icon: <Mail className="h-4 w-4 mr-1" /> },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center">
            <img
              src='/logo.svg'
              alt="Logo"
              className="h-12 w-auto scale-[3] translate-y-2"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 flex items-center"
              >
                {item.icon}
                {item.label}
              </Link>
            ))}
            <Button className="ml-4 bg-brand-blue hover:bg-brand-blueLight">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu with sliding animation */}
        <div 
          className={`fixed inset-0 bg-gray-800 bg-opacity-50 md:hidden transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          onClick={toggleMenu} 
        />
        
        {/* Slide-in mobile menu */}
        <div
          className={`fixed top-0 right-0 w-64 bg-white h-full shadow-lg transition-transform transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
          style={{ transition: 'transform 0.3s ease-in-out' }}
        >
          <div className="py-6 px-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 flex items-center"
                onClick={toggleMenu}
              >
                {item.icon}
                {item.label}
              </Link>
            ))}
            <div className="pt-4 pb-3">
              <Button className="w-full bg-brand-blue hover:bg-brand-blueLight">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
