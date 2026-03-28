'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Handshake, ShieldCheck, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const partnershipBenefits = [
  {
    title: 'Structured credibility',
    copy: 'Fairfield is designed to help partners present the work clearly and confidently.',
    icon: ShieldCheck,
  },
  {
    title: 'Visibility & public voice',
    copy: 'Through Elle and the Elle Cares platform, partners gain public reach and media relevance.',
    icon: TrendingUp,
  },
  {
    title: 'Real community proximity',
    copy: 'Your partnership supports work that stays close to the field instead of getting diluted by overhead.',
    icon: Handshake,
  },
];

export function StrategicPartnership() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#0b1625_0%,#11253f_55%,#08111d_100%)] py-28 text-white">
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-[var(--color-highlight)]/12 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[var(--color-secondary)]/10 blur-3xl" />

      <div className="container relative z-10">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_480px] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[var(--color-secondary)]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--color-secondary)]">
                Strategic alliance
              </span>
            </div>

            <h2 className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              Fairfield is now designed to be a <span className="text-[var(--color-secondary)]">partnership-ready platform</span>, not just a charity.
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300 md:text-xl">
              That means clearer communication, stronger public positioning, and a structure that helps institutional
              partners, sponsors, and funders understand the work and feel confident presenting it.
            </p>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-400">
              We're proud to partner with <span className="font-semibold text-white">Operation Wealth Creation (OWC)</span> and <span className="font-semibold text-white">General Salim Saleh</span> — a unique alliance of civil society reach and military logistical capacity, built to deliver impact where it matters most.
            </p>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {partnershipBenefits.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="rounded-[1.75rem] border border-white/10 bg-white/[0.05] p-6"
                  >
                    <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/8 text-[var(--color-secondary)]`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-semibold tracking-tight text-white">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-400">{item.copy}</p>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link href="/partnership">
                <Button className="rounded-full bg-[var(--color-secondary)] px-8 py-6 text-xs font-bold uppercase tracking-[0.24em] text-[var(--color-primary)] hover:bg-[#ffd075]">
                  Explore partnership pathways
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/about" className="text-sm font-semibold uppercase tracking-[0.22em] text-white/70 transition-colors hover:text-white">
                Review Fairfield profile
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            className="relative overflow-hidden rounded-[2rem] border border-white/12 shadow-[0_30px_90px_-40px_rgba(0,0,0,0.8)]"
          >
            <div
              className="aspect-[4/5] bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?auto=format&fit=crop&w=1200&q=80')",
              }}
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(8,17,29,0.75)_70%,rgba(8,17,29,0.95)_100%)]" />
            <div className="absolute bottom-0 left-0 right-0 p-7">
              <div className="rounded-[1.5rem] border border-white/10 bg-white/10 p-5 backdrop-blur-2xl">
                <p className="text-sm font-medium leading-relaxed text-white">
                  Driving national development through structured cooperation, community proximity, and sustained impact.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
