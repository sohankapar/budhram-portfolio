import { Instagram, Linkedin, Youtube, Send } from 'lucide-react';
import { navLinks, profile, social } from '../data/content';

const iconFor: Record<string, JSX.Element> = {
  Instagram: <Instagram size={16} />,
  LinkedIn: <Linkedin size={16} />,
  YouTube: <Youtube size={16} />,
};

export default function Footer() {
  return (
    <footer className="relative bg-navy-deep border-t border-white/10 overflow-hidden">
      <div className="absolute inset-0 grid-dark opacity-40" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-14 grid sm:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-2 text-white">
            <span className="grid place-items-center w-9 h-9 border border-safety text-safety font-mono text-sm">
              {profile.initials}
            </span>
            <span className="font-display uppercase tracking-wide text-sm">{profile.name}</span>
          </div>
          <p className="text-concrete text-sm mt-3">{profile.title}</p>
        </div>

        <nav aria-label="Footer navigation">
          <p className="eyebrow text-concrete-light mb-4">Navigate</p>
          <ul className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="focus-ring text-sm text-concrete hover:text-safety transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="eyebrow text-concrete-light mb-4">Connect</p>
          <div className="flex flex-wrap gap-3">
            {social.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                className="focus-ring w-9 h-9 grid place-items-center border border-white/15 text-concrete-light hover:border-safety hover:text-safety transition-colors"
              >
                {iconFor[s.name] ?? <Send size={16} />}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10 py-5 px-6 lg:px-10 text-center">
        <p className="font-mono text-xs text-concrete tracking-wide">
          © 2026 {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
