import { useEffect, useMemo, useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { motion } from 'framer-motion';

const phrases = ['Full-stack Development', 'AI Systems', 'Scalable Applications'];

function Hero() {
  const [text, setText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);

  useEffect(() => {
    const current = phrases[phraseIndex];
    const timeout = setTimeout(() => {
      const nextText = current.slice(0, subIndex + 1);
      setText(nextText);
      if (subIndex + 1 === current.length) {
        setTimeout(() => {
          setSubIndex(0);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }, 1400);
      } else {
        setSubIndex(subIndex + 1);
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, [phraseIndex, subIndex]);

  const highlight = useMemo(() => phrases[phraseIndex], [phraseIndex]);

  return (
    <section id="hero" className="pt-16 pb-20 sm:pt-24">
      <div className="grid gap-8 md:gap-10 md:grid-cols-[1.1fr_0.9fr] lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <p className="mb-4 inline-flex rounded-full bg-cyan-400/10 px-4 py-2 text-sm uppercase tracking-[0.4em] text-cyan-300 ring-1 ring-cyan-400/20">
            Hello, I&apos;m Mayur K.
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-surface sm:text-4xl md:text-5xl">
            Building scalable web applications and AI-powered solutions.
          </h1>
          <p className="mt-6 max-w-xl text-muted sm:text-lg">
            Motivated B.Tech Computer Engineering student with strong skills in programming, web development, and AI tools. Experienced in building real-world projects and applying problem-solving techniques. Seeking internship opportunities to leverage technical and prompt engineering skills.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">
              Contact Me
              <FiArrowRight className="ml-3" />
            </a>
            <div className="hidden sm:block rounded-3xl border border-surface bg-surface-soft px-4 py-3 sm:px-5 sm:py-4 shadow-glow">
              <p className="text-xs sm:text-sm uppercase tracking-[0.32em] text-muted">Current focus</p>
              <p className="mt-2 sm:mt-3 text-base sm:text-lg font-semibold text-surface">
                {text}
                <span className="ml-1 inline-block h-5 w-1 animate-pulse bg-cyan-300" />
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative mx-auto w-full max-w-lg"
        >
          <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.18),_transparent_45%),linear-gradient(180deg,rgba(15,23,42,0.72),rgba(15,23,42,0.96))]" />
          <div className="relative overflow-hidden rounded-[2rem] border border-cyan-400/10 bg-surface-soft p-8 shadow-glow">
            <div className="mb-8 rounded-3xl border border-surface bg-surface p-8 text-center">
              <div className="mx-auto mb-6 h-28 w-28 overflow-hidden rounded-full border border-cyan-300/20 bg-cyan-500/10 sm:h-32 sm:w-32">
                <img
                  src="/profile.jpg"
                  alt="Mayur profile"
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="text-sm uppercase tracking-[0.4em] text-cyan-300/90">Developer</p>
              <h2 className="mt-4 text-2xl font-semibold text-surface">Mayur K.</h2>
              <p className="mt-2 text-muted">Computer Engineering Student</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {['Backend Dev', 'AI Integration', 'Web Dev', 'Problem Solving'].map((item) => (
                <div key={item} className="rounded-3xl border border-surface bg-surface p-4 py-5 text-left">
                  <p className="text-sm font-semibold text-surface">{item}</p>
                  <p className="mt-2 text-sm text-muted">Delivered in real-world projects.</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
