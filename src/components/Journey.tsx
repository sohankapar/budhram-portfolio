import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { journey } from '../data/content';
import SectionHeading from './SectionHeading';

export default function Journey() {
  return (
    <section className="relative bg-navy py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-dark opacity-60" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Schedule"
          title="Career Journey"
          dark
          description="Roles in sequence, presented like an engineering project schedule."
        />

        {/* Mobile: vertical / Desktop: horizontal */}
        <div className="mt-16 flex flex-col lg:flex-row lg:items-stretch gap-0">
          {journey.map((item, i) => (
            <motion.div
              key={item.year + item.company}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex lg:flex-col items-start lg:items-center gap-4 lg:gap-0 lg:flex-1 lg:text-center"
            >
              <div className="flex lg:flex-col items-center gap-4 lg:gap-3 lg:w-full">
                <div className="w-3 h-3 rounded-full bg-safety shrink-0" />
                <div className="flex-1 lg:w-full">
                  <p className="font-mono text-xs text-safety tracking-widest">{item.year}</p>
                  <p className="font-display text-white mt-1">{item.company}</p>
                  <p className="text-xs text-concrete uppercase tracking-wide mt-0.5">{item.role}</p>
                </div>
              </div>

              {i < journey.length - 1 && (
                <div className="hidden lg:block flex-1 h-px bg-gradient-to-r from-safety/60 to-safety/10 mt-1.5 self-start" />
              )}
              {i < journey.length - 1 && (
                <div className="lg:hidden ml-1.5 my-2 text-safety/50">
                  <ArrowDown size={16} />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
