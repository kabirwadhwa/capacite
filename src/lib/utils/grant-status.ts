import { GrantOpportunity } from '../../types';
import { formatEuros, formatDateFr } from '../utils';

export type TrustStatus =
  | 'OUVERT'
  | 'AU FIL DE L’EAU'
  | 'SUR INVITATION'
  | 'A VENIR'
  | 'CLÔTURÉ'
  | 'NON VÉRIFIÉ';

export interface GrantStatusInfo {
  status: TrustStatus;
  label: string;
  badgeClass: string;
  isVerified: boolean;
  explanation: string;
}

export function getGrantStatusInfo(grant?: Partial<GrantOpportunity> | null): GrantStatusInfo {
  if (!grant) {
    return {
      status: 'NON VÉRIFIÉ',
      label: 'Statut en cours de vérification',
      badgeClass: 'bg-sand text-ink-light border-line',
      isVerified: false,
      explanation: 'Vérification manuelle en attente sur le portail du financeur.',
    };
  }

  const descLower = (grant.description || '').toLowerCase();
  const titleLower = (grant.title || '').toLowerCase();
  let reqStr = '';
  if (Array.isArray(grant.requirements)) {
    reqStr = grant.requirements.join(' ');
  } else if (typeof grant.requirements === 'string') {
    reqStr = grant.requirements;
  }
  const combined = `${descLower} ${titleLower} ${reqStr.toLowerCase()}`;

  // 1. Expired / Closed
  if (grant.deadline) {
    const deadlineDate = new Date(grant.deadline);
    if (!isNaN(deadlineDate.getTime()) && deadlineDate.getTime() < Date.now()) {
      return {
        status: 'CLÔTURÉ',
        label: 'Session clôturée',
        badgeClass: 'bg-clay/10 text-clay-dark border-clay/20',
        isVerified: true,
        explanation: 'La session actuelle est close. Consultez la source officielle pour la prochaine relève.',
      };
    }
  }

  // 2. Invitation only
  if (
    combined.includes('invitation') ||
    combined.includes('non sollicite') ||
    combined.includes('unsolicited')
  ) {
    return {
      status: 'SUR INVITATION',
      label: 'Sur sollicitation / Cooptation',
      badgeClass: 'bg-sand text-ink border-line',
      isVerified: true,
      explanation: 'Ce financeur n’instruit pas de candidatures spontanées.',
    };
  }

  // 3. Recurrent / Rolling
  if (grant.is_recurrent || !grant.deadline) {
    return {
      status: 'AU FIL DE L’EAU',
      label: 'Au fil de l’eau / Récurrent',
      badgeClass: 'bg-forest/10 text-forest border-forest/20',
      isVerified: true,
      explanation: grant.recurrent_details || 'Dépôt continu ou appel annuel récurrent.',
    };
  }

  // 4. Open with deadline
  return {
    status: 'OUVERT',
    label: 'Appel en cours',
    badgeClass: 'bg-emerald-50 text-emerald-800 border-emerald-200',
    isVerified: true,
    explanation: 'Candidatures actuellement ouvertes selon le calendrier officiel.',
  };
}

export function formatDeadlineDisplay(deadline: Date | string | null | undefined, isRecurrent?: boolean, recurrentDetails?: string | null): string {
  if (deadline) {
    return formatDateFr(deadline);
  }
  if (isRecurrent) {
    return recurrentDetails || 'Appel annuel récurrent';
  }
  return 'Dépôt au fil de l’eau';
}

export function formatFundingRange(min: number | null | undefined, max: number | null | undefined, currency: string = 'EUR'): string {
  if (min != null && max != null) {
    return `De ${formatEuros(min)} à ${formatEuros(max)}`;
  }
  if (max != null) {
    return `Jusqu’à ${formatEuros(max)}`;
  }
  if (min != null) {
    return `À partir de ${formatEuros(min)}`;
  }
  return 'Montant non plafonné';
}

export function formatVerifiedDate(date: Date | string | null | undefined): string {
  if (!date) return 'Vérification récente';
  return `Vérifié le ${formatDateFr(date)}`;
}
