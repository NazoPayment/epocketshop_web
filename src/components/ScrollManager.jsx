import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const TOP_OFFSET = 90; // floating navbar height plus breathing room

// Handles hash links across routes (e.g. /policy -> /#faq) and resets scroll on page change.
export default function ScrollManager() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const behavior = reduceMotion ? 'auto' : 'smooth';

    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - TOP_OFFSET;
        window.scrollTo({ top, behavior });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: hash || key === 'default' ? 'auto' : behavior });
  }, [pathname, hash, key]);

  return null;
}
