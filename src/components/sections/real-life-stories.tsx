'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

const stories = [
  {
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=1200&q=80',
    title: 'From survivor to entrepreneur',
    name: 'Sarah N.',
    location: 'Masaka District',
    quote:
      'Fairfield gave me more than a coffee seedling; they gave me my dignity back. Today, I employ three other women in my village.',
    category: 'Economic resilience',
    color: 'var(--color-secondary)',
  },
  {
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80',
    title: 'A future reclaimed',
    name: 'Moses K.',
    location: 'Kampala',
    quote:
      'I was lost in the streets until Musomesa Academy taught me how to code. Now I build websites for local businesses.',
    category: 'Education',
    color: 'var(--color-highlight)',
  },
];

export function RealLifeStories() {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-[#102746] to-transparent" />

      <div className="container relative z-10">
        <div className="mb-14 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <div className="mb-4 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.26em] text-[var(--color-primary)]">
              <span className="h-px w-10 bg-[var(--color-secondary)]" />
              Real-life proof
            </div>
            <h2 className="text-4xl font-semibold leading-tight tracking-tight text-[var(--color-text-dark)] md:text-6xl">
              Restoring dignity,
              <br />
              <span className="text-[var(--color-accent)]">one life at a time</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="hidden md:block"
          >
            <Link href="/campaigns">
              <Button
                variant="outline"
                className="rounded-full border-[var(--color-primary)]/20 bg-transparent px-6 text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white"
              >
                All stories
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {stories.map((story, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="group cursor-pointer overflow-hidden rounded-[2rem] bg-white shadow-[0_20px_60px_-15px_rgba(15,23,42,0.15)] transition-all duration-500 hover:shadow-[0_30px_80px_-15px_rgba(15,23,42,0.2)]"
            >
              <div className="relative h-64 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-108"
                  style={{ backgroundImage: `url(${story.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                <div
                  className="absolute left-5 top-5 rounded-full px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white"
                  style={{ background: story.color }}
                >
                  {story.category}
                </div>

                <div className="absolute bottom-5 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                  <Quote className="h-5 w-5 text-white" />
                </div>
              </div>

              <div className="p-8">
                <h3 className="mb-4 text-2xl font-semibold tracking-tight text-[var(--color-text-dark)] transition-colors group-hover:text-[var(--color-primary)]">
                  {story.title}
                </h3>
                <p
                  className="mb-6 border-l-2 pl-4 italic leading-relaxed text-slate-600"
                  style={{ borderColor: story.color }}
                >
                  "{story.quote}"
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-0.5 w-8 rounded-full" style={{ background: story.color }} />
                    <div>
                      <div className="text-sm font-bold text-[var(--color-text-dark)]">{story.name}</div>
                      <div className="text-[10px] uppercase tracking-wider text-slate-400">{story.location}</div>
                    </div>
                  </div>
                  <motion.div
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-100 transition-all group-hover:border-transparent"
                    whileHover={{ scale: 1.1 }}
                  >
                    <ArrowRight className="h-4 w-4 text-slate-300 transition-colors group-hover:text-[var(--color-secondary)]" />
                  </motion.div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link href="/campaigns">
            <Button variant="outline" className="rounded-full border-[var(--color-text-dark)] px-8 text-[var(--color-text-dark)]">
              Read all stories
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
