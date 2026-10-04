import { GrantOpportunity, MatchEvaluation, NGOProfile, ScoreBreakdown } from '../../types';

// French and international taxonomy groupings for semantic matching
export const THEME_SYNONYMS: Record<string, string[]> = {
  solidarite: [
    'solidarite',
    'solidarité',
    'action sociale',
    'precarite',
    'précarité',
    'exclusion',
    'hebergement',
    'hébergement',
    'sans-abri',
    'sans abri',
    'pauvrete',
    'pauvreté',
    'maraude',
    'maraudes',
    'secours',
    'aide alimentaire',
    'vulnerabilite',
    'vulnérabilité',
    'poverty',
    'social protection',
    'livelihoods',
    'inclusion',
  ],
  education: [
    'education',
    'éducation',
    'jeunesse',
    'enfance',
    'scolarite',
    'scolarité',
    'soutien scolaire',
    'periscolaire',
    'périscolaire',
    'formation',
    'apprentissage',
    'competences',
    'compétences',
    'schooling',
    'pedagogy',
    'literacy',
    'training',
    'skills',
    'youth',
  ],
  environnement: [
    'environnement',
    'climat',
    'ecologie',
    'écologie',
    'transition ecologique',
    'transition écologique',
    'biodiversite',
    'biodiversité',
    'dechets',
    'déchets',
    'reemploi',
    'réemploi',
    'circuits courts',
    'agriculture durable',
    'energie',
    'énergie',
    'nature',
    'conservation',
    'climate',
    'resilience',
    'renewable',
    'carbon',
  ],
  culture: [
    'culture',
    'patrimoine',
    'arts',
    'spectacle vivant',
    'theatre',
    'théâtre',
    'musique',
    'musee',
    'musée',
    'creation artistique',
    'création artistique',
    'cinema',
    'cinéma',
    'audiovisuel',
    'livre',
    'lecture',
    'humanities',
  ],
  sante: [
    'sante',
    'santé',
    'handicap',
    'sante mentale',
    'santé mentale',
    'acces aux soins',
    'accès aux soins',
    'maladie',
    'prevention',
    'prévention',
    'aidants',
    'medico-social',
    'médico-social',
    'healthcare',
    'health',
    'medical',
    'disease',
    'sanitation',
    'public health',
  ],
  insertion: [
    'insertion',
    'emploi',
    'reconversion',
    'chantiers d insertion',
    'chantiers d’insertion',
    'iae',
    'retour a l emploi',
    'retour à l’emploi',
    'economie sociale et solidaire',
    'économie sociale et solidaire',
    'ess',
    'job training',
    'workforce',
  ],
  numerique: [
    'numerique',
    'numérique',
    'numerique solidaire',
    'numérique solidaire',
    'inclusion numerique',
    'inclusion numérique',
    'transition numerique',
    'transition numérique',
    'open source',
    'mediation numerique',
    'médiation numérique',
    'informatique',
    'technology',
    'digital',
    'data',
    'innovation',
    'artificial intelligence',
    'tech for good',
    'software',
  ],
  citoyennete: [
    'citoyennete',
    'citoyenneté',
    'droits humains',
    'vie associative',
    'plaidoyer',
    'egalite',
    'égalité',
    'democratie',
    'démocratie',
    'benevolat',
    'bénévolat',
    'human rights',
    'justice',
    'civic',
    'governance',
    'gender equality',
  ],
};

