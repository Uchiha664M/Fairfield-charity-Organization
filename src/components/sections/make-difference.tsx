'use client';

import { motion } from 'framer-motion';
import { Droplets, Users, Activity, Shield, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function MakeDifference() {
    return (
        <section className="py-24 bg-white overflow-hidden relative">
            {/* Background Map/Pattern Decoration (Abstracted) */}
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 bg-[url('https://www.transparenttextures.com/patterns/connected.png')] pointer-events-none" />

            <div className="container relative z-10">

                {/* PART 1: Make a Difference (Cards) */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <span className="text-[var(--color-secondary)] font-bold tracking-widest text-xs uppercase mb-4 block">
                        THE FAIR FIELD DIFFERENCE
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1B3B36] mb-6">
                        Radical Transparency
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        Your trust is our highest currency. We strip away the bureaucracy so your impact hits the ground exactly where it is needed most.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
                    {[
                        { icon: Droplets, title: 'Direct Impact', desc: '100% of public donations go directly to funding field projects, not overhead.' },
                        { icon: Users, title: 'Locals for Locals', desc: 'Every project is built, operated, and sustained by the Ugandan communities they serve.' },
                        { icon: Activity, title: 'Data-Driven', desc: 'We measure success in poverty reduction rates and school graduations, not just funds raised.' },
                        { icon: Shield, title: 'Safe Havens', desc: 'Strict safeguarding protocols ensure the physical and emotional security of every woman and child.' }
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -10 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white p-8 rounded-3xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] text-center group border border-transparent hover:border-gray-100 transition-all duration-300"
                        >
                            <div className="w-16 h-16 mx-auto bg-orange-50 rounded-2xl flex items-center justify-center mb-6 text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                                <item.icon className="w-8 h-8" strokeWidth={1.5} />
                            </div>
                            <h3 className="text-lg font-bold font-serif text-[#1B3B36] mb-4">{item.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* PART 2: Changing Lives with Knowledge */}
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    {/* Left: Images */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative shrink-0"
                    >
                        {/* Main Circular Image */}
                        <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full overflow-hidden border-8 border-white shadow-2xl mx-auto lg:mx-0 z-10">
                            <img
                                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                                alt="Child looking at camera"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Floating Small Circle 1 */}
                        <div className="absolute top-0 left-0 lg:-left-12 w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-xl z-20 hidden md:block">
                            <img
                                src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
                                alt="Children smiling"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Floating Small Circle 2 */}
                        <div className="absolute bottom-10 right-0 lg:-right-4 w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-white shadow-xl z-20 hidden md:block">
                            <img
                                src="https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
                                alt="Community"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Decorative Dots */}
                        <div className="absolute top-10 right-10 w-4 h-4 bg-[var(--color-secondary)] rounded-full animate-pulse z-30" />
                        <div className="absolute bottom-20 left-10 w-6 h-6 bg-[#1B3B36] rounded-full opacity-20 z-0" />
                    </motion.div>

                    {/* Right: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-center lg:text-left flex-1 min-w-0"
                    >
                        <span className="text-[var(--color-secondary)] font-bold tracking-widest text-xs uppercase mb-4 block">
                            THE MUSOMESA PROMISE
                        </span>
                        <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#1B3B36] mb-8 leading-tight">
                            The End of <br /> Learning Poverty
                        </h2>

                        <p className="text-lg font-medium text-[#1B3B36] mb-6">
                            83% of Ugandan children cannot read an age-appropriate text by age 10. We refuse to accept this.
                        </p>

                        <p className="text-gray-500 leading-relaxed mb-10 max-w-2xl mx-auto lg:mx-0">
                            The Musomesa platform bypasses crumbling infrastructure to deliver AI-powered, world-class education directly to the most remote villages. We are not just building schools; we are accelerating minds.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
                            <Button className="bg-[#1B3B36] text-white rounded-full px-10 py-6 uppercase tracking-widest text-xs font-bold hover:bg-[#2C5F55]">
                                Learn More
                            </Button>

                            <button className="flex items-center gap-3 font-bold text-[#1B3B36] uppercase text-xs tracking-widest hover:text-[var(--color-secondary)] transition-colors group">
                                <div className="w-12 h-12 rounded-full bg-[var(--color-secondary)] flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                                    <Play className="w-4 h-4 ml-1 fill-current" />
                                </div>
                                Watch Video
                            </button>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
