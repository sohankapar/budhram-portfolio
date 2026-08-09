import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { education } from '../data/content';
import SectionHeading from './SectionHeading';

export default function Education() {
  return (
    <section id="education" className="relative bg-paper py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-light opacity-60" aria-hidden="true" />
      <div className="relative mx-auto max-w-5xl px-6 lg:px-10">
        <SectionHeading eyebrow="Academic Record" title="Education" dark={false} />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mt-14 bg-white border border-concrete-light p-8 sm:p-10 flex flex-col sm:flex-row gap-8 items-start relative overflow-hidden"
        >
          <div className="absolute inset-0 grid-light opacity-40 pointer-events-none" aria-hidden="true" />
          <div className="relative shrink-0 w-16 h-16 grid place-items-center border-2 border-navy text-navy">
            <GraduationCap size={30} />
          </div>
          <div className="relative">
            <p className="font-mono text-xs uppercase tracking-widest text-safety">{education.year}</p>
            <h3 className="font-display text-2xl text-navy mt-2">{education.institution}</h3>
            <p className="text-steel mt-1">{education.location}</p>
            <p className="font-mono text-xs uppercase tracking-wide text-concrete-dark mt-4 border-l-2 border-dashed border-concrete pl-3">
              Degree / programme not specified — editable placeholder
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
