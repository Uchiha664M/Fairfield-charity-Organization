'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Calendar, Clock, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const events = [
  {
    day: '03',
    month: 'MARCH',
    image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=800&q=80',
    title: 'Women of Wealth Gala',
    dateStr: 'THURSDAY, MARCH 3RD, 2026 | 6:00PM - 10:00PM',
    description:
      'Launching our nationwide micro-grant initiative. Join Miss Uganda Elle Trivia as we fund 100 female-led agri-businesses.',
    location: 'Kampala Serena Hotel',
  },
  {
    day: '19',
    month: 'MARCH',
    image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=800&q=80',
    title: 'The 20% Challenge Rally',
    dateStr: 'SATURDAY, MARCH 19TH, 2026 | 8:00AM - 12:00PM',
    description:
      'A peaceful assembly demanding the national education budget hit 20% for universal pre-primary funding.',
    location: 'Parliamentary Avenue, Kampala',
  },
  {
    day: '02',
    month: 'APRIL',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80',
    title: 'Musomesa Hackathon',
    dateStr: 'SATURDAY, APRIL 2ND, 2026 | 10:00AM - 4:00PM',
    description:
      'Bringing together top developers to build new AI modules for our remote education platform. Code for a cause.',
    location: 'Innovation Village',
  },
];

export function UpcomingEvents() {
  return (
    <section className="relative overflow-hidden bg-[#0F0418] py-24 text-white">
      <div className="absolute inset-0 pointer-events-none opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay" />

      <div className="container relative z-10">
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="mb-4 block text-[11px] font-bold uppercase tracking-[0.26em] text-[var(--color-secondary)]">
                Mobilize with us
              </span>
              <h2 className="mb-6 text-4xl font-semibold text-white md:text-5xl">The FrontLINES</h2>
              <p className="text-lg leading-relaxed text-slate-300">
                Change doesn't happen in boardrooms; it happens in the streets, the fields, and the code. Join our
                upcoming rallies, hackathons, and galas.
              </p>
            </motion.div>
          </div>
          <Button
            variant="outline"
            className="hidden rounded-full border-white bg-transparent px-8 py-6 text-lg text-white transition-all hover:bg-white hover:text-[var(--color-primary)] md:flex"
          >
            View all events <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        <div className="relative w-full overflow-hidden">
          <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-24 bg-gradient-to-r from-[#0F0418] to-transparent" />
          <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-24 bg-gradient-to-l from-[#0F0418] to-transparent" />

          <div className="flex w-max gap-8 animate-scroll hover:cursor-pointer">
            {[...events, ...events, ...events].map((event, index) => (
              <Link
                key={index}
                href="/projects"
                className="block w-[380px] shrink-0 transform transition-transform hover:scale-[1.02]"
              >
                <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white p-0 transition-all duration-300 hover:shadow-2xl">
                  <div className="relative h-56 w-full shrink-0 overflow-hidden bg-slate-200">
                    <div className="absolute inset-0 bg-black/10 transition-colors duration-300 group-hover:bg-transparent" />
                    <img
                      src={event.image}
                      alt={event.title}
                      className="h-full w-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute right-4 top-4 rounded-xl bg-white/95 p-3 text-center shadow-lg backdrop-blur-sm">
                      <div className="text-xl font-bold leading-none text-[#D84315]">{event.day}</div>
                      <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500">{event.month}</div>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="mb-3 text-xl font-bold leading-tight text-[#1B3B36] transition-colors group-hover:text-[var(--color-secondary)]">
                      {event.title}
                    </h3>
                    <div className="mb-4 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#FF7043]">
                      <Clock className="h-3 w-3" />
                      {event.dateStr.split('|')[0]}
                    </div>
                    <p className="mb-6 flex-1 text-sm leading-relaxed text-slate-500">{event.description}</p>

                    <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-4">
                      <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1B3B36] transition-colors group-hover:text-[var(--color-secondary)]">
                        Read More <ArrowRight className="h-3 w-3" />
                      </span>
                      <span className="transform translate-x-2 rounded-full bg-[#1B3B36] px-3 py-1 text-[10px] text-white opacity-0 transition-opacity group-hover:translate-x-0 group-hover:opacity-100">
                        View Project
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
