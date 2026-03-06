'use client';

import { motion } from 'framer-motion';
import { Heart, Coins, Users, Globe } from 'lucide-react';
import Link from 'next/link';

const values = [
    {
        icon: Heart,
        title: 'Sharing',
        description: 'Sharing feelings and spiritual support to the poor children around the world, helping them integrate into the community.',
        link: 'Find Campaigns',
        href: '/campaigns'
    },
    {
        icon: Coins,
        title: 'Donation',
        description: 'A gift made by an individual or an organization to a nonprofit organization, charity or private foundation.',
        link: 'Make a Donation',
        href: '/contact' // Routing to contact for donation for now
    },
    {
        icon: Users,
        title: 'Community',
        description: 'We help local nonprofits access the funding, tools, training, and support they need to become more effective.',
        link: 'Join Us',
        href: '/volunteer'
    },
    {
        icon: Globe,
        title: 'Responsibilities',
        description: 'Are you concerned about the health of our planet, and ready to do what you can to save it?',
        link: 'Our Promise',
        href: '/projects'
    }
];

export function CoreValues() {
    return (
        <section className="py-16 bg-white border-t border-gray-100">
            <div className="container">
                <div className="mb-16">
                    <span className="text-[#D84315] font-bold tracking-widest text-sm uppercase">
                        OUR CORE VALUES.
                    </span>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        {
                            icon: Heart,
                            color: 'text-yellow-400',
                            title: 'Unapologetic Action',
                            description: 'We prioritize tangible results over rhetoric. Empathy without action is an insult to those waiting for help.',
                            link: 'SEE OUR IMPACT',
                            href: '/campaigns',
                            borderColor: 'border-yellow-400'
                        },
                        {
                            icon: Coins,
                            color: 'text-orange-500',
                            title: 'Direct Deployment',
                            description: '100% of public donations secure actual resources—from hospital bills to textbooks—bypassing wasteful bureaucracy.',
                            link: 'BACK THE MISSION',
                            href: '/contact',
                            borderColor: 'border-orange-500'
                        },
                        {
                            icon: Users,
                            color: 'text-green-500',
                            title: 'Community Ownership',
                            description: 'We do not impose; we equip. Every initiative is led by local champions to ensure lasting, generational change.',
                            link: 'REGISTER TODAY',
                            href: '/volunteer',
                            borderColor: 'border-green-500'
                        },
                        {
                            icon: Globe,
                            color: 'text-blue-500',
                            title: 'Systematic Change',
                            description: 'Charity is a temporary bandage. We fight at the policy level for a 20% education budget to secure the future permanently.',
                            link: 'OUR VISION',
                            href: '/projects',
                            borderColor: 'border-blue-500'
                        }
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -10 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group flex flex-col items-start h-full"
                        >
                            <item.icon className={`w-10 h-10 ${item.color} mb-6 stroke-1`} />

                            <h3 className="text-xl font-bold font-serif text-[var(--color-text-dark)] mb-4">
                                {item.title}
                            </h3>

                            <p className="text-[var(--color-text-light)] text-sm leading-relaxed mb-8 flex-grow">
                                {item.description}
                            </p>

                            <Link
                                href={item.href}
                                className={`text-xs font-bold uppercase tracking-widest text-[var(--color-text-dark)] border-b-2 ${item.borderColor} pb-1 hover:text-[var(--color-secondary)] transition-colors mt-auto`}
                            >
                                {item.link}
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
