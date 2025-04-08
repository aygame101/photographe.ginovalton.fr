import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Helmet } from 'react-helmet-async';
import { Camera } from 'lucide-react';
import IMG_3071 from '../assets/IMG_3071.jpg';

const Home = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
      <Helmet>
        <title>Photographe Professionnel Reims | Portrait, Mode, Lifestyle</title>
        <meta name="description" content="Photographe professionnel à Reims spécialisé en portrait, mode et lifestyle. Séances photo personnalisées, shooting en extérieur et book mannequin." />
        <meta name="keywords" content="photographe reims, portrait, pro, photographe professionnel, photographe freelance, séance photo, shooting photo, photographie artistique, shooting portrait reims, photo pro reims, photographe portrait, shooting photo modèle, book mannequin, portrait professionnel, photographe mode, fashion photography, shooting en extérieur, séance photo lifestyle" />
      </Helmet>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="h-screen relative"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://ginovalton.fr/images/paysage_digoin.jpg")',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40" />
        </div>
        
        <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-center mb-6"
          >
            Capturez vos moments précieux
          </motion.h1>
          
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-center max-w-2xl mb-12"
          >
            Photographe à Reims, spécialisé dans le portrait et la capture des émotions.
          </motion.p>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <Link
              to="/contact"
              className="px-8 py-3 bg-white text-gray-900 rounded-full hover:bg-gray-100 transition-colors font-semibold"
            >
              Réserver une séance
            </Link>
            <Link
              to="/galerie"
              className="px-8 py-3 border-2 border-white text-white rounded-full hover:bg-white hover:text-gray-900 transition-colors font-semibold"
            >
              Explorer la galerie
            </Link>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="py-24 px-4 bg-white"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Gino Valton – Photographe à Reims</h2>
            <p className="text-xl text-gray-600 italic">📸 Capturer l'instant, révéler l'émotion.</p>
          </div>

          <div className="flex flex-col md:flex-row gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="w-full md:w-1/3 aspect-square rounded-2xl overflow-hidden shadow-xl"
            >
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url(${IMG_3071})`,
                }}
              />
            </motion.div>

            <div className="w-full md:w-2/3 space-y-8 text-gray-700">
              <p className="text-lg leading-relaxed">
                Bonjour ! Je suis Gino, photographe passionné basé à Reims. Je vous propose des séances photo à Reims et ses alentours, pour vos mariages, événements et portraits — en solo, en duo ou en famille. Mon objectif : créer des images naturelles, authentiques et pleines de vie.
              </p>

              <p className="text-lg leading-relaxed">
                Grâce à mon Fujifilm XT200, j'immortalise chaque détail avec précision et douceur. Pour une touche unique et des perspectives atypiques, je peux également utiliser un drone DJI, offrant des prises de vue aériennes spectaculaires.
              </p>

              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                <p className="text-lg mb-4">
                  🎓 Actuellement étudiant, Je suis animé par une véritable passion pour la photographie et la capture d'émotions sincères.
                </p>
              </div>

              <div className="mt-12 text-center">
                <p className="text-xl mb-8">
                  📩 Envie de créer des souvenirs inoubliables ?
                </p>
                <Link
                  to="/contact"
                  className="inline-block px-8 py-4 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors font-semibold"
                >
                  Réservez votre séance photo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Home;
