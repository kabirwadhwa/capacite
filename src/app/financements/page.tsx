'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Navbar } from '@/components/ui/Navbar';
import { Footer } from '@/components/ui/Footer';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Field, inputStyles } from '@/components/ui/Field';
import { Alert } from '@/components/ui/Alert';
import {
  Search,
  Globe,
  FileText,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Building2,
  BookOpen,
} from 'lucide-react';
import { NGOProfile } from '@/types';

export default function FinancementsHomePage() {
  const router = useRouter();
  const [mode, setMode] = useState<'url' | 'manual'>('manual');

  // URL extraction state
  const [url, setUrl] = useState('');
  const [isExtracting, setIsExtracting] = useState(false);
  const [extractError, setExtractError] = useState<string | null>(null);

  // Manual form state
  const [name, setName] = useState('');
  const [department, setDepartment] = useState('75');
  const [region, setRegion] = useState('Île-de-France');
  const [themes, setThemes] = useState<string[]>(['Solidarité & Action sociale']);
  const [annualBudget, setAnnualBudget] = useState(60000);
  const [requestedMax, setRequestedMax] = useState(20000);
  const [description, setDescription] = useState('');

  const availableThemes = [
    'Solidarité & Action sociale',
    'Éducation & Jeunesse',
    'Environnement & Climat',
    'Culture & Patrimoine',
    'Santé & Handicap',
    'Insertion & Emploi',
    'Numérique solidaire',
    'Sport pour tous',
    'Droits humains & Citoyenneté',
  ];

  const handleExtract = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) return;
    setIsExtracting(true);
    setExtractError(null);

    try {
      const res = await fetch('/api/financements/extract', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Erreur lors de l’analyse du site web.');
      }

      // Store extracted profile in sessionStorage and redirect to results
      sessionStorage.setItem('radar_ngo_profile', JSON.stringify(data.profile));
      router.push('/financements/resultats');
    } catch (err: any) {
      setExtractError(err.message || 'Impossible d’extraire le profil. Veuillez utiliser le formulaire manuel.');
    } finally {
      setIsExtracting(false);
    }
  };

  const handleManualSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !description.trim()) return;

    const profile: NGOProfile = {
      name,
      description,
      country: 'France',
      department,
      region,
      operating_regions: [region, 'France'],
      themes,
      beneficiaries: ['Tous publics'],
      annual_budget: annualBudget,
      requested_funding_max: requestedMax,
      years_operating: 3,
      registration_status: 'Association loi 1901',
    };

    sessionStorage.setItem('radar_ngo_profile', JSON.stringify(profile));
    router.push('/financements/resultats');
  };

  const toggleTheme = (theme: string) => {
    setThemes((prev) =>
      prev.includes(theme)
        ? prev.length > 1
          ? prev.filter((t) => t !== theme)
          : prev
        : [...prev, theme]
    );
  };

  return (
    <>
      <Navbar />

      <main className="flex-1 py-12 sm:py-20 bg-paper">
        <Container size="narrow">
          {/* Header */}
          <div className="text-center space-y-4 mb-12">
            <div className="inline-flex">
              <Badge variant="clay">Outil ouvert & 100\u00A0% gratuit</Badge>
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl font-semibold tracking-tight text-ink">
              Radar Financements Associatifs
            </h1>
            <p className="text-base sm:text-lg text-muted max-w-2xl mx-auto leading-relaxed">
              Identifiez en quelques secondes les subventions publiques (ministères, régions, départements, ADEME) et fondations adaptées au profil de votre association.
            </p>

            <div className="pt-2 flex items-center justify-center gap-4 text-xs text-muted">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-forest" />
                Zéro inscription obligatoire
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-forest" />
                Algorithme transparent & open source
              </span>
            </div>
          </div>

          {/* Mode Switcher */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex rounded-lg border border-line bg-paper-warm p-1">
              <button
                type="button"
                onClick={() => setMode('manual')}
                className={`px-4 py-2 rounded-md text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                  mode === 'manual'
                    ? 'bg-forest text-white shadow-xs'
                    : 'text-muted hover:text-ink'
                }`}
              >
                <FileText className="h-4 w-4" />
                Formulaire express (2 min)
              </button>
              <button
                type="button"
                onClick={() => setMode('url')}
                className={`px-4 py-2 rounded-md text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                  mode === 'url'
                    ? 'bg-forest text-white shadow-xs'
                    : 'text-muted hover:text-ink'
                }`}
              >
                <Globe className="h-4 w-4" />
                Analyser notre site web
              </button>
            </div>
          </div>

          {/* Form Card */}
          <div className="rounded-2xl border border-line bg-white p-6 sm:p-10 shadow-sm">
            {mode === 'url' ? (
              <form onSubmit={handleExtract} className="space-y-6">
                <div className="space-y-2">
                  <h3 className="font-serif text-xl font-semibold text-ink">
                    Extraction automatique via votre site internet
                  </h3>
                  <p className="text-xs sm:text-sm text-muted leading-relaxed">
                    Indiquez l’adresse du site de votre association. Notre moteur sécurisé analyse automatiquement votre mission, vos thèmes et votre ancrage territorial pour calculer vos correspondances.
                  </p>
                </div>

                {extractError && (
                  <Alert variant="error" title="Échec de l’analyse">
                    {extractError}
                  </Alert>
                )}

                <Field label="URL du site de l’association" id="url" required hint="Ex: https://mon-association.org">
                  <div className="flex gap-2">
                    <input
                      id="url"
                      type="url"
                      required
                      placeholder="https://..."
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      className={inputStyles}
                    />
                  </div>
                </Field>

                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    isLoading={isExtracting}
                    className="w-full sm:w-auto"
                  >
                    <span>Lancer la recherche de subventions</span>
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </form>
            ) : (
              <form onSubmit={handleManualSubmit} className="space-y-6">
                <div className="space-y-2">
                  <h3 className="font-serif text-xl font-semibold text-ink">
                    Profil de votre association
                  </h3>
                  <p className="text-xs sm:text-sm text-muted leading-relaxed">
                    Renseignez les grandes caractéristiques de votre structure pour obtenir une sélection pondérée d’aides financières.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field label="Nom de l’association" id="name" required>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="Ex: Emmaüs Solidarités, Secours Populaire..."
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className={inputStyles}
                    />
                  </Field>

                  <Field label="Département d’intervention principal" id="department" required>
                    <select
                      id="department"
                      value={department}
                      onChange={(e) => {
                        setDepartment(e.target.value);
                        if (['75', '92', '93', '94', '77', '78', '91', '95'].includes(e.target.value)) {
                          setRegion('Île-de-France');
                        } else if (['69', '01', '38', '42'].includes(e.target.value)) {
                          setRegion('Auvergne-Rhône-Alpes');
                        } else if (['13', '06', '83', '84'].includes(e.target.value)) {
                          setRegion("Provence-Alpes-Côte d'Azur");
                        } else if (['31', '34'].includes(e.target.value)) {
                          setRegion('Occitanie');
                        }
                      }}
                      className={inputStyles}
                    >
                      <option value="75">75 — Paris</option>
                      <option value="93">93 — Seine-Saint-Denis</option>
                      <option value="92">92 — Hauts-de-Seine</option>
                      <option value="94">94 — Val-de-Marne</option>
                      <option value="69">69 — Rhône (Lyon)</option>
                      <option value="13">13 — Bouches-du-Rhône (Marseille)</option>
                      <option value="31">31 — Haute-Garonne (Toulouse)</option>
                      <option value="33">33 — Gironde (Bordeaux)</option>
                      <option value="44">44 — Loire-Atlantique (Nantes)</option>
                      <option value="59">59 — Nord (Lille)</option>
                      <option value="autre">Autre département (France entière)</option>
                    </select>
                  </Field>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-ink">
                    Domaines d’action <span className="text-clay">*</span>
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {availableThemes.map((t) => {
                      const isSelected = themes.includes(t);
                      return (
                        <button
                          key={t}
                          type="button"
                          onClick={() => toggleTheme(t)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors cursor-pointer ${
                            isSelected
                              ? 'bg-forest text-white border-forest'
                              : 'bg-paper text-ink border-line hover:border-line-dark'
                          }`}
                        >
                          {isSelected ? '✓ ' : '+ '}
                          {t}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field label="Budget annuel de fonctionnement (€)" id="budget" hint="Permet d'évaluer la capacité d'absorption">
                    <input
                      id="budget"
                      type="number"
                      value={annualBudget}
                      onChange={(e) => setAnnualBudget(Number(e.target.value))}
                      className={inputStyles}
                    />
                  </Field>

                  <Field label="Montant de subvention recherché (€)" id="requestedMax" hint="Plafond cible pour vos prochains projets">
                    <input
                      id="requestedMax"
                      type="number"
                      value={requestedMax}
                      onChange={(e) => setRequestedMax(Number(e.target.value))}
                      className={inputStyles}
                    />
                  </Field>
                </div>

                <Field
                  label="Description de vos activités & projet à financer"
                  id="description"
                  required
                  hint="En quelques phrases : que fait votre association et quel projet nécessite un soutien financier ?"
                >
                  <textarea
                    id="description"
                    rows={3}
                    required
                    placeholder="Ex : Association de quartier qui distribue des repas chauds et organise des ateliers d'aide aux démarches numériques pour les personnes isolées..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className={inputStyles}
                  />
                </Field>

                <div className="pt-2">
                  <Button type="submit" variant="primary" size="lg" className="w-full sm:w-auto">
                    <span>Voir les subventions éligibles</span>
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </form>
            )}
          </div>

          {/* Sub-links */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-between text-xs text-muted gap-4">
            <Link
              href="/financements/annuaire"
              className="hover:text-forest transition-colors flex items-center gap-1.5"
            >
              <Building2 className="h-4 w-4 text-forest" />
              <span>Consulter l’annuaire complet des aides ({'>'} 50 programmes)</span>
            </Link>
            <Link
              href="/financements/methodologie"
              className="hover:text-forest transition-colors flex items-center gap-1.5"
            >
              <BookOpen className="h-4 w-4 text-forest" />
              <span>Comprendre la méthode de calcul & barème de scoring</span>
            </Link>
          </div>
        </Container>
      </main>

      <Footer />
    </>
  );
}
