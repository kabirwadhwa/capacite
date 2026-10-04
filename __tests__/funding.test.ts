import { calculateFundingScore } from '../src/lib/matching/scoring-engine';
import { GrantOpportunity, NGOProfile } from '../src/types';

describe('Scoring Engine - French Funding & Absorptive Capacity', () => {
  const baseNgo: NGOProfile = {
    name: 'Association Solidarité Active',
    country: 'France',
    operating_regions: ['Île-de-France'],
    themes: ['Solidarité & Action sociale'],
    beneficiaries: ['Familles'],
    annual_budget: 100000,
    requested_funding_min: 15000,
    requested_funding_max: 40000,
    years_operating: 3,
    registration_status: 'Association loi 1901',
    description: 'Aide aux familles défavorisées',
  };

  const baseGrant: GrantOpportunity = {
    title: 'Subvention Action Sociale',
    funder: 'Fondation de France',
    url: 'https://fondationdefrance.org/action-sociale',
    description: 'Soutien aux projets associatifs solidaires',
    funding_min: 10000,
    funding_max: 50000,
    currency: 'EUR',
    deadline: null,
    eligible_regions: ['Toute la France'],
    eligible_org_types: ['Association loi 1901'],
    themes: ['Solidarité & Action sociale'],
    beneficiaries: ['Familles'],
    requirements: [],
    source_domain: 'fondationdefrance.org',
    status: 'verified',
  };

  it('attribue un score élevé lorsque le besoin s’inscrit dans la fourchette de l’aide', () => {
    const result = calculateFundingScore(baseNgo, baseGrant);
    expect(result.score).toBeGreaterThanOrEqual(90);
    expect(result.issues.length).toBe(0);
  });

  it('déduit des points et alerte quand le besoin dépasse le plafond de la subvention', () => {
    const highRequestNgo: NGOProfile = {
      ...baseNgo,
      requested_funding_max: 120000,
    };

    const result = calculateFundingScore(highRequestNgo, baseGrant);
    expect(result.score).toBeLessThanOrEqual(60);
    expect(result.issues.some((i) => i.includes('Montant demandé supérieur au plafond'))).toBe(true);
  });

  it('signale une alerte de capacité d’absorption si le montant max dépasse 2,5× le budget annuel', () => {
    const hugeGrant: GrantOpportunity = {
      ...baseGrant,
      funding_min: 50000,
      funding_max: 300000, // 300k€ > 2.5× budget annuel de 100k€
    };

    const result = calculateFundingScore(baseNgo, hugeGrant);
    expect(result.issues.some((i) => i.includes("Capacité d'absorption financière"))).toBe(true);
  });
});
