
import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
           Himalayan<span className="text-yoga-green-light">YogVan</span>
            </h3>
            <p className="text-yoga-green-pale mb-4">
              Embrace tranquility, find your balance, and discover your inner strength 
              through our mindful yoga practices.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-yoga-green-light transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-yoga-green-light transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-yoga-green-light transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-yoga-green-pale hover:text-yoga-green-light transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/classes" className="text-yoga-green-pale hover:text-yoga-green-light transition-colors">
                  Classes
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-yoga-green-pale hover:text-yoga-green-light transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Classes</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-yoga-green-pale hover:text-yoga-green-light transition-colors">
                  Hatha Yoga
                </a>
              </li>
              <li>
                <a href="#" className="text-yoga-green-pale hover:text-yoga-green-light transition-colors">
                  Vinyasa Flow
                </a>
              </li>
              <li>
                <a href="#" className="text-yoga-green-pale hover:text-yoga-green-light transition-colors">
                  Yin Yoga
                </a>
              </li>
              <li>
                <a href="#" className="text-yoga-green-pale hover:text-yoga-green-light transition-colors">
                  Meditation
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span>123 Serenity Lane, Wellness City, 10001</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0" />
                <span>info@himalayanYogVan.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-yoga-green-light pt-6 mt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-yoga-green-pale mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Himalyan YogVan. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-yoga-green-pale hover:text-yoga-green-light transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-yoga-green-pale hover:text-yoga-green-light transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
