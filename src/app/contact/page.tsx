'use client';

import { useState } from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, Loader2, MessageSquare, Heart, Users } from 'lucide-react';
import { submitContactMessage } from '@/lib/insforge';

const contactTypes = [
    { id: 'general', label: 'General Inquiry', icon: MessageSquare, color: '#1B3B5F' },
    { id: 'donate', label: 'Donate / Fund', icon: Heart, color: '#FF9F1C' },
    { id: 'volunteer', label: 'Volunteer', icon: Users, color: '#2EC4B6' },
    { id: 'partner', label: 'Partnership', icon: Send, color: '#E71D36' },
];

export default function ContactPage() {
    const [type, setType] = useState('general');
    const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMsg, setErrorMsg] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!form.name || !form.email || !form.message) return;
        setStatus('loading');

        const { error } = await submitContactMessage({ ...form, type });
        if (error) {
            setStatus('error');
            setErrorMsg('Something went wrong. Please email us directly.');
        } else {
            setStatus('success');
        }
    };

    return (
        <main className="min-h-screen flex flex-col bg-[#FAFAFA]">
            <Header />
            <div className="flex-1 pt-36 pb-24">
                <div className="container max-w-5xl">

                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                    >
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <div className="w-10 h-px bg-[#FF9F1C]" />
                            <span className="text-[#FF9F1C] font-bold tracking-[0.2em] text-[10px] uppercase">Get In Touch</span>
                            <div className="w-10 h-px bg-[#FF9F1C]" />
                        </div>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#1B3B36] mb-4">Contact Us</h1>
                        <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
                            Ready to mobilize? Whether you want to fund a Musomesa student, partner on a hospital grant, or enlist as a volunteer — our command center is waiting for your signal.
                        </p>
                    </motion.div>

                    <div className="grid lg:grid-cols-5 gap-12">
                        {/* Left: Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}
                            className="lg:col-span-2 space-y-8"
                        >
                            {/* Info Cards */}
                            {[
                                { icon: MapPin, label: 'Visit Us', value: 'Arie Towers, Level 8\nKampala, Uganda', color: '#1B3B5F' },
                                { icon: Mail, label: 'Email Us', value: 'fairfield19622@gmail.com', href: 'mailto:fairfield19622@gmail.com', color: '#FF9F1C' },
                                { icon: Phone, label: 'Call Us', value: '+256 745 776 540', href: 'tel:+256745776540', color: '#2EC4B6' },
                            ].map(({ icon: Icon, label, value, href, color }, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 + i * 0.1 }}
                                    className="flex gap-4 bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                                >
                                    <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ background: `${color}15` }}>
                                        <Icon className="w-5 h-5" style={{ color }} />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">{label}</p>
                                        {href ? (
                                            <a href={href} className="text-[#1B3B36] font-medium hover:text-[#FF9F1C] transition-colors whitespace-pre-line">{value}</a>
                                        ) : (
                                            <p className="text-[#1B3B36] font-medium whitespace-pre-line">{value}</p>
                                        )}
                                    </div>
                                </motion.div>
                            ))}

                            {/* Map embed */}
                            <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm h-48 bg-gray-100">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7572!2d32.5899!3d0.3136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sArie+Towers+Kampala!5e0!3m2!1sen!2sug!4v1000000000"
                                    width="100%" height="100%" style={{ border: 0 }} loading="lazy"
                                    title="Fairfield Office Location"
                                />
                            </div>
                        </motion.div>

                        {/* Right: Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
                            className="lg:col-span-3"
                        >
                            <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8">

                                {/* Type selector */}
                                <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">I want to...</p>
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-8">
                                    {contactTypes.map(({ id, label, icon: Icon, color }) => (
                                        <button
                                            key={id}
                                            type="button"
                                            onClick={() => setType(id)}
                                            className="flex flex-col items-center gap-2 p-3 rounded-xl border-2 transition-all text-center"
                                            style={{
                                                borderColor: type === id ? color : 'transparent',
                                                background: type === id ? `${color}10` : '#F9FAFB',
                                            }}
                                        >
                                            <Icon className="w-5 h-5" style={{ color: type === id ? color : '#9CA3AF' }} />
                                            <span className="text-[10px] font-bold" style={{ color: type === id ? color : '#6B7280' }}>{label}</span>
                                        </button>
                                    ))}
                                </div>

                                {status === 'success' ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                                        className="flex flex-col items-center justify-center py-16 text-center"
                                    >
                                        <CheckCircle className="w-16 h-16 text-[#2EC4B6] mb-4" />
                                        <h3 className="text-2xl font-serif font-bold text-[#1B3B36] mb-2">Message Received!</h3>
                                        <p className="text-gray-500">Our team will respond within 24 hours.</p>
                                        <button onClick={() => { setStatus('idle'); setForm({ name: '', email: '', phone: '', subject: '', message: '' }); }}
                                            className="mt-6 text-[#FF9F1C] font-bold underline text-sm">Send another message</button>
                                    </motion.div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-5">
                                        <div className="grid sm:grid-cols-2 gap-4">
                                            <div>
                                                <label className="text-xs font-bold uppercase tracking-widest text-gray-400 block mb-2">Full Name *</label>
                                                <input
                                                    required type="text"
                                                    value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#FF9F1C] focus:ring-2 focus:ring-[#FF9F1C]/20 outline-none transition-all text-sm"
                                                    placeholder="Your full name"
                                                />
                                            </div>
                                            <div>
                                                <label className="text-xs font-bold uppercase tracking-widest text-gray-400 block mb-2">Email *</label>
                                                <input
                                                    required type="email"
                                                    value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#FF9F1C] focus:ring-2 focus:ring-[#FF9F1C]/20 outline-none transition-all text-sm"
                                                    placeholder="your@email.com"
                                                />
                                            </div>
                                        </div>
                                        <div className="grid sm:grid-cols-2 gap-4">
                                            <div>
                                                <label className="text-xs font-bold uppercase tracking-widest text-gray-400 block mb-2">Phone</label>
                                                <input
                                                    type="tel"
                                                    value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#FF9F1C] focus:ring-2 focus:ring-[#FF9F1C]/20 outline-none transition-all text-sm"
                                                    placeholder="+256 ..."
                                                />
                                            </div>
                                            <div>
                                                <label className="text-xs font-bold uppercase tracking-widest text-gray-400 block mb-2">Subject</label>
                                                <input
                                                    type="text"
                                                    value={form.subject} onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#FF9F1C] focus:ring-2 focus:ring-[#FF9F1C]/20 outline-none transition-all text-sm"
                                                    placeholder="Topic"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="text-xs font-bold uppercase tracking-widest text-gray-400 block mb-2">Message *</label>
                                            <textarea
                                                required rows={5}
                                                value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#FF9F1C] focus:ring-2 focus:ring-[#FF9F1C]/20 outline-none transition-all text-sm resize-none"
                                                placeholder="How can we help?"
                                            />
                                        </div>

                                        {status === 'error' && (
                                            <p className="text-red-500 text-sm">{errorMsg}</p>
                                        )}

                                        <button
                                            type="submit"
                                            disabled={status === 'loading'}
                                            className="w-full bg-[#1B3B5F] hover:bg-[#102A44] text-white py-4 rounded-xl font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-3 transition-all hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
                                        >
                                            {status === 'loading' ? (
                                                <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</>
                                            ) : (
                                                <><Send className="w-4 h-4" /> Send Message</>
                                            )}
                                        </button>
                                    </form>
                                )}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
