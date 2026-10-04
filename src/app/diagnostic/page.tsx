import React from 'react';
import type { Metadata } from 'next';
import { Navbar } from '@/components/ui/Navbar';
import { Footer } from '@/components/ui/Footer';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import ApplicationForm from '@/components/ApplicationForm';
import { CheckCircle2, Clock, ShieldCheck, HelpCircle } from 'lucide-react';
import { eligibilityCriteria } from '@/content/fr';

export const metadata: Metadata = {
  title: 'Diagnostic Gratuit — Accompagnement technique associatif',
  description:
    'Demandez un diagnostic gratuit de 30 minutes avec un bénévole technique de Coup d’Épaule pour identifier et automatiser une tâche répétitive de votre association.',
};

export default function DiagnosticPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 py-12 sm:py-16 bg-paper">
        <Container size="narrow">
          {/* Header */}
          <div className="text-center space-y-4 mb-12">
            <div className="inline-flex">
              <Badge variant="forest">Diagnostic technique 100\u00A0% gratuit</Badge>
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl font-semibold tracking-tight text-ink">
              Faire diagnostiquer un besoin de votre association
            </h1>
            <p className="text-base sm:text-lg text-muted max-w-2xl mx-auto leading-relaxed">
              Vous identifiez une tâche chronophage qui pèse sur vos équipes\u00A0? Remplissez ce formulaire court. Un bénévole qualifié analysera votre demande et organisera un premier échange de 30 minutes.
            </p>
          </div>

          {/* Guarantees Box */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            <div className="p-4 rounded-xl border border-line bg-white/60 flex items-start gap-3">
              <Clock className="h-5 w-5 text-forest shrink-0 mt-0.5" />
              <div>
                <h4 className="font-serif font-medium text-ink text-sm">30 minutes d’échange</h4>
                <p className="text-xs text-muted mt-0.5">Visio ciblée et sans jargon technique pour comprendre votre quotidien.</p>
              </div>
            </div>
            <div className="p-4 rounded-xl border border-line bg-white/60 flex items-start gap-3">
              <ShieldCheck className="h-5 w-5 text-forest shrink-0 mt-0.5" />
              <div>
                <h4 className="font-serif font-medium text-ink text-sm">Zéro vente logicielle</h4>
                <p className="text-xs text-muted mt-0.5">Nous sommes des bénévoles indépendants\u00A0: rien à vous vendre.</p>
              </div>
            </div>
            <div className="p-4 rounded-xl border border-line bg-white/60 flex items-start gap-3">
              <HelpCircle className="h-5 w-5 text-forest shrink-0 mt-0.5" />
              <div>
                <h4 className="font-serif font-medium text-ink text-sm">Réponse sous 5 jours</h4>
                <p className="text-xs text-muted mt-0.5">Chaque dossier est lu attentivement par un bénévole technique.</p>
              </div>
            </div>
          </div>

          {/* Criteria accordion / banner */}
          <div className="mb-10 p-5 rounded-xl border border-line bg-sand/30">
            <h3 className="font-serif text-base font-semibold text-ink mb-3">
              Critères d’éligibilité recommandés :
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-muted">
              {eligibilityCriteria.map((crit, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-forest shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-ink">{crit.label}\u00A0:</strong> {crit.detail}
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
