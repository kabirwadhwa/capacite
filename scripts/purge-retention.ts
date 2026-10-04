import { prisma } from '../src/lib/prisma';

async function main() {
  const cutoffDate = new Date();
  cutoffDate.setMonth(cutoffDate.getMonth() - 24);

  console.log(`[Purge] Purging submissions older than: ${cutoffDate.toISOString()}`);

  const purgedApps = await prisma.application.deleteMany({
    where: {
      created_at: {
        lt: cutoffDate,
      },
    },
  });

  const purgedVols = await prisma.volunteerSignup.deleteMany({
    where: {
      created_at: {
        lt: cutoffDate,
      },
    },
  });

  console.log(`[Purge] Supprimé ${purgedApps.count} candidatures et ${purgedVols.count} bénévoles de plus de 24 mois.`);
}

main()
  .catch((e) => {
    console.error('[Purge Error]:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
