'use client';

import { motion } from 'framer-motion';
import { Droplets, Users, Activity, Shield, Play, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { GlowCard } from '@/components/ui/glow-card';

const differenceCards = [
    {
        icon: Droplets,
        title: 'Direct Impact',
        desc: '100% of public donations fund field projects, not overhead. We take radical transparency seriously.',
        accent: '#F5A623'
    },
    {
        icon: Users,
        title: 'Locals for Locals',
        desc: 'Every project is built, operated, and sustained by Ugandan communities — not outsiders parachuting in.',
        accent: '#2BBCB3'
    },
    {
        icon: Activity,
        title: 'Data-Driven',
        desc: 'We measure success in poverty reduction rates and school graduations, not just funds raised.',
        accent: '#1B3A5C'
    },
    {
        icon: Shield,
        title: 'Safe Havens',
        desc: 'Strict safeguarding protocols ensure the physical and emotional security of every woman and child we serve.',
        accent: '#E85D3A'
    }
];

export function MakeDifference() {
    return (
        <section className="py-28 bg-[#FAFAFA] overflow-hidden relative">
            {/* Subtle diagonal pattern */}
            <div
                className="absolute inset-0 opacity-[0.025]"
                style={{
                backgroundImage: 'repeating-linear-gradient(45deg, #1B3A5C 0, #1B3A5C 1px, transparent 0, transparent 50%)',
                    backgroundSize: '20px 20px'
                }}
            />

            <div className="container relative z-10">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <div className="w-10 h-px bg-[var(--color-secondary)]" />
                            <span className="text-[var(--color-secondary)] font-bold tracking-[0.2em] text-[10px] uppercase">
                                The Fair Field Difference
                            </span>
                            <div className="w-10 h-px bg-[var(--color-secondary)]" />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-[var(--color-primary)] mb-5 leading-tight">
                            Radical Transparency
                        </h2>
                        <p className="text-gray-500 leading-relaxed text-lg">
                            Your trust is our highest currency. We strip away the bureaucracy so your impact
                            hits the ground exactly where it is needed most.
                        </p>
                    </motion.div>
                </div>

                {/* 4 Feature Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
                    {differenceCards.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -12 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <GlowCard accent={item.accent} className="bg-white/95 backdrop-blur-sm p-8 rounded-3xl shadow-[0_8px_40px_-8px_rgba(0,0,0,0.06)] text-center group border border-gray-50 hover:border-transparent hover:shadow-[0_20px_60px_-10px_rgba(0,0,0,0.12)] transition-all duration-500 relative flex flex-col items-center h-full">
                                {/* Accent top line */}
                                <div
                                    className="absolute top-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                                    style={{ background: item.accent, transformOrigin: 'left' }}
                                />

                                <div
                                    className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-6 transition-all duration-400 group-hover:scale-110"
                                    style={{
                                        background: `${item.accent}14`,
                                        color: item.accent
                                    }}
                                >
                                    <item.icon className="w-8 h-8" strokeWidth={1.5} />
                                </div>
                                <h3 className="text-lg font-bold font-serif text-[var(--color-primary)] mb-3">{item.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                            </GlowCard>
                        </motion.div>
                    ))}
                </div>

                {/* Musomesa Promise - Split Layout */}
                <div className="flex flex-col lg:flex-row gap-20 items-center">

                    {/* Left: Layered Images */}
                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        className="relative shrink-0"
                    >
                        {/* Main Circular Image */}
                        <div className="relative w-[280px] h-[280px] md:w-[480px] md:h-[480px] rounded-full overflow-hidden border-8 border-white shadow-[0_30px_80px_-20px_rgba(27,59,95,0.3)] mx-auto lg:mx-0 z-10">
                            <img
                                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                                alt="Ugandan child education"
                                className="w-full h-full object-cover"
                            />
                            {/* Inner vignette */}
                            <div className="absolute inset-0 bg-radial from-transparent to-black/20" />
                        </div>

                        {/* Floating Small Circle 1 */}
                        <motion.div
                            className="absolute top-4 left-0 lg:-left-10 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-xl z-20 hidden md:block"
                            animate={{ y: [0, -8, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                        >
                            <img
                                src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
                                alt="Children learning"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>

                        {/* Floating Small Circle 2 */}
                        <motion.div
                            className="absolute bottom-8 right-0 lg:-right-6 w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-xl z-20 hidden md:block"
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                        >
                            <img
                                src="https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
                                alt="Community support"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>

                        {/* Decorative amber ring */}
                        <div className="absolute -inset-4 rounded-full border-2 border-dashed border-[var(--color-secondary)]/20 hidden md:block pointer-events-none" />

                        {/* Stat badge */}
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, type: 'spring' }}
                            className="absolute bottom-12 -left-4 bg-[var(--color-secondary)] text-white rounded-2xl px-5 py-3 shadow-lg z-30 hidden md:flex items-center gap-3"
                        >
                            <span className="text-3xl font-bold font-serif">83%</span>
                            <span className="text-xs font-bold max-w-[80px] leading-tight opacity-90">of children can't read by age 10</span>
                        </motion.div>
                    </motion.div>

                    {/* Right: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        className="text-center lg:text-left flex-1 min-w-0"
                    >
                        <div className="flex items-center gap-3 mb-5 justify-center lg:justify-start">
                            <div className="w-8 h-px bg-[var(--color-secondary)]" />
                            <span className="text-[var(--color-secondary)] font-bold tracking-[0.2em] text-[10px] uppercase">
                                The Musomesa Promise
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-6xl font-serif font-bold text-[var(--color-primary)] mb-8 leading-tight">
                            The End of{' '}
                            <span className="relative inline-block">
                                Learning Poverty
                                <svg className="absolute w-full h-3 -bottom-1 left-0 text-[var(--color-secondary)]" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 8 Q 25 2 50 6 Q 75 10 100 4" stroke="currentColor" strokeWidth="3" fill="none" />
                                </svg>
                            </span>
                        </h2>

                        <p className="text-lg font-semibold text-[var(--color-primary)] mb-4">
                            83% of Ugandan children cannot read an age-appropriate text by age 10.
                            <span className="text-[var(--color-accent)]"> We refuse to accept this.</span>
                        </p>

                        <p className="text-gray-500 leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
                            The Musomesa platform bypasses crumbling infrastructure to deliver AI-powered,
                            world-class education directly to the most remote villages. We are not just
                            building schools; we are accelerating minds.
                        </p>

                        {/* Stats row */}
                        <div className="flex gap-8 mb-10 justify-center lg:justify-start">
                            {[
                                { num: '12K+', label: 'Students Enrolled' },
                                { num: '47', label: 'Villages Reached' },
                            ].map((stat, i) => (
                                <div key={i} className="text-center lg:text-left">
                                    <div className="text-3xl font-bold font-serif text-[var(--color-primary)]">{stat.num}</div>
                                    <div className="text-xs text-gray-400 uppercase tracking-wider mt-0.5">{stat.label}</div>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5">
                            <Link href="/initiatives">
                                <Button className="bg-[var(--color-primary)] text-white rounded-full px-10 py-6 uppercase tracking-[0.15em] text-xs font-bold hover:bg-[var(--color-primary-dark)] hover:shadow-[0_10px_30px_-5px_rgba(27,58,92,0.4)] transition-all group">
                                    <span>Learn More</span>
                                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                                </Button>
                            </Link>

                            <button className="flex items-center gap-3 font-bold text-[var(--color-primary)] uppercase text-xs tracking-widest hover:text-[var(--color-secondary)] transition-colors group">
                                <motion.div
                                    className="w-12 h-12 rounded-full bg-[var(--color-secondary)] flex items-center justify-center text-white group-hover:scale-110 transition-transform shadow-[0_8px_20px_-4px_rgba(255,159,28,0.5)]"
                                    whileHover={{ scale: 1.15 }}
                                >
                                    <Play className="w-4 h-4 ml-1 fill-current" />
                                </motion.div>
                                Watch Our Story
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
