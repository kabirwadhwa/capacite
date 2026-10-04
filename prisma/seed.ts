import { PrismaClient } from '@prisma/client';
import { CURATED_FRENCH_GRANTS } from './curated-grants';

const prisma = new PrismaClient();

async function main() {
  console.log(`[Seed] Initialisation des subventions françaises vérifiées (${CURATED_FRENCH_GRANTS.length} programmes)...`);

  let count = 0;
  for (const g of CURATED_FRENCH_GRANTS) {
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
    count++;
  }

  console.log(`[Seed] ${count} subventions françaises enregistrées avec succès en base de données.`);
}

main()
  .catch((e) => {
    console.error('[Seed Error]:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
