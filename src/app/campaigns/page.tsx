'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Download, Star } from 'lucide-react';
import { MusomesaRegistration } from '@/components/sections/musomesa-registration';
import { motion } from 'framer-motion';

export default function CampaignsPage() {
    return (
        <main className="min-h-screen flex flex-col bg-gray-50">
            <Header />
            <div className="flex-1 pt-32 pb-0">
                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="container mb-16 text-center px-4"
                >
                    <span className="text-yellow-600 font-bold uppercase tracking-wider text-sm mb-4 block">
                        Priority Campaign
                    </span>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-serif mb-6 text-slate-900">
                        Bring the Crown Home
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
                        Help us turn a Top 5 Contender into a Miss World Winner. Winning the "Multimedia Award" fast-tracks Elle directly into the Quarter-Finals.
                    </p>
                </motion.div>

                {/* Voting Guide Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="container max-w-5xl px-4 mb-24"
                >
                    <div className="bg-[#0F172A] text-white rounded-[2rem] p-8 md:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
                        {/* Background Accent */}
                        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />

                        <div className="relative z-10 grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
                            <div className="lg:col-span-3">
                                <h3 className="text-3xl md:text-4xl font-bold font-serif mb-8 text-yellow-500">
                                    How to Vote on the Miss World App
                                </h3>
                                <ol className="space-y-8">
                                    <li className="flex gap-6 items-start group">
                                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-bold text-yellow-500 shrink-0 group-hover:bg-yellow-500 group-hover:text-[#0F172A] transition-colors duration-300">1</div>
                                        <p className="text-slate-300 leading-relaxed pt-1.5"><strong className="text-white font-semibold">DOWNLOAD:</strong> Go to the Google Play Store or Apple App Store and download the "Miss World" App.</p>
                                    </li>
                                    <li className="flex gap-6 items-start group">
                                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-bold text-yellow-500 shrink-0 group-hover:bg-yellow-500 group-hover:text-[#0F172A] transition-colors duration-300">2</div>
                                        <p className="text-slate-300 leading-relaxed pt-1.5"><strong className="text-white font-semibold">SEARCH:</strong> Go to "Vote" or "Contestants" and search for <strong className="text-yellow-400">Elle Trivia Muhoza</strong>.</p>
                                    </li>
                                    <li className="flex gap-6 items-start group">
                                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-bold text-yellow-500 shrink-0 group-hover:bg-yellow-500 group-hover:text-[#0F172A] transition-colors duration-300">3</div>
                                        <p className="text-slate-300 leading-relaxed pt-1.5"><strong className="text-white font-semibold">VOTE:</strong> Click the VOTE button on her profile. Subscribe to multiply your impact!</p>
                                    </li>
                                </ol>
                                <div className="mt-10">
                                    <Button className="w-full sm:w-auto bg-yellow-500 hover:bg-yellow-400 text-[#0F172A] font-bold text-lg h-14 px-8 rounded-xl transition-all shadow-lg shadow-yellow-500/20 active:scale-95">
                                        <Download className="w-5 h-5 mr-2" />
                                        Download App Now
                                    </Button>
                                </div>
                            </div>

                            <div className="lg:col-span-2 text-center bg-white/5 rounded-3xl p-8 backdrop-blur-sm border border-white/10 lg:h-full lg:flex lg:flex-col lg:justify-center">
                                <motion.div
                                    animate={{ scale: [1, 1.1, 1] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                    className="inline-flex items-center justify-center w-28 h-28 bg-yellow-500 text-[#0F172A] rounded-full mb-8 shadow-[0_0_40px_rgba(234,179,8,0.3)] mx-auto"
                                >
                                    <Star className="w-12 h-12 fill-current" />
                                </motion.div>
                                <h4 className="text-3xl font-bold mb-3 text-white">Vote Daily</h4>
                                <p className="text-slate-400 text-lg">Do not let this opportunity slip.</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Musomesa Integration */}
                <MusomesaRegistration />
            </div>
            <Footer />
        </main>
    );
}
