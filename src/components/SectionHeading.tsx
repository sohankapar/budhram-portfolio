import { motion } from 'framer-motion';

type Props = {
  eyebrow: string;
  title: string;
  dark?: boolean;
  description?: string;
};

export default function SectionHeading({ eyebrow, title, dark, description }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
    >
      <p className={`eyebrow mb-3 ${dark ? 'text-safety' : 'text-safety'}`}>{eyebrow}</p>
      <h2
        className={`font-display text-3xl sm:text-4xl tracking-tight ${dark ? 'text-white' : 'text-navy'}`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 max-w-xl leading-relaxed ${dark ? 'text-concrete-light' : 'text-steel'}`}>
          {description}
        </p>
      )}
      <div className={`h-px w-16 mt-6 ${dark ? 'bg-safety' : 'bg-safety'}`} />
    </motion.div>
  );
}
