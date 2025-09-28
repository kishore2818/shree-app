import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">🕉</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-orange-400">SHREE</h3>
                <p className="text-xs text-gray-400">Divine Temple Portal</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Your trusted gateway to divine blessings. Book temple visits, participate in seva, and experience spiritual journeys with ease.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-orange-400 cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-orange-400 cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-orange-400 cursor-pointer transition-colors" />
              <Youtube className="w-5 h-5 text-gray-400 hover:text-orange-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-orange-400">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Book Darshan</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Seva Booking</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Virtual Darshan</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Accommodation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Prasad Delivery</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Donations</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-orange-400">Support</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Booking Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Refund Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-orange-400">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-orange-400 mt-0.5" />
                <div>
                  <p className="text-white font-medium">24/7 Helpline</p>
                  <p className="text-gray-400">1800-123-4567</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-orange-400 mt-0.5" />
                <div>
                  <p className="text-white font-medium">Email Support</p>
                  <p className="text-gray-400">support@shree.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-orange-400 mt-0.5" />
                <div>
                  <p className="text-white font-medium">Head Office</p>
                  <p className="text-gray-400">123 Temple Street, Sacred City, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Shree. All rights reserved. Made with devotion for the divine community.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <span className="text-gray-400 text-sm">Available in 5+ languages</span>
              <span className="text-gray-400 text-sm">PCI-DSS Compliant</span>
              <span className="text-gray-400 text-sm">ISO 27001 Certified</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;