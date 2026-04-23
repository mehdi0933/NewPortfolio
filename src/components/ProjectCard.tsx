import { motion } from 'framer-motion';

interface ProjectProps {
  title: string;
  desc: string;
  tags: string[];
  image?: string;
}

export default function ProjectCard({ title, desc, tags, image }: ProjectProps) {
  return (
      <motion.div
          whileHover={{ y: -12 }}
          style={{
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '20px',
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            minHeight: '450px',
            transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            backdropFilter: 'blur(12px)',
            overflow: 'hidden',
            padding: '45px 35px'
          }}
      >
        <h3 style={{ color: '#fff', fontSize: '1.6rem', marginBottom: '20px', fontWeight: '800' }}>
          {title}
        </h3>

        <p style={{ color: 'var(--text-dim)', lineHeight: '1.8', fontSize: '1rem', marginBottom: '30px' }}>
          {desc}
        </p>

        {image && (
            <div style={{
              width: '100%',
              borderRadius: '12px',
              overflow: 'hidden',
              marginBottom: '30px',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <img src={image} alt={title} style={{ width: '100%', display: 'block', objectFit: 'cover' }} />
            </div>
        )}

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: 'auto' }}>
          {tags.map(tag => (
              <span key={tag} style={{
                fontSize: '0.75rem',
                fontFamily: 'var(--font-mono)',
                color: 'var(--accent)',
                padding: '6px 14px',
                borderRadius: '30px',
                background: 'rgba(100, 255, 218, 0.08)',
                border: '1px solid rgba(100, 255, 218, 0.2)'
              }}>
            {tag}
          </span>
          ))}
        </div>
      </motion.div>
  );
}