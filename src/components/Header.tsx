import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useSubscribeModal } from './useSubscribeModal';

const pillarItems = [
  { label: 'AI IN DRUG DISCOVERY', href: '/ai-drug-discovery' },
  { label: 'BIOPHARMACEUTICAL INDUSTRY', href: '/biopharma-industry' },
  { label: 'BIOTECH INNOVATION', href: '/biotech-innovation' },
  { label: 'HEALTHCARE INVESTMENT', href: '/healthcare-investment' },
  { label: 'MEDICAL TECHNOLOGY', href: '/medical-technology' },
  { label: 'REGULATORY & POLICY', href: '/regulatory-policy' },
];

const utilityItems = [{ label: 'ABOUT', href: '/about' }];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { openSubscribe } = useSubscribeModal();

  return (
    <header className="z-50 bg-background border-b border-border">
      <div className="container-main">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="font-display text-2xl lg:text-3xl font-bold text-foreground tracking-tight">
            BioIntel
          </Link>

          {/* Desktop Right Side (Utility) */}
          <div className="hidden lg:flex items-center gap-6">
            <nav className="flex items-center gap-6">
              {utilityItems.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.href}
                  className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
            <button
              type="button"
              className="btn-outline text-xs py-2 px-4"
              onClick={openSubscribe}
            >
              SUBSCRIBE
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Content Pillars Bar */}
      <div className="border-t border-border bg-[#1c1f26]">
        <div className="container-main">
          <nav
            aria-label="Content pillars"
            className="flex items-center gap-2 py-2 overflow-x-auto whitespace-nowrap lg:justify-center lg:overflow-x-visible"
          >
            {pillarItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.href}
                className={({ isActive }) =>
                  `px-3 py-2 text-[11px] uppercase tracking-wide rounded-md transition-colors border ` +
                  (isActive
                    ? 'text-white border-white bg-white/10'
                    : 'text-white/70 border-transparent hover:border-white/30 hover:bg-white/5')
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-28 bg-background z-40">
          <nav className="flex flex-col p-6">
            {[...pillarItems, ...utilityItems].map((item) => (
              <NavLink
                key={item.label}
                to={item.href}
                className={({ isActive }) =>
                  `py-4 text-lg font-semibold border-b border-border transition-colors ${
                    isActive ? 'text-accent' : 'text-muted-foreground'
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
            <div className="mt-6 flex flex-col gap-4">
              <button
                type="button"
                className="btn-primary w-full text-center"
                onClick={() => {
                  setIsMenuOpen(false);
                  openSubscribe();
                }}
              >
                SUBSCRIBE
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
