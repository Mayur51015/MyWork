import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import SectionHeading from './SectionHeading.jsx';

const projects = [
  {
    title: 'Mavi-Linking',
    description: 'A smart developer identity & portfolio platform designed for students, freshers, and developers to showcase coding profiles, projects, certifications, and technical achievements in one centralized digital identity.',
    features: [
      'Integrates GitHub, LeetCode, Codeforces, LinkedIn & Stack Overflow for live coding stats and rankings',
      'AI-powered profile analysis with recruiter-friendly dashboard and analytics tracking',
      'Public shareable portfolios with resume integration and certification management',
      'User authentication via JWT/Firebase with secure session handling',
      'Responsive modern UI/UX with coding activity monitoring and profile insights'
    ],
    tech: ['React.js', 'Tailwind CSS', 'Node.js','Express.js', 'MongoDB', 'JWT', 'GraphQL APIs','MERN Stack ','API Integration'],
    github: 'https://github.com/Mayur51015/Mavi-Linking'
  },
  {
    title: 'ConnectMavai',
    description: 'Built a full-stack social networking platform enabling real-time user interaction and content sharing.',
    features: [
      'Implemented secure user authentication (signup/login) and profile management system',
      'Developed post creation, likes, and comment functionalities to enhance engagement',
      'Integrated real-time chat system for instant messaging between users',
      'Designed responsive UI ensuring seamless experience across mobile and desktop',
      'Engineered scalable backend architecture to handle multiple concurrent users'
    ],
    tech: ['JavaScript', 'Real-time Chat', 'Authentication', 'Backend Architecture'],
    github: 'https://github.com/Mayur51015/ConnectMavai'
  },
  {
    title: 'MavaiBids',
    description: 'Designed and developed a real-time online auction platform with dynamic bidding capabilities.',
    features: [
      'Built user authentication and product listing system with detailed item descriptions',
      'Implemented live bidding functionality with real-time updates and event handling',
      'Developed auction timer and automated winner selection logic',
      'Ensured efficient backend processing for concurrent bid handling',
      'Combined e-commerce concepts with auction-based system design'
    ],
    tech: ['JavaScript', 'Real-time Bidding',  'Database'],
    github: 'https://github.com/Mayur51015/MavaiBids'
  },
  {
    title: 'Fort-Flora',
    description: 'Developed an e-commerce platform focused on eco-friendly plant products and user experience.',
    features: [
      'Created product catalog with categories, search, and filter functionalities',
      'Implemented add-to-cart and checkout system for smooth purchasing flow',
      'Designed admin panel for product and inventory management',
      'Applied CRUD operations for efficient data handling',
      'Built clean and responsive UI for real-world usability'
    ],
    tech: ['React', 'Tailwind CSS', 'MongoDB'],
    github: 'https://github.com/Mayur51015/Fort-Flora'
  },
  {
    title: 'mavi.ai',
    description: 'Developed an AI-powered application integrating intelligent response generation and automation.',
    features: [
      'Built AI chatbot capable of handling user queries using API-based responses',
      'Applied prompt engineering techniques to improve response accuracy',
      'Integrated Python-based backend with AI tools for dynamic processing',
      'Designed frontend interface for seamless user interaction',
      'Demonstrated practical implementation of AI in real-world applications'
    ],
    tech: ['React', 'Node.js', 'Express.js', 'API Integration'],
    github: 'https://github.com/Mayur51015/mavi.ai'
  },
  {
    title: 'SmartAttend',
    description: 'Engineered a smart attendance management system for academic use.',
    features: [
      'Implemented role-based login system for admin and students',
      'Developed attendance tracking and dashboard visualization features',
      'Enabled data storage, retrieval, and report generation functionalities',
      'Designed backend logic for efficient record management',
      'Solved real-world problem of manual attendance tracking'
    ],
    tech: ['Backend Development', 'Database', 'CRUD Operations', 'Authentication', 'WebSockets.io','Node.js','Express.js '],
    github: 'https://github.com/Mayur51015/BackFront'
  }
];

function Projects() {
  return (
    <section id="projects" className="pt-16 sm:pt-24">
      <SectionHeading title="Featured Projects" subtitle="My work" />
      <div className="grid gap-4 sm:gap-6 md:grid-cols-1 lg:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            className="rounded-[2rem] border border-surface bg-surface-soft p-7 shadow-glow"
          >
            <div className="mb-5 flex items-start justify-between">
              <div>
                <h3 className="text-xl font-semibold text-surface">{project.title}</h3>
                <p className="mt-2 text-sm text-muted">{project.description}</p>
              </div>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-300 transition hover:bg-cyan-400/20"
              >
                <FiGithub size={18} />
              </a>
            </div>

            <div className="mb-5 space-y-2">
              {project.features.map((feature) => (
                <div key={feature} className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                  <p className="text-sm text-muted">{feature}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-cyan-400/15 px-3 py-1 text-xs font-medium text-cyan-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
