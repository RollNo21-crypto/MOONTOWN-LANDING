import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let current = '';

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 100) {
          current = section.getAttribute('id') || '';
        }
      });

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
      setIsDropdownOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold text-indigo-600">Moon Town</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className={`${activeSection === 'home' ? 'text-indigo-600' : 'text-gray-600'} hover:text-indigo-500`}
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className={`${activeSection === 'services' ? 'text-indigo-600' : 'text-gray-600'} hover:text-indigo-500`}
            >
              Our Services
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className={`${activeSection === 'about' ? 'text-indigo-600' : 'text-gray-600'} hover:text-indigo-500`}
            >
              About Us
            </button>
            <button 
              onClick={() => scrollToSection('gallery')}
              className={`${activeSection === 'gallery' ? 'text-indigo-600' : 'text-gray-600'} hover:text-indigo-500`}
            >
              Gallery
            </button>
            
            <div className="relative">
              <button 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`flex items-center ${
                  ['pricing', 'refund', 'faqs'].includes(activeSection) ? 'text-indigo-600' : 'text-gray-600'
                } hover:text-indigo-500`}
              >
                Customer Support
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                  <button
                    onClick={() => scrollToSection('pricing')}
                    className={`block w-full text-left px-4 py-2 text-sm ${
                      activeSection === 'pricing' ? 'text-indigo-600 bg-indigo-50' : 'text-gray-700'
                    } hover:bg-indigo-50`}
                  >
                    Pricing Details
                  </button>
                  <button
                    onClick={() => scrollToSection('refund')}
                    className={`block w-full text-left px-4 py-2 text-sm ${
                      activeSection === 'refund' ? 'text-indigo-600 bg-indigo-50' : 'text-gray-700'
                    } hover:bg-indigo-50`}
                  >
                    Refund Policy
                  </button>
                  <button
                    onClick={() => scrollToSection('faqs')}
                    className={`block w-full text-left px-4 py-2 text-sm ${
                      activeSection === 'faqs' ? 'text-indigo-600 bg-indigo-50' : 'text-gray-700'
                    } hover:bg-indigo-50`}
                  >
                    FAQs
                  </button>
                </div>
              )}
            </div>
            
            <button 
              onClick={() => scrollToSection('contact')}
              className={`${activeSection === 'contact' ? 'text-indigo-600' : 'text-gray-600'} hover:text-indigo-500`}
            >
              Contact Us
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button
              onClick={() => scrollToSection('home')}
              className={`block w-full text-left px-3 py-2 text-base font-medium ${
                activeSection === 'home' ? 'text-indigo-600 bg-indigo-50' : 'text-gray-600'
              } hover:text-indigo-500 hover:bg-gray-50`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className={`block w-full text-left px-3 py-2 text-base font-medium ${
                activeSection === 'services' ? 'text-indigo-600 bg-indigo-50' : 'text-gray-600'
              } hover:text-indigo-500 hover:bg-gray-50`}
            >
              Our Services
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className={`block w-full text-left px-3 py-2 text-base font-medium ${
                activeSection === 'about' ? 'text-indigo-600 bg-indigo-50' : 'text-gray-600'
              } hover:text-indigo-500 hover:bg-gray-50`}
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className={`block w-full text-left px-3 py-2 text-base font-medium ${
                activeSection === 'gallery' ? 'text-indigo-600 bg-indigo-50' : 'text-gray-600'
              } hover:text-indigo-500 hover:bg-gray-50`}
            >
              Gallery
            </button>
            <div className="relative px-3 py-2">
              <p className="text-base font-medium text-gray-600 mb-2">Customer Support</p>
              <div className="pl-4 space-y-2">
                <button
                  onClick={() => scrollToSection('pricing')}
                  className={`block w-full text-left text-base ${
                    activeSection === 'pricing' ? 'text-indigo-600' : 'text-gray-600'
                  } hover:text-indigo-500`}
                >
                  Pricing Details
                </button>
                <button
                  onClick={() => scrollToSection('refund')}
                  className={`block w-full text-left text-base ${
                    activeSection === 'refund' ? 'text-indigo-600' : 'text-gray-600'
                  } hover:text-indigo-500`}
                >
                  Refund Policy
                </button>
                <button
                  onClick={() => scrollToSection('faqs')}
                  className={`block w-full text-left text-base ${
                    activeSection === 'faqs' ? 'text-indigo-600' : 'text-gray-600'
                  } hover:text-indigo-500`}
                >
                  FAQs
                </button>
              </div>
            </div>
            <button
              onClick={() => scrollToSection('contact')}
              className={`block w-full text-left px-3 py-2 text-base font-medium ${
                activeSection === 'contact' ? 'text-indigo-600 bg-indigo-50' : 'text-gray-600'
              } hover:text-indigo-500 hover:bg-gray-50`}
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;