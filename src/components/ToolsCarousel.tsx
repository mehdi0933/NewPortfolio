import { motion } from 'framer-motion';

const tools = [
  { name: 'AWS', icon: '☁️' },
  { name: 'React', icon: '⚛️' },
  { name: 'Java', icon: '☕' },
  { name: 'Spring Boot', icon: '🍃' },
  { name: 'Terminal', icon: '🐚' },
  { name: 'MySQL', icon: '🐬' },
  { name: 'GitHub', icon: '🐙' },
  { name: 'Postman', icon: '🚀' },
  { name: 'TypeScript', icon: '🟦' },
  { name: 'JavaScript', icon: '🟨' },
];

const ToolsCarousel = () => {
  const duplicatedTools = [...tools, ...tools, ...tools];

  return (
      <div style={{
        width: '100%',
        overflow: 'hidden',
        padding: '60px 0',
        position: 'relative',
        marginTop: '80px'
      }}>
        {/* EFFET DE DÉGRADÉ SUR LES CÔTÉS (FADE) */}
        <div style={{
          position: 'absolute', top: 0, left: 0, width: '150px', height: '100%',
          background: 'linear-gradient(to right, var(--bg), transparent)', zIndex: 2
        }} />
        <div style={{
          position: 'absolute', top: 0, right: 0, width: '150px', height: '100%',
          background: 'linear-gradient(to left, var(--bg), transparent)', zIndex: 2
        }} />

        <h3 style={{
          textAlign: 'center',
          color: 'var(--accent)',
          fontSize: '0.8rem',
          fontFamily: 'var(--font-mono)',
          marginBottom: '40px',
          textTransform: 'uppercase',
          letterSpacing: '3px',
          opacity: 0.8
        }}>
          Stack & Outils favoris
        </h3>

        <div style={{ display: 'flex', width: 'max-content' }}>
          <motion.div
              animate={{
                x: [0, -1500], // Ajuste selon la vitesse souhaitée
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 25,
                  ease: "linear",
                },
              }}
              style={{ display: 'flex', gap: '60px', alignItems: 'center' }}
          >
            {duplicatedTools.map((tool, index) => (
                <motion.div
                    key={index}
                    whileHover={{ scale: 1.1, color: 'var(--accent)' }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      color: 'var(--text-dim)',
                      fontSize: '1.2rem',
                      fontFamily: 'var(--font-mono)',
                      whiteSpace: 'nowrap',
                      cursor: 'default',
                      padding: '10px 20px',
                      borderRadius: '8px',
                      background: 'rgba(255, 255, 255, 0.02)',
                      border: '1px solid rgba(255, 255, 255, 0.05)',
                      transition: 'all 0.3s ease'
                    }}
                >
                  <span style={{ fontSize: '1.4rem' }}>{tool.icon}</span>
                  <span>{tool.name}</span>
                </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
  );
};

export default ToolsCarousel;