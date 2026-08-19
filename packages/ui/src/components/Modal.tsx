import { useEffect, type ReactNode } from 'react';
import { XIcon } from './Icons';

export default function Modal({
  open,
  onClose,
  title,
  children,
  wide = false,
}: {
  open: boolean;
  onClose: () => void;
  title?: ReactNode;
  children: ReactNode;
  wide?: boolean;
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="absolute inset-0 bg-midnight/50 backdrop-blur-sm animate-fade-in dark:bg-black/60"
        onClick={onClose}
      />
      <div
        className={`relative w-full ${wide ? 'max-w-lg' : 'max-w-md'} animate-pop-in rounded-panel border border-line bg-card shadow-2xl dark:border-night-line dark:bg-night-card`}
      >
        {title && (
          <div className="flex items-center justify-between border-b border-line px-6 py-4 dark:border-night-line">
            <h2 className="text-lg font-bold text-midnight dark:text-night-ink">{title}</h2>
            <button
              onClick={onClose}
              aria-label="Close"
              className="rounded-full p-1.5 text-muted transition hover:bg-line hover:text-ink dark:hover:bg-night-line dark:hover:text-night-ink"
            >
              <XIcon className="h-5 w-5" />
            </button>
          </div>
        )}
        <div className="max-h-[80vh] overflow-y-auto px-6 py-5">{children}</div>
      </div>
    </div>
  );
}