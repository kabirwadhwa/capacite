import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/ui/Navbar';
import { Footer } from '@/components/ui/Footer';
import { Container } from '@/components/ui/Container';
import { ShieldCheck, Heart, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import { valuesContent } from '@/content/fr';

export const metadata: Metadata = {
  title: 'À propos & Manifeste — Capacité',
  description:
    'Découvrez le manifeste, les valeurs citoyennes et l’équipe bénévole derrière l’initiative Capacité.',
};

export default function AProposPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-28 sm:pt-36 pb-20 sm:pb-28">
        <Container size="narrow">
          {/* Header */}
          <div className="space-y-4 mb-12">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#FFE5F2] border border-[#FFC6E5] text-xs font-black uppercase tracking-wider text-foreground">
              <span className="w-2 h-2 rounded-full bg-[#FF1BA3] animate-pulse" />
              <span>Manifeste Citoyen</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-foreground leading-tight">
              Pourquoi nous construisons Capacité
            </h1>
            <p className="text-base sm:text-xl text-foreground/80 leading-relaxed font-medium">
              La technologie doit servir l’intérêt général, pas uniquement les multinationales dotées de budgets colossaux.
            </p>
          </div>

          {/* Core Manifeste Content */}
          <div className="space-y-8 text-sm sm:text-base text-foreground/85 leading-relaxed font-medium border-t border-[#FFC6E5] pt-8">
            <p>
              En France, le tissu associatif compte plus de 1,5 million de structures. Ce sont elles qui logent les plus démunis, animent nos quartiers, restaurent la biodiversité et créent du lien social indispensable au quotidien.
            </p>

            <p>
              Pendant ce temps, les avancées spectaculaires de l’intelligence artificielle générative et de l’automatisation profitent presque exclusivement aux grands groupes privés et aux start-ups disposant d’équipes d’ingénieurs dédiées.
            </p>

            <div className="p-6 sm:p-8 rounded-2xl border-2 border-[#FFC6E5] bg-[#FFE5F2]/40 my-8">
              <div className="flex items-center space-x-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#FF1BA3]" />
                <h3 className="text-sm font-black uppercase tracking-wider text-foreground">
                  Notre conviction fondamentale
                </h3>
              </div>
              <p className="text-base sm:text-lg font-bold text-foreground leading-relaxed italic">
                « L’intelligence artificielle ne doit pas creuser le fossé entre le monde marchand et la société civile. Les associations méritent des outils sobres, pratiques et gratuits pour soulager leurs équipes et démultiplier leur impact sur le terrain. »
              </p>
            </div>

            <h2 className="text-2xl font-black uppercase text-foreground pt-4">
              Nos principes fondateurs
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
              {valuesContent.map((v, i) => (
                <div key={i} className="ceartas-card p-6 rounded-2xl border border-[#FFC6E5] space-y-2">
                  <h4 className="text-base font-bold text-foreground">
                    {v.title}
                  </h4>
                  <p className="text-xs text-foreground/70 leading-relaxed font-medium">
                    {v.description}
                  </p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-black uppercase text-foreground pt-6">
              Un engagement de confiance
            </h2>

            <p>
              Nous savons combien les directeurs et coordinateurs d’associations sont régulièrement sollicités par des prestataires commerciaux ou des plateformes propriétaires promettant la lune.
            </p>

            <div className="ceartas-card my-6 p-6 sm:p-8 rounded-2xl border border-[#FFC6E5] space-y-4">
              <h4 className="text-sm font-black uppercase tracking-wider text-foreground mb-4">
                La charte d’éthique Capacité :
              </h4>
              <ul className="space-y-3.5 text-xs sm:text-sm text-foreground/80">
                <li className="flex items-start gap-2.5">
                  <ShieldCheck className="h-5 w-5 text-[#FF1BA3] shrink-0 mt-0.5" />
                  <span>
                    <strong>100% bénévole :</strong> aucun membre de l’équipe ne perçoit de rémunération, d’honoraires ou de rétro-commission.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <ShieldCheck className="h-5 w-5 text-[#FF1BA3] shrink-0 mt-0.5" />
                  <span>
                    <strong>Protection des usagers :</strong> aucune donnée personnelle issue des associations n’est réutilisée pour entraîner des algorithmes ou vendue à des tiers.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <ShieldCheck className="h-5 w-5 text-[#FF1BA3] shrink-0 mt-0.5" />
                  <span>
                    <strong>Transmission de savoir :</strong> nous refusons toute boîte noire. Vous repartez avec le code, les accès et la formation nécessaire pour modifier l’outil vous-même.
                  </span>
                </li>
              </ul>
            </div>

            <div className="pt-8 text-center sm:text-left flex flex-col sm:flex-row gap-4 items-center justify-between">
              <div>
                <h3 className="text-lg font-black uppercase text-foreground">Prêt à échanger avec nous ?</h3>
                <p className="text-xs text-foreground/70 font-medium">Le premier échange de 30 minutes est gratuit et sans engagement.</p>
              </div>
              <Link
                href="/diagnostic"
                className="ceartas-btn-primary inline-flex items-center px-6 py-3.5 text-sm font-black rounded-xl shadow-lg shadow-[#FF1BA3]/25"
              >
                Demander un diagnostic
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
