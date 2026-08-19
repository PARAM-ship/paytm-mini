import Reveal from './Reveal';
import { CardIcon, PlusIcon, SendIcon, SparkleIcon, SwapIcon, WalletIcon } from './Icons';

const BUBBLES = [
  { name: 'Ravi', color: '#00b9f1', amount: '+₹500' },
  { name: 'Priya', color: '#ec184a', amount: '-₹250' },
  { name: 'Amit', color: '#002e6e', amount: '+₹1,200' },
  { name: 'Sara', color: '#00a86b', amount: '-₹90' },
  { name: 'Karan', color: '#f5a623', amount: '+₹340' },
];

const RECENT = [
  { name: 'Electricity Bill', meta: 'BESCOM · today', amount: '-₹840', up: false },
  { name: 'Cashback', meta: 'Paytm Rewards', amount: '+₹25', up: true },
  { name: 'Payment from Ravi', meta: 'UPI · 2 min ago', amount: '+₹500', up: true },
  { name: 'Mobile Recharge', meta: 'Airtel · 1 hr ago', amount: '-₹199', up: false },
];

export default function WalletSection({ onSend }: { onSend: () => void }) {
  return (
    <section id="wallet" className="border-y border-line bg-line/30 py-20 dark:border-night-line dark:bg-night-2">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-2 lg:items-center">
        {/* wallet chip */}
        <Reveal>
          <div className="relative mx-auto max-w-md overflow-hidden rounded-panel bg-gradient-to-br from-midnight via-midnight to-brand p-7 text-white shadow-2xl shadow-midnight/30">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute left-0 top-0 h-full w-1/2 animate-shine bg-white/10 blur-sm" />
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand/25 blur-2xl" />
            </div>
            <div className="relative flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="flex h-9 w-9 items-center justify-center rounded-card bg-white/15">
                  <WalletIcon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-bold">Paytm Wallet</p>
                  <p className="text-[11px] text-white/60">Balance available</p>
                </div>
              </div>
              <span className="rounded bg-white/15 px-2 py-1 text-[10px] font-bold tracking-wide">PAYTM</span>
            </div>

            <p className="relative mt-6 text-[2.6rem] font-extrabold leading-none tracking-tight">
              ₹45,230<span className="ml-1 text-xl text-white/60">.50</span>
            </p>

            <div className="relative mt-6 flex gap-2.5">
              <button
                onClick={onSend}
                className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-card bg-brand py-2.5 text-sm font-bold text-midnight-deep transition hover:brightness-110"
              >
                <PlusIcon className="h-4 w-4" /> Add Money
              </button>
              <button
                onClick={onSend}
                className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-card bg-white/15 py-2.5 text-sm font-bold text-white transition hover:bg-white/25"
              >
                <SendIcon className="h-4 w-4" /> Send Money
              </button>
            </div>

            <div className="relative mt-6 flex items-center justify-between border-t border-white/15 pt-4 text-[11px] text-white/70">
              <span className="flex items-center gap-1.5">
                <CardIcon className="h-4 w-4" /> 4281 •••• •••• 9012
              </span>
              <span className="tracking-widest">UPI · PAYTM</span>
            </div>
          </div>
        </Reveal>

        {/* bubbles + recent */}
        <div>
          <Reveal>
            <h3 className="text-xl font-extrabold text-midnight dark:text-night-ink">
              Pay your favourites instantly
            </h3>
            <p className="mt-1 text-sm text-muted dark:text-night-muted">
              Tap a bubble to send money to people you pay most.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-6 flex flex-wrap gap-5">
              {BUBBLES.map((b) => (
                <div key={b.name} className="group flex flex-col items-center gap-2">
                  <span
                    className="relative flex h-14 w-14 items-center justify-center rounded-full text-lg font-bold text-white shadow-sm transition duration-200 group-hover:-translate-y-1 group-hover:shadow-lg"
                    style={{ background: b.color }}
                  >
                    {b.name[0]}
                    <span
                      className={`absolute -bottom-1 -right-1 rounded-full bg-card px-1.5 py-0.5 text-[10px] font-bold shadow dark:bg-night ${b.amount.startsWith('+') ? 'text-emerald-600' : 'text-crimson'}`}
                    >
                      {b.amount}
                    </span>
                  </span>
                  <span className="text-xs font-medium text-muted dark:text-night-muted">
                    {b.name}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-8 overflow-hidden rounded-panel border border-line bg-card shadow-sm dark:border-night-line dark:bg-night-card">
              <div className="flex items-center justify-between border-b border-line px-5 py-3.5 dark:border-night-line">
                <span className="flex items-center gap-2 text-sm font-bold text-midnight dark:text-night-ink">
                  <SwapIcon className="h-4 w-4 text-brand" /> Recent activity
                </span>
                <span className="text-xs font-semibold text-brand">View all</span>
              </div>
              <ul className="divide-y divide-line dark:divide-night-line">
                {RECENT.map((r, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 px-5 py-3 transition hover:bg-line/40 dark:hover:bg-night-line/40"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                      {r.up ? (
                        <SparkleIcon className="h-4 w-4" />
                      ) : (
                        <CardIcon className="h-4 w-4" />
                      )}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-semibold text-ink dark:text-night-ink">
                        {r.name}
                      </p>
                      <p className="text-xs text-muted dark:text-night-muted">{r.meta}</p>
                    </div>
                    <span className={`text-sm font-bold ${r.up ? 'text-emerald-600' : 'text-ink dark:text-night-ink'}`}>
                      {r.amount}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}