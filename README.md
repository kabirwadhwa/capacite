# Coup d’Épaule — L’IA et l’automatisation au service des associations

[![Build & Tests](https://img.shields.io/badge/build-passing-brightgreen.svg)]()
[![License: MIT](https://img.shields.io/badge/licence-MIT-blue.svg)](LICENSE)
[![Next.js 16](https://img.shields.io/badge/Next.js-16.3-black.svg)]()
[![PostgreSQL](https://img.shields.io/badge/Database-PostgreSQL-336791.svg)]()

> **Initiative citoyenne 100 % bénévole** qui aide gratuitement les associations françaises (loi 1901) à résoudre un problème opérationnel réel grâce à l’intelligence artificielle et aux automatisations légères.

---

## 🎯 Mission

Les associations consacrent des dizaines d’heures chaque semaine à des tâches administratives répétitives (saisie manuelle de reçus fiscaux, tri d'emails d'usagers, recherche de subventions publiques). Alors que les entreprises privées disposent d’importants budgets technologiques, les équipes associatives de terrain manquent de temps et d'outils adaptés.

**Coup d’Épaule intervient bénévolement pour :**
1. **Poser un diagnostic ciblé (30 min)** pour isoler un problème opérationnel précis.
2. **Concevoir un prototype fonctionnel en 2 semaines** (script d'automatisation, pipeline no-code sobre ou assistant de traitement).
3. **Former l'équipe associative** jusqu'à autonomie complète (zéro dépendance).
4. **Mettre à disposition le Radar Financements**, un moteur ouvert de découverte de subventions publiques et fondations.

---

## 🏛️ Architecture & Technologies

- **Framework :** Next.js 16.3 (App Router, Proxy Middleware)
- **UI & Design :** React 19, Tailwind CSS 4, Lucide React
- **Typographie :** Fraunces (titres avec dignité civique) & Manrope (corps de texte lisible)
- **Base de données :** PostgreSQL uniquement, géré via Prisma ORM
- **Données subventions :** API publique Aides-territoires (beta.gouv.fr) + base vérifiée par des bénévoles
- **Emails transactionnels :** Brevo API (mode simulation automatique si clé absente)
- **Sécurité :** Protection SSRF, vérification anti-robot (honeypot + durée de saisie), headers de sécurité stricts (CSP, X-Frame-Options, no-sniff)
- **Déploiement :** Docker multi-étapes optimisé pour Railway (`builder: DOCKERFILE`)

---

## 🚀 Démarrage rapide en local

### Prérequis
- Node.js 20+ ou 24+
- Docker & Docker Compose (pour PostgreSQL local)

### 1. Cloner et installer les dépendances
```bash
git clone https://github.com/kabirwadhwa/capacite.git coupdepaule
cd coupdepaule
npm install
```

### 2. Démarrer la base de données PostgreSQL locale
```bash
docker compose up -d
```

### 3. Configurer l'environnement
Copiez `.env.example` en `.env` :
```bash
cp .env.example .env
```

### 4. Déployer les migrations et alimenter les subventions
```bash
npm run db:migrate
npm run db:seed
```

### 5. Lancer le serveur de développement
```bash
npm run dev
```
Ouvrez [http://localhost:3000](http://localhost:3000).

---

## 🧪 Tests & Qualité

Exécuter la suite de tests Jest :
```bash
npm test
```

Vérifier la validité des subventions vérifiées (absence de dates glissantes, conformité EUR) :
```bash
npm run curate:check
```

Synchroniser les opportunités avec l'API Aides-territoires :
```bash
npm run sync:aides
```

Compiler le build de production :
```bash
npm run build
```

---

## 🛡️ Respect du RGPD & Données Personnelles

- **Aucun cookie de pistage** ni outil d'analyse intrusif.
- Les données soumises via les formulaires de diagnostic et de bénévolat sont conservées pour une durée maximale de 24 mois.
- Script de purge conforme au droit à l'effacement :
  ```bash
  npm run purge
  ```

---

## 📄 Licence & Crédits

Distribué sous licence open source MIT.
Conçu avec cœur par le collectif citoyen **Coup d'Épaule**.
