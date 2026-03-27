'use client';

import { motion } from 'framer-motion';
import { Heart, Coins, Users, Globe, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { GlowCard } from '@/components/ui/glow-card';

const values = [
    {
        icon: Heart,
        accent: '#F5A623',
        title: 'Unapologetic Action',
        description: 'We prioritize tangible results over rhetoric. Empathy without action is an insult to those waiting for help.',
        link: 'See Our Impact',
        href: '/campaigns',
    },
    {
        icon: Coins,
        accent: '#2BBCB3',
        title: 'Direct Deployment',
        description: '100% of public donations secure actual resources — from hospital bills to textbooks — bypassing wasteful bureaucracy.',
        link: 'Back the Mission',
        href: '/contact',
    },
    {
        icon: Users,
        accent: '#1B3A5C',
        title: 'Community Ownership',
        description: 'We do not impose; we equip. Every initiative is led by local champions to ensure lasting, generational change.',
        link: 'Register Today',
        href: '/volunteer',
    },
    {
        icon: Globe,
        accent: '#E85D3A',
        title: 'Systematic Change',
        description: 'Charity is a temporary bandage. We fight at the policy level for a 20% education budget to secure the future permanently.',
        link: 'Our Vision',
        href: '/projects',
    }
];

export function CoreValues() {
    return (
        <section className="py-32 bg-slate-50/50 relative overflow-hidden">
            {/* Elegant Background Blurs */}
            <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#F5A623]/5 blur-[100px] pointer-events-none" />
            <div className="absolute top-1/2 -left-40 w-96 h-96 rounded-full bg-[#2BBCB3]/5 blur-[100px] pointer-events-none" />

            <div className="container">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col lg:flex-row items-start justify-between gap-8 mb-20"
                >
                    <div>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-px bg-[#F5A623]" />
                            <span className="text-[#F5A623] font-bold tracking-[0.25em] text-xs uppercase">
                                What We Stand For
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-serif font-bold text-[var(--color-primary)] leading-[1.1] tracking-tight">
                            Our Pillars<br />of Change
                        </h2>
                    </div>
                    <p className="text-slate-500 max-w-sm leading-relaxed mt-4 lg:mt-8 text-lg font-light">
                        Four uncompromising principles that guide every decision we make,
                        every shilling we spend, and every life we touch.
                    </p>
                </motion.div>

                {/* Value Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {values.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <GlowCard accent={item.accent} className="group relative border border-slate-100 rounded-[2rem] p-10 hover:border-transparent hover:shadow-[0_30px_60px_-15px_rgba(15,23,42,0.08)] hover:-translate-y-2 transition-all duration-500 overflow-hidden bg-white/95 backdrop-blur-md flex flex-col z-10 h-full">
                                {/* Accent Top Bar */}
                                <div
                                    className="absolute left-0 top-0 right-0 h-1 scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                                    style={{ background: item.accent, transformOrigin: 'left' }}
                                />

                                {/* Icon */}
                                <div
                                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                                    style={{ background: `${item.accent}14`, color: item.accent }}
                                >
                                    <item.icon className="w-7 h-7" strokeWidth={1.5} />
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold font-serif text-[var(--color-text-dark)] mb-3">
                                    {item.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed flex-grow mb-8">
                                    {item.description}
                                </p>

                                {/* CTA Link */}
                                <Link
                                    href={item.href}
                                    className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em] transition-all duration-300 mt-auto"
                                    style={{ color: item.accent }}
                                >
                                    <span>{item.link}</span>
                                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                </Link>
                            </GlowCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
