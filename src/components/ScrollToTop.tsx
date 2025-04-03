import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }, 1); // Ajoutez un délai de 100 ms

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
