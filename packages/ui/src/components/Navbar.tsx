import { useEffect, useState } from 'react';
import { useDark } from '../lib/useDark';
import { ArrowRightIcon, MenuIcon, MoonIcon, SunIcon, XIcon } from './Icons';

const LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Wallet', href: '#wallet' },
  { label: 'How it works', href: '#how' },
  { label: 'Offers', href: '#offers' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar({
  onLogin,
  onSignup,
}: {
  onLogin: () => void;
  onSignup: () => void;
}) {
  const { dark, toggle } = useDark();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-midnight text-white transition-shadow dark:bg-night-2 ${
        scrolled ? 'shadow-lg shadow-midnight/30' : ''
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        {/* logo */}
        <a href="#top" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-card bg-gradient-to-br from-brand to-midnight text-lg font-black text-white shadow-md shadow-brand/30">
            P
          </span>
          <span className="text-xl font-extrabold tracking-tight">
            Pay<span className="text-brand">tm</span>
          </span>
        </a>

        {/* desktop links */}
        <div className="hidden items-center gap-1 lg:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-card px-3 py-2 text-sm font-medium text-white/80 transition hover:bg-white/10 hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* actions */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={toggle}
            aria-label="Toggle dark mode"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-white/80 transition hover:bg-white/10 hover:text-white"
          >
            {dark ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
          </button>
          <button
            onClick={onLogin}
            className="hidden rounded-card border border-white/25 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10 sm:inline-flex"
          >
            Login
          </button>
          <button
            onClick={onSignup}
            className="hidden items-center gap-1.5 rounded-card bg-brand px-4 py-2 text-sm font-bold text-midnight-deep transition hover:brightness-110 sm:inline-flex"
          >
            Sign Up <ArrowRightIcon className="h-4 w-4" />
          </button>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-white lg:hidden"
          >
            {open ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* mobile panel */}
      {open && (
        <div className="border-t border-white/10 bg-midnight px-5 pb-5 pt-2 lg:hidden dark:bg-night-2">
          <div className="flex flex-col">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-card px-3 py-2.5 text-sm font-medium text-white/85 hover:bg-white/10"
              >
                {l.label}
              </a>
            ))}
          </div>
          <div className="mt-3 flex gap-2.5">
            <button
              onClick={() => {
                setOpen(false);
                onLogin();
              }}
              className="flex-1 rounded-card border border-white/25 py-2.5 text-sm font-semibold text-white"
            >
              Login
            </button>
            <button
              onClick={() => {
                setOpen(false);
                onSignup();
              }}
              className="flex-1 rounded-card bg-brand py-2.5 text-sm font-bold text-midnight-deep"
            >
              Sign Up
            </button>
          </div>
        </div>
      )}
    </header>
  );
}