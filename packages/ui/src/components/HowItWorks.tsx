import Reveal from './Reveal';
import { ArrowRightIcon, ScanIcon, SendIcon, UserIcon } from './Icons';

const STEPS = [
  {
    n: '01',
    icon: UserIcon,
    color: '#002e6e',
    title: 'Create your account',
    body: 'Sign up free in under a minute with just a username and email.',
  },
  {
    n: '02',
    icon: SendIcon,
    color: '#00b9f1',
    title: 'Add money to your wallet',
    body: 'Top up your Paytm Wallet and get a ₹1,000 sign-in bonus to start.',
  },
  {
    n: '03',
    icon: ScanIcon,
    color: '#ec184a',
    title: 'Scan, pay & send',
    body: 'Scan any QR, pay bills or send money instantly — zero fees.',
  },
];

export default function HowItWorks({ onSignup }: { onSignup: () => void }) {
  return (
    <section id="how" className="mx-auto max-w-6xl px-5 py-20">
      <Reveal className="mx-auto max-w-2xl text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-brand">How it works</span>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-midnight sm:text-4xl dark:text-night-ink">
          Paying your way takes three easy steps
        </h2>
      </Reveal>

      <div className="relative mt-14 grid gap-10 lg:grid-cols-3 lg:gap-6">
        <div className="pointer-events-none absolute left-0 right-0 top-10 hidden h-px bg-gradient-to-r from-transparent via-brand/50 to-transparent lg:block" />
        {STEPS.map((s, i) => (
          <Reveal key={s.n} delay={i * 120} className="relative">
            <div className="relative flex flex-col items-center text-center">
              <div className="relative">
                <div
                  className="flex h-20 w-20 items-center justify-center rounded-full border-8 border-white shadow-lg dark:border-night-2"
                  style={{ background: s.color }}
                >
                  <s.icon className="h-8 w-8 text-white" />
                </div>
                <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-midnight text-[11px] font-bold text-white dark:bg-brand dark:text-midnight-deep">
                  {i + 1}
                </span>
              </div>
              <p className="mt-5 text-xs font-bold text-brand">{s.n}</p>
              <h3 className="mt-1 text-lg font-extrabold text-midnight dark:text-night-ink">
                {s.title}
              </h3>
              <p className="mt-2 max-w-xs text-sm text-muted dark:text-night-muted">{s.body}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={200} className="mt-14 text-center">
        <button
          onClick={onSignup}
          className="group inline-flex items-center gap-2 rounded-card bg-midnight px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-midnight/25 transition hover:-translate-y-0.5 hover:brightness-110 dark:bg-brand dark:text-midnight-deep"
        >
          Start in 60 seconds
          <ArrowRightIcon className="h-4 w-4 transition group-hover:translate-x-0.5" />
        </button>
      </Reveal>
    </section>
  );
}