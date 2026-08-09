import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 800);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className="focus-ring fixed bottom-6 right-6 z-40 w-11 h-11 grid place-items-center bg-navy text-safety border border-safety hover:bg-safety hover:text-navy transition-colors shadow-lg"
    >
      <ArrowUp size={18} />
    </button>
  );
}
