'use client';

import React from 'react';
import { GrantOpportunity } from '@/types';
import { X, ExternalLink, Building2, Calendar, Euro, MapPin, ShieldCheck } from 'lucide-react';
import {
  getGrantStatusInfo,
  formatDeadlineDisplay,
  formatFundingRange,
  formatVerifiedDate,
} from '@/lib/utils/grant-status';
import { Badge } from './ui/Badge';
import { Button } from './ui/Button';

interface GrantDetailModalProps {
  grant: GrantOpportunity | null;
  onClose: () => void;
}

export default function GrantDetailModal({ grant, onClose }: GrantDetailModalProps) {
  if (!grant) return null;

  const statusInfo = getGrantStatusInfo(grant);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/40 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl rounded-2xl border border-line bg-paper p-6 sm:p-8 shadow-xl max-h-[90vh] overflow-y-auto space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between gap-4 border-b border-line pb-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border ${statusInfo.badgeClass}`}>
                {statusInfo.label}
              </span>
              <span className="text-[11px] text-muted">
                {formatVerifiedDate(grant.verified_at || grant.last_checked_at)}
              </span>
            </div>
            <h2 className="font-serif text-2xl font-semibold text-ink leading-tight">
              {grant.title}
            </h2>
            <p className="text-xs text-muted flex items-center gap-1.5">
              <Building2 className="h-3.5 w-3.5 text-forest" />
              <span>{grant.funder}</span>
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded-md text-muted hover:text-ink hover:bg-sand/60 transition-colors cursor-pointer"
            aria-label="Fermer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Specs Overview */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          <div className="p-3 rounded-lg border border-line bg-white text-xs">
            <span className="text-muted block">Montant</span>
            <strong className="text-ink text-sm mt-0.5 block">
              {formatFundingRange(grant.funding_min, grant.funding_max, grant.currency)}
            </strong>
          </div>
          <div className="p-3 rounded-lg border border-line bg-white text-xs">
            <span className="text-muted block">Calendrier</span>
            <strong className="text-ink text-sm mt-0.5 block">
              {formatDeadlineDisplay(grant.deadline, grant.is_recurrent, grant.recurrent_details)}
            </strong>
          </div>
          <div className="p-3 rounded-lg border border-line bg-white text-xs col-span-2 sm:col-span-1">
            <span className="text-muted block">Périmètre</span>
            <strong className="text-ink text-sm mt-0.5 block">
              {grant.geographic_level || 'National'}
            </strong>
          </div>
        </div>

        {/* Description */}
        <div className="space-y-2">
          <h4 className="font-serif text-base font-semibold text-ink">
            Description du dispositif
          </h4>
          <p className="text-xs sm:text-sm text-muted leading-relaxed whitespace-pre-wrap">
            {grant.description}
          </p>
        </div>

        {/* Requirements */}
        {grant.requirements && grant.requirements.length > 0 && (
          <div className="space-y-2">
            <h4 className="font-serif text-base font-semibold text-ink">
              Conditions & Critères d’éligibilité
            </h4>
            <ul className="list-disc pl-5 text-xs text-muted space-y-1">
              {grant.requirements.map((req, i) => (
                <li key={i}>{req}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Tags */}
        <div className="space-y-2">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-muted">
            Thématiques & Publics
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {grant.themes.map((t) => (
              <Badge key={t} variant="sand" size="sm">
                {t}
              </Badge>
            ))}
            {grant.beneficiaries.map((b) => (
              <Badge key={b} variant="neutral" size="sm">
                Public\u00A0: {b}
              </Badge>
            ))}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between gap-4 pt-4 border-t border-line">
          <Button variant="outline" size="sm" onClick={onClose}>
            Fermer
          </Button>
          <a
            href={grant.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex"
          >
            <Button variant="primary" size="sm">
              <span>Accéder au portail officiel</span>
              <ExternalLink className="h-4 w-4 ml-1.5" />
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
