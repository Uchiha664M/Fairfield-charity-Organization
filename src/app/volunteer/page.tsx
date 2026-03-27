'use client';

import { useState } from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { VolunteerHero } from '@/components/about/volunteer-hero';
import { VolunteerShowcase } from '@/components/volunteer/volunteer-showcase';
import { submitVolunteerApplication } from '@/lib/insforge';
import { Loader2, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function VolunteerPage() {
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        area: 'Education',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMsg, setErrorMsg] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!form.firstName || !form.lastName || !form.email) return;
        setStatus('loading');

        const { error } = await submitVolunteerApplication({
            full_name: `${form.firstName} ${form.lastName}`.trim(),
            email: form.email,
            skills: form.area,
            motivation: form.message
        });

        if (error) {
            setStatus('error');
            setErrorMsg('Something went wrong. Please try again or email us directly.');
        } else {
            setStatus('success');
        }
    };

    return (
        <main className="min-h-screen flex flex-col">
            <Header />

            <VolunteerHero />

            <VolunteerShowcase />

            <div className="flex-1 pt-12 pb-24 bg-gray-50">
                <div className="container max-w-3xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold font-serif mb-4">Join the Movement</h2>
                        <p className="text-gray-600">Fill out the form below to get started.</p>
                    </div>

                    {status === 'success' ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                            className="bg-white p-12 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center"
                        >
                            <CheckCircle className="w-16 h-16 text-[#2EC4B6] mb-4" />
                            <h3 className="text-2xl font-serif font-bold text-[#1B3B36] mb-2">Application Received!</h3>
                            <p className="text-gray-500 mb-6 max-w-md mx-auto">
                                Thank you for stepping up, {form.firstName}. Our volunteer coordination team will review your application and reach out to you via email shortly.
                            </p>
                            <Button
                                variant="outline"
                                onClick={() => { setStatus('idle'); setForm({ firstName: '', lastName: '', email: '', area: 'Education', message: '' }); }}
                            >
                                Submit Another
                            </Button>
                        </motion.div>
                    ) : (
                        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">First Name *</label>
                                    <input
                                        type="text"
                                        required
                                        value={form.firstName}
                                        onChange={e => setForm(f => ({ ...f, firstName: e.target.value }))}
                                        className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#FF9F1C] outline-none transition-all"
                                        placeholder="John"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Last Name *</label>
                                    <input
                                        type="text"
                                        required
                                        value={form.lastName}
                                        onChange={e => setForm(f => ({ ...f, lastName: e.target.value }))}
                                        className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#FF9F1C] outline-none transition-all"
                                        placeholder="Doe"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium">Email Address *</label>
                                <input
                                    type="email"
                                    required
                                    value={form.email}
                                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#FF9F1C] outline-none transition-all"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium">Area of Interest</label>
                                <select
                                    value={form.area}
                                    onChange={e => setForm(f => ({ ...f, area: e.target.value }))}
                                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#FF9F1C] outline-none transition-all"
                                >
                                    <option>Education</option>
                                    <option>Healthcare</option>
                                    <option>Clean Water</option>
                                    <option>Fundraising</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium">Message (Optional)</label>
                                <textarea
                                    value={form.message}
                                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                                    className="w-full p-3 border border-gray-200 rounded-lg h-32 focus:ring-2 focus:ring-[#FF9F1C] outline-none transition-all resize-none"
                                    placeholder="Tell us why you want to join..."
                                />
                            </div>

                            {status === 'error' && (
                                <p className="text-red-500 text-sm">{errorMsg}</p>
                            )}

                            <Button
                                type="submit"
                                size="lg"
                                disabled={status === 'loading'}
                                className="w-full flex items-center justify-center gap-2 bg-[#1B3B5F] hover:bg-[#102A44] disabled:opacity-70"
                            >
                                {status === 'loading' && <Loader2 className="w-4 h-4 animate-spin" />}
                                {status === 'loading' ? 'Submitting...' : 'Submit Application'}
                            </Button>
                        </form>
                    )}
                </div>
            </div>
            <Footer />
        </main>
    );
}