// French Department to Region mapping
export const DEPT_TO_REGION: Record<string, string> = {
  // Île-de-France
  '75': 'île-de-france',
  '77': 'île-de-france',
  '78': 'île-de-france',
  '91': 'île-de-france',
  '92': 'île-de-france',
  '93': 'île-de-france',
  '94': 'île-de-france',
  '95': 'île-de-france',
  // Auvergne-Rhône-Alpes
  '01': 'auvergne-rhône-alpes',
  '03': 'auvergne-rhône-alpes',
  '07': 'auvergne-rhône-alpes',
  '15': 'auvergne-rhône-alpes',
  '26': 'auvergne-rhône-alpes',
  '38': 'auvergne-rhône-alpes',
  '42': 'auvergne-rhône-alpes',
  '43': 'auvergne-rhône-alpes',
  '63': 'auvergne-rhône-alpes',
  '69': 'auvergne-rhône-alpes',
  '73': 'auvergne-rhône-alpes',
  '74': 'auvergne-rhône-alpes',
  // Provence-Alpes-Côte d'Azur
  '04': "provence-alpes-côte d'azur",
  '05': "provence-alpes-côte d'azur",
  '06': "provence-alpes-côte d'azur",
  '13': "provence-alpes-côte d'azur",
  '83': "provence-alpes-côte d'azur",
  '84': "provence-alpes-côte d'azur",
  // Occitanie
  '09': 'occitanie',
  '11': 'occitanie',
  '12': 'occitanie',
  '30': 'occitanie',
  '31': 'occitanie',
  '32': 'occitanie',
  '34': 'occitanie',
  '46': 'occitanie',
  '48': 'occitanie',
  '65': 'occitanie',
  '81': 'occitanie',
  '82': 'occitanie',
  // Nouvelle-Aquitaine
  '16': 'nouvelle-aquitaine',
  '17': 'nouvelle-aquitaine',
  '19': 'nouvelle-aquitaine',
  '23': 'nouvelle-aquitaine',
  '24': 'nouvelle-aquitaine',
  '33': 'nouvelle-aquitaine',
  '40': 'nouvelle-aquitaine',
  '47': 'nouvelle-aquitaine',
  '64': 'nouvelle-aquitaine',
  '79': 'nouvelle-aquitaine',
  '86': 'nouvelle-aquitaine',
  '87': 'nouvelle-aquitaine',
  // Pays de la Loire
  '44': 'pays de la loire',
  '49': 'pays de la loire',
  '53': 'pays de la loire',
  '72': 'pays de la loire',
  '85': 'pays de la loire',
  // Bretagne
  '22': 'bretagne',
  '29': 'bretagne',
  '35': 'bretagne',
  '56': 'bretagne',
  // Hauts-de-France
  '02': 'hauts-de-france',
  '59': 'hauts-de-france',
  '60': 'hauts-de-france',
  '62': 'hauts-de-france',
  '80': 'hauts-de-france',
  // Grand Est
  '08': 'grand est',
  '10': 'grand est',
  '51': 'grand est',
  '52': 'grand est',
  '54': 'grand est',
  '55': 'grand est',
  '57': 'grand est',
  '67': 'grand est',
  '68': 'grand est',
  '88': 'grand est',
  // Normandie
  '14': 'normandie',
  '27': 'normandie',
  '50': 'normandie',
  '61': 'normandie',
  '76': 'normandie',
  // Centre-Val de Loire
  '18': 'centre-val de loire',
  '28': 'centre-val de loire',
  '36': 'centre-val de loire',
  '37': 'centre-val de loire',
  '41': 'centre-val de loire',
  '45': 'centre-val de loire',
  // Bourgogne-Franche-Comté
  '21': 'bourgogne-franche-comté',
  '25': 'bourgogne-franche-comté',
  '39': 'bourgogne-franche-comté',
  '58': 'bourgogne-franche-comté',
  '70': 'bourgogne-franche-comté',
  '71': 'bourgogne-franche-comté',
  '89': 'bourgogne-franche-comté',
  '90': 'bourgogne-franche-comté',
  // Corse
  '2A': 'corse',
  '2B': 'corse',
  // Outre-Mer
  '971': 'guadeloupe',
  '972': 'martinique',
  '973': 'guyane',
  '974': 'la réunion',
  '976': 'mayotte',
};

