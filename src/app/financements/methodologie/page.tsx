import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/ui/Navbar';
import { Footer } from '@/components/ui/Footer';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { ShieldCheck, Target, MapPin, Scale, Euro, Users, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Méthodologie du Radar Financements — Coup d’Épaule',
  description:
    'Découvrez en toute transparence le barème de scoring, la formule mathématique multicritère et les sources de données du Radar Financements.',
};

export default function MethodologiePage() {
  const criteria = [
    {
      name: 'Alignement Thématique',
      weight: '30 %',
      icon: <Target className="h-5 w-5 text-forest" />,
      desc: 'Mesure la correspondance entre les objets statutaires de l’association (solidarité, éducation, environnement, etc.) et les axes prioritaires du financeur public ou de la fondation.',
    },
    {
      name: 'Périmètre Géographique & Administratif',
      weight: '25 %',
      icon: <MapPin className="h-5 w-5 text-forest" />,
      desc: 'Prend en compte la hiérarchie territoriale française (Commune → Département → Région → National → Union Européenne). Règle d’exclusion éliminatoire en cas d’incompatibilité.',
    },
    {
      name: 'Éligibilité Statutaire & Ancienneté',
      weight: '20 %',
      icon: <Scale className="h-5 w-5 text-forest" />,
      desc: 'Contrôle la conformité du statut (association loi 1901, ARUP, fondation) et le nombre d’années d’exercice comptable requis par le cahier des charges.',
    },
    {
      name: 'Montant & Capacité d’Absorption',
      weight: '15 %',
      icon: <Euro className="h-5 w-5 text-forest" />,
      desc: 'Vérifie que la subvention sollicitée est cohérente avec la taille de l’association. Une aide dépassant 2,5× le budget annuel de la structure déclenche une alerte de capacité d’absorption.',
    },
    {
      name: 'Publics Bénéficiaires Cibles',
      weight: '10 %',
      icon: <Users className="h-5 w-5 text-forest" />,
      desc: 'Évalue l’adéquation avec les publics prioritaires déclarés (jeunes, familles isolées, demandeurs d’emploi, résidents des quartiers prioritaires QPV).',
    },
  ];

  return (
    <>
      <Navbar />

      <main className="flex-1 py-12 sm:py-20 bg-paper">
        <Container size="narrow">
          {/* Header */}
          <div className="space-y-4 mb-12">
            <div className="inline-flex">
              <Badge variant="forest">Transparence algorithmique</Badge>
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl font-semibold tracking-tight text-ink">
              Méthodologie du Radar Financements
            </h1>
            <p className="text-base sm:text-lg text-muted leading-relaxed">
              Nous réfutons l’effet «\u00A0boîte noire\u00A0». Voici exactement comment sont calculées les notes de compatibilité des subventions présentées à votre association.
            </p>
          </div>

          <div className="prose prose-forest text-ink text-sm sm:text-base leading-relaxed space-y-8">
            {/* Section 1: Multicritère */}
            <section className="space-y-3">
              <h2 className="font-serif text-2xl font-semibold text-ink">
                1. La formule de calcul multicritère
              </h2>
              <p>
                Chaque subvention est évaluée sur une échelle de 0 à 100\u00A0% selon une combinaison linéaire pondérée de 5 dimensions objectives\u00A0:
              </p>

              <div className="p-4 rounded-xl border border-line bg-sand/30 font-mono text-xs text-ink-light my-4">
                Score Global = (Thématique × 0.30) + (Géographie × 0.25) + (Statut × 0.20) + (Financement × 0.15) + (Bénéficiaires × 0.10)
              </div>

              <div className="grid grid-cols-1 gap-4 not-prose my-6">
                {criteria.map((c, i) => (
                  <div key={i} className="p-4 rounded-xl border border-line bg-white shadow-sm flex items-start gap-4">
                    <div className="p-2.5 rounded-lg bg-forest/10 shrink-0">
                      {c.icon}
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-serif font-semibold text-ink text-base">
                          {c.name}
                        </h4>
                        <Badge variant="forest" size="sm">{c.weight}</Badge>
                      </div>
                      <p className="text-xs text-muted leading-relaxed">
                        {c.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 2: Blocker Rule */}
            <section className="space-y-3 pt-4">
              <h2 className="font-serif text-2xl font-semibold text-ink">
                2. La règle éliminatoire de non-éligibilité géographique
              </h2>
              <p>
                Certains moteurs de recherche généralistes génèrent des faux espoirs en proposant des aides réservées à d’autres régions. À Coup d’Épaule, la règle est formelle\u00A0:
              </p>
              <div className="p-5 rounded-xl border border-clay/30 bg-clay/10 text-xs sm:text-sm text-ink space-y-2">
                <p className="font-semibold text-clay">Règle bloquante :</p>
                <p className="leading-relaxed">
                  Si le périmètre géographique de la subvention ne recouvre pas le département d’action de l’association, le score géographique est automatiquement fixé à <strong>0\u00A0%</strong> et le score global plafonné à <strong>25\u00A0% au maximum</strong>.
                </p>
              </div>
            </section>

            {/* Section 3: Sources de données */}
            <section className="space-y-3 pt-4">
              <h2 className="font-serif text-2xl font-semibold text-ink">
                3. Provenance et fraîcheur des données
              </h2>
              <p>
                Notre catalogue est alimenté par deux flux distincts\u00A0:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-muted">
                <li>
                  <strong className="text-ink">L’API officielle Aides-territoires (beta.gouv.fr) :</strong> plateforme publique d’État recensant les dispositifs d’aides aux collectivités et aux associations.
                </li>
                <li>
                  <strong className="text-ink">La veille humaine manuelle de Coup d’Épaule :</strong> sélection rigoureuse des appels récurrents majeurs (FDVA, ADEME, Fondations privées d’intérêt général). Chaque fiche comporte une mention «\u00A0Vérifié le [Date]\u00A0».
                </li>
              </ul>
            </section>

            {/* Section 4: Absence de commission */}
            <section className="space-y-3 pt-4">
              <h2 className="font-serif text-2xl font-semibold text-ink">
                4. Zéro commission, zéro conflit d’intérêts
              </h2>
              <p>
                Contrairement à des plateformes commerciales qui prélèvent des commissions au succès (souvent entre 5 et 10\u00A0% du montant alloué), Coup d’Épaule est une initiative citoyenne régie par le principe de gratuité totale.
              </p>
              <p>
                100\u00A0% des fonds publics ou privés obtenus vont directement à votre association et au financement de votre mission de terrain.
              </p>
            </section>

            <div className="pt-8 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-4 not-prose">
              <div>
                <h4 className="font-serif font-semibold text-ink">Prêt à tester pour votre association\u00A0?</h4>
                <p className="text-xs text-muted">Le test prend moins de 2 minutes et ne nécessite aucune création de compte.</p>
              </div>
              <Link href="/financements">
                <Button variant="primary" size="md">
                  <span>Lancer une recherche</span>
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </main>

      <Footer />
    </>
  );
}
