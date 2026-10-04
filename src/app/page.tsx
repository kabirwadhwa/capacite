import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import WorkflowVisualizer from "@/components/WorkflowVisualizer";
import ImpactDashboard from "@/components/ImpactDashboard";
import ApplicationForm from "@/components/ApplicationForm";
import VolunteerForm from "@/components/VolunteerForm";

import {
  MessageSquare,
  Database,
  FileSpreadsheet,
  Globe,
  Calendar,
  Search,
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Sparkles,
  Zap,
  Clock,
  Heart,
  Users,
  Compass,
  FileText,
  Layers,
} from "lucide-react";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main className="flex-grow pt-28 sm:pt-36">
        {/* ================= SECTION 1: HERO (CEARTAS STYLE) ================= */}
        <section id="hero" className="relative px-4 sm:px-6 md:px-8 max-w-6xl mx-auto text-center space-y-8 pb-16 sm:pb-24">
          {/* Eyebrow Pill Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#FFE5F2] border border-[#FFC6E5] text-xs font-black tracking-wider uppercase text-foreground shadow-sm animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-[#FF1BA3] animate-pulse" />
            <span>Capacité IA Pour La Société Civile · Pilote 100% Gratuit</span>
          </div>

          {/* Huge Display Headline */}
          <div className="space-y-2 animate-slide-up">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-foreground uppercase leading-[0.95]">
              Donnez à votre mission <br />
              <span className="text-[#FF1BA3] underline decoration-[#FFC6E5] decoration-wavy decoration-2 underline-offset-8">
                plus de capacité.
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl font-medium text-foreground/80 leading-relaxed animate-fade-in">
            Capacité aide les associations et ONG françaises à résoudre leurs goulots d’étranglement opérationnels grâce à l’IA et l’automatisation — 100% bénévolement.
          </p>

          <p className="max-w-xl mx-auto text-xs sm:text-sm text-foreground/60 leading-relaxed font-medium">
            Vous nous exposez un problème concret. Nous concevons une solution légère et sur mesure, nous la testons avec vos équipes et nous vous formons pour que vous restiez totalement autonomes.
          </p>

          {/* Ceartas Dual CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 animate-fade-in">
            <a
              href="#application"
              className="ceartas-btn-primary w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-2xl text-sm sm:text-base font-black tracking-tight shadow-xl shadow-[#FF1BA3]/30"
            >
              Démarrer le diagnostic gratuit
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
            <a
              href="#comment-ca-marche"
              className="ceartas-btn-secondary w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-2xl text-sm sm:text-base font-bold tracking-tight"
            >
              Voir la méthode en 4 semaines
            </a>
          </div>

          {/* Trust Statement Row */}
          <div className="pt-6">
            <div className="inline-flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs font-bold uppercase tracking-wider text-foreground/50 py-2 px-4 rounded-full bg-[#FFE5F2]/40 border border-[#FFC6E5]/60">
              <span className="flex items-center"><Sparkles className="w-3 h-3 text-[#FF1BA3] mr-1" /> Pilote 100% bénévole</span>
              <span>·</span>
              <span>Zéro vente logicielle</span>
              <span>·</span>
              <span>Contrôle humain</span>
              <span>·</span>
              <span>Dédié aux associations loi 1901</span>
            </div>
          </div>

          {/* Hero Visual Block */}
          <div className="pt-10">
            <WorkflowVisualizer />
          </div>
        </section>

        {/* ================= SECTION 2: THE PROBLEM ================= */}
        <section id="problem" className="py-20 sm:py-28 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-[#FFF7FC] via-[#FFE5F2]/30 to-[#FFF7FC] border-y border-[#FFC6E5]">
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#FFE5F2] border border-[#FFC6E5] text-[10px] font-black uppercase tracking-widest text-[#FF1BA3]">
                Pourquoi Capacité existe
              </span>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-foreground uppercase leading-tight max-w-4xl mx-auto">
                L’IA ne doit pas être réservée aux multinationales dotées de budgets colossaux.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-foreground/80 leading-relaxed text-sm sm:text-base font-medium">
              <div className="ceartas-card rounded-2xl p-6 sm:p-8 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#FFE5F2] border border-[#FFC6E5] flex items-center justify-center text-[#FF1BA3] font-bold">
                  01
                </div>
                <h3 className="text-lg font-bold text-foreground">Le privilège des grands groupes</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Les entreprises utilisent massivement l’IA pour éliminer les tâches répétitives, accélérer leurs analyses et libérer du temps pour leurs équipes. Elles disposent de budgets d’ingénierie et de laboratoires dédiés.
                </p>
              </div>

              <div className="ceartas-card rounded-2xl p-6 sm:p-8 space-y-3 border-[#FF1BA3]/40">
                <div className="w-10 h-10 rounded-xl bg-[#FF1BA3] text-white flex items-center justify-center font-bold shadow-md shadow-[#FF1BA3]/30">
                  02
                </div>
                <h3 className="text-lg font-bold text-foreground">La réalité du monde associatif</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Pendant ce temps, les directeurs et bénévoles d’associations passent des heures précieuses sur de la saisie manuelle, des demandes récurrentes et des bilans administratifs — autant de temps dérobé à leur mission de terrain.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 3: WHAT WE SOLVE ================= */}
        <section id="ce-que-nous-resolvons" className="py-20 sm:py-28 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#FFE5F2] border border-[#FFC6E5] text-[10px] font-black uppercase tracking-widest text-[#FF1BA3]">
              Nos Domaines D’Intervention
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-foreground uppercase">
              Ce que nous pouvons automatiser
            </h2>
            <p className="text-base sm:text-lg text-foreground/75 font-medium">
              Nous ciblons des flux de travail récurrents et bien délimités où l’IA apporte un soulagement immédiat sans complexité technique superflue.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="ceartas-card rounded-2xl p-7 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#FFE5F2] border border-[#FFC6E5] flex items-center justify-center text-[#FF1BA3] group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-foreground">
                  1. Communications & requêtes
                </h3>
                <p className="mt-2 text-sm text-foreground/70 leading-relaxed font-medium">
                  Catégorisation automatique des demandes d’aide reçues, préparation de brouillons personnalisés et routage sous validation humaine.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#FFC6E5]/40 flex items-center justify-between text-xs font-bold text-[#FF1BA3]">
                <span>Triage & Routage</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>

            {/* Card 2 */}
            <div className="ceartas-card rounded-2xl p-7 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#FFE5F2] border border-[#FFC6E5] flex items-center justify-center text-[#FF1BA3] group-hover:scale-110 transition-transform">
                  <Database className="w-6 h-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-foreground">
                  2. Base de connaissances interne
                </h3>
                <p className="mt-2 text-sm text-foreground/70 leading-relaxed font-medium">
                  Rendre vos statuts, guides de procédures et historiques d’actions immédiatement consultables en langage naturel par votre équipe.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#FFC6E5]/40 flex items-center justify-between text-xs font-bold text-[#FF1BA3]">
                <span>Recherche Documentaire</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>

            {/* Card 3 */}
            <div className="ceartas-card rounded-2xl p-7 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#FFE5F2] border border-[#FFC6E5] flex items-center justify-center text-[#FF1BA3] group-hover:scale-110 transition-transform">
                  <FileSpreadsheet className="w-6 h-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-foreground">
                  3. Synthèse & rapports d’activité
                </h3>
                <p className="mt-2 text-sm text-foreground/70 leading-relaxed font-medium">
                  Alléger le temps de consolidation pour les bilans annuels, les rapports d’impact aux bailleurs et les assemblées générales.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#FFC6E5]/40 flex items-center justify-between text-xs font-bold text-[#FF1BA3]">
                <span>Bilans Financeurs</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>

            {/* Card 4 */}
            <div className="ceartas-card rounded-2xl p-7 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#FFE5F2] border border-[#FFC6E5] flex items-center justify-center text-[#FF1BA3] group-hover:scale-110 transition-transform">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-foreground">
                  4. Traduction & accessibilité
                </h3>
                <p className="mt-2 text-sm text-foreground/70 leading-relaxed font-medium">
                  Adapter vos supports aux bénéficiaires allophones et simplifier des démarches complexes en langage facile à lire et à comprendre (FALC).
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#FFC6E5]/40 flex items-center justify-between text-xs font-bold text-[#FF1BA3]">
                <span>Multilingue & FALC</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>

            {/* Card 5 */}
            <div className="ceartas-card rounded-2xl p-7 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#FFE5F2] border border-[#FFC6E5] flex items-center justify-center text-[#FF1BA3] group-hover:scale-110 transition-transform">
                  <Calendar className="w-6 h-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-foreground">
                  5. Gestion & onboarding bénévoles
                </h3>
                <p className="mt-2 text-sm text-foreground/70 leading-relaxed font-medium">
                  Automatiser les formulaires d’accueil, l’envoi des plannings, les rappels et les réponses aux questions fréquentes des nouveaux volontaires.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#FFC6E5]/40 flex items-center justify-between text-xs font-bold text-[#FF1BA3]">
                <span>Accueil & Planning</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>

            {/* Card 6 */}
            <div className="ceartas-card rounded-2xl p-7 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#FFE5F2] border border-[#FFC6E5] flex items-center justify-center text-[#FF1BA3] group-hover:scale-110 transition-transform">
                  <Search className="w-6 h-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-foreground">
                  6. Recherche de financements
                </h3>
                <p className="mt-2 text-sm text-foreground/70 leading-relaxed font-medium">
                  Cibler rapidement les appels à projets publics (FDVA, ADEME...) et privés en phase avec votre objet statutaire grâce à notre outil dédié.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#FFC6E5]/40 flex items-center justify-between text-xs font-bold text-[#FF1BA3]">
                <span>Radar Subventions</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          </div>

          <div className="text-center pt-2">
            <div className="inline-block p-4 rounded-2xl bg-[#FFE5F2]/50 border border-[#FFC6E5]">
              <p className="text-sm font-bold text-foreground">
                Vous n’êtes pas certain que votre besoin puisse être automatisé ?{" "}
                <a href="#application" className="text-[#FF1BA3] underline decoration-[#FF1BA3] underline-offset-4 hover:text-[#E00087] font-black">
                  C’est exactement l’objet du diagnostic initial.
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* ================= RADAR FINANCEMENTS GATEWAY (BENTO CALLOUT) ================= */}
        <section className="px-4 sm:px-6 md:px-8 max-w-6xl mx-auto pb-16">
          <div className="ceartas-card rounded-3xl p-8 sm:p-12 border-2 border-[#FF1BA3] bg-gradient-to-br from-white via-[#FFF7FC] to-[#FFE5F2]/60 relative overflow-hidden shadow-xl shadow-[#FF1BA3]/10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-radial from-[#FF1BA3]/20 via-[#FF71C4]/10 to-transparent blur-3xl pointer-events-none" />
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
              <div className="space-y-4 max-w-2xl text-left">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#FFE5F2] border border-[#FFC6E5] text-[10px] font-black uppercase tracking-widest text-[#FF1BA3]">
                  <Sparkles className="w-3 h-3" />
                  <span>Outil Gratuit En Libre Accès</span>
                </div>
                <h3 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-foreground leading-tight">
                  Radar Financements : Trouvez vos subventions en 30 secondes
                </h3>
                <p className="text-sm sm:text-base text-foreground/80 font-medium leading-relaxed">
                  Notre outil exclusif analyse votre association, vos thématiques et votre budget pour identifier instantanément les subventions d’État (FDVA, ministères), fonds régionaux et fondations privées éligibles.
                </p>
                <div className="flex flex-wrap gap-4 text-xs font-bold text-foreground/70 pt-1">
                  <span className="flex items-center"><CheckCircle2 className="w-4 h-4 text-[#FF1BA3] mr-1.5" /> 100% vérifié pour les assos 1901</span>
                  <span className="flex items-center"><CheckCircle2 className="w-4 h-4 text-[#FF1BA3] mr-1.5" /> Extraction automatique depuis URL</span>
                  <span className="flex items-center"><CheckCircle2 className="w-4 h-4 text-[#FF1BA3] mr-1.5" /> Zéro inscription requise</span>
                </div>
              </div>

              <div className="flex-shrink-0 w-full lg:w-auto">
                <Link
                  href="/financements"
                  className="ceartas-btn-primary w-full lg:w-auto inline-flex items-center justify-center px-8 py-5 rounded-2xl text-base font-black tracking-tight shadow-xl shadow-[#FF1BA3]/30"
                >
                  Tester le Radar Financements
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 4: HOW IT WORKS ================= */}
        <section id="comment-ca-marche" className="py-20 sm:py-28 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-[#FFF7FC] via-[#FFE5F2]/30 to-[#FFF7FC] border-y border-[#FFC6E5]">
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center max-w-2xl mx-auto space-y-4">
              <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#FFE5F2] border border-[#FFC6E5] text-[10px] font-black uppercase tracking-widest text-[#FF1BA3]">
                Notre Méthode
              </span>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-foreground uppercase">
                Un problème. Quatre semaines.
              </h2>
              <p className="text-base sm:text-lg text-foreground/75 font-medium">
                Nous travaillons main dans la main avec votre équipe pour délivrer un résultat mesurable et durable, sans tunnel de projet interminable.
              </p>
            </div>

            {/* 4-Step Pipeline */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Step 1 */}
              <div className="ceartas-card rounded-2xl p-6 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#FF1BA3] border border-[#FFC6E5] px-2.5 py-1 rounded-full bg-[#FFE5F2]">
                    Semaine 1
                  </span>
                  <h3 className="mt-4 text-base font-bold text-foreground">
                    1. Diagnostic & Cadrage
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-foreground/70 leading-relaxed font-medium">
                    Un échange visio de 30 minutes pour isoler un seul goulot d'étranglement opérationnel et définir des critères d'acceptation clairs.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#FFC6E5]/40 text-xs font-bold text-foreground/60">
                  Livrable : Spécification en 1 page
                </div>
              </div>

              {/* Step 2 */}
              <div className="ceartas-card rounded-2xl p-6 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#FF1BA3] border border-[#FFC6E5] px-2.5 py-1 rounded-full bg-[#FFE5F2]">
                    Semaines 2-3
                  </span>
                  <h3 className="mt-4 text-base font-bold text-foreground">
                    2. Développement Ciblé
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-foreground/70 leading-relaxed font-medium">
                    Nos bénévoles techniques conçoivent l’automatisation sur vos outils existants (scripts, connecteurs, invite IA), sans abonnement imposé.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#FFC6E5]/40 text-xs font-bold text-foreground/60">
                  Livrable : Prototype opérationnel
                </div>
              </div>

              {/* Step 3 */}
              <div className="ceartas-card rounded-2xl p-6 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#FF1BA3] border border-[#FFC6E5] px-2.5 py-1 rounded-full bg-[#FFE5F2]">
                    Semaines 3-4
                  </span>
                  <h3 className="mt-4 text-base font-bold text-foreground">
                    3. Déploiement & Tests
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-foreground/70 leading-relaxed font-medium">
                    Mise à l’épreuve sur des données réelles, ajustements ergonomiques et validation de la conformité RGPD avec vos référents.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#FFC6E5]/40 text-xs font-bold text-foreground/60">
                  Livrable : Solution en production
                </div>
              </div>

              {/* Step 4 */}
              <div className="ceartas-card rounded-2xl p-6 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#FF1BA3] border border-[#FFC6E5] px-2.5 py-1 rounded-full bg-[#FFE5F2]">
                    Semaine 4+
                  </span>
                  <h3 className="mt-4 text-base font-bold text-foreground">
                    4. Formation & Autonomie
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-foreground/70 leading-relaxed font-medium">
                    Session de prise en main en visio avec vos salariés et bénévoles, tutoriel vidéo et remise de la documentation complète.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#FFC6E5]/40 text-xs font-bold text-foreground/60">
                  Livrable : Guide d'autonomie complète
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 5: PRINCIPLES ================= */}
        <section id="principles" className="py-20 sm:py-28 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#FFE5F2] border border-[#FFC6E5] text-[10px] font-black uppercase tracking-widest text-[#FF1BA3]">
              Notre Déontologie
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-foreground uppercase">
              Nos cinq principes fondateurs
            </h2>
            <p className="text-base sm:text-lg text-foreground/75 font-medium">
              Notre charte garantit que la technologie renforce l’action associative sans créer de dépendance toxique.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="ceartas-card rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-[#FF1BA3] border border-[#FFC6E5] px-2 py-0.5 rounded-full bg-[#FFE5F2]">
                  01 / Concret
                </span>
                <h3 className="mt-4 text-base font-bold text-foreground">
                  Utilité directe
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-foreground/70 leading-relaxed font-medium">
                  Nous ne venons pas avec une solution préconçue cherchant un problème. Nous partons toujours d’une douleur opérationnelle quotidienne.
                </p>
              </div>
            </div>

            <div className="ceartas-card rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-[#FF1BA3] border border-[#FFC6E5] px-2 py-0.5 rounded-full bg-[#FFE5F2]">
                  02 / Éthique
                </span>
                <h3 className="mt-4 text-base font-bold text-foreground">
                  L’humain aux commandes
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-foreground/70 leading-relaxed font-medium">
                  L’IA prépare, résume, structure. Elle ne prend aucune décision sensible à la place des équipes associatives.
                </p>
              </div>
            </div>

            <div className="ceartas-card rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-[#FF1BA3] border border-[#FFC6E5] px-2 py-0.5 rounded-full bg-[#FFE5F2]">
                  03 / Sobriété
                </span>
                <h3 className="mt-4 text-base font-bold text-foreground">
                  Légèreté & pérennité
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-foreground/70 leading-relaxed font-medium">
                  Nous privilégions un script simple de 2 semaines à un système complexe de 6 mois qui deviendrait impossible à maintenir.
                </p>
              </div>
            </div>

            <div className="ceartas-card rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-[#FF1BA3] border border-[#FFC6E5] px-2 py-0.5 rounded-full bg-[#FFE5F2]">
                  04 / RGPD
                </span>
                <h3 className="mt-4 text-base font-bold text-foreground">
                  Usage responsable & données protégées
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-foreground/70 leading-relaxed font-medium">
                  Confidentialité stricte, absence d’entraînement de modèles tiers sur vos données et respect scrupuleux du RGPD.
                </p>
              </div>
            </div>

            <div className="ceartas-card rounded-2xl p-6 flex flex-col justify-between sm:col-span-2 lg:col-span-1">
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-[#FF1BA3] border border-[#FFC6E5] px-2 py-0.5 rounded-full bg-[#FFE5F2]">
                  05 / Partage
                </span>
                <h3 className="mt-4 text-base font-bold text-foreground">
                  Biens communs & open source
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-foreground/70 leading-relaxed font-medium">
                  Dans la mesure du possible, ce que nous apprenons et concevons devient une documentation publique réutilisable par tout le secteur associatif.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 6: IMPACT MODEL ================= */}
        <section id="impact-model" className="py-20 sm:py-28 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-[#FFF7FC] via-[#FFE5F2]/30 to-[#FFF7FC] border-y border-[#FFC6E5]">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-4">
              <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#FFE5F2] border border-[#FFC6E5] text-[10px] font-black uppercase tracking-widest text-[#FF1BA3]">
                Tableau De Bord D’Impact
              </span>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-foreground uppercase">
                Un impact concret et mesurable.
              </h2>
              <p className="text-base sm:text-lg text-foreground/75 font-medium">
                Pour assurer notre rigueur, chaque projet est calibré selon des indicateurs précis d’heures rendues au terrain.
              </p>
            </div>

            <ImpactDashboard />

            <div className="text-center pt-6">
              <p className="text-xs font-bold uppercase tracking-wider text-foreground/50">
                Toutes les retombées de nos projets pilotes sont publiées en toute transparence.
              </p>
            </div>
          </div>
        </section>

        {/* ================= SECTION 7: PILOT PROGRAMME ================= */}
        <section id="pilot-programme" className="py-20 sm:py-28 px-4 sm:px-6 md:px-8 max-w-5xl mx-auto">
          <div className="ceartas-card rounded-3xl p-8 sm:p-14 border-2 border-[#FFC6E5] space-y-8 relative overflow-hidden">
            {/* Ambient Pink Glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-radial from-[#FF1BA3]/15 to-transparent blur-3xl pointer-events-none" />

            <div className="space-y-4">
              <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#FFE5F2] border border-[#FFC6E5] text-[10px] font-black uppercase tracking-widest text-[#FF1BA3]">
                Promotion Fondatrice 2026
              </span>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-foreground uppercase">
                Nous sélectionnons nos prochaines associations partenaires.
              </h2>
              <p className="text-base sm:text-lg text-foreground/80 leading-relaxed font-medium max-w-2xl">
                Nous accompagnons une cohorte d’organisations en France pour déployer leurs premières automatisations utiles.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              <div className="space-y-4">
                <h3 className="text-xs font-black uppercase tracking-wider text-foreground">
                  Le Profil Idéal D’Une Association Partenaire
                </h3>
                <ul className="space-y-3.5">
                  <li className="flex items-start text-sm text-foreground/85 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-[#FF1BA3] mr-3 mt-0.5 flex-shrink-0" />
                    <span>Une association loi 1901 ou fondation reconnue d'utilité publique</span>
                  </li>
                  <li className="flex items-start text-sm text-foreground/85 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-[#FF1BA3] mr-3 mt-0.5 flex-shrink-0" />
                    <span>Une tâche manuelle répétitive consommant au moins 3 à 5 heures / semaine</span>
                  </li>
                  <li className="flex items-start text-sm text-foreground/85 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-[#FF1BA3] mr-3 mt-0.5 flex-shrink-0" />
                    <span>Une personne référente disponible pour échanger (30 min hebdo)</span>
                  </li>
                  <li className="flex items-start text-sm text-foreground/85 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-[#FF1BA3] mr-3 mt-0.5 flex-shrink-0" />
                    <span>Aucune compétence technique préalable requise</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col justify-center space-y-4 bg-[#FFE5F2]/40 p-6 sm:p-8 rounded-2xl border border-[#FFC6E5]">
                <p className="text-sm font-semibold text-foreground/80">
                  Prêt à nous parler de votre goulot d’étranglement ? La démarche est 100% gratuite, confidentielle et prend moins de 10 minutes.
                </p>
                <a
                  href="#application"
                  className="ceartas-btn-primary inline-flex items-center justify-center px-6 py-3.5 text-sm font-black rounded-xl w-full text-center shadow-md shadow-[#FF1BA3]/30"
                >
                  Déposer une demande de pilote
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
                <span className="text-[11px] text-center text-foreground/50 font-bold block">
                  Exposez-nous une tâche que votre équipe rêve de simplifier.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 8: APPLICATION FORM ================= */}
        <section id="application" className="py-20 sm:py-28 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-[#FFF7FC] via-[#FFE5F2]/30 to-[#FFF7FC] border-y border-[#FFC6E5]">
          <div className="max-w-3xl mx-auto space-y-10">
            <div className="text-center space-y-3">
              <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#FFE5F2] border border-[#FFC6E5] text-[10px] font-black uppercase tracking-widest text-[#FF1BA3]">
                Zéro Risque · 100% Bénévole
              </span>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-foreground uppercase">
                Demander un diagnostic gratuit
              </h2>
              <p className="text-sm sm:text-base text-foreground/75 font-medium max-w-md mx-auto">
                Aucune compétence technique requise. Nous analysons votre besoin, construisons l’outil et formons votre équipe.
              </p>
            </div>

            <ApplicationForm />
          </div>
        </section>

        {/* ================= SECTION 9: FOR VOLUNTEERS ================= */}
        <section id="benevoles" className="py-20 sm:py-28 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#FFE5F2] border border-[#FFC6E5] text-[10px] font-black uppercase tracking-widest text-[#FF1BA3]">
                  Bénévoles Tech & Produit
                </span>
                <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-foreground uppercase">
                  Mettez vos compétences au service de l’intérêt général.
                </h2>
              </div>
              <p className="text-sm sm:text-base text-foreground/75 leading-relaxed font-medium">
                Nous réunissons des développeurs, experts en IA, designers et chefs de projet qui consacrent 2 à 4 heures par semaine pour doter le monde associatif des meilleurs outils.
              </p>

              <div className="pt-4 border-t border-[#FFC6E5]">
                <h4 className="text-xs font-black uppercase tracking-wider text-foreground mb-3">
                  Profils Recherchés
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "IA & Automatisation",
                    "Développement Web / Python",
                    "Design UX / UI",
                    "Gestion de projet",
                    "Data science",
                    "RGPD & Sécurité",
                    "Opérations associatives",
                  ].map((profile) => (
                    <span
                      key={profile}
                      className="text-xs font-bold text-foreground/80 bg-[#FFE5F2]/50 border border-[#FFC6E5] px-3 py-1 rounded-full"
                    >
                      {profile}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-7" id="volunteers">
              <VolunteerForm />
            </div>
          </div>
        </section>

        {/* ================= SECTION 10: ABOUT ================= */}
        <section id="a-propos" className="py-20 sm:py-28 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-[#FFF7FC] via-[#FFE5F2]/30 to-[#FFF7FC] border-y border-[#FFC6E5]">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-baseline">
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-[#FF1BA3] block mb-2">
                  Notre Vision
                </span>
                <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-foreground uppercase">
                  La technologie comme capacité citoyenne.
                </h2>
              </div>
              <div className="md:col-span-2 space-y-6 text-foreground/80 leading-relaxed text-sm sm:text-base font-medium">
                <p>
                  Capacité est née d’un constat évident : les organisations qui portent les missions sociales et écologiques les plus cruciales doivent avoir accès aux mêmes technologies de démultiplication que les entreprises les plus financées.
                </p>
                <p>
                  Nous avançons pas à pas — une association, un flux opérationnel et un gain de temps mesurable à la fois. En choisissant des défis réels plutôt que des promesses technologiques démesurées, nous assurons un taux d’adoption maximal.
                </p>

                {/* Important Notice Banner */}
                <div className="p-4 sm:p-5 ceartas-card rounded-2xl flex items-start space-x-3 border-[#FFC6E5]">
                  <ShieldCheck className="w-5 h-5 text-[#FF1BA3] flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-foreground/75 leading-relaxed font-semibold">
                    <strong className="text-foreground">Information importante :</strong> Capacité est une initiative citoyenne bénévole en France. Nous sommes autofinancés et indépendants. Nous ne vendons aucun logiciel, licence ou prestation de conseil payante.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 11: FINAL HIGH-IMPACT CTA ================= */}
        <section className="py-24 sm:py-32 px-4 sm:px-6 md:px-8 text-center max-w-4xl mx-auto space-y-8 relative overflow-hidden">
          <div className="space-y-4">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#FFE5F2] border border-[#FFC6E5] text-[10px] font-black uppercase tracking-widest text-[#FF1BA3]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Démarrer Sans Frais</span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-foreground uppercase leading-[0.95]">
              Que ferait votre équipe avec <br />
              <span className="text-[#FF1BA3]">10 heures de plus</span> chaque semaine ?
            </h2>
          </div>

          <p className="text-base sm:text-lg text-foreground/75 max-w-md mx-auto font-medium">
            Parlez-nous de vos ralentissements. Nous évaluerons ensemble comment l’IA peut vous libérer du temps.
          </p>

          <div className="pt-4">
            <a
              href="#application"
              className="ceartas-btn-primary inline-flex items-center justify-center px-10 py-5 text-base sm:text-lg font-black rounded-2xl shadow-xl shadow-[#FF1BA3]/40"
            >
              Demander un diagnostic gratuit
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </section>
      </main>

      {/* ================= FOOTER ================= */}
      <footer className="bg-white border-t border-[#FFC6E5] py-12 sm:py-16 px-4 sm:px-6 md:px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <span className="text-xl font-black tracking-tight text-foreground">Capacité</span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF1BA3]" />
            </div>
            <p className="text-xs text-foreground/60 font-semibold">L’IA au service de la société civile</p>
            <p className="text-[11px] text-foreground/40 font-bold">Initiative bénévole indépendante · France · 2026</p>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-3 font-bold text-xs">
            <a href="#comment-ca-marche" className="text-foreground/70 hover:text-[#FF1BA3] transition-colors">
              Comment ça marche
            </a>
            <a href="#ce-que-nous-resolvons" className="text-foreground/70 hover:text-[#FF1BA3] transition-colors">
              Solutions
            </a>
            <Link href="/financements" className="text-foreground/70 hover:text-[#FF1BA3] transition-colors">
              Radar Financements
            </Link>
            <a href="#pilot-programme" className="text-foreground/70 hover:text-[#FF1BA3] transition-colors">
              Programme pilote
            </a>
            <a href="#benevoles" className="text-foreground/70 hover:text-[#FF1BA3] transition-colors">
              Bénévoles
            </a>
            <a href="#principles" className="text-foreground/70 hover:text-[#FF1BA3] transition-colors">
              Principes
            </a>
            <a href="#application" className="text-foreground/70 hover:text-[#FF1BA3] transition-colors">
              Diagnostic
            </a>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-[#FFC6E5]/40 text-center md:text-left flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[11px] text-foreground/50 leading-relaxed font-semibold">
            Capacité est une initiative d'intérêt général à but non lucratif. Les solutions et guides développés sont partagés librement sous licence libre / Creative Commons.
          </p>
          <div className="flex items-center space-x-4 text-xs font-bold text-foreground/60">
            <Link href="/mentions-legales" className="hover:text-[#FF1BA3] transition-colors">
              Mentions légales
            </Link>
            <span>·</span>
            <Link href="/admin" className="hover:text-[#FF1BA3] transition-colors">
              Accès coordination
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
