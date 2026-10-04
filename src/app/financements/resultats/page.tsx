'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Navbar } from '@/components/ui/Navbar';
import { Footer } from '@/components/ui/Footer';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import MatchExplanationBlock from '@/components/MatchExplanationBlock';
import { MatchEvaluation, NGOProfile } from '@/types';
import { RefreshCw, Filter, ArrowLeft, Building2, HelpCircle } from 'lucide-react';

export default function ResultatsPage() {
  const router = useRouter();
  const [profile, setProfile] = useState<NGOProfile | null>(null);
  const [matches, setMatches] = useState<MatchEvaluation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [minScore, setMinScore] = useState<number>(0);

  useEffect(() => {
    const stored = sessionStorage.getItem('radar_ngo_profile');
    if (!stored) {
      // Default profile if accessed directly
      const defaultProfile: NGOProfile = {
        name: 'Association Solidarité & Entraide',
        description:
          'Action sociale, accompagnement des familles en précarité, distribution alimentaire et inclusion numérique.',
        country: 'France',
        department: '75',
        region: 'Île-de-France',
        operating_regions: ['Île-de-France', 'France'],
        themes: ['Solidarité & Action sociale', 'Numérique solidaire'],
        beneficiaries: ['Tous publics', 'Familles'],
        annual_budget: 75000,
        requested_funding_max: 20000,
        years_operating: 3,
        registration_status: 'Association loi 1901',
      };
      setProfile(defaultProfile);
      evaluateMatches(defaultProfile);
    } else {
      try {
        const parsed = JSON.parse(stored);
        setProfile(parsed);
        evaluateMatches(parsed);
      } catch {
        router.push('/financements');
      }
    }
  }, [router]);

  const evaluateMatches = async (p: NGOProfile) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/financements/match', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(p),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Erreur lors du calcul d’adéquation.');
      }

      setMatches(data.matches || []);
    } catch (err: any) {
      setError(err.message || 'Impossible d’évaluer les subventions.');
    } finally {
      setLoading(false);
    }
  };

  const filteredMatches = matches.filter((m) => m.total_score >= minScore);

  return (
    <>
      <Navbar />

      <main className="flex-1 py-10 sm:py-16 bg-paper">
        <Container size="default">
          {/* Top navigation */}
          <div className="flex items-center justify-between gap-4 mb-8">
            <Link
              href="/financements"
              className="inline-flex items-center text-xs font-semibold text-muted hover:text-forest transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-1.5" />
              Modifier les critères de l’association
            </Link>

            <Link href="/diagnostic">
              <Button variant="clay" size="sm">
                Être aidé à monter le dossier (Gratuit)
              </Button>
            </Link>
          </div>

          {/* Profile Header */}
          {profile && (
            <div className="p-6 rounded-xl border border-line bg-paper-warm mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="font-serif text-2xl font-semibold text-ink">
                    Résultats pour «\u00A0{profile.name}\u00A0»
                  </h1>
                  <Badge variant="forest">{profile.registration_status}</Badge>
                </div>
                <p className="text-xs text-muted mt-1.5 line-clamp-1 max-w-2xl">
                  {profile.description}
                </p>
                <div className="flex flex-wrap gap-2 text-xs text-muted mt-2">
                  <span>Territoire\u00A0: {profile.department ? `Dép. ${profile.department}` : profile.region || 'France'}</span>
                  <span>·</span>
                  <span>Thèmes\u00A0: {(profile.themes || []).join(', ')}</span>
                  <span>·</span>
                  <span>Budget\u00A0: {profile.annual_budget ? `${profile.annual_budget.toLocaleString('fr-FR')} €` : 'N/C'}</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => evaluateMatches(profile)}
                  isLoading={loading}
                >
                  <RefreshCw className="h-4 w-4 mr-1.5" />
                  Recalculer
                </Button>
              </div>
            </div>
          )}

          {/* Filter Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-line gap-4">
            <div>
              <span className="text-sm font-medium text-ink">
                {filteredMatches.length} opportunité(s) évaluée(s)
              </span>
              <p className="text-xs text-muted mt-0.5">
                Classées par score de compatibilité décroissant selon la méthode multicritère.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs text-muted font-medium">Filtrer par score\u00A0:</span>
              <select
                value={minScore}
                onChange={(e) => setMinScore(Number(e.target.value))}
                className="text-xs rounded-lg border border-line bg-white px-3 py-1.5 text-ink font-medium cursor-pointer"
              >
                <option value={0}>Tous les résultats ({matches.length})</option>
                <option value={60}>Adéquation modérée & forte ({'>'} 60 %)</option>
                <option value={75}>Forte adéquation uniquement ({'>'} 75 %)</option>
                <option value={85}>Excellente adéquation ({'>'} 85 %)</option>
              </select>
            </div>
          </div>

          {/* Matches List */}
          {loading ? (
            <div className="py-20 text-center space-y-3">
              <div className="inline-block animate-spin h-8 w-8 border-3 border-forest border-t-transparent rounded-full" />
              <p className="text-sm font-medium text-ink">
                Évaluation multicritère des subventions en cours...
              </p>
              <p className="text-xs text-muted">
                Vérification des conditions géographiques, des thèmes et des capacités d’absorption.
              </p>
            </div>
          ) : error ? (
            <div className="py-12">
              <div className="rounded-xl border border-clay/30 bg-clay/10 p-6 text-center text-sm text-ink space-y-3">
                <p className="font-semibold text-clay">{error}</p>
                <Button variant="outline" size="sm" onClick={() => profile && evaluateMatches(profile)}>
                  Réessayer
                </Button>
              </div>
            </div>
          ) : filteredMatches.length === 0 ? (
            <div className="py-16 text-center rounded-xl border border-line bg-white p-8">
              <p className="font-medium text-ink">
                Aucun financement ne correspond au seuil sélectionné ({minScore} %).
              </p>
              <p className="text-xs text-muted mt-1">
                Ajustez le filtre de score ou élargissez les thèmes d’action de votre structure.
              </p>
              <Button
                variant="outline"
                size="sm"
                className="mt-4"
                onClick={() => setMinScore(0)}
              >
                Réinitialiser le filtre
              </Button>
            </div>
          ) : (
            <div className="space-y-6">
              {filteredMatches.map((match, idx) => (
                <MatchExplanationBlock key={match.grant_id || idx} match={match} />
              ))}
            </div>
          )}
        </Container>
      </main>

      <Footer />
    </>
  );
}
