import { motion } from 'framer-motion';
import { HardHat, ClipboardCheck, Users } from 'lucide-react';
import { skillGroups } from '../data/content';
import SectionHeading from './SectionHeading';

const icons = [HardHat, ClipboardCheck, Users];

export default function Skills() {
  return (
    <section id="skills" className="relative bg-paper py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-light opacity-60" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading eyebrow="Capabilities" title="Core Skills" dark={false} />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {skillGroups.map((group, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="group bg-white border border-concrete-light p-8 relative overflow-hidden transition-shadow hover:shadow-xl"
              >
                <div className="absolute top-0 right-0 w-16 h-16 border-l border-b border-concrete-light/70" />
                <Icon className="text-safety" size={28} />
                <h3 className="font-display text-xl text-navy mt-5">{group.title}</h3>
                <ul className="mt-5 space-y-3">
                  {group.skills.map((skill) => (
                    <li key={skill} className="flex items-center gap-3 text-sm text-steel">
                      <span className="w-1.5 h-1.5 bg-safety shrink-0 group-hover:scale-150 transition-transform" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
