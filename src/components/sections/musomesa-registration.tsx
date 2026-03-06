'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { BookOpen, X, ArrowRight, Leaf, Zap, Code, HeartPulse, GraduationCap, AlertTriangle } from 'lucide-react';

export function MusomesaRegistration() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container max-w-5xl px-4">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center mb-16 lg:mb-24"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 border border-black/10 rounded-full bg-yellow-50 mb-6 shadow-sm">
                        <BookOpen className="w-5 h-5 text-[#E71D36]" />
                        <span className="text-black font-bold tracking-wider text-xs sm:text-sm uppercase">
                            Judge&apos;s Brief &amp; Project Justification
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-6 text-black leading-tight">
                        Musomesa & The Ugandan Education Crisis
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Bridging the Gap from Dropout to Digital Innovation. This platform isn&apos;t just a website; it&apos;s a <strong className="text-black font-semibold bg-yellow-100 px-2 rounded">&quot;Rescue Plan&quot;</strong> designed to combat the 83% learning poverty rate by giving every Ugandan student a seat in the world&apos;s first AI-driven university.
                    </p>
                </motion.div>

                {/* Facts Grid */}
                <div className="grid md:grid-cols-2 gap-8 mb-16 lg:mb-24">
                    {/* The Urgent Challenge */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="bg-red-50/50 p-8 lg:p-10 rounded-[2rem] border border-red-100 relative overflow-hidden group hover:bg-red-50 transition-colors"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-red-100 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50 group-hover:opacity-70 transition-opacity" />
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-red-700">
                                <div className="p-2 bg-red-100 rounded-xl text-red-600">
                                    <AlertTriangle className="w-6 h-6" />
                                </div>
                                The Urgent Challenge
                            </h3>
                            <ul className="space-y-6">
                                <li className="flex gap-4">
                                    <div className="w-2 h-2 mt-2.5 rounded-full bg-red-500 shrink-0 shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
                                    <p className="text-gray-700 leading-relaxed"><strong className="text-gray-900">Massive Exclusion:</strong> Approximately 1 in 4 children (aged 6 to 18) are currently out of school.</p>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-2 h-2 mt-2.5 rounded-full bg-red-500 shrink-0 shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
                                    <p className="text-gray-700 leading-relaxed"><strong className="text-gray-900">Low Survival Rates:</strong> Only 5% to 6% of students who start Primary 1 actually complete their upper secondary education at S6.</p>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-2 h-2 mt-2.5 rounded-full bg-red-500 shrink-0 shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
                                    <p className="text-gray-700 leading-relaxed"><strong className="text-gray-900">Learning Poverty:</strong> 83% of Ugandan children are unable to read and understand an age-appropriate text by age 10.</p>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-2 h-2 mt-2.5 rounded-full bg-red-500 shrink-0 shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
                                    <p className="text-gray-700 leading-relaxed"><strong className="text-gray-900">Budgetary Decline:</strong> Public spending on education has dropped to 8.4% and is projected to fall to 6% for 2024/25.</p>
                                </li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* The Musomesa Solution */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="bg-yellow-50/50 p-8 lg:p-10 rounded-[2rem] border border-yellow-200 relative overflow-hidden group hover:bg-yellow-50 transition-colors"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-200 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50 group-hover:opacity-70 transition-opacity" />
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-yellow-800">
                                <div className="p-2 bg-yellow-100 rounded-xl text-yellow-600">
                                    <GraduationCap className="w-6 h-6" />
                                </div>
                                The Musomesa Solution
                            </h3>
                            <p className="text-gray-700 mb-8 italic text-lg border-l-4 border-yellow-400 pl-4 py-1">
                                Musomesa acts as a digital bridge, capturing students who fall out of the formal system and redirecting them to global-standard learning.
                            </p>
                            <ul className="space-y-6">
                                <li className="flex gap-4">
                                    <div className="w-2 h-2 mt-2.5 rounded-full bg-yellow-500 shrink-0 shadow-[0_0_10px_rgba(234,179,8,0.5)]" />
                                    <p className="text-gray-700 leading-relaxed"><strong className="text-gray-900">Maestro University (The World&apos;s First AI University):</strong> By linking to Maestro, we provide teenagers with a seat in a revolutionary, AI-driven educational environment, bypassing the 1:65 teacher-to-pupil ratio.</p>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-2 h-2 mt-2.5 rounded-full bg-yellow-500 shrink-0 shadow-[0_0_10px_rgba(234,179,8,0.5)]" />
                                    <p className="text-gray-700 leading-relaxed"><strong className="text-gray-900">Transition Pathways:</strong> In alignment with UNICEF recommendations, we provide multiple pathways through MIT OpenCourseWare & Google's Career AI.</p>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-2 h-2 mt-2.5 rounded-full bg-yellow-500 shrink-0 shadow-[0_0_10px_rgba(234,179,8,0.5)]" />
                                    <p className="text-gray-700 leading-relaxed"><strong className="text-gray-900">Digital Integration:</strong> Fulfilling the national &quot;Digital Agenda Strategy&quot; by bringing ICT directly to the community&apos;s smartphones.</p>
                                </li>
                            </ul>
                        </div>
                    </motion.div>
                </div>

                {/* Empowering section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="bg-black text-white rounded-[2rem] p-8 md:p-12 lg:p-16 shadow-2xl relative overflow-hidden mb-16 lg:mb-24"
                >
                    {/* Ugandan Flag color accents */}
                    <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-black via-yellow-400 to-red-600" />
                    <div className="absolute bottom-0 left-0 w-full h-3 bg-gradient-to-r from-black via-red-600 to-yellow-400" />

                    <div className="text-center mb-12 relative z-10">
                        <h3 className="text-3xl md:text-4xl font-bold font-serif mb-6 leading-tight">Empowering the Next Generation of Ugandans</h3>
                        <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
                            Encouraging our youth to use free resources to become the architects of our nation&apos;s future. With Maestro and Musomesa, you can become:
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                        <div className="bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-md text-center transform transition-transform hover:-translate-y-2 hover:bg-white/10 duration-300 group">
                            <div className="w-16 h-16 rounded-2xl bg-yellow-400/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                                <Leaf className="w-8 h-8 text-yellow-400" />
                            </div>
                            <h4 className="font-bold mb-3 text-lg">Agri-Tech Engineers</h4>
                            <p className="text-sm text-gray-400 leading-relaxed">To modernize our food systems.</p>
                        </div>
                        <div className="bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-md text-center transform transition-transform hover:-translate-y-2 hover:bg-white/10 duration-300 group">
                            <div className="w-16 h-16 rounded-2xl bg-yellow-400/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                                <Zap className="w-8 h-8 text-yellow-400" />
                            </div>
                            <h4 className="font-bold mb-3 text-lg">Renewable Energy</h4>
                            <p className="text-sm text-gray-400 leading-relaxed">To drive energy access and affordability.</p>
                        </div>
                        <div className="bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-md text-center transform transition-transform hover:-translate-y-2 hover:bg-white/10 duration-300 group">
                            <div className="w-16 h-16 rounded-2xl bg-red-400/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                                <Code className="w-8 h-8 text-red-500" />
                            </div>
                            <h4 className="font-bold mb-3 text-lg">Software Developers</h4>
                            <p className="text-sm text-gray-400 leading-relaxed">To lead Uganda into the 21st-century digital economy.</p>
                        </div>
                        <div className="bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-md text-center transform transition-transform hover:-translate-y-2 hover:bg-white/10 duration-300 group">
                            <div className="w-16 h-16 rounded-2xl bg-red-400/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                                <HeartPulse className="w-8 h-8 text-red-500" />
                            </div>
                            <h4 className="font-bold mb-3 text-lg">Healthcare Innovators</h4>
                            <p className="text-sm text-gray-400 leading-relaxed">To improve health and population outcomes.</p>
                        </div>
                    </div>
                </motion.div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: "-50px" }}
                    className="text-center px-4"
                >
                    <h3 className="text-3xl md:text-4xl font-bold font-serif mb-6 text-black">Support the Vision</h3>
                    <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
                        Register today to unlock your free career guidance. By signing up, you are joining a community that supports <strong className="text-black bg-gray-100 px-2 rounded">Elle Jones for Miss World</strong>. Your journey to Maestro University starts here!
                    </p>
                    <Button
                        onClick={() => setIsModalOpen(true)}
                        className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-bold text-lg h-16 px-12 rounded-2xl shadow-xl shadow-red-600/20 transition-all hover:scale-105 active:scale-95 group"
                    >
                        Access Musomesa Chat
                        <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                    </Button>
                </motion.div>
            </div>

            {/* Registration Registration Modal - Ugandan Theme */}
            <AnimatePresence>
                {isModalOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                            onClick={() => setIsModalOpen(false)}
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
                        >
                            {/* Ugandan Flag Top Banner */}
                            <div className="flex h-3 w-full">
                                <div className="flex-1 bg-black"></div>
                                <div className="flex-1 bg-[#FCDC04]"></div> {/* Ugandan Yellow */}
                                <div className="flex-1 bg-[#D90000]"></div> {/* Ugandan Red */}
                            </div>

                            <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between sticky top-0 bg-white/90 backdrop-blur-md z-10">
                                <h3 className="text-xl font-bold text-black font-serif flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-full bg-black text-[#FCDC04] flex items-center justify-center text-xs font-bold ring-2 ring-[#D90000]">M</div>
                                    Join Musomesa
                                </h3>
                                <button
                                    onClick={() => setIsModalOpen(false)}
                                    className="p-2 text-gray-400 hover:text-black hover:bg-gray-100 rounded-full transition-colors"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            <div className="p-8 overflow-y-auto">
                                <div className="text-center mb-8">
                                    <h4 className="text-2xl font-bold mb-3 text-black">Be Part of the 6% That Finishes Strong</h4>
                                    <p className="text-gray-600 text-sm">Register to unlock free career guidance through Maestro University. Elle is championing:</p>

                                    <div className="text-left mt-6 space-y-3 bg-gray-50 p-4 rounded-2xl border border-gray-100">
                                        <div className="flex gap-3 items-start">
                                            <div className="w-1.5 h-1.5 mt-2 rounded-full bg-[#D90000]" />
                                            <p className="text-sm font-medium text-gray-800">Raising the national education budget to 20%</p>
                                        </div>
                                        <div className="flex gap-3 items-start">
                                            <div className="w-1.5 h-1.5 mt-2 rounded-full bg-[#FCDC04]" />
                                            <p className="text-sm font-medium text-gray-800">Implementing compulsory pre-primary education</p>
                                        </div>
                                        <div className="flex gap-3 items-start">
                                            <div className="w-1.5 h-1.5 mt-2 rounded-full bg-black" />
                                            <p className="text-sm font-medium text-gray-800">Expanding social protection for the 44% of children in poverty</p>
                                        </div>
                                    </div>
                                </div>

                                <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Registration successful!"); setIsModalOpen(false); }}>
                                    <div className="space-y-1">
                                        <label className="text-sm font-semibold text-black">Full Name</label>
                                        <input
                                            type="text"
                                            required
                                            className="w-full h-12 px-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FCDC04] focus:border-black transition-all"
                                            placeholder="Enter your name"
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-sm font-semibold text-black">Email Address or Phone</label>
                                        <input
                                            type="text"
                                            required
                                            className="w-full h-12 px-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FCDC04] focus:border-black transition-all"
                                            placeholder="contact details"
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-sm font-semibold text-black">Area of Interest</label>
                                        <select className="w-full h-12 px-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FCDC04] focus:border-black transition-all bg-white text-gray-700">
                                            <option>Agri-Tech Engineering</option>
                                            <option>Renewable Energy</option>
                                            <option>Software Development</option>
                                            <option>Healthcare Innovation</option>
                                            <option>Other / Not Sure</option>
                                        </select>
                                    </div>

                                    <Button type="submit" className="w-full bg-black hover:bg-gray-900 text-[#FCDC04] font-bold h-14 text-lg rounded-xl mt-6 shadow-[0_4px_14px_0_rgba(0,0,0,0.39)] transition-all">
                                        Register Now
                                    </Button>
                                    <p className="text-center text-xs text-gray-500 mt-4">
                                        By signing up, you support the vision to combat learning poverty in Uganda.
                                    </p>
                                </form>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}
