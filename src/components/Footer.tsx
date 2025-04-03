import React from 'react';
import { Camera, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Camera className="h-6 w-6" />
              <span className="font-semibold text-xl">Gino Photographe</span>
            </div>
            <p className="text-gray-400">
              Capturant vos moments précieux avec passion et professionnalisme.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <a href="mailto:gino.valton@outlook.com" className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
                <span>gino.valton@outlook.com</span>
              </a>
              <a href="tel:+33783049839" className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
                <Phone className="h-5 w-5" />
                <span>07 83 04 98 39</span>
              </a>
              <div className="flex items-center space-x-2 text-gray-400">
                <MapPin className="h-5 w-5" />
                <span>Reims, France</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Horaires</h3>
            <div className="space-y-2 text-gray-400">
              <p>Disponible sur rendez-vous</p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Gino Photographe. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;