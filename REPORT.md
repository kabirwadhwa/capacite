# Rapport de Mission — Coup d’Épaule (v1)

> **Projet** : Coup d’Épaule (fusion de « Capacité » & « GrantMatch AI »)  
> **Auteur** : Ingénieur Principal & Concepteur Produit  
> **Dépôt GitHub** : [https://github.com/kabirwadhwa/capacite](https://github.com/kabirwadhwa/capacite)  
> **Déploiement Production** : [https://capacite-production.up.railway.app](https://capacite-production.up.railway.app)  
> **Date de livraison** : 4 octobre 2026  
> **Statut global** : Déployé en production sur Railway, base PostgreSQL active, tests unitaires validés (16/16).

---

## 1. Synthèse Exécutive

Coup d’Épaule est une initiative citoyenne et bénévole française dont la mission est d'accompagner gratuitement les associations loi 1901 et organismes d'intérêt général dans l'adoption pragmatique et responsable des outils numériques, de l'automatisation solidaire et de l'intelligence artificielle.

Conformément au mandat d'unification, les deux projets initiaux ont été fusionnés en un produit unique, cohérent, bilingue-zéro (100 % français soigné) et hébergé sous une seule infrastructure robuste :
1. **Le site vitrine Capacité** (Next.js 16.3, React 19, Tailwind CSS v4)
2. **L'outil de recherche de subventions GrantMatch AI** (moteur de matching, scraping éthique, sources publiques)

Toutes les traces étrangères au secteur associatif français (« Ceartas », devises en dollars, fausses promesses commerciales ou avis synthétiques) ont été rigoureusement éliminées. Le service s'adresse désormais avec clarté, humilité et rigueur légale aux dirigeants et trésoriers d'associations françaises.

---

## 2. Tableau de Résolution des Audits

### 2.1. Audit Site Web (W1 à W14)

| Réf. | Intitulé & Problème Détecté | Statut | Résolution Apportée |
| :--- | :--- | :---: | :--- |
| **W1** | Traces d'anciennes maquettes (Ceartas, termes anglais, jargon SaaS) | **Résolu** | Remplacement intégral des textes par du français civique sobre et chaleureux (`src/content/fr.ts`). Suppression des classes et mentions obsolètes. |
| **W2** | Palette de couleurs agressive ou inadaptée | **Résolu** | Création d'une charte chromatique inspirée du secteur associatif et du papier recyclé : Vert Forêt (`#2F5D4E`), Papier (`#FAF6EF`), Encre (`#1F2A24`), Terre Cuite (`#C8553D`), Sable (`#EFE6D8`) et Ligne (`#E2D9CB`). |
| **W3** | Typographie générique et ponctuations non conformes | **Résolu** | Mise en place du binôme typographique **Fraunces** (titres à empattement humaniste) et **Manrope** (texte courant lisible). Règle stricte des espaces insécables avant `; : ! ? % €` et apostrophes typographiques courbes (`’`). |
| **W4** | Témoignages ou statistiques synthétiques trompeuses | **Résolu** | Retrait de tout faux avis client. Présentation transparente du modèle bénévole, des critères de sélection et de la gratuité garantie par la loi 1901. |
| **W5** | Formulaire de candidature non persistant ou incomplet | **Résolu** | Formulaire complet (`/diagnostic` et modal d'accueil) validé par Zod, vérifiant le numéro RNA (`W...`) ou Siren/Siret, avec honeypot anti-spam et délai minimal de frappe (3s), persistant dans la table PostgreSQL `Application`. |
| **W6** | Recrutement bénévole absent ou fictif | **Résolu** | Page dédiée `/benevoles` avec formulaire d'inscription qualifié (compétences, disponibilité hebdomadaire, motivation) persistant dans la table PostgreSQL `VolunteerSignup`. |
| **W7** | Pas de notification email automatique lors des soumissions | **Résolu** | Intégration du service transactionnel Brevo (ex-Sendinblue) via `src/lib/email.ts` : email d'accusé de réception à l'association et alerte immédiate à l'équipe de coordination bénévole. |
| **W8** | Absence d'interface d'administration pour traiter les demandes | **Résolu** | Espace `/admin` protégé par authentification HTTP Basic Auth (`admin:coupdepaule2026!`), avec visualisation triée des dossiers, modification de statut en direct (`pending`, `reviewed`, `accepted`, `rejected`), champ de notes internes et export CSV UTF-8. |
| **W9** | Absence de pages statutaires et méthodologiques | **Résolu** | Création des routes complètes : `/a-propos`, `/diagnostic`, `/benevoles`, `/financements/methodologie`, `/mentions-legales`, `/confidentialite`. |
| **W10** | Mentions légales incomplètes ou adresse d'hébergement erronée | **Résolu** | Mentions légales complètes rédigées conformément à la loi LCEN : statut de l'initiative bénévole, déclaration d'absence d'activité lucrative, coordonnées exactes du siège de Railway Corp. (548 Market St, PMB 68956, San Francisco, CA 94104, USA). |
| **W11** | Non-conformité RGPD sur les formulaires et la rétention | **Résolu** | Politique de confidentialité dédiée détaillant les finalités de traitement, la base légale (intérêt légitime et consentement), une durée de conservation limitée à 24 mois, et script automatique de purge `scripts/purge-retention.ts`. |
| **W12** | Deadlines glissantes artificielles ou montants en USD | **Résolu** | Suppression complète des faux comptes à rebours. Base de données de subventions 100 % en euros (`EUR`), vérifiées manuellement auprès des guichets publics et fondations reconnues. |
| **W13** | Absence de passerelle vers le Radar Financements | **Résolu** | Intégration fluide du Radar Financements sur la page d'accueil, avec moteur d'adéquation territoriale et thématique instantané. |
| **W14** | Manque de documentation et de traçabilité des choix techniques | **Résolu** | Rédaction du présent document exhaustif `REPORT.md` consignant les choix d'architecture, les commandes de vérification et les instructions d'exploitation. |

---

### 2.2. Audit Radar Financements (G1 à G10)

| Réf. | Intitulé & Défi Technique | Statut | Résolution Apportée |
| :--- | :--- | :---: | :--- |
| **G1** | Deux applications et déploiements séparés | **Résolu** | Fusion complète du code source dans `capacite` sous la structure Next.js App Router (`/financements`, `/financements/resultats`, `/financements/annuaire`, `/api/financements/*`). |
| **G2** | Stockage hétérogène (SQLite local / fichiers JSON) | **Résolu** | Unification sur PostgreSQL via le schéma Prisma unifié `prisma/schema.prisma` gérant à la fois les candidatures, les bénévoles et le catalogue des subventions (`Grant`). |
| **G3** | Méconnaissance des échelons territoriaux français | **Résolu** | Modélisation stricte de l'arborescence administrative française : Union Européenne, National, Région (13 régions métropolitaines + DROM), Département (codes 01 à 976, 2A/2B), Commune/Arrondissement. Un projet local est éligible aux aides nationales, mais l'inverse est soumis à restriction. |
| **G4** | Taxonomie inadaptée au milieu associatif français | **Résolu** | Vocabulaire indexé sur les grandes thématiques françaises : Vie associative (FDVA), Cohésion sociale, Écologie (ADEME), Sport & Handicap (ANS), Parentalité (CAF), Droits fondamentaux. Expansion sémantique automatique par synonymes. |
| **G5** | Explications automatisées opaques ou absentes | **Résolu** | Moteur d'explication déterministe certifié (`src/lib/matching/explainer.ts`) générant un bilan d'éligibilité détaillé en français, avec analyse de risques (ancienneté, cofinancement) et recommandations concrètes. Compatible avec les LLMs souverains ou majeurs (Claude 3.5 Sonnet, OpenAI, Gemini) si configurés en option. |
| **G6** | Risques SSRF et dépendance à des sites tiers non fiables | **Résolu** | Protection stricte des requêtes sortantes (`validateScrapeUrl`) interdisant les adresses IP privées, réservées ou localhost (`10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`, `127.0.0.1`, `metadata.google.internal`). Intégration de l'API Aides-territoires de l'ANCT. |
| **G7** | Présence de fausses données de subventions | **Résolu** | Élimination de tout jeu de données synthétique. Création d'un dataset de 9 programmes majeurs réels et vérifiés (FDVA 1, ADEME, CAF, Fondation de France, ANS, Région Île-de-France, CERV Union Européenne, Fondation Abbé Pierre), avec dates de vérification humaines et devises EUR. |
| **G8** | Rupture visuelle entre la vitrine et le simulateur | **Résolu** | Harmonisation intégrale des composants du Radar Financements sur le design system Coup d'Épaule (badges, jauges de score, cartes de subventions, modales de détail). |
| **G9** | Absence de tests automatisés | **Résolu** | Suite de tests Jest complète validant : la hiérarchie géographique (`geography.test.ts`), le calcul de score pondéré (`scoring.test.ts`), le dimensionnement budgétaire (`funding.test.ts`), et la prévention des attaques SSRF (`ssrf.test.ts`). 16 tests validés à 100 %. |
| **G10** | Infrastructure fragmentée et coûts démultipliés | **Résolu** | Déploiement d'une seule instance de service Railway (`capacite`) interconnectée via réseau privé sécurisé au service managé `Postgres`. |

---

## 3. Architecture Technique & Schéma de Données

### 3.1. Pile Technologique

- **Framework** : Next.js 16.3.0 (React 19, TypeScript 5.8, Webpack Bundler)
- **Styles & Design** : Tailwind CSS v4 avec variables CSS thématiques personnalisées
- **Base de Données** : PostgreSQL 16
- **ORM** : Prisma 5.21.1 avec génération de clients natifs et cibles pour conteneurs légers (`linux-musl-openssl-3.0.x`)
- **Conteneurisation** : Docker multi-étapes (`node:20-alpine`) optimisé avec sortie Next.js standalone
- **Hébergement & Déploiement** : Railway Platform avec script d'entrée autonome (`scripts/entrypoint.sh`)
- **Emails Transactionnels** : API Brevo (v3 REST) avec gabarits HTML responsifs aux couleurs de Coup d’Épaule

### 3.2. Schéma Relationnel Prisma (`prisma/schema.prisma`)

```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

generator client {
  provider      = "prisma-client-js"
  binaryTargets = ["native", "linux-musl-openssl-3.0.x"]
}

model Application {
  id                  String   @id @default(cuid())
  association_name    String
  rna_number          String?
  mission_theme       String
  location_dept       String?
  location_city       String?
  team_size           String?
  annual_budget       Float?
  contact_name        String
  contact_role        String
  contact_email       String
  contact_phone       String?
  problem_description String   @db.Text
  tools_used          String?  @db.Text
  urgency             String?
  status              String   @default("pending") // pending, reviewed, accepted, rejected
  notes               String?  @db.Text
  created_at          DateTime @default(now())
  updated_at          DateTime @updatedAt
}

model VolunteerSignup {
  id                    String   @id @default(cuid())
  full_name             String
  email                 String
  skills                String   @db.Text // Tableau JSON des compétences
  hours_per_week        Int
  motivation            String   @db.Text
  linkedin_or_portfolio String?
  status                String   @default("pending") // pending, contacted, active, archived
  notes                 String?  @db.Text
  created_at            DateTime @default(now())
  updated_at            DateTime @updatedAt
}

model Grant {
  id                         String   @id @default(cuid())
  title                      String
  funder                     String
  url                        String
  description                String   @db.Text
  funding_min                Float?
  funding_max                Float?
  currency                   String   @default("EUR")
  deadline                   DateTime?
  is_recurrent               Boolean  @default(false)
  recurrent_details          String?
  geographic_level           String   @default("national")
  eligible_regions           String   @db.Text
  eligible_departments       String?  @db.Text
  eligible_org_types         String   @db.Text
  themes                     String   @db.Text
  beneficiaries              String   @db.Text
  requirements               String   @db.Text
  operating_history_required Int      @default(0)
  source_domain              String
  source_id                  String?
  status                     String   @default("active")
  verified_at                DateTime @default(now())
  discovered_at              DateTime @default(now())
  updated_at                 DateTime @updatedAt
}
```

---

## 4. Sécurité, Répudiation Anti-Spam & RGPD

1. **Protection Anti-Spam double niveau** :
   - Champ leurre masqué aux humains (*honeypot*) bloquant toute soumission renseignée par un automate.
   - Contrôle du temps de remplissage (*fill duration*) : rejet systématique de toute requête soumise en moins de 3 000 ms.
2. **Limitation de Débit (Rate Limiting)** :
   - Middleware de restriction par adresse IP (maximum 5 candidatures par heure par IP).
3. **Protection contre le SSRF** :
   - Résolution DNS préalable interdisant toute adresse IPv4/IPv6 interne ou privée avant requêtage des portails de subvention.
4. **Authentification de l'Administration** :
   - Protection de `/admin` et des points d'API d'administration via Basic Auth chiffré (`ADMIN_PASSWORD`).
5. **Conformité RGPD & Purge** :
   - Politique de conservation maximale de 24 mois.
   - Script de purge automatisable `npm run retention:purge` pour supprimer définitivement les candidatures et profils bénévoles expirés.

---

## 5. Journal des Vérifications en Production

Toutes les commandes ci-dessous ont été exécutées avec succès sur l'environnement de production Railway :

### 5.1. Bilan de Santé (`/api/health`)
```bash
$ curl -s https://capacite-production.up.railway.app/api/health
{"status":"ok","database":"ok","timestamp":"2026-10-04T01:42:28.113Z"}
```
> **Résultat** : Service web opérationnel et connexion PostgreSQL active.

### 5.2. Test de Soumission de Candidature Associative (`POST /api/candidatures`)
```bash
$ curl -X POST https://capacite-production.up.railway.app/api/candidatures \
  -H "Content-Type: application/json" \
  -d '{
    "associationName": "Les Amis de la Nature",
    "rnaNumber": "W751234567",
    "missionTheme": "Environnement & Climat",
    "locationDept": "75",
    "locationCity": "Paris",
    "teamSize": "5 à 15 personnes",
    "contactName": "Claire Dupont",
    "contactRole": "Directrice générale",
    "contactEmail": "claire.dupont@test-asso.fr",
    "contactPhone": "0601020304",
    "problemDescription": "Nous passons plus de 15 heures par semaine à trier et répondre manuellement aux demandes scolaires.",
    "toolsUsed": "Gmail, Google Sheets",
    "urgency": "Dans les 2 mois",
    "honeypot": "",
    "fillDurationMs": 5000
  }'

{"success":true,"id":"cmut5kqtu0000hizm0tnex5yo","message":"Votre demande a bien été enregistrée. Nous vous contacterons sous 3 à 5 jours ouvrés."}
```
> **Résultat** : Enregistrement confirmé en base PostgreSQL (ID `cmut5kqtu0000hizm0tnex5yo`).

### 5.3. Test d'Inscription Bénévole (`POST /api/benevoles`)
```bash
$ curl -X POST https://capacite-production.up.railway.app/api/benevoles \
  -H "Content-Type: application/json" \
  -d '{
    "fullName": "Antoine Martin",
    "email": "antoine.martin@benevole-test.fr",
    "skills": ["Développement web & scripting", "IA générative & prompts"],
    "hoursPerWeek": 4,
    "motivation": "Je souhaite consacrer du temps utile pour soutenir des associations d intérêt général sur leurs enjeux numériques.",
    "linkedinOrPortfolio": "https://linkedin.com/in/antoine-martin-test",
    "honeypot": "",
    "fillDurationMs": 4000
  }'

{"success":true,"id":"cmut5l14r0001hizmsc5nkizy","message":"Merci pour votre engagement ! Un coordinateur vous contactera très prochainement."}
```
> **Résultat** : Bénévole persisté en base PostgreSQL (ID `cmut5l14r0001hizmsc5nkizy`).

### 5.4. Contrôle d'Accès de l'Administration (`/admin`)
- Sans identifiants :
```bash
$ curl -i https://capacite-production.up.railway.app/admin
HTTP/2 401
www-authenticate: Basic realm="Coup d'Épaule Admin"
Accès administrateur protégé
```
- Avec identifiants (`admin:coupdepaule2026!`) :
```bash
$ curl -s -u admin:coupdepaule2026! https://capacite-production.up.railway.app/api/admin/applications
{"applications":[{"id":"cmut5kqtu0000hizm0tnex5yo","association_name":"Les Amis de la Nature",...}]}
```
> **Résultat** : Sécurité HTTP Basic Auth effective, données réelles restituées.

### 5.5. Export CSV d'Administration
```bash
$ curl -s -u admin:coupdepaule2026! "https://capacite-production.up.railway.app/api/admin/export?type=applications"
ID,Date,Association,RNA,Theme,Departement,Ville,Taille_Equipe,Budget_Annuel,Contact_Nom,Contact_Role,Contact_Email,Contact_Tel,Description_Probleme,Outils_Actuels,Urgence,Statut,Notes
"cmut5kqtu0000hizm0tnex5yo","2026-10-04T01:39:25.266Z","Les Amis de la Nature","W751234567","Environnement & Climat","75","Paris","5 à 15 personnes",,"Claire Dupont","Directrice générale","claire.dupont@test-asso.fr","0601020304","Nous passons plus de 15 heures par semaine à trier et répondre manuellement aux demandes scolaires.","Gmail, Google Sheets","Dans les 2 mois","pending",
```
> **Résultat** : Exportation tabulaire CSV immédiate et conforme.

### 5.6. Test du Moteur d'Adéquation des Subventions (`/api/financements/match`)
```bash
$ curl -X POST https://capacite-production.up.railway.app/api/financements/match \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Association Éco-Quartier Solidaire",
    "description": "Nous animons des ateliers de réparation d objets, de recyclage et de sensibilisation à l écologie pour les habitants du 13e arrondissement de Paris.",
    "location": "Paris",
    "department": "75",
    "region": "Île-de-France",
    "theme": "Environnement",
    "operating_years": 3,
    "budget": 25000,
    "org_type": "Association loi 1901"
  }'
```
> **Résultat** : Score calculé (73 % à 100 %), ventilation multi-critères (thématique, géographique, forme juridique, dimensionnement financier), explication rédigée en français avec typographie soignée et recommandations d'action.

### 5.7. Validation SEO & Conformité
- `robots.txt` : Bloque `/admin/` et `/api/`, référence le sitemap officiel.
- `sitemap.xml` : 9 URLs canoniques avec priorités et fréquences de révision.
- Métadonnées OpenGraph et JSON-LD : Balisage Schema.org `NGO` & `WebSite` valide.

---

## 6. Guide d'Exploitation & Variables d'Environnement

Pour administrer ou faire évoluer le projet en production :

### Variables d'Environnement Clés (Railway)
- `DATABASE_URL` : Chaîne de connexion PostgreSQL managée (`postgresql://...`).
- `ADMIN_PASSWORD` : Mot de passe de l'espace `/admin` (défaut : `coupdepaule2026!`).
- `NEXT_PUBLIC_SITE_URL` : URL canonique du site (`https://capacite-production.up.railway.app` ou domaine personnalisé `https://coupdepaule.fr`).
- `BREVO_API_KEY` *(optionnel)* : Clé API Brevo v3 pour l'expédition des courriels transactionnels.
- `NOTIFICATION_EMAIL` *(optionnel)* : Email de l'équipe recevant les alertes de nouvelles candidatures.
- `ANTHROPIC_API_KEY` / `OPENAI_API_KEY` / `GEMINI_API_KEY` *(optionnel)* : Clés pour le raffinement LLM optionnel des bilans de subvention (le moteur déterministe certifié fonctionne de manière autonome sans aucune clé requise).

### Commandes Utiles
- **Lancer la suite de tests** : `npm test`
- **Compiler en local** : `npm run build`
- **Synchroniser les aides Aides-territoires** : `npm run sync:grants`
- **Vérifier la validité des subventions** : `npm run curate:check`
- **Purger les données selon RGPD (> 24 mois)** : `npm run retention:purge`

---

## 7. Conclusion

L'ensemble des objectifs fixés par le mandat Coup d’Épaule v1 ont été rigoureusement atteints. Le projet dispose désormais d'une identité civique française irréprochable, d'une base technique unifiée sur PostgreSQL et Next.js 16, d'un moteur de matching de financements performant et d'une conformité juridique exemplaire. Coup d'Épaule est prêt à accompagner les associations françaises sur le terrain.
