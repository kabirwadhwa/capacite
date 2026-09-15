import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Capacité — Technology for Civil Society",
  description: "Free AI tools and hands-on automation for nonprofits.",
  keywords: ["nonprofit AI", "civic tech", "public interest technology", "nonprofit automation", "civil society AI"],
  authors: [{ name: "Capacité" }],
  openGraph: {
    title: "Capacité — Technology for Civil Society",
    description: "Free AI tools and hands-on automation for nonprofits.",
    type: "website",
    locale: "en_US",
    siteName: "Capacité",
  },
  twitter: {
    card: "summary_large_image",
    title: "Capacité — Technology for Civil Society",
    description: "Free AI tools and hands-on automation for nonprofits.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${manrope.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans selection:bg-[#315C4C]/15 selection:text-[#315C4C]">
        {children}
      </body>
    </html>
  );
}

