import { NextRequest } from 'next/server';
import { prisma } from '@/lib/prisma';
import { CURATED_FRENCH_GRANTS } from '@/lib/curated-grants';
import { GrantOpportunity } from '@/types';

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const q = searchParams.get('q')?.toLowerCase().trim();
  const theme = searchParams.get('theme')?.toLowerCase().trim();
  const region = searchParams.get('region')?.toLowerCase().trim();

  try {
    const dbGrants = await prisma.grant.findMany({
      orderBy: { discovered_at: 'desc' },
      take: 100,
    });

    let grants: GrantOpportunity[] = [];

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
        source_id: g.source_id,
        status: g.status as any,
        verified_at: g.verified_at,
      }));
    } else {
      grants = CURATED_FRENCH_GRANTS;
    }

    // Apply in-memory search and filters
    if (q) {
      grants = grants.filter(
        (g) =>
          g.title.toLowerCase().includes(q) ||
          g.funder.toLowerCase().includes(q) ||
          g.description.toLowerCase().includes(q)
      );
    }

    if (theme && theme !== 'tous') {
      grants = grants.filter((g) =>
        g.themes.some((t) => t.toLowerCase().includes(theme) || theme.includes(t.toLowerCase()))
      );
    }

    if (region && region !== 'toutes') {
      grants = grants.filter((g) =>
        g.eligible_regions.some(
          (r) =>
            r.toLowerCase().includes(region) ||
            r.toLowerCase().includes('toute la france') ||
            r.toLowerCase().includes('national')
        )
      );
    }

    return Response.json({
      grants,
      total: grants.length,
      isDemoMode: dbGrants.length === 0,
    });
  } catch (error) {
    console.warn('[API Financements GET Error] Fallback to curated:', error);
    let grants = CURATED_FRENCH_GRANTS;
    if (q) {
      grants = grants.filter(
        (g) =>
          g.title.toLowerCase().includes(q) ||
          g.funder.toLowerCase().includes(q) ||
          g.description.toLowerCase().includes(q)
      );
    }
    return Response.json({
      grants,
      total: grants.length,
      isDemoMode: true,
    });
  }
}
