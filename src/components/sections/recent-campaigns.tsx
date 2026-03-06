'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';

const news = [
    {
        category: 'Action',
        title: "The 'Rescue Plan' Launch: Musomesa Goes Live",
        date: 'October 15, 2025',
        image: 'https://images.unsplash.com/photo-1529176656151-16478e13dfbf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        excerpt: 'Our definitive answer to Uganda’s 83% learning poverty rate. We are bypassing the broken systems and giving every child a seat in the world’s first AI-driven university.',
    },
    {
        category: 'Advocacy',
        title: "The 20% Promise: Demanding a Fair Field",
        date: 'November 02, 2025',
        image: 'https://images.unsplash.com/photo-1541872703-74c5963631df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        excerpt: 'Elle’s formal address to Parliament, demanding the national education budget be raised to 20% to implement compulsory pre-primary education worldwide.',
    },
    {
        category: 'Impact',
        title: 'The Women of Wealth Gala',
        date: 'December 10, 2025',
        image: 'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        excerpt: 'Celebrating the mothers who form the economic backbone of Uganda. Launching our new micro-grant framework to shift families from poverty to power.',
    }
];

export function RecentCampaigns() {
    return (
        <section className="py-24 bg-white">
            <div className="container">
                <div className="flex justify-between items-end mb-16">
                    <div>
                        <h2 className="text-4xl font-bold font-serif mb-4 text-[var(--color-primary)]">Latest Impact News</h2>
                        <div className="w-24 h-1 bg-[var(--color-secondary)]" />
                    </div>
                    <button className="hidden md:flex items-center gap-2 font-bold text-[var(--color-secondary)] hover:text-[var(--color-secondary-dark)] transition-colors">
                        View All News <ArrowRight className="w-4 h-4" />
                    </button>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {news.map((item, index) => (
                        <motion.article
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group cursor-pointer"
                        >
                            <div className="relative overflow-hidden rounded-xl h-64 mb-6">
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold uppercase tracking-wider text-[var(--color-primary)] rounded-full z-10 w-fit">
                                    {item.category}
                                </div>
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                    style={{ backgroundImage: `url(${item.image})` }}
                                />
                            </div>

                            <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                                <Calendar className="w-4 h-4" />
                                {item.date}
                            </div>

                            <h3 className="text-2xl font-bold font-serif mb-3 text-[var(--color-primary)] group-hover:text-[var(--color-secondary)] transition-colors leading-tight">
                                {item.title}
                            </h3>

                            <p className="text-[var(--color-text-light)] mb-4 line-clamp-3">
                                {item.excerpt}
                            </p>

                            <span className="text-[var(--color-secondary)] font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                                Read Story <ArrowRight className="w-4 h-4" />
                            </span>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