// Global / International hierarchy fallback for backwards-compatibility
const INTERNATIONAL_HIERARCHIES: Record<string, string[]> = {
  kenya: ['east africa', 'sub-saharan africa', 'africa', 'developing countries'],
  uganda: ['east africa', 'sub-saharan africa', 'africa', 'developing countries'],
  tanzania: ['east africa', 'sub-saharan africa', 'africa', 'developing countries'],
  ghana: ['west africa', 'sub-saharan africa', 'africa', 'developing countries'],
  nigeria: ['west africa', 'sub-saharan africa', 'africa', 'developing countries'],
  india: ['south asia', 'asia', 'asia-pacific', 'developing countries'],
  peru: ['latin america', 'south america', 'americas', 'developing countries'],
};

function normalizeString(str: string): string {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim();
}

export function calculateThematicScore(ngoThemes: string[], grantThemes: string[]): number {
  if (!grantThemes || grantThemes.length === 0) return 75;
  if (!ngoThemes || ngoThemes.length === 0) return 50;

  const normNgo = ngoThemes.map(normalizeString);
  const normGrant = grantThemes.map(normalizeString);

  // If grant is open to all themes
  if (normGrant.some((gt) => gt.includes('toutes') || gt.includes('general') || gt.includes('multi'))) {
    return 85;
  }

  let matches = 0;
  for (const nTheme of normNgo) {
    if (normGrant.some((gTheme) => gTheme.includes(nTheme) || nTheme.includes(gTheme))) {
      matches += 1.5;
      continue;
    }

    for (const group of Object.values(THEME_SYNONYMS)) {
      const ngoMatchesGroup = group.some((kw) => nTheme.includes(normalizeString(kw)));
      if (ngoMatchesGroup) {
        const grantMatchesGroup = normGrant.some((gTheme) =>
          group.some((kw) => gTheme.includes(normalizeString(kw)))
        );
        if (grantMatchesGroup) {
          matches += 1.0;
          break;
        }
      }
    }
  }

  const denominator = Math.max(1, Math.min(ngoThemes.length, grantThemes.length));
  const ratio = Math.min(1.0, matches / denominator);

  return Math.round(Math.max(20, ratio * 100));
}

export function calculateGeographicScore(
  ngoCountry: string,
  ngoOperatingRegions: string[],
  grantEligibleRegions: string[],
  ngoDepartment?: string | null,
  grantDepartments?: string[] | null
): number {
  if (!grantEligibleRegions || grantEligibleRegions.length === 0) return 75;

  const normCountry = normalizeString(ngoCountry || 'France');
  const normOperating = (ngoOperatingRegions || []).map(normalizeString);
  const normGrantRegions = grantEligibleRegions.map(normalizeString);

  // 1. Check Global / Worldwide / Toute la France / National
  const isGlobalOrNationalGrant = normGrantRegions.some((r) => {
    if (r.includes('ile-de-france') || r.includes('hauts-de-france')) {
      return false;
    }
    return [
      'global',
      'worldwide',
      'all countries',
      'developing countries',
      'toute la france',
      'national',
      'toutes regions',
      'metropole',
      'france entiere',
    ].some((kw) => r.includes(kw)) || r === 'france';
  });

  const isNgoInFrance = normCountry === 'france' || normOperating.some((op) => op.includes('france'));

  if (isGlobalOrNationalGrant && isNgoInFrance) {
    return 100;
  }

  // 2. Check Department level match
  if (ngoDepartment && grantDepartments && grantDepartments.length > 0) {
    const cleanDept = ngoDepartment.trim();
    if (grantDepartments.some((gd) => gd.trim() === cleanDept)) {
      return 100;
    }
  }

  // 3. Exact country match (avoid matching 'ile-de-france' or 'hauts-de-france' when checking 'france')
  const hasExactCountry = normGrantRegions.some((r) => {
    if (normCountry === 'france' && (r.includes('ile-de-france') || r.includes('hauts-de-france'))) {
      return false;
    }
    return r === normCountry || new RegExp(`\\b${normCountry}\\b`, 'i').test(r);
  });
  if (hasExactCountry && normCountry !== '') {
    return 100;
  }

  // 4. Check Operating regions exact overlap
  const hasOperatingOverlap = normOperating.some((op) =>
    normGrantRegions.some((r) => r.includes(op) || op.includes(r))
  );
  if (hasOperatingOverlap) {
    return 95;
  }

  // 5. French Administrative Hierarchy: Department -> Region
  if (ngoDepartment) {
    const derivedRegion = DEPT_TO_REGION[ngoDepartment.trim().padStart(2, '0')];
    if (derivedRegion) {
      const normDerived = normalizeString(derivedRegion);
      const matchesRegion = normGrantRegions.some((r) => r.includes(normDerived) || normDerived.includes(r));
      if (matchesRegion) {
        return 95;
      }
    }
  }

  // 6. European match
  const isEuGrant = normGrantRegions.some((r) =>
    ['europe', 'union europeenne', 'ue', 'european union'].some((kw) => r.includes(normalizeString(kw)))
  );
  if (isEuGrant && isNgoInFrance) {
    return 85;
  }

  // 7. Global grant match for international NGO
  const isInternationalGlobal = normGrantRegions.some((r) =>
    ['global', 'worldwide'].some((kw) => r.includes(kw))
  );
  if (isInternationalGlobal) {
    return 80;
  }

  // 8. International regional hierarchy
  const parents = INTERNATIONAL_HIERARCHIES[normCountry] || [];
  const matchesHierarchy = parents.some((parent) =>
    normGrantRegions.some((r) => r.includes(parent) || parent.includes(r))
  );
  if (matchesHierarchy) {
    return 85;
  }

  // 9. If no geographic overlap found, return 0 (Disqualification)
  return 0;
}

