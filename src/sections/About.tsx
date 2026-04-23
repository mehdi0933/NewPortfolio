import { motion } from 'framer-motion';
import ToolsCarousel from '../components/ToolsCarousel';

const About = () => {
  const techStack = [
    {
      category: 'Langages & Frameworks',
      items: ['Java', 'Spring Boot', 'Spring Security', 'Hibernate', 'JUnit', 'TypeScript', 'ReactJS', 'POO']
    },
    {
      category: 'Infrastructure & Cloud',
      items: ['AWS VPC', 'EC2', 'RDS', 'S3', 'Load Balancing', 'Docker', 'Linux', 'Git']
    },
    {
      category: 'Data & API',
      items: ['MySQL', 'PostgreSQL', 'SQL', 'JDBC', 'API RESTful']
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
      <section id="about" style={{ padding: '100px 5%', maxWidth: '1200px', margin: '0 auto' }}>

        {/* TITRE DE LA SECTION */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">
            <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)', fontSize: '1.2rem', marginRight: '10px' }}>02.</span>
            Profil & Expertises
          </h2>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '80px',
          marginTop: '60px',
          alignItems: 'start'
        }}>

          {/* COLONNE GAUCHE : TEXTE + BADGES */}
          <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
          >
            <div style={{ color: 'var(--text-dim)', lineHeight: '1.8', fontSize: '1.1rem' }}>
              <p>
                Je suis un <span style={{ color: 'var(--accent)' }}>Développeur Hybride</span> passionné par les architectures scalables et le Cloud.
                Mon approche est résolument <span style={{ color: '#fff', fontWeight: 'bold' }}>tournée produit</span> : je conçois des solutions où la performance technique rencontre un impact utilisateur concret.
              </p>
              <p style={{ marginTop: '20px' }}>
                Axé sur l'écosystème <span style={{ color: '#fff' }}>Java / React</span> et le <span style={{ color: '#fff' }}>Cloud AWS</span>, j'aime résoudre des défis complexes en équipe Agile pour bâtir des systèmes robustes et innovants.
              </p>
            </div>

            {/* LISTE DES COMPÉTENCES */}
            <div style={{ marginTop: '50px' }}>
              {techStack.map((group) => (
                  <div key={group.category} style={{ marginBottom: '35px' }}>
                    <h4 style={{
                      color: 'var(--accent)',
                      fontSize: '13px',
                      marginBottom: '18px',
                      fontFamily: 'var(--font-mono)',
                      textTransform: 'uppercase',
                      letterSpacing: '2px'
                    }}>
                      {group.category}
                    </h4>
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}
                    >
                      {group.items.map((item) => (
                          <motion.span
                              key={item}
                              variants={itemVariants}
                              whileHover={{
                                scale: 1.05,
                                backgroundColor: 'rgba(100, 255, 218, 0.1)',
                                color: 'var(--accent)',
                                borderColor: 'var(--accent)'
                              }}
                              style={{
                                padding: '8px 16px',
                                border: '1px solid rgba(255,255,255,0.1)',
                                borderRadius: '4px',
                                fontSize: '13px',
                                color: 'var(--text-dim)',
                                background: 'rgba(255,255,255,0.03)',
                                cursor: 'default',
                                transition: 'all 0.3s ease'
                              }}
                          >
                            {item}
                          </motion.span>
                      ))}
                    </motion.div>
                  </div>
              ))}
            </div>
          </motion.div>

          {/* COLONNE DROITE : CARTE VISUELLE STICKY */}
          <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              style={{ position: 'sticky', top: '100px', display: 'flex', justifyContent: 'center' }}
          >
            <div style={{
              width: '100%',
              maxWidth: '380px',
              padding: '50px 40px',
              background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)',
              borderRadius: '24px',
              border: '1px solid rgba(255,255,255,0.1)',
              textAlign: 'center',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
            }}>
              <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  style={{ fontSize: '4.5rem', marginBottom: '30px', filter: 'drop-shadow(0 10px 15px rgba(100, 255, 218, 0.3))' }}
              >
                ☁️
              </motion.div>
              <h3 style={{ color: '#fff', fontSize: '1.4rem', marginBottom: '15px' }}>Développement & Cloud</h3>
              <p style={{ color: 'var(--text-dim)', fontSize: '1rem', lineHeight: '1.6' }}>
                Concevoir des applications performantes et assurer leur disponibilité sur AWS.
              </p>

              <div style={{
                marginTop: '30px',
                height: '2px',
                width: '50px',
                background: 'var(--accent)',
                margin: '30px auto 0'
              }}></div>
            </div>
          </motion.div>
        </div>

        {/* CARROUSEL DES OUTILS FAVORIS (TOUT EN BAS) */}
        <ToolsCarousel />

      </section>
  );
};

export default About;