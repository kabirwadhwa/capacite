'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/ui/Navbar';
import { Footer } from '@/components/ui/Footer';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import GrantDetailModal from '@/components/GrantDetailModal';
import { GrantOpportunity } from '@/types';
import {
  getGrantStatusInfo,
  formatDeadlineDisplay,
  formatFundingRange,
  formatVerifiedDate,
} from '@/lib/utils/grant-status';
import { Search, Filter, Building2, Calendar, Euro, MapPin, ArrowRight } from 'lucide-react';

export default function AnnuairePage() {
  const [grants, setGrants] = useState<GrantOpportunity[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [selectedTheme, setSelectedTheme] = useState('tous');
  const [selectedGrant, setSelectedGrant] = useState<GrantOpportunity | null>(null);

  useEffect(() => {
    async function loadGrants() {
      setLoading(true);
      try {
        const res = await fetch('/api/financements');
        const data = await res.json();
        setGrants(data.grants || []);
      } catch (e) {
        console.error('Erreur chargement annuaire:', e);
      } finally {
        setLoading(false);
      }
    }
    loadGrants();
  }, []);

  const themes = [
    'tous',
    'Solidarité',
    'Environnement',
    'Éducation',
    'Culture',
    'Vie associative',
    'Sport',
    'Droits humains',
  ];

  const filteredGrants = grants.filter((g) => {
    const matchSearch =
      !search.trim() ||
      g.title.toLowerCase().includes(search.toLowerCase()) ||
      g.funder.toLowerCase().includes(search.toLowerCase()) ||
      g.description.toLowerCase().includes(search.toLowerCase());

    const matchTheme =
      selectedTheme === 'tous' ||
      g.themes.some((t) => t.toLowerCase().includes(selectedTheme.toLowerCase()));

    return matchSearch && matchTheme;
  });

  return (
    <>
      <Navbar />

      <main className="flex-1 py-12 sm:py-16 bg-paper">
        <Container size="default">
          {/* Header */}
          <div className="space-y-4 mb-10">
            <div className="inline-flex">
              <Badge variant="forest">Répertoire certifié</Badge>
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl font-semibold tracking-tight text-ink">
              Annuaire des subventions associatives
            </h1>
            <p className="text-base sm:text-lg text-muted max-w-2xl leading-relaxed">
              Consultez l’ensemble des dispositifs publics d’État, des conseils régionaux et des fondations reconnues d’utilité publique répertoriés par notre collectif bénévole.
            </p>
          </div>

          {/* Search & Filter Bar */}
          <div className="p-4 rounded-xl border border-line bg-white shadow-sm mb-8 space-y-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-3.5 top-3 h-4 w-4 text-muted" />
                <input
                  type="text"
                  placeholder="Rechercher par mot-clé, nom de fondation ou dispositif (ex: FDVA, ADEME)..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 text-sm rounded-lg border border-line bg-paper/50 text-ink focus:bg-white focus:outline-none focus:border-forest"
                />
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs font-medium text-muted shrink-0">Thème\u00A0:</span>
                <select
                  value={selectedTheme}
                  onChange={(e) => setSelectedTheme(e.target.value)}
                  className="text-xs rounded-lg border border-line bg-paper/50 px-3 py-2 text-ink font-medium cursor-pointer"
                >
                  <option value="tous">Toutes thématiques</option>
                  {themes.filter((t) => t !== 'tous').map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Grants Cards Grid */}
          {loading ? (
            <div className="text-center py-20 text-muted">
              Chargement de l’annuaire...
            </div>
          ) : filteredGrants.length === 0 ? (
            <div className="p-12 text-center rounded-xl border border-line bg-white text-muted">
              Aucun dispositif ne correspond à votre recherche.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredGrants.map((grant) => {
                const statusInfo = getGrantStatusInfo(grant);
                return (
                  <div
                    key={grant.id || grant.url}
                    onClick={() => setSelectedGrant(grant)}
                    className="p-6 rounded-xl border border-line bg-white shadow-sm hover:border-line-dark hover:shadow-md transition-all flex flex-col justify-between cursor-pointer space-y-4"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between gap-2">
                        <span className={`inline-flex px-2 py-0.5 rounded-full text-[11px] font-medium border ${statusInfo.badgeClass}`}>
                          {statusInfo.label}
                        </span>
                        <span className="text-[11px] text-muted">
                          {formatVerifiedDate(grant.verified_at || grant.last_checked_at)}
                        </span>
                      </div>

                      <h3 className="font-serif text-lg font-semibold text-ink line-clamp-2 leading-snug">
                        {grant.title}
                      </h3>

                      <p className="text-xs text-muted line-clamp-3 leading-relaxed">
                        {grant.description}
                      </p>

                      <div className="space-y-1 text-xs text-muted pt-2 border-t border-line/60">
                        <div className="flex items-center gap-1.5">
                          <Building2 className="h-3.5 w-3.5 text-forest shrink-0" />
                          <span className="truncate">{grant.funder}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Euro className="h-3.5 w-3.5 text-forest shrink-0" />
                          <span>{formatFundingRange(grant.funding_min, grant.funding_max, grant.currency)}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Calendar className="h-3.5 w-3.5 text-forest shrink-0" />
                          <span>{formatDeadlineDisplay(grant.deadline, grant.is_recurrent, grant.recurrent_details)}</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-line/60 flex items-center justify-between text-xs font-semibold text-forest">
                      <span>Voir la fiche détaillée</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </Container>
      </main>

      <GrantDetailModal grant={selectedGrant} onClose={() => setSelectedGrant(null)} />
      <Footer />
    </>
  );
}
