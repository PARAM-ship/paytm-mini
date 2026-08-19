import Reveal from './Reveal';
import { ArrowRightIcon, SparkleIcon } from './Icons';

export default function FinalCta({
  onSignup,
  onLogin,
}: {
  onSignup: () => void;
  onLogin: () => void;
}) {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20">
      <Reveal>
        <div className="relative overflow-hidden rounded-panel bg-gradient-to-br from-midnight via-midnight to-brand px-8 py-14 text-center text-white shadow-2xl shadow-midnight/30 sm:px-14">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/4 top-0 h-40 w-40 rounded-full bg-brand/25 blur-3xl" />
            <div className="absolute bottom-0 right-1/4 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
          </div>
          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold">
              <SparkleIcon className="h-3.5 w-3.5 text-brand" /> Ready when you are
            </span>
            <h2 className="mx-auto mt-5 max-w-xl text-3xl font-extrabold tracking-tight sm:text-4xl">
              Pay your way. It takes 60 seconds.
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm text-white/75">
              Create your free account, claim your ₹1,000 bonus and start paying anyone in India
              instantly.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <button
                onClick={onSignup}
                className="group inline-flex items-center gap-2 rounded-card bg-brand px-7 py-3.5 text-sm font-bold text-midnight-deep shadow-lg shadow-brand/30 transition hover:-translate-y-0.5 hover:brightness-110"
              >
                Sign up free
                <ArrowRightIcon className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </button>
              <button
                onClick={onLogin}
                className="rounded-card border border-white/25 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}