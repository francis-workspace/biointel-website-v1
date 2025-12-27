import { useEffect, useState } from 'react';
import { Check, X } from 'lucide-react';

type SubscribeModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const SubscribeModal = ({ isOpen, onClose }: SubscribeModalProps) => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(
      `https://thebiointel.beehiiv.com/subscribe?email=${encodeURIComponent(email)}`,
      '_blank'
    );
    setEmail('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100]">
      <button
        type="button"
        className="absolute inset-0 bg-black/60"
        onClick={onClose}
        aria-label="Close subscribe modal"
      />

      <div className="relative h-full w-full flex items-center justify-center p-6">
        <div
          className="w-full max-w-2xl bg-background border border-border shadow-xl"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-start justify-between p-5 border-b border-border">
            <div>
              <h2 className="text-lg font-bold text-foreground">Join 1,000+ Biotech Leaders</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Weekly intelligence on market moves, funding signals, and risk analysis—no fluff
              </p>
            </div>
            <button
              type="button"
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              onClick={onClose}
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6 lg:p-8">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 mb-6">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                autoFocus
                className="input-field flex-1"
              />
              <button type="submit" className="btn-primary shrink-0">
                SUBSCRIBE
              </button>
            </form>

            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Check className="w-4 h-4 text-accent" />
                Unsubscribe anytime
              </span>
              <span className="flex items-center gap-1">
                <Check className="w-4 h-4 text-accent" />
                No spam
              </span>
              <span className="flex items-center gap-1">
                <Check className="w-4 h-4 text-accent" />
                Editorial independence
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribeModal;
