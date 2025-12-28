import { useEffect } from 'react';
import { X } from 'lucide-react';

type SubscribeModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const SubscribeModal = ({ isOpen, onClose }: SubscribeModalProps) => {
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose]);

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
          <div className="flex items-start justify-end p-3">
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
            <iframe
              src="https://subscribe-forms.beehiiv.com/4e2ff8db-5fc9-4167-a023-4a67f9e055d6"
              className="beehiiv-embed w-full"
              data-test-id="beehiiv-embed"
              frameBorder={0}
              scrolling="no"
              style={{
                width: '604px',
                height: '294px',
                margin: 0,
                borderRadius: '0px 0px 0px 0px',
                backgroundColor: 'transparent',
                boxShadow: '0 0 #0000',
                maxWidth: '100%'
              }}
              title="Subscribe"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribeModal;
