import { FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading.jsx';

function Contact() {
  const contactItems = [
    {
      title: 'Email',
      value: 'Mayur2006khandare@gmail.com',
      href: 'mailto:Mayur2006khandare@gmail.com',
      icon: <FiMail className="h-5 w-5 text-cyan-300" />
    },
    {
      title: 'Phone',
      value: '8189019117',
      href: 'tel:+918189019117',
      icon: <FiPhone className="h-5 w-5 text-cyan-300" />
    },
    {
      title: 'GitHub',
      value: 'github.com/Mayur51015',
      href: 'https://github.com/Mayur51015',
      icon: <FiGithub className="h-5 w-5 text-cyan-300" />
    },
    {
      title: 'LinkedIn',
      value: 'linkedin.com/in/mayur-k-424616323',
      href: 'https://linkedin.com/in/mayur-k-424616323',
      icon: <FiLinkedin className="h-5 w-5 text-cyan-300" />
    }
  ];

  return (
    <section id="contact" className="pt-24">
      <SectionHeading title="Get In Touch" subtitle="Contact" />
      <div className="mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="rounded-[2rem] border border-surface bg-surface-soft p-8 shadow-glow"
        >
          <div className="space-y-6">
            <p className="text-muted">
              I&apos;m available for collaboration, internships, and freelance projects. Reach out through email or connect with me on GitHub and LinkedIn.
            </p>
            <div className="space-y-4">
              {contactItems.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 rounded-3xl border border-surface bg-surface-panel p-5 transition-all duration-300 hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-400/5"
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.28em] text-muted">{item.title}</p>
                    <p className="mt-2 text-sm text-surface">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;

