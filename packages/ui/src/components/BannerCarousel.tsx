import { useEffect, useState } from 'react';
import Reveal from './Reveal';
import { ChevronLeftIcon, ChevronRightIcon, PlaneIcon, PercentIcon, RupeeIcon } from './Icons';

type Slide = {
  title: string;
  body: string;
  cta: string;
  bg: string;
  icon: (p: { className?: string }) => React.ReactNode;
};

const SLIDES: Slide[] = [
  {
    title: 'Welcome cashback up to ₹500',
    body: 'On your very first payment with Paytm.',
    cta: 'Get started',
    bg: 'from-brand via-midnight to-midnight-deep',
    icon: (p) => <PercentIcon {...p} />,
  },
  {
    title: 'Recharge & win daily jackpots',
    body: 'Every mobile recharge is a ticket to win up to ₹10,000.',
    cta: 'Recharge now',
    bg: 'from-midnight via-brand to-cyan-400',
    icon: (p) => <RupeeIcon {...p} />,
  },
  {
    title: 'Travel now, pay later',
    body: 'Book flights & hotels with Paytm Later. No upfront cost.',
    cta: 'Explore travel',
    bg: 'from-midnight via-[#7c3aed] to-crimson',
    icon: (p) => <PlaneIcon {...p} />,
  },
];

export default function BannerCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % SLIDES.length), 5000);
    return () => clearInterval(id);
  }, []);

  const s = SLIDES[index];

  return (
    <section id="offers" className="mx-auto max-w-6xl px-5 pb-20">
      <Reveal>
        <div
          className={`relative overflow-hidden rounded-panel bg-gradient-to-br ${s.bg} p-8 text-white shadow-xl sm:p-12`}
        >
          <div className="pointer-events-none absolute -right-10 -top-10 h-52 w-52 rounded-full bg-white/10 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-16 left-1/4 h-52 w-52 rounded-full bg-black/10 blur-2xl" />

          <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div key={index} className="max-w-lg animate-fade-in">
              <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-card bg-white/15">
                <s.icon className="h-6 w-6" />
              </span>
              <h3 className="text-2xl font-extrabold tracking-tight sm:text-3xl">{s.title}</h3>
              <p className="mt-2 text-sm text-white/80 sm:text-base">{s.body}</p>
            </div>
            <button className="shrink-0 rounded-card bg-white px-6 py-3 text-sm font-bold text-midnight shadow-md transition hover:-translate-y-0.5 hover:brightness-95">
              {s.cta}
            </button>
          </div>

          {/* controls */}
          <div className="relative mt-8 flex items-center gap-3">
            <button
              aria-label="Previous offer"
              onClick={() => setIndex((i) => (i - 1 + SLIDES.length) % SLIDES.length)}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 transition hover:bg-white/30"
            >
              <ChevronLeftIcon className="h-5 w-5" />
            </button>
            <button
              aria-label="Next offer"
              onClick={() => setIndex((i) => (i + 1) % SLIDES.length)}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 transition hover:bg-white/30"
            >
              <ChevronRightIcon className="h-5 w-5" />
            </button>
            <div className="ml-auto flex items-center gap-2">
              {SLIDES.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`h-2 rounded-full transition-all ${i === index ? 'w-7 bg-white' : 'w-2 bg-white/40 hover:bg-white/60'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}