import type { Metadata } from "next";
import { Geist, Newsreader } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Capacité — AI Capacity for Civil Society",
  description: "Capacité helps small and medium-sized nonprofits solve repetitive operational problems with practical, responsible AI — free of charge.",
  keywords: ["nonprofit AI", "civic tech France", "AI for good", "nonprofit automation", "civil society AI"],
  authors: [{ name: "Capacité Team" }],
  openGraph: {
    title: "Capacité — AI Capacity for Civil Society",
    description: "Capacité helps small and medium-sized nonprofits solve repetitive operational problems with practical, responsible AI — free of charge.",
    type: "website",
    locale: "en_US",
    siteName: "Capacité",
  },
  twitter: {
    card: "summary_large_image",
    title: "Capacité — AI Capacity for Civil Society",
    description: "Capacité helps small and medium-sized nonprofits solve repetitive operational problems with practical, responsible AI — free of charge.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${newsreader.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans selection:bg-primary/10 selection:text-primary">
        {children}
      </body>
    </html>
  );
}
