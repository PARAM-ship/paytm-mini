import { useEffect, useState, type FormEvent, type ReactNode } from 'react';
import Modal from './Modal';
import Fireworks from './Fireworks';
import { api, messageOf } from '../lib/api';
import { CheckIcon } from './Icons';

type Mode = 'login' | 'signup';

function Field({
  label,
  type = 'text',
  autoComplete,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  type?: string;
  autoComplete?: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-semibold text-midnight dark:text-night-ink">
        {label}
      </span>
      <input
        type={type}
        value={value}
        autoComplete={autoComplete}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-card border border-line bg-white px-3.5 py-2.5 text-sm text-ink outline-none transition placeholder:text-muted/60 focus:border-brand focus:ring-2 focus:ring-brand/25 dark:border-night-line dark:bg-night-2 dark:text-night-ink"
      />
    </label>
  );
}

export default function AuthModal({
  open,
  onClose,
  onLoggedIn,
  initialMode,
}: {
  open: boolean;
  onClose: () => void;
  onLoggedIn: (username: string) => void;
  initialMode: Mode;
}) {
  const [mode, setMode] = useState<Mode>(initialMode);
  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');

  useEffect(() => {
    if (!open) return;
    setMode(initialMode);
    setForm({ username: '', email: '', password: '' });
    setError('');
    setSuccess(false);
    setSuccessMsg('');
    setBusy(false);
  }, [open, initialMode]);

  const close = () => onClose();

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    if (busy) return;
    setError('');
    if (!form.username || !form.password || (mode === 'signup' && !form.email)) {
      setError('Please fill in all fields.');
      return;
    }
    setBusy(true);
    if (mode === 'signup') {
      const { ok, data } = await api('/signup', {
        username: form.username,
        email: form.email,
        password: form.password,
      });
      if (ok) {
        setSuccessMsg(messageOf(data, 'Account created!'));
        setSuccess(true);
      } else {
        setError(messageOf(data, 'Sign up failed.'));
      }
    } else {
      const { ok, data } = await api('/login', { username: form.username, password: form.password });
      if (ok) {
        onLoggedIn(form.username);
        setSuccessMsg(`Welcome back, ${form.username}!`);
        setSuccess(true);
      } else {
        setError(messageOf(data, 'Login failed.'));
      }
    }
    setBusy(false);
  };

  const switchMode = (m: Mode) => {
    setMode(m);
    setError('');
    setSuccess(false);
  };

  const setFormField = (key: keyof typeof form) => (v: string) =>
    setForm((f) => ({ ...f, [key]: v }));

  let content: ReactNode;
  if (success) {
    content = (
      <div className="relative overflow-hidden rounded-panel text-center">
        <Fireworks active />
        <div className="relative z-20 py-8">
          <div className="mx-auto mb-4 flex h-16 w-16 animate-pop-in items-center justify-center rounded-full bg-brand/15 text-brand">
            <CheckIcon className="h-9 w-9" />
          </div>
          <p className="text-lg font-bold text-midnight dark:text-night-ink">{successMsg}</p>
          <p className="mt-1 text-sm text-muted dark:text-night-muted">
            You're all set to pay your way.
          </p>
          <button
            onClick={close}
            className="mt-6 rounded-card bg-brand px-6 py-2.5 text-sm font-bold text-midnight-deep transition hover:brightness-105"
          >
            Done
          </button>
        </div>
      </div>
    );
  } else {
    content = (
      <>
        <div className="mb-5 grid grid-cols-2 rounded-card bg-line p-1 dark:bg-night-line">
          {(['login', 'signup'] as Mode[]).map((m) => (
            <button
              key={m}
              type="button"
              onClick={() => switchMode(m)}
              className={`rounded-card py-2 text-sm font-bold transition ${
                mode === m
                  ? 'bg-card text-midnight shadow-sm dark:bg-night-card dark:text-night-ink'
                  : 'text-muted hover:text-ink dark:hover:text-night-ink'
              }`}
            >
              {m === 'login' ? 'Login' : 'Sign Up'}
            </button>
          ))}
        </div>

        <form onSubmit={submit} className="space-y-4">
          <Field
            label="Username"
            autoComplete="username"
            value={form.username}
            onChange={setFormField('username')}
            placeholder="e.g. alice"
          />
          {mode === 'signup' && (
            <Field
              label="Email"
              type="email"
              autoComplete="email"
              value={form.email}
              onChange={setFormField('email')}
              placeholder="you@example.com"
            />
          )}
          <Field
            label="Password"
            type="password"
            autoComplete={mode === 'signup' ? 'new-password' : 'current-password'}
            value={form.password}
            onChange={setFormField('password')}
            placeholder="••••••••"
          />

          {error && (
            <p className="rounded-card bg-crimson/10 px-3 py-2 text-sm font-medium text-crimson">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={busy}
            className="w-full rounded-card bg-brand py-3 text-sm font-bold text-midnight-deep transition hover:brightness-105 disabled:opacity-60"
          >
            {busy ? 'Please wait…' : mode === 'signup' ? 'Create Account' : 'Login'}
          </button>
        </form>

        <p className="mt-4 text-center text-xs text-muted dark:text-night-muted">
          {mode === 'signup' ? 'Already have an account?' : 'New to Paytm?'}{' '}
          <button
            onClick={() => switchMode(mode === 'signup' ? 'login' : 'signup')}
            className="font-bold text-brand hover:underline"
          >
            {mode === 'signup' ? 'Login' : 'Sign up free'}
          </button>
          {mode === 'signup' && (
            <span className="mt-2 block">Signing up credits your wallet with ₹1,000 bonus.</span>
          )}
        </p>
      </>
    );
  }

  return (
    <Modal
      open={open}
      onClose={close}
      title={success ? undefined : mode === 'signup' ? 'Create your Paytm account' : 'Login to Paytm'}
    >
      {content}
    </Modal>
  );
}