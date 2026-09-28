import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Instagram, Linkedin, Youtube, Send, Facebook,CheckCircle2 } from 'lucide-react';
import { social } from '../data/content';
import SectionHeading from './SectionHeading';

type Errors = { name?: string; email?: string; message?: string };

const iconFor: Record<string, JSX.Element> = {
  Instagram: <Instagram size={18} />,
  LinkedIn: <Linkedin size={18} />,
  YouTube: <Youtube size={18} />,
  Facebook: <Facebook size={18} />
};

// 1. Sign up at https://formspree.io (free) and create a new form.
// 2. Formspree gives you an endpoint that looks like https://formspree.io/f/xxxxxxxx
//    — paste it below. That's the only change needed to receive messages by email.
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/maewewgj';

export default function Contact() {
  const [values, setValues] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState(false);

  function validate(v: typeof values): Errors {
    const e: Errors = {};
    if (!v.name.trim()) e.name = 'Name is required';
    if (!v.email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) e.email = 'Enter a valid email address';
    if (!v.message.trim()) e.message = 'Message is required';
    else if (v.message.trim().length < 10) e.message = 'Message should be at least 10 characters';
    return e;
  }

  async function handleSubmit(ev: FormEvent) {
    ev.preventDefault();
    const eObj = validate(values);
    setErrors(eObj);
    if (Object.keys(eObj).length > 0) return;

    setSending(true);
    setSendError(false);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error('Request failed');
      setSubmitted(true);
      setValues({ name: '', email: '', message: '' });
    } catch {
      setSendError(true);
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="contact" className="relative bg-paper py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-light opacity-60" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's Build Something Great Together."
          dark={false}
          description="For professional opportunities, collaborations, or engineering-related discussions, feel free to connect."
        />

        <div className="grid lg:grid-cols-5 gap-12 mt-14">
          <div className="lg:col-span-2">
            <h3 className="eyebrow text-steel mb-5">Connect</h3>
            <ul className="space-y-3">
              {social.map((s) => (
                <li key={s.name}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring group flex items-center justify-between gap-3 border border-concrete-light bg-white px-5 py-3 hover:border-safety transition-colors"
                  >
                    <span className="flex items-center gap-3 text-navy font-medium">
                      <span className="text-safety">{iconFor[s.name] ?? <Send size={18} />}</span>
                      {s.name}
                    </span>
                    <span className="font-mono text-xs text-steel group-hover:text-safety transition-colors">
                      @{s.handle}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            noValidate
            className="lg:col-span-3 bg-white border border-concrete-light p-8 relative"
          >
            {submitted && (
              <div className="mb-6 flex items-center gap-2 bg-navy/5 border border-navy/15 text-navy px-4 py-3 text-sm">
                <CheckCircle2 size={18} className="text-safety shrink-0" />
                Message sent — thanks for reaching out, you'll hear back soon.
              </div>
            )}
            {sendError && (
              <div className="mb-6 bg-safety/10 border border-safety/40 text-navy px-4 py-3 text-sm">
                Something went wrong sending that. Please try again, or reach out directly via one of the links
                alongside this form.
              </div>
            )}

            <div className="grid gap-6">
              <Field
                label="Name"
                name="name"
                value={values.name}
                onChange={(v) => setValues((s) => ({ ...s, name: v }))}
                error={errors.name}
              />
              <Field
                label="Email"
                name="email"
                type="email"
                value={values.email}
                onChange={(v) => setValues((s) => ({ ...s, email: v }))}
                error={errors.email}
              />
              <div>
                <label htmlFor="message" className="font-mono text-xs uppercase tracking-wide text-steel">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={values.message}
                  onChange={(e) => setValues((s) => ({ ...s, message: e.target.value }))}
                  className={`focus-ring mt-2 w-full border bg-paper px-4 py-3 text-sm outline-none transition-colors ${
                    errors.message ? 'border-safety' : 'border-concrete-light focus:border-navy'
                  }`}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                />
                {errors.message && (
                  <p id="message-error" className="text-xs text-safety mt-1">
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={sending}
                className="focus-ring inline-flex items-center justify-center gap-2 bg-navy text-white px-6 py-3 font-mono text-xs uppercase tracking-wider hover:bg-safety hover:text-navy transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {sending ? 'Sending…' : 'Send Message'} <Send size={16} />
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  error,
  type = 'text',
}: {
  label: string;
  name: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  type?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="font-mono text-xs uppercase tracking-wide text-steel">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`focus-ring mt-2 w-full border bg-paper px-4 py-3 text-sm outline-none transition-colors ${
          error ? 'border-safety' : 'border-concrete-light focus:border-navy'
        }`}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
      />
      {error && (
        <p id={`${name}-error`} className="text-xs text-safety mt-1">
          {error}
        </p>
      )}
    </div>
  );
}
