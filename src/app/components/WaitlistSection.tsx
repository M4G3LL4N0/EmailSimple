'use client';

import { useState } from 'react';
import Link from 'next/link';

export function WaitlistSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setError('');

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit');
      }

      setStatus('success');
      setName('');
      setEmail('');
    } catch (err) {
      setStatus('error');
      setError(err instanceof Error ? err.message : 'Something went wrong');
    }
  };

  if (status === 'success') {
    return (
      <section id="waitlist" className="py-[80px]">
        <div className="container">
          <div className="glass rounded-[34px] p-[34px] text-center">
            <div className="eyebrow mx-auto">
              <span className="eyebrow-dot" />
              You're on the list
            </div>
            <h2 className="section-title mt-5">
              Thanks for joining the waitlist!
            </h2>
            <p className="section-copy max-w-[500px] mx-auto mt-4">
              We'll be in touch soon with early access details. In the meantime,
              follow us on Twitter for updates.
            </p>
            <Link
              href="https://twitter.com/emailsimple"
              target="_blank"
              rel="noopener noreferrer"
              className="primary-btn inline-flex mt-6 hover:bg-blue-500/90 transition-colors"
            >
              Follow on Twitter
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="waitlist" className="py-[100px] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(7,11,23,0.3)] to-[rgba(7,11,23,0.9)]" />
      <div className="container">
        <div className="glass rounded-[34px] p-[34px] relative overflow-hidden">
          <div className="absolute top-[-80px] right-[-60px] w-[260px] h-[260px] rounded-full bg-[radial-gradient(circle,rgba(103,183,255,0.22),transparent_70%)] pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-[1fr_0.9fr] gap-5 items-center">
            <div>
              <div className="eyebrow">
                <span className="eyebrow-dot animate-pulse" />
                Founder's Circle Access
              </div>
              <h2 className="section-title mt-5">
                Join the alpha program
              </h2>
              <p className="section-copy mt-4 max-w-[620px]">
                As a founding member, you'll get:
                <ul className="mt-3 space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-blue-600" />
                    Early access with premium onboarding
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-blue-600" />
                    Direct influence on product roadmap
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-blue-600" />
                    Lifetime discounts for early adopters
                  </li>
                </ul>
              </p>
            </div>

            <form onSubmit={handleSubmit} className="grid gap-3.5">
              <input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="h-[54px] rounded-[18px] border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.05)] text-white px-4 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:bg-white/10 transition-colors"
              />
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-[54px] rounded-[18px] border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.05)] text-white px-4 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:bg-white/10 transition-colors"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="primary-btn w-full h-[52px] flex items-center justify-center hover:bg-blue-500/90 transition-colors"
              >
                {status === 'loading' ? (
                  <span className="inline-block h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  'Join the waitlist'
                )}
              </button>
              {error && (
                <p className="text-red-400 text-sm mt-2">
                  {error}
                </p>
              )}
              <p className="text-muted-2 text-[13px] leading-[1.6] mt-2">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
