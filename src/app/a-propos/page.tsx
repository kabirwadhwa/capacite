import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/ui/Navbar';
import { Footer } from '@/components/ui/Footer';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { ShieldCheck, Heart, Sparkles, Code2, Users, ArrowRight } from 'lucide-react';
import { valuesContent, scopeComparison } from '@/content/fr';

export const metadata: Metadata = {
  title: 'À propos & Manifeste — Coup d’Épaule',
  description:
    'Découvrez le manifeste, les valeurs citoyennes et l’équipe bénévole derrière l’initiative Coup d’Épaule.',
};

export default function AProposPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 py-12 sm:py-20 bg-paper">
        <Container size="narrow">
          {/* Header */}
          <div className="space-y-4 mb-12">
            <Badge variant="forest">Manifeste citoyen</Badge>
            <h1 className="font-serif text-3xl sm:text-5xl font-semibold tracking-tight text-ink">
              Pourquoi nous construisons Coup d’Épaule
            </h1>
            <p className="text-base sm:text-xl text-muted leading-relaxed">
              La technologie doit servir l’intérêt général, pas uniquement les grandes entreprises à gros budgets.
            </p>
          </div>

          {/* Core Manifeste Content */}
          <div className="prose prose-forest text-ink leading-relaxed space-y-6 text-sm sm:text-base border-t border-line pt-8">
            <p>
              En France, le tissu associatif compte plus de 1,5 million de structures. Ce sont elles qui logent les plus démunis, animent nos quartiers, restaurent la biodiversité et créent du lien social indispensable au quotidien.
            </p>

            <p>
              Pendant ce temps, les avancées spectaculaires de l’intelligence artificielle générative et de l’automatisation profitent presque exclusivement aux grands groupes privés et aux start-ups disposant d’équipes d’ingénieurs dédiées.
            </p>

            <div className="p-6 rounded-xl border border-line bg-sand/40 my-8">
              <h3 className="font-serif text-lg font-semibold text-forest mb-2">
                Notre conviction fondamentale
              </h3>
              <p className="text-ink text-sm sm:text-base italic">
                «\u00A0L’intelligence artificielle ne doit pas creuser le fossé entre le monde marchand et la société civile. Les associations méritent des outils sobres, pratiques et gratuits pour soulager leurs équipes et démultiplier leur impact sur le terrain.\u00A0»
              </p>
            </div>

            <h2 className="font-serif text-2xl font-semibold text-ink pt-4">
              Nos 4 principes non-négociables
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose my-6">
              {valuesContent.map((v, i) => (
                <div key={i} className="p-5 rounded-xl border border-line bg-white shadow-sm space-y-2">
                  <h4 className="font-serif font-semibold text-forest text-base">
                    {v.title}
                  </h4>
                  <p className="text-xs text-muted leading-relaxed">
                    {v.description}
                  </p>
                </div>
              ))}
            </div>

            <h2 className="font-serif text-2xl font-semibold text-ink pt-6">
              Un engagement de confiance
            </h2>

            <p>
              Nous savons combien les directeurs et coordinateurs d’associations sont régulièrement sollicités par des prestataires commerciaux ou des plateformes propriétaires promettant la lune.
            </p>

            <div className="not-prose my-6 p-6 rounded-xl border border-line bg-white shadow-sm">
              <h4 className="font-serif text-base font-semibold text-ink mb-4">
                La charte d’éthique Coup d’Épaule :
              </h4>
              <ul className="space-y-3 text-xs sm:text-sm text-muted">
                <li className="flex items-start gap-2.5">
                  <ShieldCheck className="h-5 w-5 text-forest shrink-0 mt-0.5" />
                  <span>
                    <strong>100\u00A0% bénévole :</strong> aucun membre de l’équipe ne perçoit de rémunération, d’honoraires ou de rétro-commission.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <ShieldCheck className="h-5 w-5 text-forest shrink-0 mt-0.5" />
                  <span>
                    <strong>Protection des usagers :</strong> aucune donnée personnelle issue des associations n’est réutilisée pour entraîner des algorithmes ou vendue à des tiers.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <ShieldCheck className="h-5 w-5 text-forest shrink-0 mt-0.5" />
                  <span>
                    <strong>Transmission de savoir :</strong> nous refusons toute boîte noire. Vous repartez avec le code, les accès et la formation nécessaire pour modifier l’outil vous-même.
                  </span>
                </li>
              </ul>
            </div>

            {/* Scope table */}
            <div className="not-prose my-10">
              <div className="border border-line rounded-xl overflow-hidden bg-white shadow-sm">
                <div className="p-5 border-b border-line bg-paper-warm">
                  <h3 className="font-serif text-lg font-semibold text-ink">
                    {scopeComparison.title}
                  </h3>
                  <p className="text-xs text-muted mt-1">{scopeComparison.subtitle}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-line">
                  <div className="p-5 space-y-3">
                    <span className="inline-flex px-2 py-0.5 text-xs font-semibold rounded bg-emerald-100 text-emerald-800">
                      Ce que nous faisons
                    </span>
                    <ul className="space-y-2 text-xs text-ink-light">
                      {scopeComparison.weDo.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-forest font-bold">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-5 space-y-3 bg-paper/30">
                    <span className="inline-flex px-2 py-0.5 text-xs font-semibold rounded bg-red-100 text-red-800">
                      Ce que nous refusons
                    </span>
                    <ul className="space-y-2 text-xs text-muted">
                      {scopeComparison.weDoNot.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-clay font-bold">✕</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-4 not-prose">
              <div>
                <h4 className="font-serif font-semibold text-ink">Vous souhaitez échanger avec nous\u00A0?</h4>
                <p className="text-xs text-muted">Que vous soyez une association ou un bénévole technique potentiel.</p>
              </div>
              <div className="flex items-center gap-3">
                <Link href="/diagnostic">
                  <Button variant="primary" size="md">
                    Demander un diagnostic
                  </Button>
                </Link>
                <Link href="/benevoles">
                  <Button variant="outline" size="md">
                    Rejoindre l’équipe
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
