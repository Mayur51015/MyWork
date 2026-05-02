import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading.jsx';

function About() {
  return (
    <section id="about" className="pt-24">
      <SectionHeading title="About Me" subtitle="Professional summary" />
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -45 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="rounded-[2rem] border border-surface bg-surface-soft p-8 shadow-glow"
        >
          <div className="grid gap-6 md:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[1.75rem] bg-surface p-6 text-center ring-1 ring-cyan-400/10">
              <div className="mx-auto mb-5 h-28 w-28 overflow-hidden rounded-full border border-cyan-400/10 bg-cyan-400/10 sm:h-32 sm:w-32">
                <img
                  src="/profile.jpg"
                  alt="Profile photo"
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="text-sm uppercase tracking-[0.32em] text-cyan-300/80">Profile</p>
              <p className="mt-4 text-muted">Pursuing B.Tech in Computer Engineering from Zeal College of Engineering and Research, Narhe, Pune (2024–2028) with CGPA 8.0.</p>
            </div>
            <div className="space-y-5">
              <div>
                <h3 className="text-xl font-semibold text-surface">Who I am</h3>
                <p className="mt-3 text-muted">A B.Tech Computer Engineering student with strong skills in programming, web development, and AI tools. Experienced in building real-world projects and applying problem-solving techniques.</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { label: 'Languages', value: 'C, C++, Python, JavaScript' },
                  { label: 'Databases', value: 'MongoDB, MySQL' },
                  { label: 'Web Tech', value: 'HTML, CSS, JavaScript, Responsive Design' },
                  { label: 'Tools', value: 'VS Code, Git, GitHub, ChatGPT, Claude' }
                ].map((item) => (
                  <div key={item.label} className="rounded-3xl border border-surface bg-surface-panel p-5">
                    <p className="text-sm uppercase tracking-[0.24em] text-muted">{item.label}</p>
                    <p className="mt-3 text-surface">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 45 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="rounded-[2rem] border border-cyan-400/10 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 shadow-glow"
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-[1.8rem] bg-surface p-6 shadow-xl shadow-slate-950/20">
              <div className="aspect-square overflow-hidden rounded-3xl border border-cyan-400/10 bg-gradient-to-br from-cyan-500/20 via-slate-800 to-slate-950 p-2">
                <img
                  src="/capabilities.png"
                  alt="Capabilities visual"
                  className="h-full w-full rounded-3xl object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col justify-between gap-5">
              <div>
                <p className="text-sm uppercase tracking-[0.32em] text-cyan-300/80">Capabilities</p>
                <h3 className="mt-3 text-2xl font-semibold text-surface">What I bring to a project</h3>
              </div>
              <p className="text-muted">
                I merge thoughtful design with scalable architecture. My work prioritizes performance, accessibility, and a polished developer experience.
              </p>
              <div className="rounded-3xl border border-surface bg-surface-panel p-5 text-sm text-muted">
                <p className="font-semibold text-surface">Tech Stack & Tools</p>
                <p className="mt-3 leading-7">C, C++, Python, JavaScript, React, Tailwind CSS, MongoDB, MySQL, Git, GitHub, VS Code, ChatGPT, Claude, and prompt engineering.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
