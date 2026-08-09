import { motion } from 'framer-motion';
import { PenLine } from 'lucide-react';
import { projectPlaceholders } from '../data/content';
import SectionHeading from './SectionHeading';

export default function Projects() {
  return (
    <section id="projects" className="relative bg-navy py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-dark opacity-60" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Portfolio"
          title="Selected Engineering Work"
          dark
          description="Project details haven't been added yet. Each card below is a ready-to-fill placeholder — name, location, role, duration, responsibilities and photos can be dropped in as projects are documented."
        />

        <div className="grid md:grid-cols-3 gap-6 mt-14">
          {projectPlaceholders.map((project, i) => (
            <motion.div
              key={project.type}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative border border-white/15 bg-navy-light/40 overflow-hidden"
            >
              <div className="aspect-[4/3] relative overflow-hidden grid-dark flex items-center justify-center">
                <ProjectGlyph index={i} />
                <div className="absolute inset-0 border border-dashed border-white/20 m-3 pointer-events-none" />
              </div>
              <div className="p-6 border-t border-white/10">
                <p className="eyebrow text-safety">Placeholder</p>
                <h3 className="font-display text-lg text-white mt-2">{project.type}</h3>
                <p className="text-sm text-concrete mt-2 flex items-center gap-2">
                  <PenLine size={14} className="text-safety shrink-0" />
                  Add project name, location, role &amp; duration
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectGlyph({ index }: { index: number }) {
  const glyphs = [
    <g key="0" stroke="#FF5A1F" strokeWidth="1.5" fill="none">
      <rect x="35" y="40" width="30" height="60" />
      <rect x="70" y="55" width="20" height="45" />
      <line x1="20" y1="100" x2="100" y2="100" />
    </g>,
    <g key="1" stroke="#FF5A1F" strokeWidth="1.5" fill="none">
      <path d="M15 95 Q60 60 105 95" />
      <line x1="15" y1="95" x2="105" y2="95" />
      <line x1="30" y1="88" x2="30" y2="95" />
      <line x1="60" y1="70" x2="60" y2="95" />
      <line x1="90" y1="88" x2="90" y2="95" />
    </g>,
    <g key="2" stroke="#FF5A1F" strokeWidth="1.5" fill="none">
      <line x1="20" y1="95" x2="100" y2="95" />
      <line x1="30" y1="95" x2="30" y2="45" />
      <line x1="60" y1="95" x2="60" y2="35" />
      <line x1="90" y1="95" x2="90" y2="45" />
      <line x1="30" y1="45" x2="60" y2="35" />
      <line x1="60" y1="35" x2="90" y2="45" />
    </g>,
  ];
  return (
    <svg viewBox="0 0 120 110" className="w-24 h-24 opacity-80">
      {glyphs[index % glyphs.length]}
    </svg>
  );
}
