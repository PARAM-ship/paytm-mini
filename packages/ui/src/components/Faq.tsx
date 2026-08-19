import { useState } from 'react';
import Reveal from './Reveal';
import { PlusIcon } from './Icons';

const FAQS = [
  {
    q: 'Is creating a Paytm account really free?',
    a: 'Yes. Signing up is completely free and takes under a minute. You even get a ₹1,000 sign-in bonus added to your new wallet to start transacting.',
  },
  {
    q: 'How do I send money to someone?',
    a: 'Open the Send Money option, enter the receiver’s Paytm username and the amount, then confirm. The money moves instantly and securely between Paytm Wallets.',
  },
  {
    q: 'Which payments can I make on Paytm?',
    a: 'Recharges, electricity, water, gas and broadband bills, credit card payments, insurance, movie tickets, travel bookings, shopping and more — all inside the Paytm Super App.',
  },
  {
    q: 'Is my money and data safe?',
    a: 'Paytm is built on bank-grade security with encrypted transactions and 99.9% UPI success rate. Your wallet balance and personal information are always protected.',
  },
  {
    q: 'Can I use Paytm on multiple devices?',
    a: 'Yes. Log in from any device with your username and password and access your wallet, passbook and payment history anywhere.',
  },
  {
    q: 'Are there any transaction fees?',
    a: 'Sending money between Paytm Wallets is free. Standard bank/UPI charges may apply for bank transfers, and we always show the exact amount before you confirm.',
  },
];

function Item({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <li className="rounded-card border border-line bg-card transition hover:border-brand/40 dark:border-night-line dark:bg-night-card">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
        aria-expanded={open}
      >
        <span className="font-semibold text-midnight dark:text-night-ink">{q}</span>
        <span
          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand transition-transform duration-300 ${open ? 'rotate-45' : ''}`}
        >
          <PlusIcon className="h-4 w-4" />
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ${open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-4 text-sm leading-relaxed text-muted dark:text-night-muted">{a}</p>
        </div>
      </div>
    </li>
  );
}

export default function Faq() {
  return (
    <section id="faq" className="border-y border-line bg-line/30 py-20 dark:border-night-line dark:bg-night-2">
      <div className="mx-auto max-w-3xl px-5">
        <Reveal className="text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-brand">FAQ</span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-midnight sm:text-4xl dark:text-night-ink">
            Questions, answered
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <ul className="mt-10 space-y-3">
            {FAQS.map((f) => (
              <Item key={f.q} q={f.q} a={f.a} />
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}