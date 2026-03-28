'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Banknote, FileText, ShieldCheck, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';

const allocations = [
  { label: 'Education continuity', value: '40%', color: 'bg-[var(--color-secondary)]' },
  { label: 'Recovery & protection', value: '30%', color: 'bg-[var(--color-highlight)]' },
  { label: 'Household resilience', value: '30%', color: 'bg-[var(--color-accent)]' },
];

const trustCards = [
  {
    title: 'Closer to the field',
    copy: 'Contributions are structured to stay near the work instead of getting diluted by unnecessary overhead layers.',
    icon: Target,
  },
  {
    title: 'Readable reporting',
    copy: 'Fairfield can present clearer progress stories, partner notes, and funding narratives for supporters.',
    icon: FileText,
  },
  {
    title: 'Trust that scales',
    copy: 'Stronger presentation creates a better foundation for media, philanthropy, and institutional confidence.',
    icon: ShieldCheck,
  },
];

export function FinancialTransparency() {
  return (
    <section className="relative overflow-hidden bg-[#09111c] py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,166,35,0.08),transparent_25%),radial-gradient(circle_at_bottom_left,rgba(43,188,179,0.10),transparent_30%)]" />

      <div className="container relative z-10">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            className="relative mx-auto w-full max-w-[520px]"
          >
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-[0_30px_90px_-40px_rgba(0,0,0,0.75)] backdrop-blur-2xl">
              <div className="rounded-[1.75rem] border border-white/8 bg-[#08111d] p-6">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/45">Transparency view</p>
                    <h3 className="mt-2 text-2xl font-semibold tracking-tight">How the work is framed</h3>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-[var(--color-secondary)]">
                    <Banknote className="h-5 w-5" />
                  </div>
                </div>

                <div className="relative flex items-center justify-center py-5">
                  <div className="h-64 w-64 rounded-full border-[18px] border-[var(--color-secondary)]/20 border-t-[var(--color-secondary)] border-r-[var(--color-highlight)] border-b-[var(--color-accent)] bg-transparent shadow-[0_0_0_1px_rgba(255,255,255,0.04)]" />
                  <div className="absolute flex h-40 w-40 flex-col items-center justify-center rounded-full border border-white/10 bg-[#0d1827] text-center shadow-inner">
                    <span className="text-5xl font-semibold tracking-tight">100%</span>
                    <span className="mt-2 text-[11px] uppercase tracking-[0.24em] text-white/50">Program-facing story</span>
                  </div>
                </div>

                <div className="mt-4 space-y-3">
                  {allocations.map((item) => (
                    <div key={item.label} className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                      <div className="mb-2 flex items-center justify-between gap-3">
                        <span className="text-sm font-medium text-white">{item.label}</span>
                        <span className="text-sm font-semibold text-white/75">{item.value}</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-white/8">
                        <div className={`h-full rounded-full ${item.color}`} style={{ width: item.value }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
          >
            <p className="mb-4 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.26em] text-[var(--color-secondary)]">
              <ShieldCheck className="h-4 w-4" />
              Trust architecture
            </p>
            <h2 className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              People give faster when the mission is clear and the structure feels credible.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
              Fairfield’s website should show that generosity is not disappearing into abstraction. It should communicate a
              disciplined model, readable priorities, and a direct relationship between support and front-line change.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-400">
              That’s especially important now, because this brand is doing double work: supporting real community impact while
              also becoming a stronger profile for founder storytelling, coalition-building, and public trust.
            </p>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {trustCards.map((card, index) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6"
                  >
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/7 text-[var(--color-secondary)]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-semibold tracking-tight text-white">{card.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-400">{card.copy}</p>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link href="/about">
                <Button className="rounded-full bg-[var(--color-secondary)] px-8 py-6 text-xs font-bold uppercase tracking-[0.24em] text-[var(--color-primary)] hover:bg-[#ffd075]">
                  Review Fairfield Story
                </Button>
              </Link>
              <Link href="/partnership" className="text-sm font-semibold uppercase tracking-[0.22em] text-white/75 transition-colors hover:text-white">
                See partnership pathways
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
