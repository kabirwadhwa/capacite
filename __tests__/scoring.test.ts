import { calculateThematicScore, evaluateGrantFit } from '../src/lib/matching/scoring-engine';
import { GrantOpportunity, NGOProfile } from '../src/types';

describe('Scoring Engine - Thematic Matching & Overall Weights', () => {
  it('reconnaît les synonymes thématiques français (ex: précarité / action sociale)', () => {
    const score = calculateThematicScore(['Précarité & Pauvreté'], ['Action sociale & Solidarité']);
    expect(score).toBeGreaterThanOrEqual(75);
  });

  it('calcule un score global conforme à la formule de pondération', () => {
    const ngo: NGOProfile = {
      name: 'Les Petits Débrouillards',
      country: 'France',
      department: '75',
      region: 'Île-de-France',
      operating_regions: ['Île-de-France', 'France'],
      themes: ['Éducation & Jeunesse', 'Numérique solidaire'],
      beneficiaries: ['Jeunes', 'Enfants'],
      annual_budget: 150000,
      requested_funding_max: 20000,
      years_operating: 5,
      registration_status: 'Association loi 1901',
      description: 'Ateliers scientifiques et éducation populaire pour les jeunes.',
    };

    const grant: GrantOpportunity = {
      title: 'Appel à projets Jeunesse & Sciences',
      funder: 'Région Île-de-France',
      url: 'https://iledefrance.fr/jeunesse-sciences',
      description: 'Soutien aux projets éducatifs et scientifiques pour les jeunes franciliens.',
      funding_min: 5000,
      funding_max: 25000,
      currency: 'EUR',
      deadline: null,
      eligible_regions: ['Île-de-France'],
      eligible_departments: ['75', '92', '93'],
      eligible_org_types: ['Association loi 1901'],
      themes: ['Éducation & Jeunesse'],
      beneficiaries: ['Jeunes'],
      requirements: [],
      source_domain: 'iledefrance.fr',
      status: 'verified',
    };

    const fit = evaluateGrantFit(ngo, grant);
    expect(fit.total_score).toBeGreaterThanOrEqual(85);
    expect(fit.recommendation).toContain('Forte adéquation');
  });
});
