import type { Metadata, Viewport } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#2F5D4E",
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://coupdepaule.fr"),
  title: {
    default: "Coup d’Épaule — L’IA et l’automatisation au service des associations",
    template: "%s | Coup d’Épaule",
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
  authors: [{ name: "Coup d’Épaule", url: "https://coupdepaule.fr" }],
  creator: "Coup d’Épaule",
  publisher: "Coup d’Épaule",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Coup d’Épaule — L’IA bénévole au service des associations",
    description:
      "Aide pratique, gratuite et sans jargon pour les associations françaises. Diagnostic ciblé, solutions légères et pérennes.",
    url: "https://coupdepaule.fr",
    siteName: "Coup d’Épaule",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Coup d’Épaule — L’IA bénévole au service des associations",
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
    <html lang="fr" className={`${fraunces.variable} ${manrope.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-paper text-ink font-sans selection:bg-forest/15 selection:text-forest">
        {children}
      </body>
    </html>
  );
}
