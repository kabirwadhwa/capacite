import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#FF1BA3",
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://coupdepaule.fr"),
  title: {
    default: "Capacité — L’IA et l’automatisation au service des associations",
    template: "%s | Capacité",
  },
  description:
    "Initiative citoyenne et bénévole en France. Nous aidons gratuitement les associations loi 1901 à identifier et résoudre un problème opérationnel réel grâce à l’IA et aux outils légers.",
  keywords: [
    "association loi 1901",
    "bénévolat IA",
    "civic tech France",
    "subventions associations",
    "radar financements",
    "automatisation solidaire",
    "transition numérique associations",
  ],
  authors: [{ name: "Capacité", url: "https://coupdepaule.fr" }],
  creator: "Capacité",
  publisher: "Capacité",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://coupdepaule.fr",
    siteName: "Capacité",
    title: "Capacité — L’IA bénévole au service des associations",
    description:
      "Aide pratique, gratuite et sans jargon pour les associations françaises. Diagnostic ciblé, solutions légères et pérennes.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Capacité — L’IA bénévole au service des associations",
    description:
      "Aide pratique, gratuite et sans jargon pour les associations françaises.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${plusJakartaSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#FFF7FC] text-black font-sans selection:bg-[#FF1BA3]/20 selection:text-[#FF1BA3]">
        {children}
      </body>
    </html>
  );
}
