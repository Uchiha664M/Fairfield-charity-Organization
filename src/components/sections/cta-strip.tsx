'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { BriefcaseBusiness, HandHeart, Megaphone } from 'lucide-react';

const pathways = [
  {
    label: 'Give with confidence',
    desc: 'Support direct, visible work in communities.',
    href: '/contact',
    icon: HandHeart,
  },
  {
    label: 'Build a partnership',
    desc: 'Bring resources, networks, or institutional reach.',
    href: '/partnership',
    icon: BriefcaseBusiness,
  },
  {
    label: 'Amplify the mission',
    desc: 'Use your audience, platform, or media voice.',
    href: '/elle-story',
    icon: Megaphone,
  },
];

export function CallToActionStrip() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#102746_0%,#17375e_50%,#0e223d_100%)] py-16 text-white">
      <div className="absolute -left-24 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-[var(--color-highlight)]/12 blur-3xl" />
      <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-[var(--color-secondary)]/10 blur-3xl" />

      <div className="container relative z-10">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.26em] text-[var(--color-secondary)]">Choose your role in the story</p>
            <h2 className="text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
              Fairfield is designed for people who want to do more than admire good work.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-200 md:text-lg">
              Whether you give, partner, or amplify, your contribution becomes part of a platform that is shaping trust,
              visibility, and real outcomes on the ground.
            </p>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-3">
            {pathways.map((pathway, index) => {
              const Icon = pathway.icon;
              return (
                <Link key={pathway.label} href={pathway.href}>
                  <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    whileHover={{ y: -6 }}
                    className="group h-full rounded-[1.75rem] border border-white/12 bg-white/10 p-6 backdrop-blur-xl transition-all duration-300 hover:border-white/25 hover:bg-white/14"
                  >
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/12 text-[var(--color-secondary)]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold tracking-tight text-white">{pathway.label}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/70">{pathway.desc}</p>
                    <span className="mt-6 inline-flex items-center text-[11px] font-semibold uppercase tracking-[0.24em] text-white/55 transition-colors group-hover:text-[var(--color-secondary)]">
                      Enter here
                    </span>
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
