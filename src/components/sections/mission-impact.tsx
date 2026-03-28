'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, BadgeCheck, HeartHandshake, BriefcaseBusiness, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const focusAreas = [
  {
    title: 'Recovery & protection',
    description: 'Trauma support, mental health healing, and safer pathways for women and families facing instability.',
    icon: HeartHandshake,
  },
  {
    title: 'Education continuity',
    description: 'Girls stay in school through menstrual dignity support, leadership development, and digital learning access.',
    icon: GraduationCap,
  },
  {
    title: 'Economic resilience',
    description: 'Micro-enterprise and practical livelihood pathways that help households build forward momentum.',
    icon: BriefcaseBusiness,
  },
];

const trustSignals = ['Founder-led and partnership-ready', 'Designed for community proximity', 'Built to communicate proof and public value'];

export function MissionImpact() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#fffdf9_0%,#f7f3ec_100%)] py-24 text-[var(--color-text-dark)]" id="mission">
      <div className="absolute -right-28 top-10 h-72 w-72 rounded-full bg-[var(--color-secondary)]/12 blur-3xl" />
      <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-[var(--color-highlight)]/10 blur-3xl" />

      <div className="container relative z-10">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_420px] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
          >
            <div className="mb-5 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.26em] text-[var(--color-primary)]/70">
              <span className="h-px w-10 bg-[var(--color-secondary)]" />
              Why Fairfield exists
            </div>
            <h2 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              Not charity as performance.
              <br />
              <span className="text-[var(--color-accent)]">Charity as a serious public instrument.</span>
            </h2>
            <p className="mt-7 max-w-3xl text-lg leading-relaxed text-slate-600 md:text-xl">
              Fairfield operates where vulnerability becomes generational — and where the right combination of care,
              credibility, and coordination can change the trajectory. The work is intentionally human, but the platform is
              structured so partners, supporters, and institutions can clearly understand where value is created.
            </p>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {focusAreas.map((area, index) => {
                const Icon = area.icon;
                return (
                  <motion.div
                    key={area.title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="rounded-[1.75rem] border border-[var(--color-primary)]/10 bg-white/88 p-6 shadow-[0_18px_50px_-35px_rgba(15,23,42,0.35)]"
                  >
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-primary)] text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-semibold tracking-tight text-[var(--color-text-dark)]">{area.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">{area.description}</p>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link href="/about">
                <Button className="rounded-full bg-[var(--color-primary)] px-8 py-6 text-xs font-bold uppercase tracking-[0.24em] text-white hover:bg-[var(--color-primary-dark)]">
                  Read the full story
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/partnership" className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-primary)] transition-colors hover:text-[var(--color-accent)]">
                Explore partnership pathways
              </Link>
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="rounded-[2rem] border border-[var(--color-primary)]/10 bg-[#102746] p-7 text-white shadow-[0_30px_80px_-40px_rgba(15,23,42,0.8)]"
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--color-secondary)]/80">Positioning note</p>
            <h3 className="mt-4 text-3xl font-semibold leading-tight tracking-tight">Fairfield is becoming a stronger profile for both public and institutional audiences.</h3>
            <p className="mt-5 text-base leading-relaxed text-slate-300">
              That means better language, stronger proof architecture, and a presentation that can carry the weight of both
              community trust and high-level partnership conversations.
            </p>

            <div className="mt-8 overflow-hidden rounded-[1.5rem] border border-white/8 bg-white/6">
              <div className="aspect-[4/5] bg-[url('https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center" />
              <div className="space-y-4 p-6">
                <p className="text-lg font-medium leading-relaxed text-white">
                  “Our goal is not just to respond to need, but to build a structure people can trust, join, and grow with.”
                </p>
                <div>
                  <div className="font-semibold tracking-wide">Fairfield leadership vision</div>
                  <div className="mt-1 text-[11px] uppercase tracking-[0.24em] text-[var(--color-secondary)]/80">Founder-led • community-rooted • forward-facing</div>
                </div>
              </div>
            </div>

            <div className="mt-7 space-y-3">
              {trustSignals.map((signal) => (
                <div key={signal} className="flex items-start gap-3 rounded-2xl border border-white/8 bg-white/[0.04] px-4 py-3 text-sm text-slate-200">
                  <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-secondary)]" />
                  <span>{signal}</span>
                </div>
              ))}
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
