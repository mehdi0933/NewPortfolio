import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import coffeeImg from '../picture/Gemini_Generated_Image_cesurjcesurjcesu.png';
import rocketImg from '../picture/Gemini_Generated_Image_9z5nqf9z5nqf9z5n.png';

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
      <section style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        minHeight: '100vh',
        padding: isMobile ? '0 20px' : '0 5%',
        overflow: 'hidden',
        backgroundColor: 'var(--bg)'
      }}>

        <div style={{
          textAlign: 'center',
          zIndex: 10,
          maxWidth: '800px',
          marginTop: isMobile ? '-50px' : '0'
        }}>



          <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              style={{
                fontSize: 'clamp(2rem, 10vw, 5rem)',
                fontWeight: 800,
                lineHeight: 1.1,
                color: '#fff'
              }}
          >
            Développeur Fullstack <br />
            <span style={{ color: 'var(--accent)' }}>React & Spring Boot</span>
          </motion.h1>

          <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              style={{
                color: 'var(--text-dim)',
                fontSize: isMobile ? '1rem' : '1.25rem',
                marginTop: '25px',
                lineHeight: '1.6'
              }}
          >
            Actuellement à la recherche d'une **alternance** pour propulser vos projets web
            avec des architectures robustes et des interfaces modernes.
          </motion.p>

          <motion.a
              href="#about"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.05)' }}
              whileTap={{ scale: 0.95 }}
              style={{
                display: 'inline-block',
                textDecoration: 'none',
                marginTop: '50px',
                padding: isMobile ? '12px 35px' : '15px 50px',
                borderRadius: '12px',
                background: '#0a0b12',
                color: '#fff',
                border: '1px solid var(--accent)',
                cursor: 'pointer',
                fontSize: '1rem',
                fontWeight: 600,
                transition: 'all 0.3s ease'
              }}
          >
            Découvrir
          </motion.a>
        </div>


        <motion.img
            src={coffeeImg}
            alt="Coffee Code"
            initial={{ x: -150, opacity: 0, rotate: -10 }}
            animate={{
              x: 0,
              opacity: isMobile ? 0.2 : 0.7, // Plus discret sur mobile
              rotate: 0,
              y: [0, -20, 0]
            }}
            transition={{
              x: { duration: 1.2 },
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
            style={{
              position: 'absolute',
              left: isMobile ? '-5%' : '2%',
              bottom: isMobile ? '5%' : '18%',
              height: isMobile ? '160px' : '260px',
              pointerEvents: 'none',
              filter: 'drop-shadow(0 0 30px rgba(100, 255, 218, 0.2))',
              zIndex: 1
            }}
        />

        <motion.img
            src={rocketImg}
            alt="Rocket React"
            initial={{ x: 150, opacity: 0, rotate: 10 }}
            animate={{
              x: 0,
              opacity: isMobile ? 0.2 : 0.7,
              rotate: 0,
              y: [0, 25, 0]
            }}
            transition={{
              x: { duration: 1.2 },
              y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
            }}
            style={{
              position: 'absolute',
              right: isMobile ? '-5%' : '2%',
              top: isMobile ? '5%' : '12%',
              height: isMobile ? '180px' : '320px',
              pointerEvents: 'none',
              filter: 'drop-shadow(0 0 35px rgba(100, 255, 218, 0.2))',
              zIndex: 1
            }}
        />

      </section>
  );
};

export default Hero;