export function calculateEligibilityScore(
  ngo: NGOProfile,
  grant: GrantOpportunity
): { score: number; issues: string[] } {
  let score = 100;
  const issues: string[] = [];

  const grantOrgTypes = (grant.eligible_org_types || []).map(normalizeString);
  const ngoStatus = normalizeString(ngo.registration_status || 'Association loi 1901');

  // Check organization type
  if (grantOrgTypes.length > 0) {
    const isEligibleType = grantOrgTypes.some((t) => {
      if (t.includes('tous') || t.includes('organisme d interet general')) return true;
      if (t.includes('association') && ngoStatus.includes('association')) return true;
      if (t.includes('fondation') && ngoStatus.includes('fondation')) return true;
      if (t.includes('non-profit') || t.includes('ngo')) return true;
      return t.includes(ngoStatus) || ngoStatus.includes(t);
    });

    if (!isEligibleType) {
      score -= 50;
      issues.push(
        `Statut potentiellement inéligible : la subvention requiert (${grant.eligible_org_types.join(', ')}), votre statut est "${ngo.registration_status}".`
      );
    }
  }

  // Check operating history requirements
  if (grant.operating_history_required != null && grant.operating_history_required > 0) {
    const ngoYears = ngo.years_operating ?? 0;
    if (ngoYears < grant.operating_history_required) {
      score -= 30;
      issues.push(
        `Ancienneté requise : minimum ${grant.operating_history_required} an(s) d'existence requis (votre association a ${ngoYears} an(s)).`
      );
    }
  }

  return { score: Math.max(0, score), issues };
}

export function calculateFundingScore(
  ngo: NGOProfile,
  grant: GrantOpportunity
): { score: number; issues: string[] } {
  let score = 85;
  const issues: string[] = [];

  const requestedMin = ngo.requested_funding_min;
  const requestedMax = ngo.requested_funding_max;
  const grantMin = grant.funding_min;
  const grantMax = grant.funding_max;
  const annualBudget = ngo.annual_budget;

  // Absorptive capacity check
  if (annualBudget != null && annualBudget > 0 && grantMax != null && grantMax > 0) {
    if (grantMax > annualBudget * 2.5) {
      score -= 20;
      issues.push(
        `Capacité d'absorption financière : le montant maximal (${grantMax.toLocaleString('fr-FR')} €) dépasse 2,5× votre budget annuel (${annualBudget.toLocaleString('fr-FR')} €). Les financeurs publics demandent généralement une assise financière proportionnée.`
      );
    }
  }

  // Funding range fit
  if (requestedMax != null && grantMax != null && requestedMax > grantMax * 1.5) {
    score -= 35;
    issues.push(
      `Montant demandé supérieur au plafond : votre besoin estimé (${requestedMax.toLocaleString('fr-FR')} €) excède le montant maximum de l'aide (${grantMax.toLocaleString('fr-FR')} €).`
    );
  } else if (
    requestedMin != null &&
    requestedMax != null &&
    grantMin != null &&
    grantMax != null &&
    requestedMin >= grantMin &&
    requestedMax <= grantMax
  ) {
    score = 100;
  }

  return { score: Math.max(15, Math.min(100, score)), issues };
}

