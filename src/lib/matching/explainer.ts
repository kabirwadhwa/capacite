import { GrantOpportunity, MatchEvaluation, NGOProfile, ScoreBreakdown } from '../../types';
import { llmService } from '../llm/provider';
import { evaluateGrantFit } from './scoring-engine';
import { formatEuros, formatDateFr } from '../utils';

/**
 * Deterministic generation of French fit reasons, explanations, and next steps
 */
export function generateDeterministicExplanation(
  ngo: NGOProfile,
  grant: GrantOpportunity,
  breakdown: ScoreBreakdown,
  totalScore: number,
  issues: string[]
): { explanation: string; recommendation: string; risks: string[] } {
  const fitPoints: string[] = [];

  if (breakdown.thematic >= 70) {
    fitPoints.push(
      `Forte cohérence thématique sur vos axes d'action (${(ngo.themes || []).slice(0, 3).join(', ')}).`
    );
  }
  if (breakdown.geographic >= 80) {
    fitPoints.push(
      `Périmètre géographique parfaitement compatible (${grant.eligible_regions.slice(0, 2).join(', ')}).`
    );
  }
  if (breakdown.funding_size >= 80) {
    fitPoints.push(
      `Montant adapté à vos capacités financières (jusqu’à ${formatEuros(grant.funding_max)}).`
    );
  }
  if (breakdown.beneficiary >= 70) {
    fitPoints.push(
      `Alignement sur vos publics prioritaires (${(ngo.beneficiaries || []).slice(0, 2).join(', ')}).`
    );
  }

  const fitSummary =
    fitPoints.length > 0
      ? fitPoints.join(' ')
      : "Alignement partiel avec les critères prioritaires de l'appel à projets.";

  let explanation = `Le dispositif «\u00A0${grant.title}\u00A0» porté par ${grant.funder} présente un score d'adéquation de ${totalScore}\u00A0%. ${fitSummary}`;

  if (llmService.isDemoMode()) {
    explanation += " (Analyse réalisée via le moteur de règles déterministe certifié).";
  }

  // Next steps recommendation
  let recommendation = `Consultez le cahier des charges officiel sur ${grant.source_domain}.`;
  if (grant.deadline) {
    const deadlineDate = new Date(grant.deadline);
    recommendation = `Date limite de dépôt\u00A0: ${formatDateFr(deadlineDate)}. Préparez le dossier administratif (statuts, RIB, budget prévisionnel certifié).`;
  } else if (grant.is_recurrent) {
    recommendation = `Dispositif récurrent (${grant.recurrent_details || 'Campagne annuelle'}). Consultez le calendrier de la session en cours.`;
  } else {
    recommendation =
      'Dépôt au fil de l’eau\u00A0: téléchargez la notice et formulez votre lettre d’opportunité auprès du référent instructeur.';
  }

  return {
    explanation,
    recommendation,
    risks:
      issues.length > 0
        ? issues
        : ['Vérifiez la conformité de vos obligations déclaratives (publication JOAFE, déclaration RNA).'],
  };
}

export async function explainGrantMatch(
  ngo: NGOProfile,
  grant: GrantOpportunity
): Promise<MatchEvaluation> {
  const fit = evaluateGrantFit(ngo, grant);

  // If LLM is not configured, use fast deterministic French engine
  if (llmService.isDemoMode()) {
    const det = generateDeterministicExplanation(
      ngo,
      grant,
      fit.breakdown,
      fit.total_score,
      fit.issues
    );

    return {
      ngo_id: ngo.id,
      grant_id: grant.id,
      total_score: fit.total_score,
      breakdown: fit.breakdown,
      explanation: det.explanation,
      risks: det.risks,
      recommendation: det.recommendation,
      grant,
      created_at: new Date(),
    };
  }

  // If LLM provider is active (Anthropic / OpenAI / Gemini), prompt in French
  try {
    const prompt = `
Tu es l'analyste senior de "Coup d'Épaule", initiative bénévole aidant les associations loi 1901 en France à trouver des financements.
Évalue l'adéquation entre cette association française et cette opportunité de subvention.

PROFIL ASSOCIATION:
- Nom: ${ngo.name}
- Statut: ${ngo.registration_status}
- Région / Département: ${ngo.region || ngo.operating_regions.join(', ')} (${ngo.department || 'N/C'})
- Thèmes: ${(ngo.themes || []).join(', ')}
- Bénéficiaires: ${(ngo.beneficiaries || []).join(', ')}
- Budget annuel: ${ngo.annual_budget ? ngo.annual_budget + ' €' : 'Non précisé'}
- Description: ${ngo.description}

SUBVENTION:
- Titre: ${grant.title}
- Financeur: ${grant.funder}
- Montant min-max: ${grant.funding_min || 0} € - ${grant.funding_max || 'Non plafonné'} €
- Régions éligibles: ${grant.eligible_regions.join(', ')}
- Statuts éligibles: ${grant.eligible_org_types.join(', ')}
- Thèmes: ${grant.themes.join(', ')}
- Description: ${grant.description}

SCORE CALCULE: ${fit.total_score}%
DÉTAIL: Thématique ${fit.breakdown.thematic}%, Géo ${fit.breakdown.geographic}%, Éligibilité ${fit.breakdown.eligibility}%, Financement ${fit.breakdown.funding_size}%, Bénéficiaires ${fit.breakdown.beneficiary}%

RÉPONDS UNIQUEMENT AU FORMAT JSON STRICT:
{
  "explanation": "2 à 3 phrases claires en français sans jargon expliquant la cohérence.",
  "risks": ["point d'attention 1", "point d'attention 2"],
  "recommendation": "1 action concrète et immédiate conseillée pour l'association."
}
`;

    const res = await llmService.complete(prompt);
    const jsonStr = res.replace(/```json/g, '').replace(/```/g, '').trim();
    const parsed = JSON.parse(jsonStr);

    return {
      ngo_id: ngo.id,
      grant_id: grant.id,
      total_score: fit.total_score,
      breakdown: fit.breakdown,
      explanation: parsed.explanation || fit.recommendation,
      risks: Array.isArray(parsed.risks) && parsed.risks.length > 0 ? parsed.risks : fit.issues,
      recommendation: parsed.recommendation || fit.recommendation,
      grant,
      created_at: new Date(),
    };
  } catch (err) {
    console.warn('[LLM Explainer Warning] Fallback to deterministic French generator:', err);
    const det = generateDeterministicExplanation(
      ngo,
      grant,
      fit.breakdown,
      fit.total_score,
      fit.issues
    );
    return {
      ngo_id: ngo.id,
      grant_id: grant.id,
      total_score: fit.total_score,
      breakdown: fit.breakdown,
      explanation: det.explanation,
      risks: det.risks,
      recommendation: det.recommendation,
      grant,
      created_at: new Date(),
    };
  }
}
