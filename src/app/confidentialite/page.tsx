import React from 'react';
import type { Metadata } from 'next';
import { Navbar } from '@/components/ui/Navbar';
import { Footer } from '@/components/ui/Footer';
import { Container } from '@/components/ui/Container';

export const metadata: Metadata = {
  title: 'Politique de Confidentialité & RGPD — Coup d’Épaule',
  description: 'Politique de protection des données personnelles et engagements RGPD de Coup d’Épaule.',
};

export default function ConfidentialitePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 py-12 sm:py-16 bg-paper">
        <Container size="narrow">
          <div className="space-y-3 mb-10">
            <span className="text-xs uppercase tracking-wider font-semibold text-forest">
              Protection des données (RGPD)
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-ink">
              Politique de confidentialité
            </h1>
            <p className="text-sm text-muted">
              Engagement de transparence et conformité CNIL / Règlement Général sur la Protection des Données (RGPD).
            </p>
          </div>

          <div className="prose prose-forest text-ink text-sm sm:text-base leading-relaxed space-y-6">
            <section className="space-y-2">
              <h2 className="font-serif text-xl font-semibold text-ink">
                1. Responsable de traitement
              </h2>
              <p>
                Le responsable du traitement des données à caractère personnel collectées sur ce site est le collectif citoyen <strong>Coup d’Épaule</strong>.
                Contact DPO / Référent données\u00A0: <a href="mailto:contact@coupdepaule.fr" className="text-forest underline">contact@coupdepaule.fr</a>.
              </p>
            </section>

            <section className="space-y-2 pt-4">
              <h2 className="font-serif text-xl font-semibold text-ink">
                2. Données collectées et finalités
              </h2>
              <p>
                Nous collectons uniquement les données strictement nécessaires au bon déroulement de nos actions bénévoles\u00A0:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-muted">
                <li>
                  <strong className="text-ink">Formulaire de diagnostic associatif :</strong> nom de l’association, RNA/Siren, coordonnées du représentant (nom, prénom, email, téléphone facultatif), description de la problématique opérationnelle. <em>Finalité\u00A0:</em> qualifier le besoin et planifier l’appel de cadrage de 30 minutes.
                </li>
                <li>
                  <strong className="text-ink">Formulaire d’engagement bénévole :</strong> nom, email, compétences techniques, motivation, disponibilités hebdomadaires. <em>Finalité\u00A0:</em> mise en relation avec des missions adaptées.
                </li>
              </ul>
            </section>

            <section className="space-y-2 pt-4">
              <h2 className="font-serif text-xl font-semibold text-ink">
                3. Absence de cookies publicitaires ou de traçage
              </h2>
              <p>
                Le site Coup d’Épaule n’utilise <strong>aucun cookie tiers</strong>, aucun pixel de suivi publicitaire et aucun service de profilage intrusif. La navigation sur le site ne requiert donc aucun bandeau cookie bloquant ou coercitif.
              </p>
            </section>

            <section className="space-y-2 pt-4">
              <h2 className="font-serif text-xl font-semibold text-ink">
                4. Durée de conservation et purge automatique
              </h2>
              <p>
                Les dossiers associatifs et candidatures de bénévoles sont conservés pour une durée maximale de <strong>24 mois</strong> à compter de leur réception, afin d’assurer le suivi des projets. Un script automatique de purge supprime ou anonymise définitivement les données excédant cette période.
              </p>
            </section>

            <section className="space-y-2 pt-4">
              <h2 className="font-serif text-xl font-semibold text-ink">
                5. Sécurité et non-cession
              </h2>
              <p>
                Vos informations ne sont <strong>jamais vendues, louées ou cédées</strong> à des fins commerciales. Elles ne sont partagées avec aucun tiers non autorisé. Les communications transactionnelles (confirmations de réception) transitent par le service européen Brevo (ex-Sendinblue) dans le cadre d’un accord de sous-traitance conforme au RGPD.
              </p>
            </section>

            <section className="space-y-2 pt-4">
              <h2 className="font-serif text-xl font-semibold text-ink">
                6. Vos droits (Accès, Rectification, Suppression)
              </h2>
              <p>
                Conformément aux articles 15 à 22 du RGPD, vous disposez à tout moment d’un droit d’accès, de rectification, de portabilité et de suppression des données vous concernant.
              </p>
              <p>
                Pour exercer ce droit, adressez un simple email à\u00A0:{' '}
                <a href="mailto:contact@coupdepaule.fr" className="text-forest underline font-medium">
                  contact@coupdepaule.fr
                </a>.
              </p>
              <p className="text-xs text-muted">
                Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une réclamation auprès de la Commission Nationale de l’Informatique et des Libertés (CNIL — www.cnil.fr).
              </p>
            </section>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
