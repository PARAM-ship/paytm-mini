import { useEffect, useState, type FormEvent } from 'react';
import Modal from './Modal';
import Fireworks from './Fireworks';
import { api, messageOf } from '../lib/api';
import { CheckIcon, RupeeIcon, SendIcon } from './Icons';

function Field({
  label,
  value,
  onChange,
  type = 'text',
  placeholder,
  hint,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  placeholder?: string;
  hint?: string;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-semibold text-midnight dark:text-night-ink">
        {label}
      </span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-card border border-line bg-white px-3.5 py-2.5 text-sm text-ink outline-none transition placeholder:text-muted/60 focus:border-brand focus:ring-2 focus:ring-brand/25 dark:border-night-line dark:bg-night-2 dark:text-night-ink"
      />
      {hint && <span className="mt-1 block text-xs text-muted dark:text-night-muted">{hint}</span>}
    </label>
  );
}

export default function SendMoneyModal({
  open,
  onClose,
  defaultSender,
}: {
  open: boolean;
  onClose: () => void;
  defaultSender?: string;
}) {
  const [form, setForm] = useState({ sender: '', receiver: '', amount: '' });
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [sentAmount, setSentAmount] = useState('');

  useEffect(() => {
    if (!open) return;
    setForm({
      sender: defaultSender ?? '',
      receiver: '',
      amount: '',
    });
    setError('');
    setSuccess(false);
    setBusy(false);
    setSentAmount('');
  }, [open, defaultSender]);

  const close = () => onClose();

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    if (busy) return;
    setError('');
    const amount = Number(form.amount);
    if (!form.sender || !form.receiver) {
      setError('Enter both sender and receiver username.');
      return;
    }
    if (!form.amount || !Number.isFinite(amount) || amount <= 0) {
      setError('Enter a valid amount greater than zero.');
      return;
    }
    setBusy(true);
    setSentAmount(`₹${amount.toLocaleString('en-IN')}`);
    const { ok, data } = await api('/pay', {
      senderId: form.sender,
      receiverId: form.receiver,
      amount,
    });
    if (ok) {
      setSuccess(true);
    } else {
      setError(messageOf(data, 'Could not send money. Please try again.'));
    }
    setBusy(false);
  };

  return (
    <Modal open={open} onClose={close} title={success ? undefined : 'Send Money'}>
      {success ? (
        <div className="relative overflow-hidden rounded-panel text-center">
          <Fireworks active />
          <div className="relative z-20 py-8">
            <div className="mx-auto mb-4 flex h-16 w-16 animate-pop-in items-center justify-center rounded-full bg-emerald-500/15 text-emerald-500">
              <CheckIcon className="h-9 w-9" />
            </div>
            <p className="text-lg font-bold text-midnight dark:text-night-ink">
              {sentAmount} sent successfully!
            </p>
            <p className="mt-1 text-sm text-muted dark:text-night-muted">
              {form.sender} → {form.receiver}
            </p>
            <button
              onClick={close}
              className="mt-6 rounded-card bg-brand px-6 py-2.5 text-sm font-bold text-midnight-deep transition hover:brightness-105"
            >
              Done
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={submit} className="space-y-4">
          <div className="flex items-center justify-between rounded-card bg-gradient-to-br from-midnight to-brand p-4 text-white">
            <div>
              <p className="text-xs text-white/75">Available balance</p>
              <p className="text-2xl font-extrabold">₹45,230</p>
            </div>
            <span className="rounded bg-white/15 p-2 text-brand">
              <RupeeIcon className="h-5 w-5" />
            </span>
          </div>

          <Field
            label="Your username (sender)"
            value={form.sender}
            onChange={(v) => setForm((f) => ({ ...f, sender: v }))}
            placeholder="e.g. alice"
            hint="This is your Paytm username — the money comes out of your wallet."
          />
          <Field
            label="Receiver's username"
            value={form.receiver}
            onChange={(v) => setForm((f) => ({ ...f, receiver: v }))}
            placeholder="e.g. bob"
          />
          <Field
            label="Amount (₹)"
            type="number"
            value={form.amount}
            onChange={(v) => setForm((f) => ({ ...f, amount: v }))}
            placeholder="e.g. 500"
          />

          {error && (
            <p className="rounded-card bg-crimson/10 px-3 py-2 text-sm font-medium text-crimson">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={busy}
            className="inline-flex w-full items-center justify-center gap-2 rounded-card bg-brand py-3 text-sm font-bold text-midnight-deep transition hover:brightness-105 disabled:opacity-60"
          >
            <SendIcon className="h-4 w-4" />
            {busy ? 'Sending…' : 'Send Money'}
          </button>
          <p className="text-center text-xs text-muted dark:text-night-muted">
            Free & instant between Paytm wallets.
          </p>
        </form>
      )}
    </Modal>
  );
}