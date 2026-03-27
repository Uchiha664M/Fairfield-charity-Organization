'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, MapPin, Mail, Phone, Heart, ArrowRight, Send, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/ui/logo';
import { motion } from 'framer-motion';
import { subscribeNewsletter } from '@/lib/insforge';

type Star = { left: string; top: string; size: number; delay: number; duration: number };

function StarField() {
    const [stars, setStars] = useState<Star[]>([]);

    useEffect(() => {
        setStars(
            Array.from({ length: 60 }, () => ({
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                size: Math.random() * 2 + 1,
                delay: Math.random() * 5,
                duration: Math.random() * 3 + 2,
            }))
        );
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {stars.map((star, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full bg-white"
                    style={{
                        left: star.left,
                        top: star.top,
                        width: star.size,
                        height: star.size,
                    }}
                    animate={{ opacity: [0.1, 0.8, 0.1], scale: [1, 1.3, 1] }}
                    transition={{
                        duration: star.duration,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: star.delay,
                    }}
                />
            ))}
        </div>
    );
}


const quickLinks = [
    { label: 'About Us', href: '/about' },
    { label: 'The Army Partnership', href: '/partnership' },
    { label: 'Initiatives', href: '/initiatives' },
    { label: 'Miss World Campaign', href: '/miss-world' },
    { label: 'Donate', href: '/contact' },
    { label: 'Contact Us', href: '/contact' },
];

const initiatives = [
    { label: 'House of Help', href: '/initiatives' },
    { label: 'Musomesa Academy', href: '/musomesa' },
    { label: 'Pearl Diet Programme', href: '/pearl-diet' },
    { label: 'Police Partnership', href: '/police-partnership' },
    { label: 'Empowerment Nexus', href: '/initiatives' },
];

export function Footer() {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);
    const [subLoading, setSubLoading] = useState(false);
    const [subError, setSubError] = useState('');

    const handleSubscribe = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;
        setSubLoading(true);
        setSubError('');
        const { error } = await subscribeNewsletter(email);
        setSubLoading(false);
        if (error) {
            setSubError('Already subscribed or invalid email.');
        } else {
            setSubscribed(true);
            setEmail('');
        }
    };


    return (
        <>
            {/* Newsletter Strip */}
            <section className="bg-gradient-to-r from-[var(--color-secondary)] via-[#FFD166] to-[var(--color-secondary)] py-16 relative overflow-hidden">
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
                />
                <div className="container relative z-10">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-white text-center lg:text-left"
                        >
                            <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-white/70 mb-2">
                                Join 2,400+ Mission Supporters
                            </p>
                            <h2 className="text-3xl md:text-4xl font-bold font-serif">
                                Be Part of the Change
                            </h2>
                            <p className="mt-2 text-white/80 font-light">
                                Get updates on Elle's campaign, project milestones, and impact stories.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="w-full lg:w-auto"
                        >
                            {subscribed ? (
                                <motion.div
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    className="bg-white/20 backdrop-blur-sm rounded-2xl px-8 py-5 text-white text-center font-bold"
                                >
                                    ✓ Welcome to the mission!
                                </motion.div>
                            ) : (
                                <>
                                    <form onSubmit={handleSubscribe} className="flex gap-3 w-full max-w-md">
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Enter your email address"
                                            required
                                            className="flex-1 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-6 py-4 text-white placeholder:text-white/60 outline-none focus:bg-white/30 focus:border-white/60 transition-all text-sm min-w-0"
                                        />
                                        <Button
                                            type="submit"
                                            disabled={subLoading}
                                            className="bg-[var(--color-primary)] text-white rounded-full px-6 py-4 font-bold hover:bg-[var(--color-primary-dark)] hover:shadow-xl transition-all shrink-0 flex items-center gap-2 disabled:opacity-70"
                                        >
                                            {subLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                                            <span className="hidden sm:inline">{subLoading ? 'Subscribing...' : 'Subscribe'}</span>
                                        </Button>
                                    </form>
                                    {subError && <p className="text-white/80 text-xs mt-2">{subError}</p>}
                                </>
                            )}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Main Footer */}
            <footer className="relative bg-[#0F2440] text-white pt-24 pb-10 overflow-hidden border-t border-white/5">
                <StarField />

                {/* Glow blobs */}
                <div className="absolute top-0 left-1/4 w-80 h-80 rounded-full bg-[var(--color-primary)]/20 blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-[var(--color-secondary)]/10 blur-3xl pointer-events-none" />

                <div className="container relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">

                        {/* Brand Column */}
                        <div>
                            <Link href="/" className="inline-block mb-6">
                                <Logo variant="horizontal" dark />
                            </Link>
                            <p className="text-gray-400 leading-relaxed mb-8 font-light text-sm">
                                Building a world where every life in Uganda is defined by opportunity, dignity, and lasting peace.
                                Led by Miss Uganda, Elle Trivia Muhoza.
                            </p>
                            <div className="flex gap-3">
                                {[
                                    { Icon: Facebook, href: '#' },
                                    { Icon: Twitter, href: '#' },
                                    { Icon: Instagram, href: '#' },
                                    { Icon: Linkedin, href: '#' },
                                    { Icon: Youtube, href: '#' },
                                ].map(({ Icon, href }, i) => (
                                    <motion.a
                                        key={i}
                                        href={href}
                                        whileHover={{ y: -3, scale: 1.1 }}
                                        className="w-10 h-10 rounded-full bg-white/8 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-[var(--color-secondary)] hover:text-white hover:border-[var(--color-secondary)] transition-all"
                                    >
                                        <Icon className="w-4 h-4" />
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="text-[10px] font-bold mb-6 text-[var(--color-secondary)] uppercase tracking-[0.2em]">Quick Links</h4>
                            <ul className="space-y-3">
                                {quickLinks.map((link, i) => (
                                    <li key={i}>
                                        <Link
                                            href={link.href}
                                            className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2 group"
                                        >
                                            <span className="w-0 h-px bg-[var(--color-secondary)] group-hover:w-4 transition-all duration-300" />
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Initiatives */}
                        <div>
                            <h4 className="text-[10px] font-bold mb-6 text-[var(--color-secondary)] uppercase tracking-[0.2em]">Initiatives</h4>
                            <ul className="space-y-3">
                                {initiatives.map((link, i) => (
                                    <li key={i}>
                                        <Link
                                            href={link.href}
                                            className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2 group"
                                        >
                                            <span className="w-0 h-px bg-[var(--color-secondary)] group-hover:w-4 transition-all duration-300" />
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h4 className="text-[10px] font-bold mb-6 text-[var(--color-secondary)] uppercase tracking-[0.2em]">Contact Us</h4>
                            <ul className="space-y-5">
                                <li className="flex items-start gap-3 text-gray-400 text-sm">
                                    <MapPin className="w-4 h-4 text-[var(--color-secondary)] shrink-0 mt-0.5" />
                                    <span>Arie Towers, Level 8,<br />Kampala, Uganda</span>
                                </li>
                                <li>
                                    <a href="mailto:fairfield19622@gmail.com" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors text-sm group">
                                        <Mail className="w-4 h-4 text-[var(--color-secondary)] shrink-0" />
                                        fairfield19622@gmail.com
                                    </a>
                                </li>
                                <li>
                                    <a href="tel:+256745776540" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors text-sm group">
                                        <Phone className="w-4 h-4 text-[var(--color-secondary)] shrink-0" />
                                        +256 745 776 540
                                    </a>
                                </li>
                            </ul>

                            <Link href="/partnership" className="mt-8 block">
                                <Button className="w-full bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-dark)] text-white font-bold rounded-full py-5 hover:shadow-[0_10px_30px_-5px_rgba(255,159,28,0.4)] transition-all flex items-center justify-center gap-2">
                                    Partner With Us
                                    <ArrowRight className="w-4 h-4" />
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

                    {/* Bottom Bar */}
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
                        <p>© {new Date().getFullYear()} Fairfield Charity Organization. All rights reserved.</p>
                        <div className="flex items-center gap-6">
                            <Link href="/privacy" className="hover:text-gray-400 transition-colors">Privacy Policy</Link>
                            <Link href="/terms" className="hover:text-gray-400 transition-colors">Terms of Service</Link>
                        </div>
                    </div>

                    {/* Developer Credit */}
                    <div className="mt-4 text-center text-xs text-gray-700 flex items-center justify-center gap-1.5">
                        <span>Developed with</span>
                        <Heart className="w-3 h-3 text-[var(--color-accent)] fill-[var(--color-accent)]" />
                        <span>for Uganda by <span className="text-gray-500 font-medium">Ekelot Jesse Jones</span></span>
                    </div>
                </div>
            </footer>
        </>
    );
}
