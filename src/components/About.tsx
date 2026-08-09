import { motion } from 'framer-motion';
import { about } from '../data/content';
import SectionHeading from './SectionHeading';

export default function About() {
  return (
    <section id="about" className="relative bg-paper py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-light opacity-60" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading eyebrow="Profile" title="About Me" dark={false} />

        <div className="grid lg:grid-cols-2 gap-16 items-center mt-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg leading-relaxed text-charcoal/85">{about.paragraph}</p>

            <div className="grid grid-cols-2 gap-6 mt-12">
              {about.stats.map((stat) => (
                <div key={stat.label} className="border-l-2 border-safety pl-4">
                  <div className="font-display text-3xl text-navy">{stat.value}</div>
                  <div className="font-mono text-xs uppercase tracking-wide text-steel mt-1 leading-snug">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="relative aspect-square max-w-md mx-auto w-full"
          >
            <svg viewBox="0 0 300 300" className="w-full h-full" role="img" aria-label="Architectural building elevation drawing">
              <rect x="10" y="10" width="280" height="280" fill="none" stroke="#9BA1AB" strokeWidth="1" opacity="0.4" />
              <g stroke="#0B1E33" strokeWidth="1.5" fill="none">
                <rect x="50" y="120" width="200" height="140" />
                <line x1="50" y1="160" x2="250" y2="160" />
                <line x1="50" y1="200" x2="250" y2="200" />
                <line x1="100" y1="120" x2="100" y2="260" />
                <line x1="150" y1="120" x2="150" y2="260" />
                <line x1="200" y1="120" x2="200" y2="260" />
                <path d="M50 120 L150 60 L250 120" />
              </g>
              <g fill="#FF5A1F">
                <circle cx="50" cy="120" r="3" />
                <circle cx="150" cy="60" r="3" />
                <circle cx="250" cy="120" r="3" />
              </g>
              <g stroke="#9BA1AB" strokeWidth="0.75" fontFamily="IBM Plex Mono" fontSize="9" fill="#9BA1AB">
                <line x1="50" y1="272" x2="250" y2="272" />
                <text x="130" y="286">ELEVATION — NTS</text>
              </g>
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
