import { motion } from 'framer-motion';

const Contact = () => {
  return (
      <section id="contact" style={{
        padding: '150px 5%',
        textAlign: 'center',
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
          <h2 style={{
            fontFamily: 'var(--font-mono)',
            color: 'var(--accent)',
            fontSize: 'clamp(14px, 5vw, 16px)',
            marginBottom: '20px'
          }}>
             Et après ?
          </h2>

          <h3 style={{
            fontSize: 'clamp(40px, 8vw, 60px)',
            fontWeight: 700,
            color: 'var(--text-bright)',
            marginBottom: '20px'
          }}>
            Parlons de votre équipe !
          </h3>

          <p style={{
            color: 'var(--text-dim)',
            fontSize: '1.1rem',
            lineHeight: '1.8',
            marginBottom: '50px'
          }}>
            Je suis actuellement à la recherche d'une alternance pour mettre mes compétences en
            développement Fullstack (Java/SpringBoot & React) et Cloud au service de projets ambitieux.
            Que vous ayez une opportunité ou que vous vouliez simplement échanger,
            ma boîte de réception est toujours ouverte !

          </p>

          <a
              href="mailto:ton.email@exemple.com"
              style={{
                padding: '1.25rem 2.5rem',
                border: '1px solid var(--accent)',
                borderRadius: '8px',
                color: 'var(--accent)',
                fontFamily: 'var(--font-mono)',
                fontSize: '14px',
                textDecoration: 'none',
                display: 'inline-block',
                transition: 'all 0.3s ease-in-out'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(100, 255, 218, 0.1)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            Envoyer un message
          </a>
        </motion.div>
      </section>
  );
};

export default Contact;