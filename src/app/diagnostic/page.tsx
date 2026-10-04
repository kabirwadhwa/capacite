import React from 'react';
import type { Metadata } from 'next';
import { Navbar } from '@/components/ui/Navbar';
import { Footer } from '@/components/ui/Footer';
import { Container } from '@/components/ui/Container';
import ApplicationForm from '@/components/ApplicationForm';
import { CheckCircle2, Clock, ShieldCheck, HelpCircle, Sparkles } from 'lucide-react';
import { eligibilityCriteria } from '@/content/fr';

export const metadata: Metadata = {
  title: 'Diagnostic Gratuit — Capacité',
  description:
    'Demandez un diagnostic gratuit de 30 minutes avec un bénévole technique de Capacité pour identifier et automatiser une tâche répétitive de votre association.',
};

export default function DiagnosticPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-28 sm:pt-36 pb-20 sm:pb-28">
        <Container size="narrow">
          {/* Header */}
          <div className="text-center space-y-4 mb-12">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#FFE5F2] border border-[#FFC6E5] text-xs font-black uppercase tracking-wider text-foreground">
              <span className="w-2 h-2 rounded-full bg-[#FF1BA3] animate-pulse" />
              <span>Diagnostic technique 100% gratuit</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-foreground leading-tight">
              Faire diagnostiquer un besoin de votre association
            </h1>
            <p className="text-base sm:text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed font-medium">
              Vous identifiez une tâche chronophage qui pèse sur vos équipes ? Remplissez ce formulaire court. Un bénévole qualifié analysera votre demande et organisera un premier échange de 30 minutes.
            </p>
          </div>

          {/* Guarantees Box */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            <div className="ceartas-card p-5 rounded-2xl border border-[#FFC6E5] flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#FFE5F2] border border-[#FFC6E5] flex items-center justify-center text-[#FF1BA3] shrink-0">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-bold text-foreground text-sm">30 minutes d’échange</h4>
                <p className="text-xs text-foreground/70 mt-1 font-medium">Visio ciblée et sans jargon technique pour comprendre votre quotidien.</p>
              </div>
            </div>
            <div className="ceartas-card p-5 rounded-2xl border border-[#FFC6E5] flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#FFE5F2] border border-[#FFC6E5] flex items-center justify-center text-[#FF1BA3] shrink-0">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-bold text-foreground text-sm">Zéro vente logicielle</h4>
                <p className="text-xs text-foreground/70 mt-1 font-medium">Nous sommes des bénévoles indépendants : rien à vous vendre.</p>
              </div>
            </div>
            <div className="ceartas-card p-5 rounded-2xl border border-[#FFC6E5] flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#FFE5F2] border border-[#FFC6E5] flex items-center justify-center text-[#FF1BA3] shrink-0">
                <HelpCircle className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-bold text-foreground text-sm">Réponse sous 5 jours</h4>
                <p className="text-xs text-foreground/70 mt-1 font-medium">Chaque dossier est lu attentivement par un bénévole technique.</p>
              </div>
            </div>
          </div>

          {/* Criteria banner */}
          <div className="mb-10 p-6 rounded-2xl border border-[#FFC6E5] bg-[#FFE5F2]/40">
            <h3 className="text-sm font-black uppercase tracking-wider text-foreground mb-3 flex items-center">
              <Sparkles className="w-4 h-4 text-[#FF1BA3] mr-2" />
              Critères d’éligibilité recommandés :
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-foreground/80 font-medium">
              {eligibilityCriteria.map((crit, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#FF1BA3] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-foreground">{crit.label} :</strong> {crit.detail}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Form */}
          <ApplicationForm />
        </Container>
      </main>
      <Footer />
    </>
  );
}
