import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/ui/Navbar';
import { Footer } from '@/components/ui/Footer';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Accordion } from '@/components/ui/Accordion';
import {
  heroContent,
  valuesContent,
  processSteps,
  scopeComparison,
  eligibilityCriteria,
  faqItems,
} from '@/content/fr';
import {
  HeartHandshake,
  ArrowRight,
  ShieldCheck,
  Search,
  Sparkles,
  ExternalLink,
  Target,
  Leaf,
  GraduationCap,
  Share2,
  CheckCircle2,
  Euro,
  Calendar,
  Building2,
} from 'lucide-react';
import { formatEuros } from '@/lib/utils';

export default function HomePage() {
  const iconMap: Record<string, React.ReactNode> = {
    Target: <Target className="h-5 w-5 text-forest" />,
    Leaf: <Leaf className="h-5 w-5 text-forest" />,
    GraduationCap: <GraduationCap className="h-5 w-5 text-forest" />,
    Share2: <Share2 className="h-5 w-5 text-forest" />,
  };

  const sampleGrants = [
    {
      title: 'FDVA 2 — Fonctionnement et innovation des associations',
      funder: 'Ministère de l’Éducation nationale et de la Jeunesse (DJEPVA)',
      level: 'Départemental / Régional',
      max: 15000,
      currency: 'EUR',
      theme: 'Toutes thématiques associatives',
      verifiedDate: 'Vérifié le 15 sept. 2026',
    },
    {
      title: 'Transition écologique solidaire & circuits courts',
      funder: 'ADEME — Agence de la transition écologique',
      level: 'National',
      max: 50000,
      currency: 'EUR',
      theme: 'Environnement & Climat',
      verifiedDate: 'Vérifié le 28 août 2026',
    },
    {
      title: 'Numérique inclusif et accompagnement des personnes isolées',
      funder: 'Fondation de France',
      level: 'National',
      max: 25000,
      currency: 'EUR',
      theme: 'Solidarité & Action sociale',
      verifiedDate: 'Vérifié le 10 sept. 2026',
    },
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'NGO',
    name: 'Coup d’Épaule',
    url: 'https://coupdepaule.fr',
    description:
      'Initiative citoyenne et bénévole aidant les associations loi 1901 à identifier et résoudre un problème opérationnel grâce à l’IA.',
    email: 'contact@coupdepaule.fr',
    areaServed: 'France',
    knowsAbout: ['Intelligence Artificielle', 'Subventions publiques', 'Vie associative', 'Automatisation'],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden pt-12 pb-16 sm:pt-20 sm:pb-24 border-b border-line bg-radial-gradient">
          <Container>
            <div className="max-w-3xl space-y-6">
              <div className="inline-flex">
                <Badge variant="forest" size="md">
                  {heroContent.badge}
                </Badge>
              </div>

              <h1 className="font-serif text-4xl sm:text-6xl font-semibold tracking-tight text-ink leading-[1.12]">
                {heroContent.title}
              </h1>

              <p className="text-lg sm:text-xl text-muted leading-relaxed">
                {heroContent.subtitle}
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Link href="/diagnostic">
                  <Button size="lg" variant="primary" className="w-full sm:w-auto">
                    <span>{heroContent.ctaPrimary}</span>
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
                <Link href="/financements">
                  <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                    <Search className="h-4 w-4 mr-2 text-forest" />
                    <span>{heroContent.ctaSecondary}</span>
                  </Button>
                </Link>
              </div>

              {/* Guarantees checklist */}
              <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 border-t border-line/70">
                {heroContent.keyPoints.map((point, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-medium text-ink-light">
                    <CheckCircle2 className="h-4 w-4 text-forest shrink-0" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* SECTION 1: VALEURS ET ENGAGEMENTS */}
        <section className="py-16 sm:py-24 bg-paper-warm border-b border-line">
          <Container>
            <div className="max-w-2xl mb-12 space-y-3">
              <span className="text-xs uppercase tracking-wider font-semibold text-forest">
                Notre cadre d’intervention
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold tracking-tight text-ink">
                L’IA utile, sans jargon et sans coût caché
              </h2>
              <p className="text-sm sm:text-base text-muted leading-relaxed">
                Nous intervenons avec une exigence de sobriété et de pédagogie. Pas de projets monstres qui s’enlisent, mais des solutions simples qui rendent vos équipes immédiatement autonomes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {valuesContent.map((val, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-line bg-white p-6 shadow-sm hover:border-line-dark transition-all space-y-3"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-forest/10">
                    {iconMap[val.icon] || <Sparkles className="h-5 w-5 text-forest" />}
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-ink">
                    {val.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-muted">
                    {val.description}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* SECTION 2: RADAR FINANCEMENTS PREVIEW */}
        <section className="py-16 sm:py-24 bg-paper border-b border-line">
          <Container>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-4">
              <div className="max-w-2xl space-y-3">
                <div className="inline-flex">
                  <Badge variant="clay">Outil ouvert & gratuit</Badge>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl font-semibold tracking-tight text-ink">
                  Radar Financements associatifs
                </h2>
                <p className="text-sm sm:text-base text-muted leading-relaxed">
                  Trouvez les subventions et appels à projets publics ou fondations adaptés à votre structure. Connecté à la base ouverte Aides-territoires (beta.gouv.fr) et à nos vérifications manuelles.
                </p>
              </div>

              <div>
                <Link href="/financements">
                  <Button variant="outline" size="md">
                    <span>Accéder au moteur de recherche</span>
                    <ArrowRight className="h-4 w-4 ml-1.5" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Grant preview cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {sampleGrants.map((grant, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-line bg-white p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-all"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <Badge variant="sand" size="sm">
                        {grant.level}
                      </Badge>
                      <span className="text-[11px] text-muted font-medium">
                        {grant.verifiedDate}
                      </span>
                    </div>

                    <h4 className="font-serif text-lg font-semibold text-ink leading-snug">
                      {grant.title}
                    </h4>

                    <div className="space-y-1 text-xs text-muted">
                      <div className="flex items-center gap-1.5">
                        <Building2 className="h-3.5 w-3.5 text-forest" />
                        <span>{grant.funder}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Euro className="h-3.5 w-3.5 text-forest" />
                        <span>Jusqu’à {formatEuros(grant.max)}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-5 mt-5 border-t border-line/60">
                    <Link
                      href="/financements"
                      className="inline-flex items-center text-xs font-semibold text-forest hover:text-forest-dark transition-colors"
                    >
                      <span>Vérifier l’éligibilité de mon association</span>
                      <ArrowRight className="h-3.5 w-3.5 ml-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-xs text-muted">
                Zéro abonnement · Zéro commission sur subventions obtenues · Données publiques et vérifiées.
              </p>
            </div>
          </Container>
        </section>

        {/* SECTION 3: LES 4 ÉTAPES DE L'ACCOMPAGNEMENT */}
        <section className="py-16 sm:py-24 bg-paper-warm border-b border-line">
          <Container>
            <div className="max-w-2xl mb-12 space-y-3">
              <span className="text-xs uppercase tracking-wider font-semibold text-forest">
                Méthode claire
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold tracking-tight text-ink">
                Comment se déroule un accompagnement
              </h2>
              <p className="text-sm sm:text-base text-muted leading-relaxed">
                De l’identification du blocage à la pleine autonomie de vos équipes en 4 étapes simples.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-xl border border-line bg-white shadow-sm space-y-3 relative"
                >
                  <span className="font-serif text-3xl font-semibold text-forest/40">
                    {step.step}
                  </span>
                  <h4 className="font-serif text-lg font-semibold text-ink">
                    {step.title}
                  </h4>
                  <p className="text-xs leading-relaxed text-muted">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* SECTION 4: TABLEAU COMPARATIF CE QUE NOUS FAISONS / REFUSONS */}
        <section className="py-16 sm:py-24 bg-paper border-b border-line">
          <Container size="narrow">
            <div className="text-center mb-12 space-y-3">
              <span className="text-xs uppercase tracking-wider font-semibold text-forest">
                Garantie de confiance
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold tracking-tight text-ink">
                {scopeComparison.title}
              </h2>
              <p className="text-sm sm:text-base text-muted max-w-xl mx-auto">
                {scopeComparison.subtitle}
              </p>
            </div>

            <div className="border border-line rounded-xl overflow-hidden bg-white shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-line">
                <div className="p-6 space-y-4">
                  <span className="inline-flex px-2.5 py-1 text-xs font-semibold rounded-md bg-emerald-100 text-emerald-800">
                    ✓ Ce que nous réalisons
                  </span>
                  <ul className="space-y-3 text-xs leading-relaxed text-ink">
                    {scopeComparison.weDo.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="text-forest font-bold mt-0.5">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-6 space-y-4 bg-paper/30">
                  <span className="inline-flex px-2.5 py-1 text-xs font-semibold rounded-md bg-red-100 text-red-800">
                    ✕ Ce que nous refusons
                  </span>
                  <ul className="space-y-3 text-xs leading-relaxed text-muted">
                    {scopeComparison.weDoNot.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="text-clay font-bold mt-0.5">✕</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* SECTION 5: CRITÈRES D'ÉLIGIBILITÉ */}
        <section className="py-16 sm:py-24 bg-paper-warm border-b border-line">
          <Container size="narrow">
            <div className="text-center mb-12 space-y-3">
              <span className="text-xs uppercase tracking-wider font-semibold text-forest">
                Candidater
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold tracking-tight text-ink">
                Votre association peut-elle candidater\u00A0?
              </h2>
              <p className="text-sm sm:text-base text-muted max-w-xl mx-auto">
                Nos bénévoles priorisent les structures qui manquent de ressources informatiques internes.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {eligibilityCriteria.map((c, i) => (
                <div key={i} className="p-5 rounded-xl border border-line bg-white shadow-sm space-y-1.5">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-forest" />
                    <h4 className="font-serif font-semibold text-ink text-base">{c.label}</h4>
                  </div>
                  <p className="text-xs text-muted leading-relaxed pl-6">{c.detail}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link href="/diagnostic">
                <Button variant="primary" size="lg">
                  Déposer une demande de diagnostic
                </Button>
              </Link>
            </div>
          </Container>
        </section>

        {/* SECTION 6: FAQ ACCORDION */}
        <section className="py-16 sm:py-24 bg-paper border-b border-line">
          <Container size="narrow">
            <div className="text-center mb-12 space-y-3">
              <span className="text-xs uppercase tracking-wider font-semibold text-forest">
                Questions fréquentes
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold tracking-tight text-ink">
                Les questions légitimes d’un directeur associatif
              </h2>
              <p className="text-sm sm:text-base text-muted max-w-xl mx-auto">
                Nous répondons en toute transparence à vos interrogations sur la gratuité, les données et la technique.
              </p>
            </div>

            <Accordion items={faqItems} />
          </Container>
        </section>

        {/* SECTION 7: CTA FINAL */}
        <section className="py-16 sm:py-20 bg-forest text-white">
          <Container size="narrow">
            <div className="text-center space-y-6">
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold tracking-tight">
                Prêt à alléger le quotidien de votre équipe\u00A0?
              </h2>
              <p className="text-base text-forest-subtle max-w-xl mx-auto leading-relaxed">
                30 minutes d’échange pour cartographier vos besoins et vous proposer une première automatisation ou vous orienter vers les bons financements.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link href="/diagnostic">
                  <Button size="lg" variant="clay" className="w-full sm:w-auto">
                    Demander un diagnostic gratuit
                  </Button>
                </Link>
                <Link href="/benevoles">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10"
                  >
                    Rejoindre comme bénévole tech
                  </Button>
                </Link>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
