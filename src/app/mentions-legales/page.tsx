import React from 'react';
import type { Metadata } from 'next';
import { Navbar } from '@/components/ui/Navbar';
import { Footer } from '@/components/ui/Footer';
import { Container } from '@/components/ui/Container';

export const metadata: Metadata = {
  title: 'Mentions Légales — Coup d’Épaule',
  description: 'Mentions légales et informations obligatoires sur l’éditeur et l’hébergement du site coupdepaule.fr.',
};

export default function MentionsLegalesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 py-12 sm:py-16 bg-paper">
        <Container size="narrow">
          <div className="space-y-3 mb-10">
            <span className="text-xs uppercase tracking-wider font-semibold text-forest">
              Transparence & Droit
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-ink">
              Mentions légales
            </h1>
            <p className="text-sm text-muted">
              Dernière mise à jour\u00A0: 4 octobre 2026
            </p>
          </div>

          <div className="prose prose-forest text-ink text-sm sm:text-base leading-relaxed space-y-6">
            <section className="space-y-2">
              <h2 className="font-serif text-xl font-semibold text-ink">
                1. Éditeur du site
              </h2>
              <p>
                Le site internet accessible à l’adresse <strong>coupdepaule.fr</strong> est édité par le collectif bénévole et citoyen <strong>Coup d’Épaule</strong> (initiative associative régie par la loi du 1er juillet 1901).
              </p>
              <p>
                <strong>Adresse de contact électronique\u00A0:</strong>{' '}
                <a href="mailto:contact@coupdepaule.fr" className="text-forest underline">
                  contact@coupdepaule.fr
                </a>
              </p>
              <p>
                <strong>Directeur de la publication\u00A0:</strong> Kabir Wadhwa, pour le collectif Coup d’Épaule.
              </p>
            </section>

            <section className="space-y-2 pt-4">
              <h2 className="font-serif text-xl font-semibold text-ink">
                2. Hébergement de l’application
              </h2>
              <p>
                Le site et les bases de données sont hébergés par la société\u00A0:
              </p>
              <div className="p-4 rounded-lg border border-line bg-white/60 text-sm">
                <p><strong>Railway Corporation</strong></p>
                <p>548 Market St, PMB 68956</p>
                <p>San Francisco, CA 94104, USA</p>
                <p>Site web\u00A0: <a href="https://railway.com" target="_blank" rel="noopener noreferrer" className="text-forest underline">https://railway.com</a></p>
              </div>
            </section>

            <section className="space-y-2 pt-4">
              <h2 className="font-serif text-xl font-semibold text-ink">
                3. Propriété intellectuelle et code source
              </h2>
              <p>
                Le code source de la plateforme Coup d’Épaule et du module Radar Financements est un bien commun publié sous licence libre et open source sur GitHub. Vous êtes libre de l’auditer, de l’adapter et de le réutiliser dans le respect des termes de la licence libre applicable.
              </p>
            </section>

            <section className="space-y-2 pt-4">
              <h2 className="font-serif text-xl font-semibold text-ink">
                4. Nature bénévole et indépendance
              </h2>
              <p>
                Coup d’Épaule est un collectif bénévole indépendant. Il n’a aucun lien d’affiliation, d’actionnariat ou d’intérêt commercial avec les fournisseurs de solutions d’IA (OpenAI, Anthropic, Google) ou les éditeurs de logiciels tiers mentionnés sur la plateforme.
              </p>
            </section>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
