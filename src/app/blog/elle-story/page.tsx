import { Metadata } from 'next';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export const metadata: Metadata = {
    title: "Elle's Story — Fairfield Charity Organization",
    description: "The story of Elle Trivia Muhoza, Miss Uganda and Fairfield Global Ambassador, and her mission to restore hope.",
};

export default function ElleBlogStoryPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-white pt-24">
                {/* Hero */}
                <div className="relative h-[60vh] min-h-[400px] overflow-hidden">
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0F0418]/80 via-[#1B3B5F]/60 to-white" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                        <span className="text-[#FF9F1C] font-bold tracking-widest text-xs uppercase mb-4">Elle Cares Initiative</span>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight max-w-3xl">
                            One Crown, One Mission, One Uganda
                        </h1>
                        <p className="mt-4 text-white/80 text-lg max-w-xl">
                            The story of Elle Trivia Muhoza and why she chose to fight.
                        </p>
                    </div>
                </div>

                {/* Article */}
                <article className="container max-w-3xl mx-auto py-16 px-4">
                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                        <p className="text-xl text-gray-500 font-light leading-relaxed">
                            Elle Trivia Muhoza was crowned Miss Uganda in 2025 — but the crown was never the destination. For Elle, it was the beginning of a louder fight.
                        </p>

                        <p>
                            Born in Kampala, Elle grew up watching gifted children in her neighbourhood fall through the cracks of a broken education system. She saw mothers forced to choose between feeding their children and sending them to school. She saw fathers lose their dignity to unemployment. And she decided: if she ever had a platform, she would use it.
                        </p>

                        <blockquote className="border-l-4 border-[#FF9F1C] pl-6 italic text-gray-600 my-8">
                            "A crown means nothing if it doesn't open doors for people who were never invited in."
                            <footer className="mt-2 text-sm font-bold text-gray-500 not-italic">— Elle Trivia Muhoza, Miss Uganda 2025</footer>
                        </blockquote>

                        <p>
                            As the Global Ambassador of Fairfield Charity Organization, Elle champions three pillars: access to education through Musomesa Academy, trauma recovery through The Empowerment Nexus, and economic freedom through Emmwanyi Micro-grants. Her work has already touched over 500 families across 23 districts.
                        </p>

                        <h2 className="text-3xl font-serif font-bold text-[#1B3B36] mt-12 mb-4">The Miss World Stage</h2>
                        <p>
                            Now, Elle carries Uganda's story to the Miss World stage — not just to win a title, but to force the world to look at what's happening in communities like ours. Every vote, every share, every donation is a message: we see you, Uganda.
                        </p>
                        <p>
                            Support Elle's campaign. Support Fairfield. Support the children who deserve a chance.
                        </p>

                        <div className="mt-12 flex flex-col sm:flex-row gap-4">
                            <a
                                href="/miss-world"
                                className="inline-block bg-[#FF9F1C] text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-[#E68A00] transition-colors text-center"
                            >
                                Vote Elle for Miss World →
                            </a>
                            <a
                                href="/volunteer"
                                className="inline-block border-2 border-[#1B3B5F] text-[#1B3B5F] px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-[#1B3B5F] hover:text-white transition-all text-center"
                            >
                                Join the Movement
                            </a>
                        </div>
                    </div>
                </article>
            </main>
            <Footer />
        </>
    );
}
