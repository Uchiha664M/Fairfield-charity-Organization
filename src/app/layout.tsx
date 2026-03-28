import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { LoadingScreen } from '@/components/layout/loading-screen';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fairfield Charity Organization | Dignity First. Systems That Let Hope Stay.",
  description:
    "Fairfield Charity Organization is building a partnership-ready platform for recovery, girls' education, and economic resilience across Uganda.",
  openGraph: {
    title: "Fairfield Charity Organization",
    description:
      "A founder-led platform advancing dignity, recovery, education, and economic resilience across Uganda.",
    url: "https://fairfieldcharity.org",
    siteName: "Fairfield Charity",
    images: [
      {
        url: "https://fairfieldcharity.org/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fairfield Charity Organization",
    description: "Dignity first. Systems that let hope stay.",
    images: ["https://fairfieldcharity.org/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        <LoadingScreen />
        {children}
      </body>
    </html>
  );
}
