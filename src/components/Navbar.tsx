import { motion } from 'framer-motion';
import styles from '../styles/Navbar.module.css';

export const Navbar = () => {
  const navLinks = [
    { name: 'Mon profil', href: '#about' },
    { name: 'Mes projets', href: '#projects' },
    { name: 'Contactez-moi', href: '#contact' },
  ];

  return (
      <motion.nav
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          className={styles.nav}
      >
        <div className={styles.logo}>
          {/* Ton logo ici */}
        </div>
        <div className={styles.links}>
          {navLinks.map((link) => (
              <motion.a
                  key={link.name}
                  href={link.href}
                  whileHover={{ y: -2, color: '#00d4ff' }}
              >
                {link.name}
              </motion.a>
          ))}
          <button className={styles.themeToggle}></button>
        </div>
      </motion.nav>
  );
};