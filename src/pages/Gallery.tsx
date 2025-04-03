import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const categories = ['Tous', 'Portrait', 'Mode', 'Lifestyle', 'Extérieur'];

const images = [
  {
    url: '',
    category: 'Mode',
    alt: 'Fashion photography',
    orientation: 'portrait'
  },
  {
    url: '',
    category: 'Portrait',
    alt: 'Portrait in natural light',
    orientation: 'landscape'
  },
  {
    url: '',
    category: 'Portrait',
    alt: 'Portrait photography',
    orientation: 'portrait'
  },
  {
    url: '',
    category: 'Portrait',
    alt: 'Male portrait',
    orientation: 'square'
  },
  {
    url: '',
    category: 'Mode',
    alt: 'Fashion portrait',
    orientation: 'portrait'
  },
  {
    url: '',
    category: 'Lifestyle',
    alt: 'Lifestyle photography',
    orientation: 'portrait'
  },
  {
    url: '',
    category: 'Portrait',
    alt: 'Professional portrait',
    orientation: 'square'
  },
  {
    url: '',
    category: 'Extérieur',
    alt: 'Outdoor photography',
    orientation: 'landscape'
  },
  {
    url: '',
    category: 'Mode',
    alt: 'Fashion portrait',
    orientation: 'portrait'
  }
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredImages = selectedCategory === 'Tous'
    ? images
    : images.filter(img => img.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Galerie Photo | Photographe Professionnel Reims</title>
        <meta name="description" content="Découvrez mon portfolio de photographie professionnelle : portraits, mode, lifestyle et séances en extérieur à Reims." />
      </Helmet>

      <div className="pt-20 px-4 min-h-screen bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto py-12"
        >
          <h1 className="text-4xl font-bold text-center mb-12">Galerie</h1>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  selectedCategory === category
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <motion.div
            layout
            className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4"
          >
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.url}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="break-inside-avoid mb-4"
                onClick={() => setSelectedImage(image.url)}
              >
                <div className="relative group cursor-pointer overflow-hidden rounded-lg">
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="relative max-w-[90vw] max-h-[90vh]"
            >
              <img
                src={selectedImage}
                alt="Selected photograph"
                className="max-h-[90vh] max-w-[90vw] object-contain"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
                aria-label="Close"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </div>
        )}
      </div>
    </>
  );
};

export default Gallery;