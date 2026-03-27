'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Stripe = { left: string; height: string; duration: number; delay: number };

export function LoadingScreen() {
    const [isVisible, setIsVisible] = useState(true);
    const [progress, setProgress] = useState(0);
    const [stripes, setStripes] = useState<Stripe[]>([]);

    useEffect(() => {
        setStripes(
            Array.from({ length: 12 }, (_, i) => ({
                left: `${(i / 12) * 100}%`,
                height: `${40 + Math.random() * 40}px`,
                duration: 0.8 + i * 0.05,
                delay: i * 0.12,
            }))
        );

        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) { clearInterval(interval); return 100; }
                return prev + 5;
            });
        }, 40);

        const timer = setTimeout(() => setIsVisible(false), 1500);
        return () => { clearTimeout(timer); clearInterval(interval); };
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    key="loader"
                    className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
                    style={{ background: 'linear-gradient(135deg, #0F2440 0%, #1B3A5C 50%, #2A5580 100%)' }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                >
                    {/* Rain stripes */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        {stripes.map((s, i) => (
                            <motion.div
                                key={i}
                                className="absolute top-0 w-px bg-gradient-to-b from-transparent via-white/15 to-transparent"
                                style={{ left: s.left, height: s.height }}
                                animate={{ top: ['0%', '110%'] }}
                                transition={{ duration: s.duration, repeat: Infinity, ease: 'linear', delay: s.delay }}
                            />
                        ))}
                    </div>

                    {/* Logo */}
                    <motion.div
                        className="relative flex flex-col items-center z-10"
                        initial={{ opacity: 0, scale: 0.7, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    >
                        {/* Umbrella watermark */}
                        <motion.svg
                            viewBox="0 0 100 100" fill="none"
                            className="absolute w-56 h-56 -top-16 opacity-15"
                            animate={{ opacity: [0.08, 0.18, 0.08] }}
                            transition={{ duration: 3, repeat: Infinity }}
                        >
                            <path d="M50 18 C 22 18 3 44 3 56 L 97 56 C 97 44 78 18 50 18 Z" fill="white" />
                            <path d="M50 56 L 50 82 C 50 88 57 88 57 82" stroke="white" strokeWidth="3.5" fill="none" strokeLinecap="round" />
                            <path d="M 3 56 Q 26 78 50 78 L 50 56 Z" fill="rgba(245,166,35,0.5)" />
                            <path d="M 97 56 Q 74 78 50 78 L 50 56 Z" fill="rgba(232,93,58,0.4)" />
                        </motion.svg>

                        {/* Logo Image */}
                        <motion.div
                            className="relative w-28 h-28 mb-6"
                            animate={{ scale: [1, 1.06, 1] }}
                            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                        >
                            <motion.div
                                className="absolute inset-0 rounded-full"
                                style={{ background: 'radial-gradient(circle, rgba(245,166,35,0.25) 0%, transparent 70%)' }}
                                animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0, 0.6] }}
                                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                            />
                            <img
                                src="/logo.png"
                                alt="Fairfield Charity"
                                className="w-full h-full object-contain mix-blend-screen"
                                style={{ filter: 'drop-shadow(0 0 20px rgba(245,166,35,0.4))' }}
                            />
                        </motion.div>

                        <motion.div className="text-center" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                            <p className="text-white font-bold tracking-[0.35em] text-sm uppercase mb-1">FAIRFIELD</p>
                            <p className="text-white/50 tracking-[0.2em] text-[10px] uppercase">Charity Organization</p>
                        </motion.div>

                        <motion.p
                            className="mt-4 text-[#F5A623] text-xs font-light tracking-widest italic"
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
                        >
                            "Justice Begins Where Inequality Ends"
                        </motion.p>
                    </motion.div>

                    {/* Progress */}
                    <motion.div
                        className="absolute bottom-16 left-1/2 -translate-x-1/2 w-48"
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
                    >
                        <div className="w-full h-0.5 bg-white/10 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full rounded-full bg-gradient-to-r from-[#F5A623] to-[#2BBCB3]"
                                animate={{ width: `${progress}%` }}
                                transition={{ ease: 'linear', duration: 0.04 }}
                            />
                        </div>
                        <p className="text-center text-white/30 text-[10px] uppercase tracking-widest mt-3">Loading...</p>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
