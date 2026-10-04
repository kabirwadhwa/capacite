import { NextRequest } from 'next/server';
import { prisma } from '@/lib/prisma';
import { CURATED_FRENCH_GRANTS } from '@/lib/curated-grants';
import { GrantOpportunity, NGOProfile, MatchEvaluation } from '@/types';
import { explainGrantMatch } from '@/lib/matching/explainer';

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  try {
    const ngo: NGOProfile = await req.json();

    if (!ngo.name || !ngo.description) {
      return Response.json(
        { error: 'Nom et description de l’association requis pour l’analyse.' },
        { status: 400 }
      );
    }

    let grants: GrantOpportunity[] = [];
    try {
      const dbGrants = await prisma.grant.findMany({
        where: { status: { in: ['active', 'verified', 'curated'] } },
      });

      if (dbGrants.length > 0) {
        grants = dbGrants.map((g) => ({
          id: g.id,
          title: g.title,
          funder: g.funder,
          url: g.url,
          description: g.description,
          funding_min: g.funding_min,
          funding_max: g.funding_max,
          currency: g.currency,
          deadline: g.deadline,
          is_recurrent: g.is_recurrent,
          recurrent_details: g.recurrent_details,
          geographic_level: g.geographic_level,
          eligible_regions: (() => {
            try {
              return JSON.parse(g.eligible_regions);
            } catch {
              return [g.eligible_regions];
            }
          })(),
          eligible_departments: (() => {
            try {
              return g.eligible_departments ? JSON.parse(g.eligible_departments) : undefined;
            } catch {
              return undefined;
            }
          })(),
          eligible_org_types: (() => {
            try {
              return JSON.parse(g.eligible_org_types);
            } catch {
              return [g.eligible_org_types];
            }
          })(),
          themes: (() => {
            try {
              return JSON.parse(g.themes);
            } catch {
              return [g.themes];
            }
          })(),
          beneficiaries: (() => {
            try {
              return JSON.parse(g.beneficiaries);
            } catch {
              return [g.beneficiaries];
            }
          })(),
          requirements: (() => {
            try {
              return JSON.parse(g.requirements);
            } catch {
              return [g.requirements];
            }
          })(),
          operating_history_required: g.operating_history_required,
          source_domain: g.source_domain,
          status: g.status as any,
          verified_at: g.verified_at,
        }));
      }
    } catch {
      // Fallback
    }

    if (grants.length === 0) {
      grants = CURATED_FRENCH_GRANTS;
    }

    // Evaluate all grants
    const matchPromises = grants.map((g) => explainGrantMatch(ngo, g));
    const evaluations: MatchEvaluation[] = await Promise.all(matchPromises);

    // Sort by highest score first
    evaluations.sort((a, b) => b.total_score - a.total_score);

    return Response.json({
      matches: evaluations,
      count: evaluations.length,
    });
  } catch (error) {
    console.error('[API Match Error]:', error);
    return Response.json(
      { error: "Une erreur est survenue lors de l'évaluation de vos financements." },
      { status: 500 }
    );
  }
}
