'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, DollarSign, HandHeart, MessageCircle, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const pathways = [
  {
    title: 'Give with confidence',
    description: 'Support programs with visible outcomes in communities that need structured, sustained action.',
    icon: DollarSign,
    href: '/contact',
    color: 'from-[var(--color-secondary)]/12 to-[var(--color-highlight)]/12',
    iconBg: 'bg-[var(--color-secondary)]/14',
    iconColor: 'text-[var(--color-secondary)]',
  },
  {
    title: 'Partner strategically',
    description: 'Bring your institution, network, or resources into a platform designed for credibility and collaboration.',
    icon: HandHeart,
    href: '/partnership',
    color: 'from-[var(--color-highlight)]/10 to-[var(--color-primary)]/8',
    iconBg: 'bg-[var(--color-highlight)]/14',
    iconColor: 'text-[var(--color-highlight)]',
  },
  {
    title: 'Amplify the mission',
    description: 'Use your voice, platform, or media reach to bring Fairfield stories to new audiences.',
    icon: MessageCircle,
    href: '/elle-story',
    color: 'from-[var(--color-accent)]/10 to-[var(--color-secondary)]/8',
    iconBg: 'bg-[var(--color-accent)]/14',
    iconColor: 'text-[var(--color-accent)]',
  },
  {
    title: 'Join the movement',
    description: 'Volunteer time, expertise, or energy to help build the Fairfield platform on the ground.',
    icon: Users,
    href: '/volunteer',
    color: 'from-[var(--color-primary)]/12 to-[var(--color-accent)]/10',
    iconBg: 'bg-[var(--color-primary)]/14',
    iconColor: 'text-[var(--color-primary)]',
  },
];

export function MakeDifference() {
  return (
    <section className="relative overflow-hidden bg-[#f7f3ec] py-24">
      <div className="absolute -right-24 top-10 h-80 w-80 rounded-full bg-[var(--color-secondary)]/10 blur-3xl" />
      <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-[var(--color-highlight)]/12 blur-3xl" />

      <div className="container relative z-10">
        <div className="mb-14 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
          >
            <div className="mb-5 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.26em] text-[var(--color-primary)]/70">
              <span className="h-px w-10 bg-[var(--color-secondary)]" />
              Choose your entry point
            </div>
            <h2 className="text-4xl font-semibold tracking-tight text-[var(--color-text-dark)] md:text-6xl">
              Fairfield is designed for people who want to <span className="text-[var(--color-primary)]">do more than admire</span> the work.
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
              Whether you give, partner, amplify, or volunteer, your contribution becomes part of a platform that is
              shaping trust, visibility, and real outcomes on the ground.
            </p>
          </motion.div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {pathways.map((pathway, index) => {
            const Icon = pathway.icon;
            return (
              <Link key={pathway.title} href={pathway.href}>
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ delay: index * 0.08 }}
                  className="group relative h-full overflow-hidden rounded-[2rem] border border-[var(--color-primary)]/10 bg-white p-7 shadow-[0_20px_60px_-35px_rgba(15,23,42,0.35)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_80px_-35px_rgba(15,23,42,0.45)]"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${pathway.color} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />

                  <div className="relative z-10 flex h-full flex-col">
                    <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ${pathway.iconBg} ${pathway.iconColor} transition-transform duration-500 group-hover:scale-110`}>
                      <Icon className="h-6 w-6" />
                    </div>

                    <h3 className="mb-4 text-2xl font-semibold tracking-tight text-[var(--color-text-dark)]">{pathway.title}</h3>
                    <p className="mb-6 flex-1 text-sm leading-relaxed text-slate-600">{pathway.description}</p>

                    <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-primary)] transition-all duration-300 group-hover:gap-3">
                      Explore this path
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          className="mt-12 text-center"
        >
          <p className="text-base text-slate-500">
            Not sure where to start?{' '}
            <Link href="/contact" className="font-semibold text-[var(--color-primary)] transition-colors hover:text-[var(--color-accent)]">
              Talk to the Fairfield team
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
