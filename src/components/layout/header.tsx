'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Search, User, Phone, Flower, Crown } from 'lucide-react';
import { Button, cn } from '@/components/ui/button';
import { Magnetic } from '@/components/ui/magnetic';
import { motion, AnimatePresence } from 'framer-motion';
import { WeatherEffects } from './weather-effects';
import { Logo } from '@/components/ui/logo';

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [crownTextIndex, setCrownTextIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCrownTextIndex((prev) => (prev + 1) % 2);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Initiatives', href: '/initiatives' },
        { name: 'Partnership', href: '/partnership' },
        { name: 'Volunteer', href: '/volunteer' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
            {/* Top Bar - Made slightly transparent */}
            <div className="bg-[#0F2440]/95 backdrop-blur-sm text-white py-2 text-center text-sm font-medium hidden md:block border-b border-white/5">
                <div className="container">
                    <span className="flex items-center justify-center gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-secondary)] animate-pulse" />
                        Elle Cares: Support Miss Uganda's Miss World Campaign —
                        <Link href="/miss-world" className="underline underline-offset-2 hover:text-[var(--color-secondary)] transition-colors font-semibold ml-1">
                            See How You Can Help →
                        </Link>
                    </span>
                </div>
            </div>

            {/* Main Nav - Glassmorphism (Deep Navy/Purple) */}
            <div
                className={cn(
                    'transition-all duration-500 border-b relative',
                    isScrolled
                        ? 'bg-[#1B3A5C]/95 backdrop-blur-xl py-3 shadow-2xl shadow-[#0F2440]/30 border-white/5'
                        : 'bg-[#1B3A5C]/60 backdrop-blur-md py-5 border-transparent'
                )}
            >
                {/* --- WEATHER EFFECTS (Rain & Thunder -> Stars) --- */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <WeatherEffects />
                </div>

                <div className="container flex items-center justify-between relative z-10 w-full">
                    {/* Desktop Nav - 3 Column Layout */}
                    <div className="hidden lg:flex w-full items-center justify-between">
                        {/* LEFT COLUMN: Nav Links - flex-1 w-0 guarantees equal width */}
                        <div className="flex-1 w-0 flex justify-end items-center pr-12">
                            <nav className="flex items-center gap-6 xl:gap-8">
                                {navLinks.slice(0, 3).map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className="text-white/90 font-medium hover:text-[var(--color-secondary)] transition-colors uppercase text-sm tracking-wider whitespace-nowrap"
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </nav>
                        </div>

                        <div className="flex-shrink-0 flex justify-center px-4 relative">
                            <Link href="/" className="flex items-center gap-1 group relative top-2">
                                {/* mix-blend-screen removes the white PNG background on dark navbars */}
                                <div className="w-24 h-24 md:w-28 md:h-28 mix-blend-screen">
                                    <Logo variant="icon" className="w-full h-full drop-shadow-2xl" />
                                </div>
                            </Link>
                        </div>

                        {/* RIGHT COLUMN: Links + Miss World + Actions - flex-1 w-0 guarantees equal width */}
                        <div className="flex-1 w-0 flex justify-start items-center gap-6 pl-12">
                            <nav className="flex items-center gap-6">
                                {navLinks.slice(3, 6).map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className="text-white/90 font-medium hover:text-[var(--color-secondary)] transition-colors uppercase text-sm tracking-wider whitespace-nowrap"
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </nav>

                            {/* Actions (Search + Miss World Button) */}
                            <div className="flex items-center gap-4 border-l border-white/10 pl-6">
                                {/* Animated Search Input */}
                                <div className="relative flex items-center">
                                    <AnimatePresence>
                                        {isSearchOpen && (
                                            <motion.input
                                                initial={{ width: 0, opacity: 0, padding: 0 }}
                                                animate={{ width: 140, opacity: 1, padding: "0.5rem" }}
                                                exit={{ width: 0, opacity: 0, padding: 0 }}
                                                placeholder="Search..."
                                                className="bg-white/10 border border-white/20 rounded-full text-sm outline-none px-4 py-2 mr-2 text-white placeholder:text-white/50 focus:bg-white/20"
                                                autoFocus
                                            />
                                        )}
                                    </AnimatePresence>
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        className="px-2 hover:bg-white/20 text-white"
                                        onClick={() => setIsSearchOpen(!isSearchOpen)}
                                    >
                                        <Search className="h-5 w-5 text-white" />
                                    </Button>
                                </div>

                                {/* Miss World Button (Premium Metallic) */}
                                <Magnetic strength={30}>
                                    <Link href="/miss-world" className="relative group overflow-hidden bg-gradient-to-r from-[#F5A623] via-[#FFD166] to-[#E85D3A] text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-[0.1em] hover:shadow-[0_0_25px_rgba(245,166,35,0.4)] transition-all border border-[#FFD166]/40 inline-block">
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-shimmer" />
                                        <div className="relative h-4 w-48">
                                            <AnimatePresence mode="wait">
                                                <motion.div
                                                    key={crownTextIndex}
                                                    initial={{ y: 20, opacity: 0 }}
                                                    animate={{ y: 0, opacity: 1 }}
                                                    exit={{ y: -20, opacity: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="absolute inset-0 flex items-center justify-center gap-2 whitespace-nowrap"
                                                >
                                                    {crownTextIndex === 0 ? (
                                                        <>
                                                            <Crown className="w-4 h-4 text-white fill-white" />
                                                            <span className="text-[10px] md:text-xs">
                                                                Bring The <span className="font-black">Crown</span> <span className="text-[#0F2440]">Home</span>
                                                            </span>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <span className="w-2 h-2 rounded-full bg-white animate-[pulse_1s_ease-in-out_infinite]" />
                                                            <span className="text-sm font-bold">Elle Muhoza</span>
                                                        </>
                                                    )}
                                                </motion.div>
                                            </AnimatePresence>
                                        </div>
                                    </Link>
                                </Magnetic>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="lg:hidden p-2 absolute right-0"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>

                    {/* Mobile Logo */}
                    <Link href="/" className="lg:hidden absolute left-0 flex items-center gap-2">
                        <div className="w-12 h-12 mix-blend-screen">
                            <Logo variant="icon" className="w-full h-full" />
                        </div>
                        <span className="text-white font-bold text-base tracking-widest">FAIRFIELD</span>
                    </Link>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-white border-b border-gray-100 overflow-hidden"
                    >
                        <nav className="container py-4 flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg font-medium text-[var(--color-text-dark)] py-2 border-b border-gray-50"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            {/* Mobile Ambassador Link */}
                            {/* Mobile Miss World Button */}
                            <Link
                                href="/miss-world"
                                className="relative overflow-hidden bg-gradient-to-r from-[#F5A623] via-[#FFD166] to-[#E85D3A] text-white rounded-xl font-bold uppercase tracking-[0.1em] shadow-lg border border-[#FFD166]/40 mt-2"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full hover:animate-shimmer" />
                                <div className="relative h-12 w-full">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={crownTextIndex}
                                            initial={{ y: 20, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            exit={{ y: -20, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="absolute inset-0 flex items-center justify-center gap-3 whitespace-nowrap"
                                        >
                                            {crownTextIndex === 0 ? (
                                                <>
                                                    <Crown className="w-5 h-5 text-white fill-white" />
                                                    <span className="text-sm">
                                                        Bring The <span className="font-black">Crown</span> <span className="text-[#0F2440]">Home</span>
                                                    </span>
                                                </>
                                            ) : (
                                                <>
                                                    <span className="w-2.5 h-2.5 rounded-full bg-white animate-[pulse_1s_ease-in-out_infinite]" />
                                                    <span className="text-sm text-white font-bold">Elle Muhoza</span>
                                                </>
                                            )}
                                        </motion.div>
                                    </AnimatePresence>
                                </div>
                            </Link>

                            <div className="flex flex-col gap-4 mt-4">
                                <div className="flex items-center gap-2 text-sm font-medium text-[var(--color-text-light)]">
                                    <Phone className="h-4 w-4" />
                                    <span>+256 745 776 540</span>
                                </div>
                                <Button variant="secondary" className="w-full">
                                    Donate Now
                                </Button>
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header >
    );
}
