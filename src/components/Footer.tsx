import { Link } from 'react-router-dom';
import { Youtube, Linkedin, Twitter } from 'lucide-react';

const contentLinks = [
  { label: 'News', href: '/news' },
  { label: 'Analysis', href: '/analysis' },
  { label: 'Market', href: '/market' },
  { label: 'AI & Science', href: '/ai-science' },
];

const aboutLinks = [
  { label: 'Our Mission', href: '/about' },
  { label: 'Editorial Policy', href: '/editorial-policy' },
  { label: 'Contact', href: '/contact' },
];

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 lg:py-16">
      <div className="container-main">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-12">
          {/* Logo & Tagline */}
          <div>
            <Link to="/" className="font-display text-2xl font-bold mb-4 inline-block">
              BioIntel
            </Link>
            <p className="text-primary-foreground/70 text-sm">
              Independent biotech intelligence
            </p>

            <div className="mt-6 flex items-center gap-4">
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
          
          {/* Content Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest mb-4">Content</h3>
            <nav className="flex flex-col gap-2">
              {contentLinks.map((link) => (
                <Link 
                  key={link.label}
                  to={link.href}
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  {link.label}
                </Link>
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
