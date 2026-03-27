'use client';

import { motion } from 'framer-motion';
import { Quote, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const stories = [
    {
        image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        title: 'From Survivor to Entrepreneur',
        name: 'Sarah N.',
        location: 'Masaka District',
        quote: 'Fairfield gave me more than a coffee seedling; they gave me my dignity back. Today, I employ three other women in my village.',
        category: 'Economic Resilience',
        color: '#FF9F1C'
    },
    {
        image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        title: 'A Future Reclaimed',
        name: 'Moses K.',
        location: 'Kampala',
        quote: 'I was lost in the streets until Musomesa Academy taught me how to code. Now I build websites for local businesses.',
        category: 'Education',
        color: '#2EC4B6'
    }
];

export function RealLifeStories() {
    return (
        <section className="py-0 bg-white relative overflow-hidden">
            {/* Dark brown top bar */}
            <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-[#2C1810] to-[#3E2723]" />

            <div className="container relative z-10 pt-20 pb-24">

                {/* Header row */}
                <div className="flex justify-between items-end mb-14">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-white"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-px bg-[var(--color-secondary)]" />
                            <span className="text-[var(--color-secondary)] font-bold tracking-[0.2em] text-[10px] uppercase">
                                Real Life Stories
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold font-serif leading-tight">
                            Restoring Dignity,<br />
                            <span className="text-[var(--color-secondary)]">One Life at a Time</span>
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="hidden md:block"
                    >
                        <Link href="/campaigns">
                            <Button variant="outline" className="border-white/40 text-white hover:bg-white hover:text-[#3E2723] rounded-full px-6 bg-transparent">
                                All Stories
                                <ArrowRight className="w-4 h-4 ml-1" />
                            </Button>
                        </Link>
                    </motion.div>
                </div>

                {/* Story Cards */}
                <div className="grid md:grid-cols-2 gap-8">
                    {stories.map((story, idx) => (
                        <motion.article
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                            className="bg-white rounded-3xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] group cursor-pointer hover:shadow-[0_30px_80px_-15px_rgba(0,0,0,0.2)] transition-all duration-500"
                        >
                            {/* Image */}
                            <div className="relative h-64 overflow-hidden">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-108"
                                    style={{ backgroundImage: `url(${story.image})` }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                                {/* Category badge */}
                                <div
                                    className="absolute top-5 left-5 text-white text-[10px] font-bold uppercase px-3 py-1.5 rounded-full tracking-wider"
                                    style={{ background: story.color }}
                                >
                                    {story.category}
                                </div>

                                {/* Quote icon */}
                                <div className="absolute bottom-5 right-5 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                    <Quote className="w-5 h-5 text-white" />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8">
                                <h3 className="text-2xl font-bold font-serif mb-4 text-[var(--color-text-dark)] group-hover:text-[var(--color-primary)] transition-colors">
                                    {story.title}
                                </h3>
                                <p className="text-gray-400 italic mb-6 leading-relaxed border-l-2 pl-4" style={{ borderColor: story.color }}>
                                    "{story.quote}"
                                </p>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-0.5 rounded-full" style={{ background: story.color }} />
                                        <div>
                                            <div className="font-bold text-sm text-[var(--color-text-dark)]">{story.name}</div>
                                            <div className="text-[10px] text-gray-400 uppercase tracking-wider">{story.location}</div>
                                        </div>
                                    </div>
                                    <motion.div
                                        className="w-8 h-8 rounded-full flex items-center justify-center border border-gray-100 group-hover:border-transparent transition-all"
                                        whileHover={{ scale: 1.1 }}
                                        style={{ '--hover-color': story.color } as React.CSSProperties}
                                    >
                                        <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-[var(--color-secondary)] transition-colors" />
                                    </motion.div>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>

                <div className="md:hidden mt-8 text-center">
                    <Link href="/campaigns">
                        <Button variant="outline" className="border-[#3E2723] text-[#3E2723] rounded-full px-8">
                            Read All Stories
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
