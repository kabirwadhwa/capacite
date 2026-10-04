import { GrantOpportunity } from '../../types';
import { CURATED_FRENCH_GRANTS } from '../curated-grants';

export interface AidesTerritoiresResult {
  id: number;
  name: string;
  description: string;
  financers: Array<{ name: string }>;
  origin_url: string;
  application_url?: string;
  subvention_rate_upper_bound?: number;
  subvention_comment?: string;
  loan_amount?: number;
  recoverable_advance_amount?: number;
  targeted_audiences: string[];
  perimeter: string;
  programs: string[];
  categories: string[];
  submission_deadline?: string;
  is_call_for_project: boolean;
  is_recurrent: boolean;
  recurrence_description?: string;
  date_created: string;
  date_updated: string;
}

export async function fetchAidesTerritoires(
  query?: string,
  perimeterScale?: string
): Promise<{ grants: GrantOpportunity[]; isDemoMode: boolean }> {
  const token = process.env.AIDES_TERRITOIRES_API_TOKEN;

  let url = 'https://aides-territoires.beta.gouv.fr/api/aids/?targeted_audiences=association';
  if (query) url += `&text=${encodeURIComponent(query)}`;
  if (perimeterScale) url += `&perimeter_scale=${encodeURIComponent(perimeterScale)}`;

  const headers: Record<string, string> = {
    Accept: 'application/json',
  };
  if (token) {
    headers['Authorization'] = `Token ${token}`;
  }

  try {
    const res = await fetch(url, {
      headers,
      signal: AbortSignal.timeout(8000),
    });

    if (!res.ok) {
      console.warn(
        `[Aides-Territoires] API returned status ${res.status}. Falling back to verified curated French grants.`
      );
      return { grants: CURATED_FRENCH_GRANTS, isDemoMode: true };
    }

    const data = await res.json();
    const results: AidesTerritoiresResult[] = data.results || [];

    if (results.length === 0) {
      return { grants: CURATED_FRENCH_GRANTS, isDemoMode: true };
    }

    const grants: GrantOpportunity[] = results.map((item) => {
      const funderName = item.financers?.[0]?.name || 'Financeur Public (Aides-territoires)';
      const deadline = item.submission_deadline ? new Date(item.submission_deadline) : null;

      return {
        title: item.name,
        funder: funderName,
        url: item.origin_url || item.application_url || `https://aides-territoires.beta.gouv.fr/aides/${item.id}`,
        description: item.description?.replace(/<[^>]*>?/gm, '').slice(0, 500) || item.name,
        funding_min: null,
        funding_max: null,
        currency: 'EUR',
        deadline,
        is_recurrent: item.is_recurrent || false,
        recurrent_details: item.recurrence_description || null,
        geographic_level: item.perimeter || 'national',
        eligible_regions: [item.perimeter || 'Toute la France'],
        eligible_org_types: ['Association loi 1901'],
        themes: item.categories?.length > 0 ? item.categories : ['Vie associative'],
        beneficiaries: ['Tous publics'],
        requirements: ['Dossier d’éligibilité Aides-territoires'],
        source_domain: 'aides-territoires.beta.gouv.fr',
        source_id: String(item.id),
        status: 'verified',
        verified_at: new Date(),
      };
    });

    return { grants, isDemoMode: false };
  } catch (error) {
    console.warn('[Aides-Territoires] Error fetching API. Using verified curated grants:', error);
    return { grants: CURATED_FRENCH_GRANTS, isDemoMode: true };
  }
}
