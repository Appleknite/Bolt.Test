import React from 'react';
import { Facebook, Mail, Phone, MapPin } from 'lucide-react';
import ScrollLink from './navigation/ScrollLink';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <ScrollLink to="/" className="hover:text-blue-400 transition-colors">
                  Home
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="/filter-system" className="hover:text-blue-400 transition-colors">
                  Filter System
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="/technical" className="hover:text-blue-400 transition-colors">
                  Technical Information
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="/about" className="hover:text-blue-400 transition-colors">
                  About Us
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="/contact" className="hover:text-blue-400 transition-colors">
                  Contact Us
                </ScrollLink>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="tel:+15551234567" 
                  className="flex items-center space-x-2 hover:text-blue-400 transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  <span>+1 (555) 123-4567</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:info@petroflow.com"
                  className="flex items-center space-x-2 hover:text-blue-400 transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  <span>info@petroflow.com</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://maps.google.com/?q=123+Industrial+Ave,+Houston,+TX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 hover:text-blue-400 transition-colors"
                >
                  <MapPin className="h-4 w-4" />
                  <span>123 Industrial Ave, Houston, TX</span>
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="hover:text-blue-400 transition-colors"
                aria-label="Follow us on Facebook"
              >
                <Facebook />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p>&copy; {new Date().getFullYear()} QUICKPETRO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;