export function calculateBeneficiaryScore(
  ngoBeneficiaries: string[],
  grantBeneficiaries: string[]
): number {
  if (!grantBeneficiaries || grantBeneficiaries.length === 0) return 80;
  if (!ngoBeneficiaries || ngoBeneficiaries.length === 0) return 60;

  const normGrant = grantBeneficiaries.map(normalizeString);
  const normNgo = ngoBeneficiaries.map(normalizeString);

  if (normGrant.some((b) => b.includes('tous') || b.includes('tout public') || b.includes('general'))) {
    return 90;
  }

  let matches = 0;
  for (const nb of normNgo) {
    if (normGrant.some((gb) => gb.includes(nb) || nb.includes(gb))) {
      matches++;
    }
  }

  const ratio = matches / Math.max(1, normNgo.length);
  return Math.round(Math.max(30, ratio * 100));
}

/**
 * Master evaluation function
 */
export function evaluateGrantFit(
  ngo: NGOProfile,
  grant: GrantOpportunity
): {
  total_score: number;
  breakdown: ScoreBreakdown;
  issues: string[];
  recommendation: string;
} {
  const thematic = calculateThematicScore(ngo.themes || [], grant.themes || []);
  const geographic = calculateGeographicScore(
    ngo.country || 'France',
    ngo.operating_regions || [],
    grant.eligible_regions || [],
    ngo.department,
    grant.eligible_departments
  );

  const eligibilityRes = calculateEligibilityScore(ngo, grant);
  const fundingRes = calculateFundingScore(ngo, grant);
  const beneficiary = calculateBeneficiaryScore(
    ngo.beneficiaries || [],
    grant.beneficiaries || []
  );

  const breakdown: ScoreBreakdown = {
    thematic,
    geographic,
    eligibility: eligibilityRes.score,
    funding_size: fundingRes.score,
    beneficiary,
  };

  const issues = [...eligibilityRes.issues, ...fundingRes.issues];

  // WEIGHTED FORMULA:
  // Thematic: 30%, Geographic: 25%, Eligibility: 20%, Funding: 15%, Beneficiary: 10%
  let total =
    thematic * 0.3 +
    geographic * 0.25 +
    eligibilityRes.score * 0.2 +
    fundingRes.score * 0.15 +
    beneficiary * 0.1;

  // BLOCKER RULE: If geographic score is 0, cap total score at 25%
  if (geographic === 0) {
    total = Math.min(25, total);
    issues.unshift(
      `Inéligibilité géographique : votre association opère en (${(ngo.operating_regions || [ngo.country]).join(', ')}), mais cette aide est strictement réservée à (${grant.eligible_regions.join(', ')}).`
    );
  }

  const finalScore = Math.round(Math.min(100, Math.max(0, total)));

  let recommendation = '';
  if (finalScore >= 80) {
    recommendation =
      'Forte adéquation : candidature vivement conseillée. Préparez votre note d’opportunité et vérifiez la date limite.';
  } else if (finalScore >= 60) {
    recommendation =
      'Adéquation modérée : vérifiez attentivement les critères d’exclusion et l’adéquation de votre budget avant de monter le dossier.';
  } else {
    recommendation =
      'Adéquation faible ou critères bloquants : sauf réorientation de projet, nous vous conseillons de vous concentrer sur d’autres financements.';
  }

  return {
    total_score: finalScore,
    breakdown,
    issues,
    recommendation,
  };
}
