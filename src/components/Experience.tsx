import { motion } from 'framer-motion';
import { Building2 } from 'lucide-react';
import { experience } from '../data/content';
import SectionHeading from './SectionHeading';

export default function Experience() {
  return (
    <section id="experience" className="relative bg-navy py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-dark opacity-60" aria-hidden="true" />
      <div className="relative mx-auto max-w-5xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Career Record"
          title="Professional Experience"
          dark
          description="A record of site engineering roles, ordered by date — like entries on a construction progress log."
        />

        <div className="relative mt-16 pl-8 sm:pl-12">
          {/* structural beam */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.1, ease: 'easeInOut' }}
            style={{ transformOrigin: 'top' }}
            className="absolute left-0 sm:left-2 top-1 bottom-1 w-[3px] bg-gradient-to-b from-safety via-safety to-safety/30"
          />

          <ol className="space-y-16">
            {experience.map((job, i) => (
              <motion.li
                key={job.company}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative"
              >
                {/* rivet node */}
                <span className="absolute -left-8 sm:-left-12 top-1.5 w-4 h-4 rounded-full bg-navy border-[3px] border-safety" />

                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <span className="font-mono text-xs text-safety tracking-widest">{`0${i + 1}`}</span>
                  <span className="font-mono text-xs uppercase tracking-widest text-concrete">
                    {job.duration} · {job.span}
                  </span>
                </div>

                <h3 className="font-display text-2xl text-white mt-2 flex items-center gap-3">
                  <Building2 className="text-safety shrink-0" size={20} />
                  {job.company}
                </h3>
                <p className="font-mono text-sm text-safety/90 uppercase tracking-wide mt-1">{job.role}</p>
                <p className="text-concrete-light leading-relaxed mt-3 max-w-xl">{job.description}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
