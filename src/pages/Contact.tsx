import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Mail, Phone, Instagram, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact | Photographe Professionnel Reims</title>
        <meta name="description" content="Contactez votre photographe professionnel à Reims pour vos séances photos, shooting mode, portraits et événements." />
      </Helmet>

      <div className="pt-20 min-h-screen bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8"
        >
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Travaillons ensemble</h1>
            <p className="text-xl text-gray-600">
              Hâte de capturer vos plus beaux moments et de créer des souvenirs inoubliables ensemble.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-2xl font-semibold mb-4">Contactez-moi</h2>
                <div className="space-y-4">
                  <a
                    href="mailto:contact@studioreims.fr"
                    className="flex items-center space-x-3 text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                    <span>gino.valton@outlook.com</span>
                  </a>
                  <a
                    href="tel:+33783049839"
                    className="flex items-center space-x-3 text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    <Phone className="h-5 w-5" />
                    <span>07 83 04 98 39</span>
                  </a>
                  <a
                    href="https://instagram.com/gino.photographe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    <Instagram className="h-5 w-5" />
                    <span>@aygame101_</span>
                  </a>
                  <div className="flex items-center space-x-3 text-gray-700">
                    <MapPin className="h-5 w-5" />
                    <span>Reims, France</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-2xl font-semibold mb-4">Horaires</h2>
                <p className="text-gray-700">
                  Disponible sur rendez-vous, 7 jours sur 7.<br />
                  Réponse rapide par email ou téléphone.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="relative h-full min-h-[400px] rounded-lg overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5"
                alt="Appareil photo professionnel"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center p-8">
                <p className="text-white text-2xl text-center font-light italic">
                  "La photographie est l'art de capturer des émotions et de les rendre éternelles"
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-16 text-center"
          >
            <p className="text-2xl font-light text-gray-600 mb-8">
              Prêt à créer quelque chose d'unique ensemble ?
            </p>
            <a
              href="tel:+33783049839"
              className="inline-block px-8 py-4 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors font-semibold"
            >
              Réserver une séance
            </a>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Contact;