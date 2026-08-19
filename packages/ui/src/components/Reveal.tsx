import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';

type Tag = 'div' | 'section' | 'li' | 'span';

export default function Reveal({
  children,
  delay = 0,
  className = '',
  as = 'div',
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: Tag;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const style: CSSProperties = delay ? { transitionDelay: `${delay}ms` } : {};

  const TagEl = as as 'div';
  return (
    <TagEl
      ref={ref as never}
      style={style}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
    >
      {children}
    </TagEl>
  );
}
