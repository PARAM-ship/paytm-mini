const COLS = [
  {
    title: 'Company',
    links: ['About us', 'Careers', 'Press', 'Investor relations', 'Blog'],
  },
  {
    title: 'Products',
    links: ['Paytm Wallet', 'UPI Payments', 'Paytm Later', 'Paytm Money', 'Paytm Bank'],
  },
  {
    title: 'Services',
    links: ['Recharge', 'Bill Payment', 'Insurance', 'Loans', 'Travel'],
  },
  {
    title: 'Help',
    links: ['Help Center', 'Security', 'Terms & Conditions', 'Privacy Policy', 'Contact us'],
  },
];

export default function Footer() {
  return (
    <footer className="bg-midnight text-white dark:bg-black">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <a href="#top" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-card bg-gradient-to-br from-brand to-midnight text-lg font-black">
                P
              </span>
              <span className="text-xl font-extrabold tracking-tight">
                Pay<span className="text-brand">tm</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm text-white/60">
              The digital revolution in your pocket. Pay anyone, recharge, pay bills and shop —
              all in one trusted app.
            </p>
          </div>
          {COLS.map((c) => (
            <div key={c.title}>
              <p className="text-sm font-bold uppercase tracking-wide text-white/80">{c.title}</p>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#top"
                      className="text-sm text-white/55 transition hover:text-brand"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Paytm (Demo). Built for the digital revolution.</p>
          <p className="flex items-center gap-1.5">
            Made with <span className="text-crimson">♥</span> in India
          </p>
        </div>
      </div>
    </footer>
  );
}