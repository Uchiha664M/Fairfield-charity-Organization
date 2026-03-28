'use client';

import { motion } from 'framer-motion';
import { Users, UserCheck } from 'lucide-react';

const directors = [
  {
    name: 'Omar Mehri',
    role: 'Chairman',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Layla Samuel',
    role: 'Executive Director',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Draper Timothy',
    role: 'Finance Director',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Mariam Shah',
    role: 'Operations Lead',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80',
  },
];

const volunteers = [
  {
    name: 'Sarah Jenkins',
    role: 'Community Outreach',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'David Chen',
    role: 'Event Coordinator',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Amara Okafor',
    role: 'Education Mentor',
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'James Wilson',
    role: 'Logistics',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
  },
];

export function TeamVolunteers() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#0e1a2e_0%,#1B3A5C_100%)] py-28">
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-[var(--color-highlight)]/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[var(--color-secondary)]/10 blur-3xl" />

      <div className="container relative z-10">
        {/* Board of Directors */}
        <div className="mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-4 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.26em] text-[var(--color-secondary)]">
              <UserCheck className="h-4 w-4" />
              Our leadership
            </div>
            <h2 className="mb-6 text-4xl font-semibold text-white md:text-5xl">Board of Directors</h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-300">
              Guiding Fairfield's mission with integrity, vision, and a commitment to lasting change.
            </p>
          </motion.div>
        </div>

        <div className="mb-32 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {directors.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="group relative"
            >
              <div className="absolute -bottom-4 -right-4 left-4 top-4 -z-10 rounded-[2rem] bg-[var(--color-accent)]/70 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2" />

              <div className="relative overflow-hidden rounded-[2rem] bg-slate-800 shadow-2xl">
                <div className="relative h-80">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:scale-110 group-hover:grayscale-0"
                  />

                  <div className="absolute bottom-0 left-0 right-0 z-20 p-6">
                    <h3 className="mb-1 text-xl font-bold text-white">{member.name}</h3>
                    <p className="text-sm font-bold uppercase tracking-wider text-[var(--color-secondary)]">
                      {member.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Volunteers */}
        <div className="mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-4 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.26em] text-[var(--color-highlight)]">
              <Users className="h-4 w-4" />
              The heart of our work
            </div>
            <h2 className="mb-6 text-4xl font-semibold text-white md:text-5xl">Dedicated Volunteers</h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-300">
              Selfless individuals giving their time and talent to uplift communities.
            </p>
          </motion.div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {volunteers.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="group relative"
            >
              <div className="absolute -bottom-4 -right-4 left-4 top-4 -z-10 rounded-[2rem] bg-[var(--color-highlight)]/70 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2" />

              <div className="relative overflow-hidden rounded-[2rem] bg-slate-800 shadow-2xl">
                <div className="relative h-80">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:scale-110 group-hover:grayscale-0"
                  />

                  <div className="absolute bottom-0 left-0 right-0 z-20 p-6">
                    <h3 className="mb-1 text-xl font-bold text-white">{member.name}</h3>
                    <p className="text-sm font-bold uppercase tracking-wider text-[var(--color-secondary)]">
                      {member.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
