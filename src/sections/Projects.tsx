import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import awsSchema from '../picture/aws-schema.png';

const Projects = () => {
  const projectList = [
    {
      title: "IA Comparator Engine",
      desc: "Plateforme Fullstack avec Auth/Inscription. Les utilisateurs comparent des modèles d'IA via une interface dédiée avec historique personnel. Dashboard Admin intégré pour le monitoring précis : tracking du temps de réponse (ms), horodatage complet, modèle choisi et logs par utilisateur.",
      tags: ["Spring Boot", "React", "JWT", "MySQL", "Monitoring"]
    },
    {
      title: "Infrastructure Cloud AWS",
      desc: "Conception d'une architecture réseau sécurisée en région Paris (eu-west-3). VPC avec subnets publics/privés, Internet Gateway et stockage S3. Déploiement optimisé pour une stack Java/Spring Boot et MySQL.",
      tags: ["VPC", "Cloud Architecture", "S3", "SG", "Subnets", "RDS", "IAM","CloudWatch", "EC2"],
      image: awsSchema
    },
    {
      title: "Architecture Modulaire Backend",
      desc: "Conception d'un système robuste avec endpoints génériques, gestion de cache et historique complet des actions utilisateurs avec traçabilité date/heure.",
      tags: ["Java","SpringBoot", "Hibernate", "MySQL", "Archi Modulaire"]
    },
    {
      title: "Booking System",
      desc: "Application de réservation hybride avec calendrier interactif, pagination côté client et appels API optimisés pour une expérience fluide.",
      tags: ["React", "TypeScript", "Pagination", "API REST"]
    },
    {
      title: "Auth & Role Manager (RBAC)",
      desc: "Système d'authentification sécurisé (JWT) avec gestion fine des rôles User/Admin et contrôle d'accès aux ressources sensibles.",
      tags: ["Spring Security", "React", "JWT", "RBAC"]
    }
  ];

  return (
      <section id="projects" style={{ padding: '150px 5%', maxWidth: '1300px', margin: '0 auto' }}>

        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ textAlign: 'center', marginBottom: '120px' }}
        >
          <h2 style={{ fontSize: '2rem', marginBottom: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)', fontSize: '1.2rem', marginRight: '10px' }}></span>
            Expérience Professionnelle
          </h2>
          <div style={{
            background: 'rgba(17, 34, 64, 0.4)',
            padding: '40px',
            borderRadius: '12px',
            borderLeft: '4px solid var(--accent)',
            maxWidth: '900px',
            margin: '0 auto',
            textAlign: 'left'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: '15px' }}>
              <h3 style={{ color: 'var(--text-bright)', fontSize: '1.5rem' }}>Développeur Full Stack</h3>
              <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)' }}>2 ans d'expérience</span>
            </div>
            <p style={{ color: 'var(--text-dim)', fontSize: '1.1rem', lineHeight: '1.7' }}>
              Expertise de 2 ans dans le développement d'applications web robustes. Spécialisé sur la stack <strong>Java / Spring Boot</strong> pour le backend et <strong>React / TypeScript</strong> pour le frontend. Conception d'architectures modulaires, gestion de bases de données MySQL et déploiement d'infrastructures Cloud AWS.
            </p>
          </div>
        </motion.div>

        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ textAlign: 'center', marginBottom: '100px' }}
        >
          <h2 className="section-title" style={{ justifyContent: 'center', display: 'flex', alignItems: 'center' }}>
            <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)', fontSize: '1.2rem', marginRight: '10px' }}></span>
            Projets & Réalisations
          </h2>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '150px 40px',
          width: '100%',
          justifyContent: 'center'
        }}>
          {projectList.map((project, index) => (
              <ProjectCard
                  key={index}
                  title={project.title}
                  desc={project.desc}
                  tags={project.tags}
                  image={project.image}
              />
          ))}
        </div>

        <motion.div
            style={{ textAlign: 'center', marginTop: '140px' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
        >
          <p style={{ color: 'var(--text-dim)', marginBottom: '30px', fontSize: '1rem' }}>
            Curieux de voir le code ou mes autres expérimentations ?
          </p>
          <a
              href="https://github.com/mehdi0933l"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: '1.25rem 2.5rem',
                border: '1px solid var(--accent)',
                borderRadius: '8px',
                color: 'var(--accent)',
                fontFamily: 'var(--font-mono)',
                fontSize: '14px',
                transition: 'all 0.3s ease-in-out',
                display: 'inline-block',
                textDecoration: 'none',
                background: 'transparent'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(100, 255, 218, 0.1)';
                e.currentTarget.style.transform = 'translateY(-5px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
          >
            Explorer mon GitHub
          </a>
        </motion.div>
      </section>
  );
};

export default Projects;
