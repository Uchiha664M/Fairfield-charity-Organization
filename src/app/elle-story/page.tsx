'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Crown, ExternalLink, Heart, Instagram, Map, Megaphone, Plane, Sparkles, Sprout } from 'lucide-react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { InteractiveMap } from '@/components/elle-story/interactive-map';

const sections = [
  {
    id: 'hero',
    title: 'A girl, a platform, and a wider stage.',
    content:
      'Elle Trivia Muhoza’s story is no longer just about a crown. It is about how personal discipline, public visibility, and purpose-led advocacy can strengthen a social mission. Tap the map points to move through her story.',
    icon: Map,
    color: 'from-[#220b33] to-[#090f1c]',
  },
  {
    id: 'roots',
    title: 'The roots: service before spotlight',
    subtitle: 'Bukomansimbi District',
    content:
      'Before recognition came responsibility. The discipline of rural life, the work ethic of family, and the closeness of community built a service instinct that now shapes how Elle speaks about dignity, girls, and opportunity.',
    icon: Sprout,
    color: 'from-[#4b1f14] to-[#1f0b0d]',
  },
  {
    id: 'wings',
    title: 'The wings: precision and courage',
    subtitle: 'Soroti Flying School',
    content:
      'Flight training sharpened more than ambition. It built calm under pressure, procedural discipline, and a practical understanding that care must also be organized. That mindset now informs the way Elle frames advocacy through Elle Cares.',
    icon: Plane,
    color: 'from-[#0b4161] to-[#07111c]',
  },
  {
    id: 'crown',
    title: 'The crown: visibility becomes leverage',
    subtitle: 'Miss Uganda 2025',
    content:
      'When Elle was crowned Miss Uganda, the platform changed. Her voice could now travel further, carry more weight, and open more doors — not for self-display, but for causes that deserve sustained public attention.',
    icon: Crown,
    color: 'from-[#5a2e08] to-[#1b0e08]',
  },
  {
    id: 'mission',
    title: 'The mission: Fairfield meets Elle Cares',
    subtitle: 'Fairfield Charity Organization',
    content:
      'As Fairfield Global Ambassador, Elle helps connect advocacy with institutional storytelling. Elle Cares gives the message public energy; Fairfield gives it community grounding, program direction, and a structure partners can trust.',
    icon: Heart,
    color: 'from-[#0d4f4a] to-[#07141a]',
  },
] as const;

const proof = [
  { value: '22K', label: 'Instagram followers' },
  { value: '295', label: 'Public posts' },
  { value: '2025', label: 'Miss Uganda year' },
];

export default function ElleStoryPage() {
  const [activeSection, setActiveSection] = useState<(typeof sections)[number]['id']>('hero');

  const activeGradient = sections.find((s) => s.id === activeSection)?.color || sections[0].color;
  const activeData = sections.find((s) => s.id === activeSection) || sections[0];

  return (
    <main className={`min-h-screen bg-gradient-to-br ${activeGradient} text-white transition-colors duration-1000`}>
      <Header />

      <section className="container pt-32">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_380px] lg:items-start">
          <div>
            <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/8 px-4 py-2 backdrop-blur-md">
              <Sparkles className="h-4 w-4 text-[var(--color-secondary)]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/78">Elle Story • Fairfield Platform • Miss Uganda</span>
            </div>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.04em] text-white md:text-7xl">
              The story behind the crown — and what it now makes possible.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-200 md:text-xl">
              This page tracks how Elle Trivia Muhoza’s personal path evolved into a public platform that now supports advocacy,
              Fairfield storytelling, and the wider language of <span className="font-semibold text-white">Elle Cares</span>.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.08] p-6 backdrop-blur-2xl">
            <p className="text-[10px] uppercase tracking-[0.24em] text-[var(--color-secondary)]">Public profile snapshot</p>
            <div className="mt-5 grid grid-cols-3 gap-3">
              {proof.map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/8 bg-white/[0.04] p-4 text-center">
                  <div className="text-2xl font-semibold tracking-tight text-white">{item.value}</div>
                  <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-white/45">{item.label}</div>
                </div>
              ))}
            </div>
            <a
              href="https://www.instagram.com/muhozatriviaelle/"
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white/75 transition-colors hover:text-white"
            >
              <Instagram className="h-4 w-4" />
              Visit @muhozatriviaelle
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="container flex flex-col gap-8 py-12 lg:flex-row lg:gap-16 lg:py-14">
        <div className="relative z-10 h-[48vh] w-full lg:h-[72vh] lg:w-1/2">
          <InteractiveMap
            currentSection={activeSection}
            onSectionSelect={(section) => setActiveSection(section as (typeof sections)[number]['id'])}
          />
          {activeSection === 'hero' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute -bottom-8 left-0 right-0 text-center lg:hidden">
              <span className="text-sm text-white/60 animate-pulse">Tap map points to explore the story</span>
            </motion.div>
          )}
        </div>

        <div className="flex w-full flex-col justify-center lg:w-1/2">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.45 }}
              className="relative overflow-hidden rounded-[2.5rem] border border-white/15 bg-white/[0.10] p-8 shadow-2xl backdrop-blur-2xl md:p-12"
            >
              <activeData.icon className="absolute -bottom-8 -right-8 h-56 w-56 rotate-[-16deg] text-white/5" />

              <div className="relative z-10 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20 text-white shadow-inner">
                  <activeData.icon className="h-7 w-7" />
                </div>
                {'subtitle' in activeData && activeData.subtitle && (
                  <span className="rounded-full bg-black/20 px-3 py-1 text-sm font-bold uppercase tracking-widest text-[var(--color-secondary)]">
                    {activeData.subtitle}
                  </span>
                )}
              </div>

              <h2 className="relative z-10 mt-7 text-3xl font-semibold leading-tight text-white md:text-5xl">{activeData.title}</h2>
              <p className="relative z-10 mt-6 text-lg font-light leading-relaxed text-slate-200 md:text-xl">{activeData.content}</p>

              <div className="relative z-10 mt-8 flex flex-wrap gap-3">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] transition-all ${activeSection === section.id ? 'bg-white text-[#08111d]' : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'}`}
                    aria-label={`Go to ${section.title}`}
                  >
                    {section.id}
                  </button>
                ))}
              </div>

              <div className="relative z-10 mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center">
                <Link href="/miss-world">
                  <Button className="rounded-full bg-[var(--color-secondary)] px-8 py-5 text-xs font-bold uppercase tracking-[0.24em] text-[var(--color-primary)] hover:bg-[#ffd075]">
                    View full Miss Uganda profile
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <div className="inline-flex items-center gap-2 text-sm text-white/65">
                  <Megaphone className="h-4 w-4 text-[var(--color-secondary)]" />
                  Elle Cares now amplifies Fairfield’s public-facing mission.
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <section className="container pb-20">
        <div className="grid gap-6 rounded-[2.5rem] border border-white/10 bg-white/[0.06] p-8 backdrop-blur-2xl lg:grid-cols-3 lg:p-10">
          <div>
            <p className="text-[10px] uppercase tracking-[0.24em] text-[var(--color-secondary)]">What changed</p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">Visibility now has direction.</h3>
          </div>
          <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-5">
            <h4 className="text-lg font-semibold text-white">Before</h4>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">A compelling personal story and title, but without a fully unified public narrative across Fairfield’s digital presence.</p>
          </div>
          <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-5">
            <h4 className="text-lg font-semibold text-white">Now</h4>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">A connected profile where Miss Uganda visibility, Elle Cares advocacy, and Fairfield’s institutional story reinforce one another.</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
