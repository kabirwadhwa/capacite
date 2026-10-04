import { calculateGeographicScore, evaluateGrantFit } from '../src/lib/matching/scoring-engine';
import { GrantOpportunity, NGOProfile } from '../src/types';

describe('Scoring Engine - French Administrative Hierarchy & Blocker Rules', () => {
  it('awards 100% for national grant in France', () => {
    const score = calculateGeographicScore('France', ['Île-de-France'], ['Toute la France']);
    expect(score).toBe(100);
  });

  it('awards 100% for exact department match', () => {
    const score = calculateGeographicScore('France', ['Île-de-France'], ['Île-de-France'], '75', ['75', '92']);
    expect(score).toBe(100);
  });

  it('awards 95% for department belonging to regional hierarchy', () => {
    // Department 75 belongs to Île-de-France
    const score = calculateGeographicScore('France', ['Paris'], ['Île-de-France'], '75', []);
    expect(score).toBe(95);
  });

  it('awards 85% for European Union grant', () => {
    const score = calculateGeographicScore('France', ['France'], ['Union Européenne', 'Europe']);
    expect(score).toBe(85);
  });

  it('awards 0% when NGO territory is excluded from grant region', () => {
    // NGO operates only in Marseille/PACA, grant is strictly for Bretagne
    const score = calculateGeographicScore('France', ["Provence-Alpes-Côte d'Azur"], ['Bretagne'], '13', []);
    expect(score).toBe(0);
  });

  it('caps overall match score at 25% if geographic fit is 0 (disqualification rule)', () => {
    const mockNgo: NGOProfile = {
      name: 'Association Locale Sud',
      country: 'France',
      department: '13',
      region: "Provence-Alpes-Côte d'Azur",
      operating_regions: ["Provence-Alpes-Côte d'Azur"],
      themes: ['Environnement & Climat'],
      beneficiaries: ['Tous publics'],
      years_operating: 5,
      registration_status: 'Association loi 1901',
      description: 'Protection littorale en Méditerranée',
    };

    const incompatibleGrant: GrantOpportunity = {
      title: 'Aide Régionale Bretagne Littoral',
      funder: 'Conseil Régional de Bretagne',
      url: 'https://bretagne.bzh/aide-littoral',
      description: 'Réservé aux associations bretonnes.',
      funding_min: 5000,
      funding_max: 20000,
      currency: 'EUR',
      deadline: null,
      eligible_regions: ['Bretagne'],
      eligible_departments: ['22', '29', '35', '56'],
      eligible_org_types: ['Association loi 1901'],
      themes: ['Environnement & Climat'],
      beneficiaries: ['Tous publics'],
      requirements: [],
      source_domain: 'bretagne.bzh',
      status: 'verified',
    };

    const fit = evaluateGrantFit(mockNgo, incompatibleGrant);
    expect(fit.breakdown.geographic).toBe(0);
    expect(fit.total_score).toBeLessThanOrEqual(25);
    expect(fit.issues.some((i) => i.includes('Inéligibilité géographique'))).toBe(true);
  });
});
