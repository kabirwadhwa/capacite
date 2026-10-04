import React from 'react';
import type { Metadata } from 'next';
import { Navbar } from '@/components/ui/Navbar';
import { Footer } from '@/components/ui/Footer';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import VolunteerForm from '@/components/VolunteerForm';
import { HeartHandshake, Code2, Users2, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Devenir Bénévole Tech — Coup d’Épaule',
  description:
    'Mettez vos compétences en ingénierie logicielle, IA ou design au service des associations françaises d’intérêt général.',
};

export default function BenevolesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 py-12 sm:py-16 bg-paper">
        <Container size="narrow">
          {/* Header */}
          <div className="text-center space-y-4 mb-12">
            <div className="inline-flex">
              <Badge variant="clay">Engagement citoyen & tech solidaire</Badge>
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl font-semibold tracking-tight text-ink">
              Mettez vos compétences au service du monde associatif
            </h1>
            <p className="text-base sm:text-lg text-muted max-w-2xl mx-auto leading-relaxed">
              Développeurs, ingénieurs prompt/IA, designers UX ou chefs de produit\u00A0: donnez 2 à 4 heures par semaine pour délivrer des solutions utiles et concrètes à des associations loi 1901.
            </p>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            <div className="p-4 rounded-xl border border-line bg-white/60 space-y-1.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-forest/10 text-forest mb-2">
                <HeartHandshake className="h-4 w-4" />
              </div>
              <h4 className="font-serif font-medium text-ink text-sm">Impact direct et mesurable</h4>
              <p className="text-xs text-muted leading-relaxed">
                Vous voyez concrètement le temps économisé par les équipes associatives dès le premier mois.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-line bg-white/60 space-y-1.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-forest/10 text-forest mb-2">
                <Code2 className="h-4 w-4" />
              </div>
              <h4 className="font-serif font-medium text-ink text-sm">Projets courts & ciblés</h4>
              <p className="text-xs text-muted leading-relaxed">
                Pas de tunnel sans fin\u00A0: des sprints de 2 semaines pour livrer une fonctionnalité autonome.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-line bg-white/60 space-y-1.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-forest/10 text-forest mb-2">
                <Users2 className="h-4 w-4" />
              </div>
              <h4 className="font-serif font-medium text-ink text-sm">Collectif d’entraide</h4>
              <p className="text-xs text-muted leading-relaxed">
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
