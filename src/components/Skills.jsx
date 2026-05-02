import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading.jsx';

const skillGroups = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'C', level: 85 },
      { name: 'C++', level: 82 },
      { name: 'Python', level: 88 },
      { name: 'JavaScript', level: 90 }
    ]
  },
  {
    title: 'Web Technologies',
    skills: [
      { name: 'HTML & CSS', level: 92 },
      { name: 'JavaScript (ES6+)', level: 90 },
      { name: 'Responsive Design', level: 90 }
    ]
  },
  {
    title: 'Databases & Backend',
    skills: [
      { name: 'MongoDB', level: 85 },
      { name: 'MySQL', level: 82 },
      { name: 'Backend Architecture', level: 78 }
    ]
  },
  {
    title: 'AI Tools & Technologies',
    skills: [
      { name: 'Prompt Engineering', level: 87 },
      { name: 'ChatGPT / Claude', level: 85 },
      { name: 'AI Tools Utilization', level: 82 }
    ]
  },
  {
    title: 'Development Tools',
    skills: [
      { name: 'Git & GitHub', level: 90 },
      { name: 'Visual Studio Code', level: 92 },
      { name: 'LeetCode', level: 85 }
    ]
  }
];

function Skills() {
  return (
    <section id="skills" className="pt-16 sm:pt-24">
      <SectionHeading title="Technical Skills" subtitle="What I excel at" />
      <div className="grid gap-4 sm:gap-6 md:grid-cols-1 lg:grid-cols-2">
        {skillGroups.map((group, index) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            className="rounded-[2rem] border border-surface bg-surface-soft p-7 shadow-glow"
          >
            <h3 className="text-xl font-semibold text-surface">{group.title}</h3>
            <div className="mt-6 space-y-5">
              {group.skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex items-center justify-between text-sm text-muted">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="mt-3 h-2.5 overflow-hidden rounded-full bg-surface">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-500"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
