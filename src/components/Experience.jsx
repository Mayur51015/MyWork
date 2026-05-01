import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading.jsx';

const experiences = [
  {
    title: 'Web Developer Intern',
    company: 'Tantrata Solution Pvt. Ltd.',
    period: '2025',
    responsibilities: [
      'Developed and maintained web application features using HTML, CSS, and JavaScript',
      'Improved UI/UX and ensured responsive design across devices',
      'Collaborated on debugging and optimizing website performance'
    ]
  },
  {
    title: 'Full Stack Developer Intern',
    company: 'Omegasoft Technologies Pvt. Ltd.',
    period: '2026',
    responsibilities: [
      'Worked on both frontend and backend development of web applications',
      'Implemented data handling and integrated database functionality',
      'Assisted in testing, debugging, and improving system performance'
    ]
  }
];

function Experience() {
  return (
    <section id="experience" className="pt-24">
      <SectionHeading title="Work Experience" subtitle="Professional journey" />
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="rounded-[2rem] border border-surface bg-surface-soft p-7 shadow-glow"
          >
            <div className="mb-4 flex items-start justify-between">
              <div>
                <h3 className="text-xl font-semibold text-surface">{exp.title}</h3>
                <p className="mt-2 text-sm text-cyan-300">{exp.company}</p>
              </div>
              <span className="rounded-full bg-cyan-400/15 px-4 py-2 text-xs font-medium text-cyan-300">
                {exp.period}
              </span>
            </div>
            <div className="space-y-3">
              {exp.responsibilities.map((resp) => (
                <div key={resp} className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                  <p className="text-sm text-muted">{resp}</p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
