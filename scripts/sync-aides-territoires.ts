import { prisma } from '../src/lib/prisma';
import { fetchAidesTerritoires } from '../src/lib/sources/aides-territoires';

async function main() {
  console.log('[Sync Aides-Territoires] Démarrage de la synchronisation...');
  const { grants, isDemoMode } = await fetchAidesTerritoires();

  console.log(`[Sync Aides-Territoires] ${grants.length} dispositifs récupérés (Mode Démo / Curated: ${isDemoMode}).`);

  let upserted = 0;
  for (const g of grants) {
    await prisma.grant.upsert({
      where: { url: g.url },
      update: {
        title: g.title,
        funder: g.funder,
        description: g.description,
        funding_min: g.funding_min,
        funding_max: g.funding_max,
        currency: g.currency,
        deadline: g.deadline ? new Date(g.deadline) : null,
        is_recurrent: g.is_recurrent || false,
        recurrent_details: g.recurrent_details || null,
        geographic_level: g.geographic_level || 'national',
        eligible_regions: JSON.stringify(g.eligible_regions),
        eligible_departments: g.eligible_departments ? JSON.stringify(g.eligible_departments) : null,
        eligible_org_types: JSON.stringify(g.eligible_org_types),
        themes: JSON.stringify(g.themes),
        beneficiaries: JSON.stringify(g.beneficiaries),
        requirements: JSON.stringify(g.requirements),
        operating_history_required: g.operating_history_required,
        source_domain: g.source_domain,
        source_id: g.source_id,
        status: g.status,
        verified_at: g.verified_at ? new Date(g.verified_at) : new Date(),
      },
      create: {
        title: g.title,
        funder: g.funder,
        url: g.url,
        description: g.description,
        funding_min: g.funding_min,
        funding_max: g.funding_max,
        currency: g.currency,
        deadline: g.deadline ? new Date(g.deadline) : null,
        is_recurrent: g.is_recurrent || false,
        recurrent_details: g.recurrent_details || null,
        geographic_level: g.geographic_level || 'national',
        eligible_regions: JSON.stringify(g.eligible_regions),
        eligible_departments: g.eligible_departments ? JSON.stringify(g.eligible_departments) : null,
        eligible_org_types: JSON.stringify(g.eligible_org_types),
        themes: JSON.stringify(g.themes),
        beneficiaries: JSON.stringify(g.beneficiaries),
        requirements: JSON.stringify(g.requirements),
        operating_history_required: g.operating_history_required,
        source_domain: g.source_domain,
        source_id: g.source_id,
        status: g.status,
        verified_at: g.verified_at ? new Date(g.verified_at) : new Date(),
      },
    });
    upserted++;
  }

  console.log(`[Sync Aides-Territoires] Terminé : ${upserted} aides synchronisées.`);
}

main()
  .catch((e) => {
    console.error('[Sync Error]:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
