import { motion } from 'framer-motion';
import styles from '../styles/Navbar.module.css';

export const Navbar = () => {
  const navLinks = [
    { name: 'Mon profile', href: '#about' },
    { name: 'Mes projets', href: '#projects' },
    { name: 'Contactez-moi', href: '#contact' },
  ];

  return (
      <motion.nav initial={{ y: -50 }} animate={{ y: 0 }} className={styles.nav}>
        <div className={styles.logo}>
        </div>
        <div className={styles.links}>
          {navLinks.map((link, i) => (
              <motion.a key={link.name} href={link.href} whileHover={{ y: -1 }}>
                {link.name}
              </motion.a>
          ))}
          <button className={styles.themeToggle}></button>
        </div>
      </motion.nav>
  );
};