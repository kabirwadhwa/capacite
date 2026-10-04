import React from 'react';
import type { Metadata } from 'next';
import { Navbar } from '@/components/ui/Navbar';
import { Footer } from '@/components/ui/Footer';
import { Container } from '@/components/ui/Container';
import VolunteerForm from '@/components/VolunteerForm';
import { HeartHandshake, Code2, Users2, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Devenir Bénévole Tech — Capacité',
  description:
    'Mettez vos compétences en ingénierie logicielle, IA ou design au service des associations françaises d’intérêt général.',
};

export default function BenevolesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-28 sm:pt-36 pb-20 sm:pb-28">
        <Container size="narrow">
          {/* Header */}
          <div className="text-center space-y-4 mb-12">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#FFE5F2] border border-[#FFC6E5] text-xs font-black uppercase tracking-wider text-foreground">
              <span className="w-2 h-2 rounded-full bg-[#FF1BA3] animate-pulse" />
              <span>Engagement citoyen & tech solidaire</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-foreground leading-tight">
              Mettez vos compétences au service du monde associatif
            </h1>
            <p className="text-base sm:text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed font-medium">
              Développeurs, ingénieurs prompt/IA, designers UX ou chefs de produit : donnez 2 à 4 heures par semaine pour délivrer des solutions utiles et concrètes à des associations loi 1901.
            </p>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            <div className="ceartas-card p-5 rounded-2xl border border-[#FFC6E5] space-y-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFE5F2] border border-[#FFC6E5] text-[#FF1BA3] mb-2">
                <HeartHandshake className="h-5 w-5" />
              </div>
              <h4 className="font-bold text-foreground text-sm">Impact direct & mesurable</h4>
              <p className="text-xs text-foreground/70 leading-relaxed font-medium">
                Vous voyez concrètement le temps économisé par les équipes associatives dès le premier mois.
              </p>
            </div>

            <div className="ceartas-card p-5 rounded-2xl border border-[#FFC6E5] space-y-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFE5F2] border border-[#FFC6E5] text-[#FF1BA3] mb-2">
                <Code2 className="h-5 w-5" />
              </div>
              <h4 className="font-bold text-foreground text-sm">Projets courts & ciblés</h4>
              <p className="text-xs text-foreground/70 leading-relaxed font-medium">
                Pas de tunnel sans fin : des sprints de 2 semaines pour livrer une fonctionnalité autonome.
              </p>
            </div>

            <div className="ceartas-card p-5 rounded-2xl border border-[#FFC6E5] space-y-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFE5F2] border border-[#FFC6E5] text-[#FF1BA3] mb-2">
                <Users2 className="h-5 w-5" />
              </div>
              <h4 className="font-bold text-foreground text-sm">Collectif d’entraide</h4>
              <p className="text-xs text-foreground/70 leading-relaxed font-medium">
                Échangez entre pairs sur les meilleures pratiques d’IA sobre, d’éthique et de sécurité.
              </p>
            </div>
          </div>

          {/* Form */}
          <VolunteerForm />
        </Container>
      </main>
      <Footer />
    </>
  );
}
