'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Crown, ExternalLink, HeartHandshake, Instagram, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const socialProof = [
  { value: '22K', label: 'Instagram followers' },
  { value: '295', label: 'Public posts' },
  { value: '2025', label: 'Miss Uganda year' },
];

const signals = [
  'Fairfield Global Ambassador',
  'Miss Uganda platform visibility',
  'Elle Cares advocacy momentum',
];

export function FairfieldAmbassador() {
  return (
    <section className="relative overflow-hidden bg-[#08131f] py-28 text-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-[var(--color-highlight)]/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[var(--color-secondary)]/10 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.85) 1px, transparent 1px)', backgroundSize: '26px 26px' }} />
      </div>

      <div className="container relative z-10">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_480px] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[var(--color-secondary)]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--color-secondary)]">
                Public voice • profile power
              </span>
            </div>

            <h2 className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              Fairfield now has a <span className="text-[var(--color-secondary)]">public ambassador</span> whose platform can move attention into action.
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300 md:text-xl">
              Elle Trivia Muhoza is more than a titleholder in the Fairfield story. As Miss Uganda and Fairfield Global Ambassador,
              she gives the mission a stronger public face — one that can speak to communities, media, partners, and global audiences with credibility.
            </p>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-400">
              Through <span className="font-semibold text-white">Elle Cares</span>, her advocacy language now sits naturally beside Fairfield’s work in dignity,
              girls’ education, mental health recovery, and household resilience. That alignment is what makes the profile powerful.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {signals.map((signal) => (
                <span
                  key={signal}
                  className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/75"
                >
                  {signal}
                </span>
              ))}
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {socialProof.map((item) => (
                <div key={item.label} className="rounded-[1.5rem] border border-white/10 bg-white/[0.05] p-5 backdrop-blur-xl">
                  <div className="text-3xl font-semibold tracking-tight text-[var(--color-secondary)]">{item.value}</div>
                  <div className="mt-2 text-[11px] uppercase tracking-[0.24em] text-slate-400">{item.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link href="/miss-world">
                <Button className="rounded-full bg-[var(--color-secondary)] px-8 py-6 text-xs font-bold uppercase tracking-[0.24em] text-[var(--color-primary)] hover:bg-[#ffd075]">
                  View the Miss Uganda Profile
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/elle-story" className="text-sm font-semibold uppercase tracking-[0.22em] text-white/70 transition-colors hover:text-white">
                Follow Elle’s story arc
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            className="relative"
          >
            <div className="absolute -left-6 top-8 hidden h-[82%] w-[82%] rounded-[2rem] border border-[var(--color-secondary)]/25 lg:block" />
            <div className="relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.10),rgba(255,255,255,0.04))] p-6 shadow-[0_30px_90px_-40px_rgba(0,0,0,0.8)] backdrop-blur-2xl">
              <div className="overflow-hidden rounded-[1.75rem]">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1200&q=80"
                  alt="Portrait-style editorial image representing Elle Trivia Muhoza"
                  className="h-[460px] w-full object-cover"
                />
              </div>

              <div className="mt-5 rounded-[1.5rem] border border-white/8 bg-[#091120]/90 p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.24em] text-white/45">Current profile position</p>
                    <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white">Elle Trivia Muhoza</h3>
                    <p className="mt-1 text-sm uppercase tracking-[0.22em] text-[var(--color-secondary)]">Miss Uganda • Fairfield Global Ambassador</p>
                  </div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--color-secondary)]/14 text-[var(--color-secondary)]">
                    <Crown className="h-5 w-5" />
                  </div>
                </div>

                <div className="mt-5 space-y-3">
                  <div className="flex items-start gap-3 rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 text-sm text-slate-300">
                    <HeartHandshake className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-highlight)]" />
                    <span>Uses pageant visibility to make Fairfield’s community mission more legible, relatable, and shareable.</span>
                  </div>
                  <div className="flex items-start gap-3 rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 text-sm text-slate-300">
                    <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-secondary)]" />
                    <span>Brings the <strong className="text-white">Elle Cares</strong> platform into direct conversation with education, dignity, and resilience work.</span>
                  </div>
                </div>

                <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <a
                    href="https://www.instagram.com/muhozatriviaelle/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-white/75 transition-colors hover:text-white"
                  >
                    <Instagram className="h-4 w-4" />
                    @muhozatriviaelle
                    <ExternalLink className="h-4 w-4" />
                  </a>
                  <span className="text-[11px] uppercase tracking-[0.24em] text-white/45">Instagram snapshot: 22K followers</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
