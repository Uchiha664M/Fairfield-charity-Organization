import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export default function ProjectsPage() {
    return (
        <main className="min-h-screen flex flex-col">
            <Header />
            <div className="flex-1 pt-32 pb-24">
                <div className="container">
                    <h1 className="text-4xl md:text-5xl font-bold mb-8 font-serif">Our Projects</h1>
                    <p className="text-lg text-[var(--color-text-light)] mb-12 max-w-2xl">
                        Explore our active deployments on the frontlines of education, health, and economic resilience. We don't just dream of a fair field; we build it.
                    </p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Specific Projects List */}
                        {[
                            { title: 'Project Musomesa', desc: 'AI-driven rapid education deployment', status: 'Active' },
                            { title: 'The Emmwanyi Fund', desc: 'Agricultural micro-grants for single mothers', status: 'Scaling' },
                            { title: 'Safe Haven Network', desc: 'Secure transitional housing for abuse survivors', status: 'Phase 2' },
                            { title: 'The 20% Challenge', desc: 'National policy advocacy for education budgets', status: 'Campaigning' },
                            { title: 'Operation Heal', desc: 'Trauma recovery centers via Butabika Hosp.', status: 'Active' },
                            { title: 'Fairfield Vanguard', desc: 'Youth mentorship and civic leadership training', status: 'Enrolling' }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 h-64 flex flex-col justify-center bg-gray-50 hover:border-[var(--color-secondary)] hover:shadow-lg transition-all">
                                <span className="text-xs font-bold uppercase tracking-widest text-[#D84315] mb-2">{item.status}</span>
                                <h3 className="text-2xl font-serif font-bold text-[#1B3B36] mb-3">{item.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
