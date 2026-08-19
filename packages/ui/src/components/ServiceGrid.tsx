import Reveal from './Reveal';
import {
  BagIcon,
  BoltIcon,
  CardIcon,
  CoinsIcon,
  DropletIcon,
  FlameIcon,
  HeartIcon,
  PercentIcon,
  PhoneIcon,
  PlaneIcon,
  ShieldIcon,
  TicketIcon,
  TvIcon,
  WalletIcon,
} from './Icons';

type Service = { name: string; icon: (p: { className?: string }) => React.ReactNode; color: string };

const SERVICES: Service[] = [
  { name: 'Mobile Recharge', icon: PhoneIcon, color: '#00b9f1' },
  { name: 'Electricity Bill', icon: BoltIcon, color: '#f5a623' },
  { name: 'DTH & Broadband', icon: TvIcon, color: '#7c3aed' },
  { name: 'Credit Card Bill', icon: CardIcon, color: '#002e6e' },
  { name: 'Water Bill', icon: DropletIcon, color: '#00a86b' },
  { name: 'Gas Bill', icon: FlameIcon, color: '#f0723c' },
  { name: 'Insurance', icon: ShieldIcon, color: '#ec184a' },
  { name: 'UPI Payments', icon: WalletIcon, color: '#00b9f1' },
  { name: 'Loans', icon: CoinsIcon, color: '#f5a623' },
  { name: 'Movie Tickets', icon: TicketIcon, color: '#ec184a' },
  { name: 'Travel Bookings', icon: PlaneIcon, color: '#7c3aed' },
  { name: 'Shopping', icon: BagIcon, color: '#00a86b' },
  { name: 'Donations', icon: HeartIcon, color: '#ec184a' },
  { name: 'Rewards & Cashback', icon: PercentIcon, color: '#00e0a0' },
];

export default function ServiceGrid() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-5 py-20">
      <Reveal className="mx-auto max-w-2xl text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-brand">The Super App</span>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-midnight sm:text-4xl dark:text-night-ink">
          Everything you need, <span className="text-gradient-brand">every single day</span>
        </h2>
        <p className="mt-4 text-base text-muted dark:text-night-muted">
          From recharges to investments, manage your entire digital life from one icon-driven
          home screen.
        </p>
      </Reveal>

      <div className="mt-12 grid grid-cols-4 gap-3 sm:gap-4 lg:grid-cols-7">
        {SERVICES.map((s, i) => (
          <Reveal key={s.name} delay={(i % 7) * 60}>
            <button className="group flex w-full flex-col items-center gap-3 rounded-card border border-line bg-card px-1 py-5 text-center shadow-sm transition duration-200 hover:-translate-y-1.5 hover:border-brand/50 hover:shadow-lg hover:shadow-brand/10 dark:border-night-line dark:bg-night-card">
              <span
                className="flex h-12 w-12 items-center justify-center rounded-full transition duration-200 group-hover:scale-110"
                style={{ background: `${s.color}1a`, color: s.color }}
              >
                <s.icon className="h-6 w-6" />
              </span>
              <span className="text-center text-[11px] font-semibold leading-tight text-midnight dark:text-night-ink">
                {s.name}
              </span>
            </button>
          </Reveal>
        ))}
      </div>
    </section>
  );
}