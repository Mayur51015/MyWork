import { motion } from 'framer-motion';
import { FiAward } from 'react-icons/fi';
import SectionHeading from './SectionHeading.jsx';

const certifications = [
  {
    title: 'Web Developer Intern Certification',
    issuer: 'Tantrata Solution Pvt. Ltd.',
    date: '2025'
  },
  {
    title: 'Full Stack Developer Intern Certification',
    issuer: 'Omegasoft Technologies Pvt. Ltd.',
    date: '2026'
  }
];

const interests = ['AI Development', 'Web Development', 'Backend Programming', 'Algorithms', 'Problem Solving'];

function Certifications() {
  return (
    <section id="certifications" className="pt-24">
      <SectionHeading title="Certifications & Achievements" subtitle="Recognition" />
      
      <div className="grid gap-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="rounded-[2rem] border border-surface bg-surface-soft p-7 shadow-glow"
        >
          <h3 className="mb-6 text-lg font-semibold text-surface flex items-center gap-3">
            <FiAward className="h-5 w-5 text-cyan-300" />
            Certifications
          </h3>
          <div className="space-y-4">
            {certifications.map((cert) => (
              <div key={cert.title} className="rounded-lg border border-cyan-400/20 bg-cyan-400/5 p-4">
                <h4 className="font-semibold text-surface">{cert.title}</h4>
                <p className="mt-1 text-sm text-cyan-300">{cert.issuer}</p>
                <p className="mt-1 text-xs text-muted">{cert.date}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-[2rem] border border-surface bg-surface-soft p-7 shadow-glow"
        >
          <h3 className="mb-6 text-lg font-semibold text-surface">Areas of Interest</h3>
          <div className="flex flex-wrap gap-3">
            {interests.map((interest) => (
              <span
                key={interest}
                className="rounded-full bg-cyan-400/15 px-4 py-2 text-sm font-medium text-cyan-300 border border-cyan-400/20"
              >
                {interest}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Certifications;
