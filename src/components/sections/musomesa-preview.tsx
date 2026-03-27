'use client';

import { motion } from 'framer-motion';
import { Sparkles, Brain, Code, ArrowRight, Play, ServerCog } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function MusomesaPreview() {
    return (
        <section className="py-32 bg-[#05010B] text-white relative flex items-center min-h-[90vh]">
            {/* Background Grid & Gradient */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
                <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] mix-blend-screen pointer-events-none" />
            </div>

            <div className="container relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="inline-flex items-center gap-2 border border-purple-500/30 bg-purple-500/10 rounded-full px-4 py-2 mb-6 backdrop-blur">
                        <Sparkles className="w-4 h-4 text-purple-400" />
                        <span className="text-xs font-bold tracking-widest uppercase text-purple-200">The Ultimate Sandbox</span>
                    </div>

                    <h2 className="text-5xl md:text-7xl font-sans font-black mb-6 leading-[1.1] tracking-tight">
                        A Classroom <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                            In Every Village.
                        </span>
                    </h2>

                    <p className="text-xl text-gray-400 font-light mb-8 max-w-lg leading-relaxed">
                        We aren't waiting for the system to fix 83% learning poverty. We built <strong className="text-white">Musomesa</strong>—an AI-driven learning campus. Deployed remotely. Infinite scalability.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mb-12">
                        <Button className="bg-[var(--color-secondary)] hover:bg-yellow-500 text-black font-bold uppercase tracking-widest px-8 py-6 rounded-xl hover:scale-105 transition-transform flex items-center gap-3 shadow-[0_0_20px_rgba(253,183,20,0.3)]">
                            Sponsor a Student's Seat <ArrowRight className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" className="border-white/20 hover:bg-white/5 text-white bg-transparent px-8 py-6 rounded-xl font-bold uppercase tracking-widest flex items-center gap-3">
                            <Play className="w-4 h-4" /> Watch Demo
                        </Button>
                    </div>

                    {/* Features List */}
                    <div className="grid grid-cols-2 gap-6 pt-8 border-t border-white/10">
                        <div>
                            <Brain className="w-6 h-6 text-purple-400 mb-3" />
                            <h4 className="font-bold mb-1 text-sm tracking-widest uppercase">Personalized AI Tutors</h4>
                            <p className="text-sm text-gray-500">Adapts to every child's learning speed offline.</p>
                        </div>
                        <div>
                            <Code className="w-6 h-6 text-blue-400 mb-3" />
                            <h4 className="font-bold mb-1 text-sm tracking-widest uppercase">From ABCs to APIs</h4>
                            <p className="text-sm text-gray-500">Curriculum ending with job-ready coding certificates.</p>
                        </div>
                    </div>
                </motion.div>

                {/* Dashboard Preview UI */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 30 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    {/* The "Dashboard" */}
                    <div className="relative rounded-3xl bg-[#0F081C] border border-white/10 shadow-2xl overflow-hidden backdrop-blur-3xl transform rotate-y-[-5deg] rotate-x-[5deg] perspective-1000">
                        {/* Fake Browser window / OS header */}
                        <div className="bg-[#190e2d] px-4 py-3 flex items-center gap-2 border-b border-white/5">
                            <div className="w-3 h-3 rounded-full bg-red-500/50" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                            <div className="w-3 h-3 rounded-full bg-green-500/50" />
                            <div className="mx-auto text-[10px] text-gray-500 tracking-wider">MUSOMESA ACADEMY V2.4</div>
                        </div>

                        {/* Content Area */}
                        <div className="p-6 md:p-8">
                            <div className="grid grid-cols-3 gap-6 mb-6">
                                {/* Side Nav / Profile */}
                                <div className="col-span-1 space-y-4">
                                    <div className="flex items-center gap-3">
                                        <img src="https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" alt="Student" className="w-12 h-12 rounded-xl object-cover" />
                                        <div>
                                            <div className="text-white font-bold text-sm">Moses K.</div>
                                            <div className="text-purple-400 text-xs">Level 4 Scholar</div>
                                        </div>
                                    </div>
                                    <div className="space-y-2 pt-4 border-t border-white/5">
                                        {['Mathematics', 'Science', 'Python Basics'].map(subject => (
                                            <div key={subject} className="flex justify-between text-xs text-gray-400 p-2 rounded-lg bg-white/5 hover:bg-white/10 cursor-pointer">
                                                <span>{subject}</span>
                                                <span className="text-white">Active</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Main Module Area */}
                                <div className="col-span-2">
                                    <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl p-6 border border-white/5 relative overflow-hidden group">
                                        <div className="absolute right-0 top-0 w-32 h-32 bg-purple-500/30 blur-2xl group-hover:bg-blue-500/30 transition-colors" />
                                        <ServerCog className="w-8 h-8 text-white mb-4 relative z-10" />
                                        <h3 className="text-xl font-bold text-white mb-2 relative z-10">Intro to Data Structures</h3>
                                        <p className="text-sm text-gray-400 mb-4 relative z-10">Mastering Arrays and Linked Lists.</p>

                                        {/* Progress Bar */}
                                        <div className="w-full h-2 bg-black/50 rounded-full overflow-hidden relative z-10">
                                            <div className="w-[60%] h-full bg-gradient-to-r from-purple-400 to-blue-400" />
                                        </div>
                                    </div>

                                    {/* AI Tutor Chat bubble */}
                                    <div className="mt-4 flex gap-3">
                                        <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center shrink-0">
                                            <Brain className="w-4 h-4 text-white" />
                                        </div>
                                        <div className="bg-white/10 border border-white/5 rounded-2xl rounded-tl-sm p-4 text-sm text-gray-300">
                                            Excellent job on the Python module, Moses. Let's tackle variables today. Ready?
                                            <div className="mt-3 flex gap-2">
                                                <button className="bg-white/20 hover:bg-white/30 px-3 py-1 rounded text-xs text-white">Yes, let's go.</button>
                                                <button className="border border-white/20 px-3 py-1 rounded text-xs">Review yesterday.</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Decorative floating badges */}
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                        className="absolute -right-6 top-1/4 bg-blue-500/20 backdrop-blur-xl border border-blue-400/30 px-4 py-2 rounded-xl flex items-center gap-2 shadow-2xl"
                    >
                        <div className="w-2 h-2 rounded-full bg-blue-400 animate-ping" />
                        <span className="text-xs font-bold text-blue-100 uppercase">+150 Nodes Active</span>
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
}
