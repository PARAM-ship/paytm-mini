import Reveal from './Reveal';
import { useCountUp } from '../lib/useCountUp';
import { useInView } from '../lib/useInView';

type Stat = {
  target: number;
  suffix: string;
  label: string;
  decimals?: number;
};

const STATS: Stat[] = [
  { target: 500, suffix: 'M+', label: 'Registered users' },
  { target: 20, suffix: 'M+', label: 'Merchants' },
  { target: 50, suffix: 'M+', label: 'Transactions daily' },
  { target: 999, suffix: '%', label: 'UPI success rate', decimals: 1 },
];

function StatCard({ stat, started }: { stat: Stat; started: boolean }) {
  const value = useCountUp(stat.target, started, 1900, stat.decimals ?? 0);
  return (
    <div className="rounded-panel border border-line bg-card p-6 text-center shadow-sm transition hover:-translate-y-1 hover:border-brand/40 hover:shadow-md dark:border-night-line dark:bg-night-card">
      <p className="text-3xl font-extrabold tracking-tight text-midnight dark:text-night-ink">
        {stat.decimals ? value.toFixed(stat.decimals) : value}
        <span className="text-brand">{stat.suffix}</span>
      </p>
      <p className="mt-1.5 text-sm font-medium text-muted dark:text-night-muted">{stat.label}</p>
    </div>
  );
}

export default function Stats() {
  const { ref, inView } = useInView<HTMLDivElement>(0.3);
  return (
    <section className="mx-auto max-w-6xl px-5 py-20">
      <div ref={ref} className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 90}>
            <StatCard stat={s} started={inView} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}