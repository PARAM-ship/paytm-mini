import { SparkleIcon } from './Icons';

const LOGOS = [
  'UPI',
  'RuPay',
  'Visa',
  'Mastercard',
  'BHIM',
  'Amex',
  'NPCI',
  'Paytm Bank',
  'Paytm Later',
  'Paytm Money',
];

export default function TrustMarquee() {
  const items = [...LOGOS, ...LOGOS];
  return (
    <div className="border-y border-line bg-line/40 py-5 dark:border-night-line dark:bg-night-2">
      <div className="mx-auto mb-4 flex max-w-6xl items-center justify-center gap-2 px-5 text-xs font-semibold uppercase tracking-widest text-muted dark:text-night-muted">
        <SparkleIcon className="h-3.5 w-3.5 text-brand" />
        Powering 20M+ merchants & banks
      </div>
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent dark:from-night dark:from-night-2" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent dark:from-night" />
        <div className="flex w-max animate-marquee items-center gap-12 px-6">
          {items.map((l, i) => (
            <span
              key={i}
              className="whitespace-nowrap text-lg font-extrabold tracking-tight text-midnight/40 transition hover:text-midnight dark:text-night-muted/50 dark:hover:text-night-muted"
            >
              {l}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}