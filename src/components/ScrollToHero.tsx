import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHero = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;

    if (hash) {
      const el = document.querySelector(hash);
      if (el instanceof HTMLElement) {
        const header = document.querySelector("header");
        const headerOffset = header instanceof HTMLElement ? header.offsetHeight : 0;
        const top = el.getBoundingClientRect().top + window.scrollY - headerOffset;
        window.scrollTo({ top, left: 0, behavior: "smooth" });
        return;
      }
    }

    window.scrollTo({ top: 0, left: 0 });
  }, [location.pathname, location.search, location.hash]);

  return null;
};

export default ScrollToHero;
