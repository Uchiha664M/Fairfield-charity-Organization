'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, HandHeart, GraduationCap, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const options = [
    {
        icon: HandHeart,
        title: 'Become a Volunteer',
        subtitle: 'Join the Team',
        description: 'Offer your time and skills to mentor youth, support outreach programs, and directly touch lives in Ugandan communities.',
        cta: 'Register to Volunteer',
        href: '/volunteer',
        color: '#2EC4B6',
        bg: 'bg-[#2EC4B6]',
    },
    {
        icon: Heart,
        title: 'Make a Donation',
        subtitle: 'Support Our Projects',
        description: 'Your contribution directly funds life-saving medical supplies, fertility health education, and women\'s economic empowerment.',
        cta: 'Donate Now',
        href: '/contact',
        color: '#FF9F1C',
        bg: 'bg-[#FF9F1C]',
    },
    {
        icon: GraduationCap,
        title: 'Give a Scholarship',
        subtitle: 'Sponsor a Student',
        description: 'Provide a bright future for a child by covering school fees and scholastic materials through the Musomesa Academy.',
        cta: 'Sponsor a Child',
        href: '/contact',
        color: '#E71D36',
        bg: 'bg-[#E71D36]',
    }
];

export function InvolvementOptions() {
    const [selected, setSelected] = useState<number | null>(1);

    return (
        <section className="py-28 bg-[#F8F7F6] relative overflow-hidden">
            {/* Subtle background blobs */}
            <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-[var(--color-secondary)]/8 blur-3xl pointer-events-none" />

            <div className="container">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="w-10 h-px bg-[var(--color-secondary)]" />
                        <span className="text-[var(--color-secondary)] font-bold tracking-[0.2em] text-[10px] uppercase">
                            Ways to Help
                        </span>
                        <div className="w-10 h-px bg-[var(--color-secondary)]" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-[var(--color-text-dark)] leading-tight">
                        How You Can Make<br />a Difference
                    </h2>
                </motion.div>

                {/* Options */}
                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-14">
                    {options.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            onClick={() => setSelected(selected === idx ? null : idx)}
                            className="flex flex-col items-center group cursor-pointer"
                        >
                            {/* Animated icon circle */}
                            <motion.div
                                className="relative w-52 h-52 rounded-full flex items-center justify-center mb-8 transition-all duration-500"
                                animate={{
                                    boxShadow: selected === idx
                                        ? `0 20px 60px -10px ${item.color}60`
                                        : '0 4px 20px -4px rgba(0,0,0,0.06)',
                                }}
                                style={{
                                    background: selected === idx ? item.color : 'white',
                                    border: selected === idx ? 'none' : `2px solid #F0F0F0`,
                                }}
                                whileHover={{ scale: 1.05, y: -6 }}
                                whileTap={{ scale: 0.96 }}
                            >
                                {/* Pulse ring when selected */}
                                {selected === idx && (
                                    <motion.div
                                        className="absolute inset-0 rounded-full"
                                        style={{ background: item.color }}
                                        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0, 0.3] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    />
                                )}
                                <item.icon
                                    className="w-20 h-20 transition-all duration-300 stroke-[1.2]"
                                    style={{ color: selected === idx ? 'white' : item.color }}
                                />
                                {/* Selected indicator */}
                                {selected === idx && (
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-white flex items-center justify-center shadow-lg"
                                    >
                                        <div className="w-3 h-3 rounded-full" style={{ background: item.color }} />
                                    </motion.div>
                                )}
                            </motion.div>

                            {/* Text */}
                            <h3 className="text-xl font-bold font-serif text-[var(--color-text-dark)] mb-2 text-center">{item.title}</h3>
                            <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: item.color }}>
                                — {item.subtitle}
                            </p>

                            {/* Expandable description */}
                            <AnimatePresence>
                                {selected === idx && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0, y: -10 }}
                                        animate={{ opacity: 1, height: 'auto', y: 0 }}
                                        exit={{ opacity: 0, height: 0, y: -10 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden text-center"
                                    >
                                        <p className="text-gray-500 text-sm max-w-[260px] leading-relaxed mb-5">
                                            {item.description}
                                        </p>
                                        <Link href={item.href}>
                                            <motion.div
                                                className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest py-2 px-5 rounded-full text-white"
                                                style={{ background: item.color }}
                                                whileHover={{ scale: 1.05 }}
                                            >
                                                {item.cta} <ArrowRight className="w-3 h-3" />
                                            </motion.div>
                                        </Link>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col sm:flex-row justify-center gap-4 mt-8"
                >
                    <Link href="/contact">
                        <Button className="bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-dark)] text-white px-14 py-6 rounded-full text-xs font-bold tracking-[0.18em] uppercase shadow-[0_10px_30px_-5px_rgba(255,159,28,0.4)] hover:shadow-[0_15px_40px_-5px_rgba(255,159,28,0.5)] hover:-translate-y-1 transition-all">
                            Donate Now
                        </Button>
                    </Link>
                    <Link href="/volunteer">
                        <Button variant="outline" className="border-gray-200 hover:border-[var(--color-secondary)] hover:text-[var(--color-secondary)] px-14 py-6 rounded-full text-xs font-bold tracking-[0.18em] uppercase hover:bg-white transition-all bg-white shadow-sm">
                            Register as Volunteer
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
