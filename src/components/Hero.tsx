import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { profile } from '../data/content';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-navy overflow-hidden flex items-center pt-24 lg:pt-0"
    >
      <div className="absolute inset-0 grid-dark opacity-70" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-gradient-to-b from-navy via-transparent to-navy-deep pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl w-full px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center py-16">
        {/* LEFT */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow text-safety mb-6 dim-line inline-block px-3"
          >
            Civil Engineering Portfolio
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="font-display text-3xl sm:text-4xl text-white tracking-tight"
          >
            {profile.name}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-mono text-sm text-safety uppercase tracking-widest mt-2"
          >
            {profile.title}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.1] mt-6"
          >
            {profile.headline[0]}
            <br />
            {profile.headline[1]}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28 }}
            className="text-concrete-light text-base sm:text-lg mt-6 max-w-lg leading-relaxed"
          >
            {profile.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.36 }}
            className="flex flex-wrap gap-4 mt-10"
          >
            <a
              href="#experience"
              className="focus-ring inline-flex items-center gap-2 bg-safety text-navy px-6 py-3 font-mono text-xs uppercase tracking-wider font-medium hover:bg-white transition-colors"
            >
              View My Experience <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="focus-ring inline-flex items-center gap-2 border border-white/30 text-white px-6 py-3 font-mono text-xs uppercase tracking-wider hover:border-safety hover:text-safety transition-colors"
            >
              Contact Me
            </a>
          </motion.div>
        </div>

        {/* RIGHT — animated blueprint drawing */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <BlueprintDrawing />
        </motion.div>
      </div>

      <a
        href="#about"
        className="focus-ring absolute bottom-8 left-1/2 -translate-x-1/2 text-concrete-light hover:text-safety transition-colors flex flex-col items-center gap-2"
        aria-label="Scroll to About section"
      >
        <span className="eyebrow">Scroll</span>
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
          <ArrowDown size={18} />
        </motion.span>
      </a>
    </section>
  );
}

function BlueprintDrawing() {
  return (
    <svg viewBox="0 0 480 420" className="w-full h-auto" role="img" aria-label="Structural building framework blueprint drawing">
      <g stroke="#FF5A1F" strokeWidth="1.5" fill="none" opacity="0.9">
        {/* Foundation */}
        <motion.line
          x1="40" y1="380" x2="440" y2="380"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.2, delay: 0.4 }}
        />
        {/* Columns */}
        {[70, 160, 250, 340, 410].map((x, i) => (
          <motion.line
            key={x}
            x1={x} y1="380" x2={x} y2="90"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.9, delay: 0.7 + i * 0.12 }}
          />
        ))}
        {/* Floor levels */}
        {[90, 180, 270].map((y, i) => (
          <motion.line
            key={y}
            x1="55" y1={y} x2="425" y2={y}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 1.3 + i * 0.15 }}
          />
        ))}
        {/* Roof truss */}
        <motion.path
          d="M55 90 L240 30 L425 90"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
        />
        <motion.line x1="240" y1="30" x2="240" y2="90" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.6, delay: 2.2 }} />
      </g>

      {/* Dimension marks */}
      <g stroke="#9BA1AB" strokeWidth="1" opacity="0.6" fontFamily="IBM Plex Mono" fontSize="10" fill="#9BA1AB">
        <line x1="40" y1="395" x2="440" y2="395" />
        <line x1="40" y1="390" x2="40" y2="400" />
        <line x1="440" y1="390" x2="440" y2="400" />
        <text x="220" y="412">12.4m</text>
      </g>

      {/* Rivet / node points */}
      <g fill="#FF5A1F">
        {[70, 160, 250, 340, 410].flatMap((x) =>
          [380, 270, 180, 90].map((y) => (
            <motion.circle
              key={`${x}-${y}`}
              cx={x}
              cy={y}
              r="2.5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 2.4 }}
            />
          ))
        )}
      </g>
    </svg>
  );
}
