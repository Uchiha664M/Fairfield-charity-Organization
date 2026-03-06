'use client';

import { motion } from 'framer-motion';
import { Stethoscope, BookOpen, Wheat, Gavel, Home, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const services = [
    {
        icon: Stethoscope,
        title: 'Trauma & Recovery',
        description: 'Providing critical counseling and rehabilitation for victims of domestic violence and abuse through our dedicated hospital partnerships.'
    },
    {
        icon: BookOpen,
        title: 'The Musomesa Rescue',
        description: 'Deploying our AI-driven remote learning platform to combat the 83% learning poverty rate and give every child a seat in digital classrooms.'
    },
    {
        icon: Wheat,
        title: 'Women of Wealth',
        description: 'Empowering mothers via micro-grants and the "Emmwanyi" Coffee Project, transforming agricultural labor into sustainable financial power.'
    },
    {
        icon: Gavel,
        title: 'Justice & Advocacy',
        description: 'Fighting Gender-Based Violence (GBV) and relentlessly pursuing policy change, like our demand for a 20% national education budget.'
    },
    {
        icon: Home,
        title: 'Safe Havens',
        description: 'Building secure, transitional housing for displaced families and women escaping abusive environments to rebuild their lives in peace.'
    },
    {
        icon: Users,
        title: 'Community Defense',
        description: 'Partnering with local forces and OWC to support civil-military cooperation, ensuring our communities remain safe and stabilized.'
    }
];

export function HowWeHelp() {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-[var(--color-secondary)] font-bold tracking-widest text-sm uppercase mb-4 block">
                        THE FAIR FIELD INITIATIVE
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6 text-[var(--color-text-dark)]">
                        Strategic Action for <br /> <span className="text-[var(--color-primary)]">National Change</span>
                    </h2>
                    <p className="text-lg text-[var(--color-text-light)] leading-relaxed">
                        We don't just treat symptoms; we change the system. From classrooms to courtrooms, the Fairfield Charity is deploying tactical solutions to rebuild Uganda's future.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -10 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[var(--color-secondary)] group"
                        >
                            <div className="w-14 h-14 bg-[var(--color-primary)]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[var(--color-secondary)] transition-colors duration-300">
                                <service.icon className="w-7 h-7 text-[var(--color-primary)] group-hover:text-white transition-colors duration-300" />
                            </div>

                            <h3 className="text-xl font-bold font-serif mb-3 text-[var(--color-text-dark)] group-hover:text-[var(--color-secondary)] transition-colors">
                                {service.title}
                            </h3>

                            <p className="text-[var(--color-text-light)] leading-relaxed mb-6">
                                {service.description}
                            </p>

                            <a href="/projects" className="inline-flex items-center text-sm font-bold text-[var(--color-primary)] hover:text-[var(--color-secondary)] transition-colors uppercase gap-2">
                                Learn More <ArrowRight className="w-4 h-4" />
                            </a>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Button variant="primary" size="lg" className="bg-[var(--color-secondary)] text-white hover:bg-[var(--color-secondary-dark)]">
                        View All Our Initiatives
                    </Button>
                </div>
            </div>
        </section>
    );
}
