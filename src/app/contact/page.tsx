import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
    return (
        <main className="min-h-screen flex flex-col">
            <Header />
            <div className="flex-1 pt-40 pb-24">
                <div className="container max-w-5xl">
                    <h1 className="text-4xl md:text-5xl font-bold mb-8 font-serif text-center">Contact Us</h1>
                    <p className="text-lg text-[var(--color-text-light)] mb-16 text-center max-w-2xl mx-auto">
                        Ready to mobilize? Whether you want to fund a Musomesa student, partner on a hospital grant, or enlist as a volunteer, our command center is waiting for your signal.
                    </p>

                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-[var(--color-primary)]">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-xl mb-2">Visit Us</h3>
                                    <p className="text-[var(--color-text-light)]">Arie Towers Level 8,<br />Kampala, Uganda</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-[var(--color-primary)]">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-xl mb-2">Email Us</h3>
                                    <p className="text-[var(--color-text-light)]">fairfield19622@gmail.com</p>
                                    <Button variant="ghost" className="p-0 h-auto mt-2 text-[var(--color-secondary)]">Send email</Button>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-[var(--color-primary)]">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-xl mb-2">Call Us</h3>
                                    <p className="text-[var(--color-text-light)]">+256 745 776 540</p>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <form className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 space-y-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Name</label>
                                <input type="text" className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] outline-none" placeholder="Your name" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Email</label>
                                <input type="email" className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] outline-none" placeholder="Your email" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Message</label>
                                <textarea className="w-full p-3 border border-gray-200 rounded-lg h-32 focus:ring-2 focus:ring-[var(--color-primary)] outline-none" placeholder="How can we help?"></textarea>
                            </div>
                            <Button size="lg" className="w-full">Send Message</Button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
