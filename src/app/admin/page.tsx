'use client';

import React, { useState, useEffect } from 'react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Download, RefreshCw, FileText, Users, Mail, Phone, Calendar } from 'lucide-react';
import { formatDateFr } from '@/lib/utils';

export default function AdminDashboardPage() {
  const [activeTab, setActiveTab] = useState<'applications' | 'volunteers'>('applications');
  const [applications, setApplications] = useState<any[]>([]);
  const [volunteers, setVolunteers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [savingId, setSavingId] = useState<string | null>(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const [resApps, resVols] = await Promise.all([
        fetch('/api/admin/applications'),
        fetch('/api/admin/volunteers'),
      ]);
      const dataApps = await resApps.json();
      const dataVols = await resVols.json();
      setApplications(dataApps.applications || []);
      setVolunteers(dataVols.volunteers || []);
    } catch (e) {
      console.error('Erreur chargement admin:', e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const updateApplication = async (id: string, updates: { status?: string; notes?: string }) => {
    setSavingId(id);
    try {
      const res = await fetch('/api/admin/applications', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, ...updates }),
      });
      if (res.ok) {
        setApplications((prev) =>
          prev.map((app) => (app.id === id ? { ...app, ...updates } : app))
        );
      }
    } finally {
      setSavingId(null);
    }
  };

  const updateVolunteer = async (id: string, updates: { status?: string; notes?: string }) => {
    setSavingId(id);
    try {
      const res = await fetch('/api/admin/volunteers', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, ...updates }),
      });
      if (res.ok) {
        setVolunteers((prev) =>
          prev.map((vol) => (vol.id === id ? { ...vol, ...updates } : vol))
        );
      }
    } finally {
      setSavingId(null);
    }
  };

  return (
    <div className="py-10 bg-paper min-h-screen">
      <Container size="wide">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-8 border-b border-line gap-4">
          <div>
            <span className="text-xs uppercase tracking-wider font-semibold text-forest">
              Espace Modération
            </span>
            <h1 className="font-serif text-3xl font-semibold text-ink">
              Tableau de bord Coup d’Épaule
            </h1>
            <p className="text-sm text-muted mt-1">
              Gestion confidentielle des demandes d’accompagnement et des inscriptions bénévoles.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={fetchData}
              isLoading={loading}
            >
              <RefreshCw className="h-4 w-4 mr-1.5" />
              Actualiser
            </Button>
            <a
              href={`/api/admin/export?type=${activeTab}`}
              download
              className="inline-flex"
            >
              <Button variant="secondary" size="sm">
                <Download className="h-4 w-4 mr-1.5" />
                Exporter CSV ({activeTab === 'applications' ? 'Demandes' : 'Bénévoles'})
              </Button>
            </a>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 border-b border-line mt-6">
          <button
            onClick={() => setActiveTab('applications')}
            className={`pb-3 text-sm font-semibold border-b-2 transition-colors cursor-pointer flex items-center gap-2 ${
              activeTab === 'applications'
                ? 'border-forest text-forest'
                : 'border-transparent text-muted hover:text-ink'
            }`}
          >
            <FileText className="h-4 w-4" />
            Demandes associatives ({applications.length})
          </button>
          <button
            onClick={() => setActiveTab('volunteers')}
            className={`pb-3 text-sm font-semibold border-b-2 transition-colors cursor-pointer flex items-center gap-2 ${
              activeTab === 'volunteers'
                ? 'border-forest text-forest'
                : 'border-transparent text-muted hover:text-ink'
            }`}
          >
            <Users className="h-4 w-4" />
            Bénévoles ({volunteers.length})
          </button>
        </div>

        {/* Content */}
        <div className="mt-6">
          {loading ? (
            <div className="text-center py-16 text-muted">
              Chargement des dossiers en cours...
            </div>
          ) : activeTab === 'applications' ? (
            applications.length === 0 ? (
              <div className="text-center py-16 bg-white border border-line rounded-xl">
                <p className="text-ink font-medium">Aucune demande reçue pour l’instant.</p>
                <p className="text-xs text-muted mt-1">
                  Les nouvelles soumissions apparaîtront automatiquement ici.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {applications.map((app) => (
                  <div
                    key={app.id}
                    className="p-6 bg-white rounded-xl border border-line shadow-sm space-y-4"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2.5">
                          <h3 className="font-serif text-lg font-semibold text-ink">
                            {app.association_name}
                          </h3>
                          <Badge variant="forest">{app.mission_theme}</Badge>
                          {app.location_dept && (
                            <Badge variant="sand">Dép. {app.location_dept}</Badge>
                          )}
                        </div>
                        <div className="flex items-center gap-4 text-xs text-muted mt-1">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3.5 w-3.5" />
                            {formatDateFr(app.created_at)}
                          </span>
                          <span className="flex items-center gap-1">
                            <Mail className="h-3.5 w-3.5" />
                            <a
                              href={`mailto:${app.contact_email}`}
                              className="hover:underline text-forest font-medium"
                            >
                              {app.contact_name} ({app.contact_email})
                            </a>
                          </span>
                          {app.contact_phone && (
                            <span className="flex items-center gap-1">
                              <Phone className="h-3.5 w-3.5" />
                              {app.contact_phone}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <select
                          value={app.status}
                          onChange={(e) => updateApplication(app.id, { status: e.target.value })}
                          disabled={savingId === app.id}
                          className="text-xs rounded-lg border border-line bg-paper-warm px-3 py-1.5 text-ink font-medium cursor-pointer"
                        >
                          <option value="pending">En attente (pending)</option>
                          <option value="reviewed">Examiné (reviewed)</option>
                          <option value="contacted">Contacté (contacted)</option>
                          <option value="accepted">Accepté (accepted)</option>
                          <option value="archived">Archivé (archived)</option>
                        </select>
                      </div>
                    </div>

                    <div className="bg-sand/30 p-4 rounded-lg text-sm text-ink leading-relaxed">
                      <p className="font-medium text-xs text-muted uppercase tracking-wider mb-1">
                        Problème opérationnel décrit :
                      </p>
                      <p className="whitespace-pre-wrap">{app.problem_description}</p>
                      {app.tools_used && (
                        <p className="mt-2 text-xs text-muted">
                          <strong>Outils utilisés :</strong> {app.tools_used}
                        </p>
                      )}
                    </div>

                    <div className="pt-2">
                      <label className="text-xs font-semibold text-muted block mb-1">
                        Notes internes de suivi :
                      </label>
                      <textarea
                        defaultValue={app.notes || ''}
                        onBlur={(e) => updateApplication(app.id, { notes: e.target.value })}
                        placeholder="Ajouter des notes d'évaluation ou de contact..."
                        rows={2}
                        className="w-full text-xs rounded-lg border border-line p-2.5 bg-paper/50 text-ink focus:bg-white focus:outline-none focus:border-forest"
                      />
                    </div>
                  </div>
                ))}
              </div>
            )
          ) : (
            volunteers.length === 0 ? (
              <div className="text-center py-16 bg-white border border-line rounded-xl">
                <p className="text-ink font-medium">Aucun bénévole inscrit pour l’instant.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {volunteers.map((vol) => (
                  <div
                    key={vol.id}
                    className="p-6 bg-white rounded-xl border border-line shadow-sm space-y-4"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2.5">
                          <h3 className="font-serif text-lg font-semibold text-ink">
                            {vol.full_name}
                          </h3>
                          <Badge variant="clay">{vol.hours_per_week} h / semaine</Badge>
                        </div>
                        <div className="flex items-center gap-4 text-xs text-muted mt-1">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3.5 w-3.5" />
                            {formatDateFr(vol.created_at)}
                          </span>
                          <span className="flex items-center gap-1">
                            <Mail className="h-3.5 w-3.5" />
                            <a
                              href={`mailto:${vol.email}`}
                              className="hover:underline text-forest font-medium"
                            >
                              {vol.email}
                            </a>
                          </span>
                          {vol.linkedin_or_portfolio && (
                            <a
                              href={vol.linkedin_or_portfolio}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs text-forest hover:underline"
                            >
                              Lien profil / portfolio
                            </a>
                          )}
                        </div>
                      </div>

                      <select
                        value={vol.status}
                        onChange={(e) => updateVolunteer(vol.id, { status: e.target.value })}
                        disabled={savingId === vol.id}
                        className="text-xs rounded-lg border border-line bg-paper-warm px-3 py-1.5 text-ink font-medium cursor-pointer"
                      >
                        <option value="pending">En attente (pending)</option>
                        <option value="contacted">Contacté (contacted)</option>
                        <option value="active">Actif (active)</option>
                        <option value="inactive">Inactif (inactive)</option>
                      </select>
                    </div>

                    <div className="bg-sand/30 p-4 rounded-lg text-sm text-ink leading-relaxed">
                      <p className="font-medium text-xs text-muted uppercase tracking-wider mb-1">
                        Compétences indiquées :
                      </p>
                      <p className="text-xs font-semibold text-forest mb-2">
                        {(() => {
                          try {
                            const parsed = JSON.parse(vol.skills);
                            return Array.isArray(parsed) ? parsed.join(' · ') : vol.skills;
                          } catch {
                            return vol.skills;
                          }
                        })()}
                      </p>
                      <p className="font-medium text-xs text-muted uppercase tracking-wider mb-1">
                        Motivation :
                      </p>
                      <p className="whitespace-pre-wrap">{vol.motivation}</p>
                    </div>

                    <div className="pt-2">
                      <label className="text-xs font-semibold text-muted block mb-1">
                        Notes internes :
                      </label>
                      <textarea
                        defaultValue={vol.notes || ''}
                        onBlur={(e) => updateVolunteer(vol.id, { notes: e.target.value })}
                        placeholder="Disponibilités, technologies de prédilection..."
                        rows={2}
                        className="w-full text-xs rounded-lg border border-line p-2.5 bg-paper/50 text-ink focus:bg-white focus:outline-none focus:border-forest"
                      />
                    </div>
                  </div>
                ))}
              </div>
            )
          )}
        </div>
      </Container>
    </div>
  );
}
