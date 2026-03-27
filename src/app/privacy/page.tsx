import { Metadata } from 'next';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export const metadata: Metadata = {
    title: 'Privacy Policy — Fairfield Charity Organization',
    description: 'How we collect, use, and protect your personal information.',
};

export default function PrivacyPage() {
    return (
        <>
            <Header />
            <main className="pt-36 pb-24 min-h-screen bg-white">
                <div className="container max-w-3xl mx-auto">
                    <div className="mb-12">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-px bg-[#FF9F1C]" />
                            <span className="text-[#FF9F1C] font-bold tracking-[0.2em] text-[10px] uppercase">Legal</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#1B3B36]">Privacy Policy</h1>
                        <p className="mt-4 text-gray-500">Last updated: March 7, 2026</p>
                    </div>

                    <div className="prose prose-lg max-w-none text-gray-600 space-y-8">
                        <section>
                            <h2 className="text-2xl font-serif font-bold text-[#1B3B36] mb-4">1. Information We Collect</h2>
                            <p>We collect information you provide directly to us, such as when you subscribe to our newsletter, make a donation, volunteer, or contact us. This may include your name, email address, phone number, and any messages you send.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-serif font-bold text-[#1B3B36] mb-4">2. How We Use Your Information</h2>
                            <p>We use the information we collect to:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Communicate with you about our programs, events, and campaigns</li>
                                <li>Process donations and volunteer applications</li>
                                <li>Send newsletters and impact updates (with your consent)</li>
                                <li>Improve our services and website</li>
                                <li>Comply with legal obligations</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-serif font-bold text-[#1B3B36] mb-4">3. Data Security</h2>
                            <p>We implement industry-standard security measures to protect your personal information. Your data is stored securely via our InsForge backend infrastructure with row-level security policies.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-serif font-bold text-[#1B3B36] mb-4">4. Data Sharing</h2>
                            <p>We do not sell, trade, or rent your personal information to third parties. We may share data with trusted service providers who assist us in operating our website, subject to confidentiality agreements.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-serif font-bold text-[#1B3B36] mb-4">5. Your Rights</h2>
                            <p>You have the right to access, correct, or delete your personal data at any time. To exercise these rights, contact us at <a href="mailto:fairfield19622@gmail.com" className="text-[#FF9F1C] underline">fairfield19622@gmail.com</a>.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-serif font-bold text-[#1B3B36] mb-4">6. Cookies</h2>
                            <p>Our website uses minimal, essential cookies only for site functionality. We do not use tracking or advertising cookies.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-serif font-bold text-[#1B3B36] mb-4">7. Contact Us</h2>
                            <p>For any privacy-related questions, please contact us at <a href="mailto:fairfield19622@gmail.com" className="text-[#FF9F1C] underline">fairfield19622@gmail.com</a> or call <a href="tel:+256745776540" className="text-[#FF9F1C] underline">+256 745 776 540</a>.</p>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
