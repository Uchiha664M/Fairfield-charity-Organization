'use client';

import { motion } from 'framer-motion';
import { Handshake, Target, Heart, User } from 'lucide-react';

const strategies = [
    {
        icon: Target,
        title: 'The Strategy',
        description: 'U-Gandan Labs deployed cutting-edge digital campaigns to capture the "Multimedia Award" metrics.'
    },
    {
        icon: Heart,
        title: 'The Heart',
        description: 'Mongers RFC mobilized the grassroots community to prove real-world impact through action.'
    },
    {
        icon: User,
        title: 'The Face',
        description: 'Elle Muhoza delivered a world-class presentation of our "Restoring Hope" project.'
    }
];

export function PartnershipSection() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6 text-[var(--color-primary)]">
                            THE GLOBAL OPPORTUNITY <br />
                            <span className="text-[var(--color-secondary)]">WHY PARTNER NOW?</span>
                        </h2>
                        <div className="w-24 h-1 bg-[var(--color-secondary)] mx-auto mb-8" />
                        <p className="text-lg text-[var(--color-text-light)] leading-relaxed">
                            A rare alignment of preparation &amp; visibility. For the first time in recent history, Uganda is not just participating; we are leading.
                        </p>
                    </motion.div>
                </div>

                {/* Content Grid */}
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left: The Fairfield Effect */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                            <h3 className="text-2xl font-bold mb-6 text-[var(--color-primary)] flex items-center gap-3">
                                <div className="p-2 bg-[var(--color-secondary)]/10 rounded-lg text-[var(--color-secondary)]">
                                    <Target className="w-6 h-6" />
                                </div>
                                The &quot;FAIRFIELD EFFECT&quot;
                            </h3>
                            <p className="text-[var(--color-text-light)] mb-6">
                                This Top 5 ranking was not accidental. It was engineered by the Fairfield Team:
                            </p>
                            <div className="space-y-6">
                                {strategies.map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <item.icon className="w-6 h-6 text-[var(--color-secondary)] shrink-0 mt-1" />
                                        <div>
                                            <strong className="block text-[var(--color-primary)] mb-1">{item.title}</strong>
                                            <span className="text-sm text-[var(--color-text-light)]">{item.description}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Why Partner */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="text-center mb-12">
                            <Handshake className="w-32 h-32 text-[var(--color-secondary)]/20 mx-auto" />
                        </div>

                        <h3 className="text-xl font-bold uppercase tracking-wider text-[var(--color-primary)] mb-4">
                            Capitalize on <span className="text-[var(--color-secondary)]">THE</span> Moment
                        </h3>
                        <p className="text-[var(--color-text-light)] mb-8 leading-relaxed">
                            To our potential sponsors (Stanbic, MTN, TotalEnergies, and International NGOs): This is your chance to attach your brand to a global victory. We are offering you a seat at the table on a platform that will be viewed globally by millions during the Miss World finale.
                        </p>

                        <h3 className="text-xl font-bold uppercase tracking-wider text-[var(--color-primary)] mb-4">
                            Sponsor Real Change
                        </h3>
                        <p className="text-[var(--color-text-light)] leading-relaxed">
                            When you sponsor Fairfield today, you are not just buying a logo placement; you are fueling a team that has already proven it can compete—and win—on the world stage.
                        </p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
