import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navLinks, profile } from '../data/content';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('#home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector(l.href))
      .filter((el): el is Element => !!el);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive('#' + entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-navy/95 backdrop-blur shadow-[0_1px_0_0_rgba(255,255,255,0.08)] py-2' : 'bg-transparent py-5'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-10 flex items-center justify-between">
        <a
          href="#home"
          className="focus-ring flex items-center gap-2 text-white group"
          aria-label={`${profile.name} — home`}
        >
          <span className="grid place-items-center w-9 h-9 border border-safety text-safety font-mono text-sm font-medium group-hover:bg-safety group-hover:text-navy transition-colors">
            {profile.initials}
          </span>
          <span className="hidden sm:block font-display text-sm tracking-wide uppercase">{profile.name}</span>
        </a>

        <ul className="hidden lg:flex items-center gap-1 font-mono text-xs uppercase tracking-wider">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`focus-ring block px-4 py-2 transition-colors border-b-2 ${
                  active === link.href
                    ? 'text-safety border-safety'
                    : 'text-concrete-light border-transparent hover:text-white hover:border-concrete'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="focus-ring hidden lg:inline-flex items-center gap-2 border border-safety text-safety px-4 py-2 font-mono text-xs uppercase tracking-wider hover:bg-safety hover:text-navy transition-colors"
        >
          Contact
        </a>

        <button
          className="focus-ring lg:hidden text-white"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-navy-deep border-t border-white/10 mt-2">
          <ul className="flex flex-col px-6 py-4 gap-1 font-mono text-sm uppercase tracking-wider">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`focus-ring block py-3 border-b border-white/5 ${
                    active === link.href ? 'text-safety' : 'text-concrete-light'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
