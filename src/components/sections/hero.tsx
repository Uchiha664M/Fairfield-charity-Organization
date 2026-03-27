'use client';

import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, ChevronDown, ShieldCheck, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const proofPoints = [
  { value: '23', label: 'districts engaged' },
  { value: '12K+', label: 'lives touched' },
  { value: '100%', label: 'program-directed giving' },
];

const pillars = [
  {
    num: '01',
    title: 'Recovery with dignity',
    subtitle: 'Mental health & household healing',
    color: 'text-[var(--color-highlight)]',
  },
  {
    num: '02',
    title: 'Girls who stay in school',
    subtitle: 'Education access & Musomesa',
    color: 'text-[var(--color-secondary)]',
  },
  {
    num: '03',
    title: 'Households that can grow',
    subtitle: 'Enterprise, skills & resilience',
    color: 'text-[var(--color-accent)]',
  },
];

export function Hero() {
  const [orbs, setOrbs] = useState<{ id: number; left: string; top: string; delay: number; duration: number }[]>([]);

  useEffect(() => {
    setOrbs(
      Array.from({ length: 7 }).map((_, index) => ({
        id: index,
        left: `${10 + Math.random() * 80}%`,
        top: `${10 + Math.random() * 75}%`,
        delay: Math.random() * 3,
        duration: 7 + Math.random() * 5,
      }))
    );
  }, []);

  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 1000], [0, 220]);
  const cardY = useTransform(scrollY, [0, 700], [0, -50]);

  return (
    <section className="relative isolate flex min-h-screen items-center overflow-hidden bg-[#091523] pt-24 text-white">
      <motion.div className="absolute inset-0 z-0" style={{ y: yParallax }}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1800&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(7,17,30,0.93)_10%,rgba(7,17,30,0.78)_45%,rgba(15,36,64,0.58)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,166,35,0.16),transparent_25%),radial-gradient(circle_at_bottom_left,rgba(43,188,179,0.18),transparent_35%),radial-gradient(circle_at_center,rgba(232,93,58,0.12),transparent_30%)]" />
      </motion.div>

      <div className="absolute inset-0 z-[1] opacity-[0.16]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)', backgroundSize: '120px 120px' }} />
      <div className="absolute inset-y-0 left-[8%] z-[1] hidden w-px bg-gradient-to-b from-transparent via-white/20 to-transparent lg:block" />
      <div className="absolute inset-y-0 right-[10%] z-[1] hidden w-px bg-gradient-to-b from-transparent via-white/10 to-transparent lg:block" />

      <div className="pointer-events-none absolute inset-0 z-[2] overflow-hidden">
        {orbs.map((orb) => (
          <motion.div
            key={orb.id}
            className="absolute h-40 w-40 rounded-full bg-white/[0.06] blur-3xl"
            style={{ left: orb.left, top: orb.top }}
            animate={{ y: [0, -22, 0], opacity: [0.35, 0.8, 0.35], scale: [1, 1.08, 1] }}
            transition={{ duration: orb.duration, repeat: Infinity, ease: 'easeInOut', delay: orb.delay }}
          />
        ))}
      </div>

      <div className="container relative z-10 py-16 lg:py-24">
        <div className="grid items-end gap-12 lg:grid-cols-[minmax(0,1.25fr)_420px]">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.18 } },
            }}
            className="max-w-4xl"
          >
            <motion.div
              variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
              className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/8 px-4 py-2 backdrop-blur-md"
            >
              <Sparkles className="h-4 w-4 text-[var(--color-secondary)]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/78">
                Fairfield Charity Organization • Uganda • Global Advocates
              </span>
            </motion.div>

            <motion.h1
              variants={{ hidden: { y: 26, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
              className="max-w-5xl text-5xl font-semibold leading-[0.92] tracking-[-0.04em] text-white sm:text-6xl md:text-7xl lg:text-[6.2rem]"
            >
              Dignity first.
              <br />
              <span className="text-[var(--color-secondary)]">Systems that let hope stay.</span>
            </motion.h1>

            <motion.p
              variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
              className="mt-8 max-w-3xl border-l border-white/20 pl-6 text-lg font-light leading-relaxed text-slate-200 md:text-2xl"
            >
              Led by <span className="font-medium text-white">Elle Trivia Muhoza</span>, Fairfield turns compassion into structured action —
              combining mental health recovery, girls’ education, and economic resilience so communities can move from crisis to continuity.
            </motion.p>

            <motion.div
              variants={{ hidden: { y: 18, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
              className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <Link href="/partnership">
                <Button className="group rounded-full border border-[var(--color-secondary)] bg-[var(--color-secondary)] px-8 py-6 text-xs font-bold uppercase tracking-[0.26em] text-[var(--color-primary)] shadow-[0_18px_45px_-20px_rgba(245,166,35,0.95)] transition-all duration-300 hover:translate-y-[-2px] hover:bg-[#ffd075]">
                  Partner with Fairfield
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/about" className="group inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.22em] text-white/75 transition-colors hover:text-white">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/6 transition-colors group-hover:border-[var(--color-secondary)]">
                  <ChevronDown className="h-4 w-4" />
                </span>
                View the institutional story
              </Link>
            </motion.div>

            <motion.div
              variants={{ hidden: { y: 18, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
              className="mt-12 flex flex-wrap gap-4"
            >
              {proofPoints.map((point) => (
                <div key={point.label} className="rounded-2xl border border-white/12 bg-white/7 px-5 py-4 backdrop-blur-md">
                  <div className="text-2xl font-semibold tracking-tight text-white">{point.value}</div>
                  <div className="mt-1 text-[11px] uppercase tracking-[0.24em] text-white/58">{point.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            style={{ y: cardY }}
            className="relative ml-auto w-full max-w-[420px]"
          >
            <div className="rounded-[2rem] border border-white/12 bg-white/10 p-6 shadow-[0_30px_90px_-30px_rgba(0,0,0,0.7)] backdrop-blur-2xl">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.28em] text-white/50">Field note</p>
                  <h2 className="mt-2 text-2xl font-semibold text-white">A nonprofit with profile, proof, and public voice.</h2>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-[var(--color-primary)]/60 text-[var(--color-secondary)]">
                  <ShieldCheck className="h-5 w-5" />
                </div>
              </div>

              <div className="space-y-4 rounded-[1.5rem] border border-white/8 bg-[#08111d]/55 p-5">
                <div className="flex items-start justify-between gap-4 border-b border-white/8 pb-4">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.24em] text-white/45">Now framing</p>
                    <p className="mt-2 text-base text-white/90">Fairfield as a movement platform for community transformation and institutional partnership.</p>
                  </div>
                  <span className="rounded-full bg-[var(--color-secondary)]/16 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-secondary)]">
                    Active
                  </span>
                </div>

                <div className="grid gap-3 text-sm text-slate-200">
                  <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                    <p className="text-[10px] uppercase tracking-[0.24em] text-white/45">Core narrative</p>
                    <p className="mt-2 leading-relaxed">Fairfield doesn’t just respond to need. It builds the conditions for girls, mothers, and households to move forward with dignity.</p>
                  </div>
                  <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                    <p className="text-[10px] uppercase tracking-[0.24em] text-white/45">Best used for</p>
                    <p className="mt-2 leading-relaxed">Partner introductions, profile presentations, media positioning, donor trust, and public storytelling.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10">
        <div className="border-t border-white/10 bg-[#08111d]/80 backdrop-blur-2xl">
          <div className="container">
            <div className="grid grid-cols-1 divide-y divide-white/10 md:grid-cols-3 md:divide-x md:divide-y-0">
              {pillars.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.85 + idx * 0.1 }}
                  className="group px-6 py-6 transition-colors duration-300 hover:bg-white/[0.03] md:px-8"
                >
                  <div className="flex items-start gap-5">
                    <span className={`shrink-0 text-5xl font-semibold tracking-tight opacity-25 transition-all duration-300 group-hover:opacity-100 ${item.color}`}>
                      {item.num}
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold tracking-tight text-white">{item.title}</h3>
                      <p className="mt-1 text-[11px] uppercase tracking-[0.24em] text-white/50">{item.subtitle}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
