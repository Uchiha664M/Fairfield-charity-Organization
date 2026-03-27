import { createClient } from '@insforge/sdk';

const INSFORGE_URL = 'https://7fukxcsb.eu-central.insforge.app';
const INSFORGE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3OC0xMjM0LTU2NzgtOTBhYi1jZGVmMTIzNDU2NzgiLCJlbWFpbCI6ImFub25AaW5zZm9yZ2UuY29tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI4NDgyNjN9.kP1hn7b533Y_DO-_H3gTOqlo0WSi3ekD3WE9rBvqUc0';

export const insforge = createClient({
    baseUrl: INSFORGE_URL,
    anonKey: INSFORGE_ANON_KEY,
});

// ── Helper: Newsletter Subscribe ────────────────────────────────────────────
export async function subscribeNewsletter(email: string, name?: string) {
    const { data, error } = await insforge.database
        .from('newsletter_subscribers')
        .insert([{ email, name }]);
    return { data, error };
}

// ── Helper: Contact Message ─────────────────────────────────────────────────
export async function submitContactMessage(payload: {
    name: string;
    email: string;
    phone?: string;
    subject?: string;
    message: string;
    type?: string;
}) {
    const { data, error } = await insforge.database
        .from('contact_messages')
        .insert([payload]);
    return { data, error };
}

// ── Helper: Volunteer Application ──────────────────────────────────────────
export async function submitVolunteerApplication(payload: {
    full_name: string;
    email: string;
    phone?: string;
    skills?: string;
    availability?: string;
    motivation?: string;
}) {
    const { data, error } = await insforge.database
        .from('volunteer_applications')
        .insert([payload]);
    return { data, error };
}

// ── Helper: Donation Pledge ────────────────────────────────────────────────
export async function submitDonationPledge(payload: {
    name: string;
    email: string;
    amount?: number;
    currency?: string;
    initiative?: string;
    message?: string;
}) {
    const { data, error } = await insforge.database
        .from('donation_pledges')
        .insert([payload]);
    return { data, error };
}

// ── Helper: Partnership Inquiry ────────────────────────────────────────────
export async function submitPartnershipInquiry(payload: {
    organization: string;
    contact_name: string;
    email: string;
    phone?: string;
    partnership_type?: string;
    description?: string;
}) {
    const { data, error } = await insforge.database
        .from('partnership_inquiries')
        .insert([payload]);
    return { data, error };
}
