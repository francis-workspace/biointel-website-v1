import { useState } from 'react';
import { Youtube, Linkedin, Twitter } from 'lucide-react';

const contentLinks = [
  { label: 'News', href: '/news' },
  { label: 'Analysis', href: '/analysis' },
  { label: 'Market', href: '/market' },
  { label: 'AI & Science', href: '/ai-science' },
  { label: 'Archive', href: '/archive' },
];

const aboutLinks = [
  { label: 'Our Mission', href: '/about' },
  { label: 'Editorial Policy', href: '/editorial-policy' },
  { label: 'Contact', href: '/contact' },
  { label: 'Careers', href: '/careers' },
];

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(`https://thebiointel.beehiiv.com/subscribe?email=${encodeURIComponent(email)}`, '_blank');
    setEmail('');
  };

  return (
    <footer className="bg-primary text-primary-foreground py-12 lg:py-16">
      <div className="container-main">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Logo & Tagline */}
          <div>
            <a href="/" className="font-display text-2xl font-bold mb-4 inline-block">
              BioIntel
            </a>
            <p className="text-primary-foreground/70 text-sm">
              Independent biotech intelligence
            </p>
          </div>
          
          {/* Content Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest mb-4">Content</h3>
            <nav className="flex flex-col gap-2">
              {contentLinks.map((link) => (
                <a 
                  key={link.label}
                  href={link.href}
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
          
          {/* About Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest mb-4">About</h3>
            <nav className="flex flex-col gap-2">
              {aboutLinks.map((link) => (
                <a 
                  key={link.label}
                  href={link.href}
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest mb-4">Newsletter</h3>
            <p className="text-sm text-primary-foreground/70 mb-4">Get Weekly Intel</p>
            <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
                className="flex-1 px-3 py-2 bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 text-sm focus:outline-none focus:border-primary-foreground/40 transition-colors"
              />
              <button 
                type="submit"
                className="px-4 py-2 bg-primary-foreground text-primary text-xs font-semibold uppercase tracking-wider hover:bg-primary-foreground/90 transition-colors"
              >
                GO
              </button>
            </form>
            
            <div className="flex items-center gap-4">
              <a 
                href="https://youtube.com/@biointel" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com/company/biointel" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://twitter.com/biointel" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                aria-label="X (Twitter)"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-primary-foreground/50">
          <p>© 2024 BioIntel. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="/privacy" className="hover:text-primary-foreground transition-colors">
              Privacy Policy
            </a>
            <span>•</span>
            <a href="/terms" className="hover:text-primary-foreground transition-colors">
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
