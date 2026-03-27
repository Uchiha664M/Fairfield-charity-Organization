'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Plane, Crown, Sprout, Heart, Map, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { ElleCaresBadge } from '@/components/ui/elle-cares-badge';

const sections = [
    {
        id: 'hero',
        title: "The Dream",
        subtitle: "A Girl. A Duty.",
        content: "The journey of Miss Uganda 2025, Elle Trivia Muhoza, is not just a story of beauty. It is a story of grit, gravity, and grace.",
        icon: Map,
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop", // Model/Portrait
        color: "bg-[#2E0249]"
    },
    {
        id: 'roots',
        title: "The Roots",
        subtitle: "Bukomansimbi",
        content: "It started in the red soil. Before the cameras and the crown, there was the garden. Growing up here taught me that nothing grows without rain.",
        icon: Sprout,
        image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=1000&auto=format&fit=crop", // Garden/Nature
        color: "bg-[#450a0a]"
    },
    {
        id: 'wings',
        title: "The Wings",
        subtitle: "Soroti Flying School",
        content: "I traded the hoe for the yoke. Training as a pilot changed my DNA. Aviation demands perfection, procedure, and nerve.",
        icon: Plane,
        image: "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?q=80&w=1000&auto=format&fit=crop", // Sky/Clouds
        color: "bg-[#0c4a6e]"
    },
    {
        id: 'crown',
        title: "The Crown",
        subtitle: "Miss Uganda 2025",
        content: "The sash is not a decoration; it is a microphone. Winning was not the finish line—it was the starting gun for national change.",
        icon: Crown,
        image: "https://images.unsplash.com/photo-1569388330292-7a6a841cd335?q=80&w=1000&auto=format&fit=crop", // Fashion/Stage
        color: "bg-[#451a03]"
    },
    {
        id: 'mission',
        title: "The Vision",
        subtitle: "Elle Cares",
        content: "We are building the 'Fair Field' I dreamed of. Bringing education to the youth and wealth to the mothers. I am a servant of the Pearl.",
        icon: (props: any) => <ElleCaresBadge {...props} />,
        image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1000&auto=format&fit=crop", // Charity/Kids
        color: "bg-[#115e59]"
    }
];

export function ElleStorySection() {
    const [activeId, setActiveId] = useState('hero');

    return (
        <section className="py-24 bg-[#0F0418] text-white overflow-hidden relative" id="elle-story">

            {/* Header Text */}
            <div className="container max-w-7xl mb-12 text-center md:text-left">
                <span className="text-[var(--color-secondary)] font-bold tracking-widest uppercase text-sm mb-2 block">
                    Interactive Journey
                </span>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">
                    From Bukomansimbi to the World
                </h2>
            </div>

            {/* EXPANDING GALLERY CONTAINER */}
            <div className="container max-w-7xl h-[80vh] md:h-[600px] flex flex-col md:flex-row gap-2 md:gap-4 px-2 md:px-4">
                {sections.map((section) => {
                    const isActive = activeId === section.id;

                    return (
                        <motion.div
                            key={section.id}
                            layout
                            onClick={() => setActiveId(section.id)}
                            className="relative rounded-[1.5rem] md:rounded-[2rem] overflow-hidden cursor-pointer shadow-2xl origin-center"
                            animate={{
                                flex: isActive ? 6 : 1,
                            }}
                            whileHover={{
                                flex: isActive ? 6 : 1.5,
                            }}
                            transition={{ type: "spring", stiffness: 100, damping: 20 }}
                        >
                            {/* Background Image (or Video) */}
                            {(section as any).video ? (
                                <video
                                    src={(section as any).video}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000"
                                    style={{ transform: isActive ? 'scale(1.05)' : 'scale(1.15)' }}
                                />
                            ) : (
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-1000"
                                    style={{
                                        backgroundImage: `url('${section.image}')`,
                                        transform: isActive ? 'scale(1.05)' : 'scale(1.15)'
                                    }}
                                />
                            )}

                            {/* Gradient Overlays */}
                            <motion.div
                                className="absolute inset-0 bg-black/60 md:bg-black/30"
                                animate={{ opacity: isActive ? 0 : 1 }}
                                transition={{ duration: 0.5 }}
                            />
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent"
                                animate={{ opacity: isActive ? 1 : 0 }}
                                transition={{ duration: 0.5 }}
                            />

                            {/* Active Content (Bottom Aligned) */}
                            <motion.div
                                className="absolute bottom-0 left-0 p-6 md:p-10 flex flex-col justify-end h-full w-[90vw] md:w-[600px] overflow-hidden"
                                initial={false}
                                animate={{
                                    opacity: isActive ? 1 : 0,
                                    y: isActive ? 0 : 20,
                                    pointerEvents: isActive ? 'auto' : 'none'
                                }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="whitespace-normal flex-shrink-0 w-[280px] md:w-[480px]">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/20 shrink-0">
                                            <section.icon className="w-4 h-4 md:w-5 md:h-5" />
                                        </div>
                                        <span className="text-[var(--color-secondary)] font-bold uppercase tracking-widest text-[10px] md:text-xs bg-black/40 px-3 py-1 rounded-full border border-white/10 shrink-0">
                                            {section.subtitle}
                                        </span>
                                    </div>

                                    <motion.h3
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 10 }}
                                        transition={{ duration: 0.3, delay: 0.1 }}
                                        className="text-2xl md:text-5xl font-serif font-bold text-white mb-2 md:mb-4 leading-tight shrink-0"
                                    >
                                        {section.title}
                                    </motion.h3>

                                    <motion.p
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 10 }}
                                        transition={{ duration: 0.3, delay: 0.15 }}
                                        className="text-white/80 text-sm md:text-lg leading-relaxed mb-4 md:mb-6 max-w-lg font-light block shrink-0"
                                    >
                                        {section.content}
                                    </motion.p>

                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: isActive ? 1 : 0 }}
                                        transition={{ duration: 0.3, delay: 0.2 }}
                                        className="shrink-0"
                                    >
                                        <Link
                                            href="/blog/elle-story"
                                            className="inline-flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-wider text-white hover:text-[var(--color-secondary)] transition-colors group"
                                        >
                                            Explore Chapter <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    </motion.div>
                                </div>
                            </motion.div>

                            {/* Inactive Label (Vertical Text) */}
                            <motion.div
                                className="absolute inset-0 flex items-center justify-center"
                                initial={false}
                                animate={{
                                    opacity: isActive ? 0 : 1,
                                    pointerEvents: isActive ? 'none' : 'auto'
                                }}
                                transition={{ duration: 0.5 }}
                            >
                                <h3 className="text-sm md:text-2xl font-bold uppercase tracking-[0.2em] text-white/90 -rotate-90 whitespace-nowrap drop-shadow-md">
                                    {section.title}
                                </h3>
                            </motion.div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
