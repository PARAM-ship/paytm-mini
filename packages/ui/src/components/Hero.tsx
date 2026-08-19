import Reveal from './Reveal';
import {
  ArrowRightIcon,
  BellIcon,
  CardIcon,
  CheckIcon,
  HomeIcon,
  PhoneIcon,
  ScanIcon,
  SendIcon,
  SparkleIcon,
  WalletIcon,
} from './Icons';

const QUICK_ACTIONS = [
  { label: 'Scan', icon: ScanIcon, color: '#00b9f1' },
  { label: 'Pay', icon: SendIcon, color: '#002e6e' },
  { label: 'Recharge', icon: PhoneIcon, color: '#ec184a' },
  { label: 'Wallet', icon: CardIcon, color: '#00a86b' },
];

const MINI_SERVICES = [
  { label: 'Mobile', icon: PhoneIcon, color: '#00b9f1' },
  { label: 'Electricity', icon: undefined, color: '#f5a623' },
  { label: 'DTH', icon: undefined, color: '#7c3aed' },
  { label: 'Card', icon: CardIcon, color: '#002e6e' },
  { label: 'Insurance', icon: undefined, color: '#00a86b' },
  { label: 'Movies', icon: undefined, color: '#ec184a' },
  { label: 'Travel', icon: undefined, color: '#f0723c' },
  { label: 'Bills', icon: undefined, color: '#9b51e0' },
];

const BUBBLES = [
  { name: 'Ravi', color: '#00b9f1' },
  { name: 'Priya', color: '#ec184a' },
  { name: 'Amit', color: '#002e6e' },
];

