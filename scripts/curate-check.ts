import { CURATED_FRENCH_GRANTS } from '../prisma/curated-grants';

function checkCuratedGrants() {
  console.log(`[Curate Check] Vérification de ${CURATED_FRENCH_GRANTS.length} subventions...`);
  let errors = 0;

  for (const grant of CURATED_FRENCH_GRANTS) {
    if (!grant.title || grant.title.length < 5) {
      console.error(`[Error] Titre trop court ou manquant: ${grant.title}`);
      errors++;
    }
    if (!grant.funder) {
      console.error(`[Error] Financeur manquant pour: ${grant.title}`);
      errors++;
    }
    if (!grant.url.startsWith('http')) {
      console.error(`[Error] URL invalide: ${grant.url}`);
      errors++;
    }
    if (grant.currency !== 'EUR') {
      console.error(`[Error] Devise non conforme (${grant.currency}) pour: ${grant.title}. Attendu: EUR`);
      errors++;
    }
    if (!grant.verified_at) {
      console.error(`[Error] Date de vérification humaine (verified_at) manquante pour: ${grant.title}`);
      errors++;
    }
    // Check for synthetic sliding deadlines
    if (grant.deadline instanceof Date) {
      const now = Date.now();
      const diffDays = (grant.deadline.getTime() - now) / (1000 * 60 * 60 * 24);
      // If deadline is exactly ~65 or 90 days from now down to the millisecond, flag it
      if (Math.abs(diffDays - 65) < 0.001 || Math.abs(diffDays - 90) < 0.001) {
        console.error(`[Error] Date limite glissante suspecte (Date.now() + N) pour: ${grant.title}`);
        errors++;
      }
    }
  }

  if (errors > 0) {
    console.error(`[Curate Check] Échec: ${errors} anomalie(s) détectée(s).`);
    process.exit(1);
  } else {
    console.log(`[Curate Check] Succès: Toutes les subventions sont conformes aux exigences qualité Coup d'Épaule.`);
  }
}

checkCuratedGrants();
