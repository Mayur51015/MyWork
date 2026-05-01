import { motion } from 'framer-motion';

const links = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' }
];

function Navbar() {
  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed left-0 right-0 top-0 z-50 border-b border-surface bg-surface-soft/90 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-12">
        <a href="#hero" className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.4em] text-cyan-300">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-cyan-500/15 text-cyan-300 ring-1 ring-cyan-300/20">M</span>
          Mayur K.
        </a>

        <nav className="hidden flex-wrap items-center gap-4 text-sm text-muted sm:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-cyan-300">
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}

export default Navbar;