export default function Hero({
  onSignup,
  onLogin,
  onSend,
}: {
  onSignup: () => void;
  onLogin: () => void;
  onSend: () => void;
}) {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-24 -top-32 h-96 w-96 animate-blob rounded-full bg-brand/15 blur-3xl" />
        <div className="absolute right-0 top-40 h-[28rem] w-[28rem] animate-blob rounded-full bg-midnight/10 blur-3xl" style={{ animationDelay: '-5s' }} />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 animate-blob rounded-full bg-cyan-200/30 blur-3xl" style={{ animationDelay: '-9s' }} />
        <div className="absolute inset-0 opacity-[0.35] [background-image:linear-gradient(#00b9f1_1px,transparent_1px),linear-gradient(90deg,#00b9f1_1px,transparent_1px)] [background-size:46px_46px] [mask-image:radial-gradient(ellipse_60%_55%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="mx-auto grid max-w-6xl gap-14 px-5 pb-20 pt-28 lg:grid-cols-2 lg:items-center lg:gap-6 lg:pt-36 lg:pb-24">
        {/* copy */}
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-semibold text-midnight dark:border-brand/40 dark:text-night-ink">
              <SparkleIcon className="h-3.5 w-3.5 text-brand" />
              The Digital Revolution
            </span>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="mt-6 text-[2.6rem] font-extrabold leading-[1.08] tracking-tight text-midnight sm:text-5xl lg:text-[3.4rem] dark:text-night-ink">
              Pay anyone, <span className="text-gradient-brand">anytime</span>, right from your pocket.
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted dark:text-night-muted">
              Recharge, pay bills, send money and shop — all in one app. Join 500M+ Indians who
              trust Paytm to make every day a little faster.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                onClick={onSignup}
                className="group inline-flex items-center gap-2 rounded-card bg-brand px-6 py-3.5 text-sm font-bold text-midnight-deep shadow-lg shadow-brand/25 transition hover:-translate-y-0.5 hover:brightness-105"
              >
                Create free account
                <ArrowRightIcon className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </button>
              <button
                onClick={onLogin}
                className="inline-flex items-center rounded-card border border-midnight/15 bg-white px-6 py-3.5 text-sm font-bold text-midnight transition hover:border-brand hover:text-brand dark:border-night-line dark:bg-night-card dark:text-night-ink dark:hover:text-brand"
              >
                Login
              </button>
              <button
                onClick={onSend}
                className="inline-flex items-center gap-2 rounded-card px-4 py-3.5 text-sm font-bold text-crimson transition hover:bg-crimson/10"
              >
                <SendIcon className="h-4 w-4" /> Send Money
              </button>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <div className="mt-9 flex items-center gap-3 text-sm">
              <div className="flex -space-x-2">
                {[
                  { i: 'R', c: '#002e6e' },
                  { i: 'P', c: '#00b9f1' },
                  { i: 'A', c: '#ec184a' },
                  { i: 'S', c: '#00a86b' },
                ].map((x) => (
                  <span
                    key={x.i}
                    className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white text-[10px] font-bold text-white dark:border-night"
                    style={{ background: x.c }}
                  >
                    {x.i}
                  </span>
                ))}
              </div>
              <p className="text-muted dark:text-night-muted">
                <span className="font-semibold text-midnight dark:text-night-ink">4.6★</span> ·
                Loved by 500M+ users across India
              </p>
            </div>
          </Reveal>
        </div>

        {/* phone mockup */}
        <Reveal delay={250} className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div className="absolute -left-8 top-16 z-20 hidden animate-float rounded-card border border-line bg-card/95 px-4 py-3 shadow-xl backdrop-blur sm:block dark:border-night-line dark:bg-night-card/95">
            <p className="text-xs text-muted dark:text-night-muted">Payment received</p>
            <p className="flex items-center gap-1.5 text-sm font-bold text-emerald-600">
              <CheckIcon className="h-4 w-4" /> + ₹500{' '}
              <span className="font-normal text-muted dark:text-night-muted">from Ravi</span>
            </p>
          </div>
          <div className="absolute -right-5 bottom-28 z-20 hidden animate-float-slow rounded-card border border-line bg-card/95 px-4 py-3 shadow-xl backdrop-blur sm:block dark:border-night-line dark:bg-night-card/95">
            <p className="text-xs text-muted dark:text-night-muted">Cashback earned</p>
            <p className="text-sm font-bold text-brand">🎉 + ₹25</p>
          </div>

          <div className="relative mx-auto w-[290px] rounded-[2.6rem] border-[10px] border-midnight bg-card shadow-2xl shadow-midnight/30 dark:border-night-line dark:bg-night-card">
            <div className="overflow-hidden rounded-[2rem]">
              {/* status bar */}
              <div className="flex items-center justify-between bg-midnight px-5 pb-2 pt-3 text-[10px] font-medium text-white/90 dark:bg-night-2">
                <span>9:41</span>
                <span className="h-1.5 w-16 rounded-full bg-white/20" />
                <span>🔋 87%</span>
              </div>

              {/* header */}
              <div className="flex items-center justify-between bg-midnight px-4 py-3 dark:bg-night-2">
                <p className="text-sm font-extrabold text-white">
                  Pay<span className="text-brand">tm</span>
                </p>
                <div className="flex items-center gap-3">
                  <span className="relative">
                    <BellIcon className="h-4 w-4 text-white/80" />
                    <span className="absolute -right-0.5 -top-0.5 h-1.5 w-1.5 rounded-full bg-crimson" />
                  </span>
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand/20 text-[10px] font-bold text-white">
                    A
                  </span>
                </div>
              </div>

              {/* wallet chip */}
              <div className="relative mx-3 mt-3 overflow-hidden rounded-card bg-gradient-to-br from-midnight via-midnight to-brand p-4">
                <div className="pointer-events-none absolute inset-0">
                  <div className="absolute left-0 top-0 h-full w-1/2 animate-shine bg-white/10 blur-sm" />
                </div>
                <div className="relative flex items-center justify-between">
                  <p className="text-[10px] font-medium text-white/70">Paytm Wallet</p>
                  <span className="rounded bg-white/15 px-1.5 py-0.5 text-[8px] font-bold text-white">
                    PAYTM
                  </span>
                </div>
                <p className="relative mt-2 text-xl font-extrabold text-white">₹45,230</p>
                <div className="relative mt-3 flex gap-2">
                  <span className="flex-1 rounded bg-brand py-1.5 text-center text-[10px] font-bold text-midnight-deep">
                    Add Money
                  </span>
                  <span className="flex-1 rounded bg-white/15 py-1.5 text-center text-[10px] font-bold text-white">
                    Send
                  </span>
                </div>
              </div>

              {/* quick actions */}
              <div className="grid grid-cols-4 gap-2 px-3 pt-3">
                {QUICK_ACTIONS.map((a) => (
                  <div key={a.label} className="flex flex-col items-center gap-1.5">
                    <span
                      className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-sm dark:bg-night-2"
                      style={{ color: a.color }}
                    >
                      <a.icon className="h-5 w-5" />
                    </span>
                    <span className="text-[9px] font-semibold text-muted dark:text-night-muted">
                      {a.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* mini services */}
              <div className="grid grid-cols-4 gap-2 px-3 pt-3">
                {MINI_SERVICES.map((s, i) => (
                  <div key={i} className="flex flex-col items-center gap-1">
                    <span
                      className="flex h-9 w-9 items-center justify-center rounded-full"
                      style={{ background: `${s.color}1a`, color: s.color }}
                    >
                      {s.icon ? (
                        <s.icon className="h-4 w-4" />
                      ) : (
                        <span className="h-2 w-2 rounded-full" style={{ background: s.color }} />
                      )}
                    </span>
                    <span className="text-[8px] font-medium text-muted dark:text-night-muted">
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* bubbles */}
              <div className="flex items-center gap-4 px-4 pb-1 pt-4">
                {BUBBLES.map((b) => (
                  <div key={b.name} className="flex flex-col items-center gap-1">
                    <span
                      className="flex h-9 w-9 items-center justify-center rounded-full text-[11px] font-bold text-white"
                      style={{ background: b.color }}
                    >
                      {b.name[0]}
                    </span>
                    <span className="text-[8px] font-medium text-muted dark:text-night-muted">
                      {b.name}
                    </span>
                  </div>
                ))}
                <div className="ml-auto flex flex-col items-center gap-1">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-dashed border-brand text-brand">
                    <WalletIcon className="h-4 w-4" />
                  </span>
                  <span className="text-[8px] font-medium text-brand">Wallet</span>
                </div>
              </div>

              {/* bottom nav */}
              <div className="mt-3 flex items-center justify-around border-t border-line px-3 py-2 text-muted dark:border-night-line dark:text-night-muted">
                <HomeIcon className="h-5 w-5 text-brand" />
                <span className="text-[9px] font-medium text-brand">Home</span>
                <WalletIcon className="h-5 w-5" />
                <span className="text-[9px] font-medium">Orders</span>
                <span className="flex items-center ml-1">
                  <ScanIcon className="h-5 w-5" />
                  <span className="text-[9px] font-medium">Profile</span>
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}