import { Metadata } from 'next';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export const metadata: Metadata = {
    title: 'Terms of Service — Fairfield Charity Organization',
    description: 'Terms and conditions for using the Fairfield Charity Organization website.',
};

export default function TermsPage() {
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
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#1B3B36]">Terms of Service</h1>
                        <p className="mt-4 text-gray-500">Last updated: March 7, 2026</p>
                    </div>

                    <div className="prose prose-lg max-w-none text-gray-600 space-y-8">
                        <section>
                            <h2 className="text-2xl font-serif font-bold text-[#1B3B36] mb-4">1. Acceptance of Terms</h2>
                            <p>By accessing and using the Fairfield Charity Organization website, you accept and agree to be bound by these Terms of Service. If you do not agree, please discontinue use of this site.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-serif font-bold text-[#1B3B36] mb-4">2. Use of the Website</h2>
                            <p>You agree to use this website only for lawful purposes and in ways that do not infringe on the rights of others. You may not use the site to distribute harmful content or engage in fraudulent activities.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-serif font-bold text-[#1B3B36] mb-4">3. Donations</h2>
                            <p>All donations made via this website are voluntary contributions to Fairfield Charity Organization. We commit to deploying 100% of public donations directly to field projects. Donations are non-refundable unless otherwise required by applicable law.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-serif font-bold text-[#1B3B36] mb-4">4. Volunteer Applications</h2>
                            <p>Submitting a volunteer application does not guarantee placement. All applications are reviewed by our team, and we reserve the right to accept or decline based on organizational needs.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-serif font-bold text-[#1B3B36] mb-4">5. Intellectual Property</h2>
                            <p>All content on this website — including text, images, logos, and designs — is the property of Fairfield Charity Organization and is protected by copyright law. Unauthorized reproduction is prohibited.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-serif font-bold text-[#1B3B36] mb-4">6. Limitation of Liability</h2>
                            <p>Fairfield Charity Organization shall not be liable for any indirect, incidental, or consequential damages arising from your use of this website or reliance on any information provided herein.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-serif font-bold text-[#1B3B36] mb-4">7. Changes to Terms</h2>
                            <p>We reserve the right to modify these terms at any time. Continued use of the website constitutes acceptance of the updated terms.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-serif font-bold text-[#1B3B36] mb-4">8. Governing Law</h2>
                            <p>These terms are governed by the laws of the Republic of Uganda. Any disputes shall be resolved in the courts of Kampala, Uganda.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-serif font-bold text-[#1B3B36] mb-4">9. Contact</h2>
                            <p>Questions about these terms? Contact us at <a href="mailto:fairfield19622@gmail.com" className="text-[#FF9F1C] underline">fairfield19622@gmail.com</a>.</p>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
