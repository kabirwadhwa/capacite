'use client';

import React from 'react';
import { MatchEvaluation } from '@/types';
import { ExternalLink, CheckCircle2, AlertTriangle, ShieldCheck, ArrowRight } from 'lucide-react';
import { getCanonicalFunderName } from '@/lib/utils/funder-canonical';
import {
  getGrantStatusInfo,
  formatDeadlineDisplay,
  formatVerifiedDate,
  formatFundingRange,
} from '@/lib/utils/grant-status';
import { Badge } from './ui/Badge';
import { Button } from './ui/Button';

interface MatchExplanationBlockProps {
  match: MatchEvaluation;
  compact?: boolean;
}

export function scoreTo5(score: number): number {
  if (score >= 88) return 5;
  if (score >= 68) return 4;
  if (score >= 48) return 3;
  if (score >= 25) return 2;
  return 1;
}

export default function MatchExplanationBlock({
  match,
  compact = false,
}: MatchExplanationBlockProps) {
  const grant = match.grant;
  if (!grant) return null;

  const funderName = getCanonicalFunderName(grant.funder, grant.source_domain);
  const statusInfo = getGrantStatusInfo(grant);

  const criteria = [
    { label: 'Thématique (30 %)', score: match.breakdown.thematic, val: scoreTo5(match.breakdown.thematic) },
    { label: 'Géographie (25 %)', score: match.breakdown.geographic, val: scoreTo5(match.breakdown.geographic) },
    { label: 'Statut loi 1901 (20 %)', score: match.breakdown.eligibility, val: scoreTo5(match.breakdown.eligibility) },
    { label: 'Budget & Absorption (15 %)', score: match.breakdown.funding_size, val: scoreTo5(match.breakdown.funding_size) },
    { label: 'Publics cibles (10 %)', score: match.breakdown.beneficiary, val: scoreTo5(match.breakdown.beneficiary) },
  ];

  return (
    <div
      className={`rounded-xl border border-line bg-white shadow-sm transition-all hover:border-line-dark ${
        compact ? 'p-5' : 'p-6'
      } space-y-5`}
    >
      {/* Header: Score & Status */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line/60 pb-4">
        <div className="flex items-center gap-3">
          <div className="inline-flex items-center px-3.5 py-1.5 rounded-lg text-lg sm:text-xl font-serif font-bold bg-forest/10 text-forest border border-forest/20">
            {match.total_score}\u00A0% D’ADÉQUATION
          </div>
          <div>
            <span className="text-xs font-semibold text-ink block">{funderName}</span>
            <span className="text-[11px] text-muted">{grant.source_domain}</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${statusInfo.badgeClass}`}>
            {statusInfo.label}
          </span>
          <span className="text-[11px] text-muted hidden sm:inline">
            {formatVerifiedDate(grant.verified_at || grant.last_checked_at)}
          </span>
        </div>
      </div>

      {/* Grant Title & Core Specs */}
      <div>
        <h3 className="font-serif text-xl font-semibold text-ink leading-snug">
          {grant.title}
        </h3>
        <p className="mt-2 text-xs sm:text-sm text-muted leading-relaxed line-clamp-2">
          {grant.description}
        </p>

        <div className="mt-3 flex flex-wrap gap-2 text-xs text-ink-light">
          <Badge variant="sand">
            {formatFundingRange(grant.funding_min, grant.funding_max, grant.currency)}
          </Badge>
          <Badge variant="neutral">
            Échéance\u00A0: {formatDeadlineDisplay(grant.deadline, grant.is_recurrent, grant.recurrent_details)}
          </Badge>
          <Badge variant="neutral">
            Territoire\u00A0: {grant.eligible_regions.slice(0, 2).join(', ')}
          </Badge>
        </div>
      </div>

      {/* Criteria Breakdown Grid */}
      <div className="bg-sand/25 rounded-lg p-4 space-y-3">
        <h4 className="text-xs font-semibold uppercase tracking-wider text-muted">
          Grille d’évaluation multicritère :
        </h4>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
          {criteria.map((crit, idx) => (
            <div key={idx} className="bg-white p-2.5 rounded-md border border-line/60 text-center">
              <span className="text-[11px] text-muted block truncate font-medium">{crit.label}</span>
              <div className="flex items-center justify-center gap-0.5 mt-1 text-forest">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={`text-xs ${
                      star <= crit.val ? 'text-forest font-bold' : 'text-line-dark'
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <span className="text-[10px] text-muted mt-0.5 block">{crit.score}\u00A0%</span>
            </div>
          ))}
        </div>
      </div>

      {/* Synthesis Explanation */}
      <div className="text-xs sm:text-sm text-ink leading-relaxed space-y-2">
        <p className="font-medium text-forest">Analyse synthétique :</p>
        <p className="text-muted">{match.explanation}</p>
      </div>

      {/* Risks & Caveats */}
      {match.risks && match.risks.length > 0 && (
        <div className="rounded-lg border border-amber-200 bg-amber-50/60 p-3.5 space-y-1.5">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-900">
            <AlertTriangle className="h-4 w-4 text-amber-700 shrink-0" />
            <span>Points de vigilance & critères d’exclusion :</span>
          </div>
          <ul className="list-disc pl-5 text-xs text-amber-950 space-y-1">
            {match.risks.map((risk, i) => (
              <li key={i}>{risk}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Recommended Next Step & CTA */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-3 border-t border-line/60">
        <div className="text-xs text-muted">
          <strong className="text-ink">Recommandation\u00A0:</strong> {match.recommendation}
        </div>

        <a
          href={grant.url}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 inline-flex"
        >
          <Button variant="primary" size="sm">
            <span>Consulter le cahier des charges</span>
            <ExternalLink className="h-3.5 w-3.5 ml-1.5" />
          </Button>
        </a>
      </div>
    </div>
  );
}
