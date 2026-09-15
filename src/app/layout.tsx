import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Sans, IBM_Plex_Mono, Newsreader } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const newsreader = Newsreader({
  variable: "--font-serif",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Capacité — Technology for Civil Society",
  description: "Capacité is a European public-interest technology initiative providing free AI tools and hands-on automation for civil society organisations.",
  keywords: ["nonprofit AI", "civic tech", "public interest technology", "nonprofit automation", "civil society AI"],
  authors: [{ name: "Capacité" }],
  openGraph: {
    title: "Capacité — Technology for Civil Society",
    description: "Capacité is a European public-interest technology initiative providing free AI tools and hands-on automation for civil society organisations.",
    type: "website",
    locale: "en_US",
    siteName: "Capacité",
  },
  twitter: {
    card: "summary_large_image",
    title: "Capacité — Technology for Civil Society",
    description: "Capacité is a European public-interest technology initiative providing free AI tools and hands-on automation for civil society organisations.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable} ${newsreader.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans selection:bg-primary/15 selection:text-primary">
        {children}
      </body>
    </html>
  );
}

