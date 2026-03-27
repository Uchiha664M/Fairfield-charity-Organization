'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, FileText, Megaphone, ShieldCheck } from 'lucide-react';

const tracks = [
  {
    title: 'Institutional Profile',
    eyebrow: 'For partners & funders',
    description:
      'Understand Fairfield as a disciplined operating partner with programs, proof points, and a clear theory of change.',
    href: '/about',
    accent: 'from-[var(--color-primary)]/12 to-[var(--color-highlight)]/12',
    icon: FileText,
  },
  {
    title: 'Miss Uganda Platform',
    eyebrow: 'For media & advocacy',
    description:
      'Explore how Elle Trivia Muhoza uses voice, platform, and public influence to bring social priorities into focus.',
    href: '/elle-story',
    accent: 'from-[var(--color-secondary)]/16 to-[var(--color-accent)]/10',
    icon: Megaphone,
  },
  {
    title: 'Strategic Partnerships',
    eyebrow: 'For coalition builders',
    description:
      'See how Fairfield works across philanthropy, institutions, and local implementation to scale what works.',
    href: '/partnership',
    accent: 'from-[var(--color-primary)]/10 to-[var(--color-secondary)]/10',
    icon: ShieldCheck,
  },
];

export function ProfileBridge() {
  return (
    <section className="relative overflow-hidden bg-[#f6f3ee] py-20 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(43,188,179,0.10),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(232,93,58,0.10),transparent_32%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-primary)]/20 to-transparent" />

      <div className="container relative z-10">
        <div className="mb-12 max-w-3xl">
          <div className="mb-5 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.28em] text-[var(--color-primary)]/70">
            <span className="h-px w-10 bg-[var(--color-secondary)]" />
            Narrative architecture
          </div>
          <h2 className="text-4xl font-semibold tracking-tight text-[var(--color-text-dark)] md:text-6xl">
            Built to speak to the <span className="text-[var(--color-accent)]">community</span>, the{' '}
            <span className="text-[var(--color-primary)]">boardroom</span>, and the{' '}
            <span className="text-[var(--color-highlight)]">global stage</span>.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
            Fairfield is becoming more than a charity website. It is the public face of a movement, a founder-led platform,
            and a partnership-ready profile that can serve media, philanthropy, and institutional conversations.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {tracks.map((track, index) => {
            const Icon = track.icon;
            return (
              <motion.div
                key={track.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ delay: index * 0.08, duration: 0.55 }}
                className="group relative overflow-hidden rounded-[2rem] border border-[var(--color-primary)]/10 bg-white/80 p-8 shadow-[0_20px_70px_-35px_rgba(15,23,42,0.35)] backdrop-blur-sm"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${track.accent} opacity-80 transition-opacity duration-500 group-hover:opacity-100`} />
                <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: 'radial-gradient(circle, rgba(15,23,42,0.9) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

                <div className="relative z-10 flex h-full flex-col">
                  <div className="mb-8 flex items-center justify-between">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-slate-500">{track.eyebrow}</p>
                      <h3 className="mt-3 text-2xl font-semibold text-[var(--color-text-dark)]">{track.title}</h3>
                    </div>
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/70 bg-white/70 text-[var(--color-primary)] shadow-sm">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>

                  <p className="mb-8 flex-1 text-base leading-relaxed text-slate-600">{track.description}</p>

                  <Link
                    href={track.href}
                    className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-[var(--color-primary)] transition-all duration-300 group-hover:gap-3"
                  >
                    Explore this angle
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
