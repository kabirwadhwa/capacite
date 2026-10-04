/**
 * Coup d'Épaule — Contenu éditorial officiel en français
 * Règles typographiques strictes :
 * - Espace insécable (\u00A0) avant : ; ! ? » et après «
 * - Apostrophe typographique ’
 * - Ponctuation française standard
 */

export const siteConfig = {
  name: "Coup d’Épaule",
  legalName: "Collectif bénévole Coup d’Épaule",
  tagline: "L’IA et l’automatisation pratiques au service des associations françaises",
  description:
    "Initiative citoyenne et bénévole. Nous aidons gratuitement les associations loi 1901 à identifier un problème opérationnel réel, à le résoudre avec des outils légers et à rendre leur équipe totalement autonome.",
  url: "https://coupdepaule.fr",
  contactEmail: "contact@coupdepaule.fr",
  githubUrl: "https://github.com/kabirwadhwa/capacite",
  hostInfo: "Railway Corp. · 548 Market St, PMB 68956, San Francisco, CA 94104, USA",
};

export const heroContent = {
  badge: "Initiative citoyenne 100\u00A0% bénévole · Loi 1901",
  title: "Un coup d’épaule technique pour votre association.",
  subtitle:
    "Vous passez trop de temps sur des tâches répétitives\u00A0? Des bénévoles expérimentés conçoivent gratuitement une solution d’IA ou d’automatisation adaptée à votre quotidien, puis forment votre équipe.",
  ctaPrimary: "Faire diagnostiquer mon asso",
  ctaSecondary: "Explorer le Radar Financements",
  keyPoints: [
    "100\u00A0% gratuit, aucun frais caché",
    "Solutions sobres et pérennes",
    "Données strictement protégées (RGPD)",
    "Zéro dépendance commerciale",
  ],
};

export const valuesContent = [
  {
    title: "Un seul problème concret à la fois",
    description:
      "Pas de transformation numérique interminable. Nous ciblons un goulet d’étranglement précis (saisies doubles, tri de dossiers, recherche de fonds) pour livrer un outil fonctionnel en 2 à 3 semaines.",
    icon: "Target",
  },
  {
    title: "Sobriété et maîtrise des coûts",
    description:
      "Nous privilégions les briques libres et les automatisations légères. Si un outil payant s’avérait indispensable, nous choisissons des offres gratuites pour le monde associatif.",
    icon: "Leaf",
  },
  {
    title: "Autonomie complète de votre équipe",
    description:
      "Notre mission s’arrête quand vous êtes capable de maintenir et faire évoluer la solution vous-même. Chaque intervention s’accompagne d’une formation pas-à-pas et d’une documentation claire.",
    icon: "GraduationCap",
  },
  {
    title: "Partage en bien commun",
    description:
      "Les méthodologies et recettes éprouvées sont anonymisées et publiées en libre accès, pour que l’ensemble du secteur associatif puisse en bénéficier.",
    icon: "Share2",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Diagnostic ciblé (30 min)",
    description:
      "Un échange visio avec un bénévole technique pour cartographier vos processus, identifier la tâche la plus chronophage et vérifier la faisabilité.",
  },
  {
    step: "02",
    title: "Sélection & Prototype (2 semaines)",
    description:
      "Nous construisons une solution légère et sur mesure\u00A0: script d’automatisation, interface de traitement documentaire ou pipeline no-code sécurisé.",
  },
  {
    step: "03",
    title: "Déploiement & Formation pratique",
    description:
      "Mise en service dans votre environnement de travail habituel. Nous formons vos salariés et bénévoles jusqu’à parfaite prise en main.",
  },
  {
    step: "04",
    title: "Partage en open source",
    description:
      "Les patrons génériques et guides méthodologiques sont versés au pot commun pour aider d’autres associations confrontées aux mêmes difficultés.",
  },
];

export const scopeComparison = {
  title: "Ce que nous faisons — et ce que nous ne faisons pas",
  subtitle:
    "La confiance repose sur des limites claires. Voici notre cadre d’intervention garanti.",
  weDo: [
    "Automatiser des flux répétitifs entre vos outils (HelloAsso, tableurs, formulaires, emails)",
    "Créer des assistants de synthèse pour vos comptes rendus, bilans ou projets associatifs",
    "Paramétrer des veilles et radars sur les subventions et appels à projets publics",
    "Nettoyer et restructurer des bases de données de donateurs, bénévoles ou adhérents",
    "Former vos équipes à l’usage critique et éthique des outils d’IA actuels",
  ],
  weDoNot: [
    "Vendre des licences, des abonnements ou des prestations payantes",
    "Transmettre vos données à des tiers ou entraîner des modèles privés sur vos informations",
    "Lancer des chantiers pluriannuels qui paralysent le fonctionnement de votre équipe",
    "Remplacer l’évaluation humaine dans des décisions d’accompagnement social sensible",
    "Créer une dépendance technique envers nos bénévoles une fois la passation faite",
  ],
};

export const eligibilityCriteria = [
  {
    label: "Statut",
    detail: "Association loi 1901 ou fondation reconnue d’utilité publique ou d’intérêt général en France.",
  },
  {
    label: "Taille de structure",
    detail: "De 1 à 30 permanents (salariés ou bénévoles réguliers). Priorité aux petites et moyennes équipes sans DSI interne.",
  },
  {
    label: "Besoin qualifié",
    detail: "Une tâche répétitive ou administrative clairement identifiée qui consomme au moins plusieurs heures par semaine.",
  },
  {
    label: "Engagement",
    detail: "Dédier un référent interne disponible environ 2 heures par semaine durant la phase de cadrage et de test.",
  },
];

export const faqItems = [
  {
    id: "faq-1",
    question: "Est-ce vraiment 100\u00A0% gratuit\u00A0? Quel est le piège\u00A0?",
    answer:
      "Il n’y a aucun piège. Coup d’Épaule est une initiative entièrement bénévole portée par des professionnels de la tech (ingénieurs, designers, chefs de projet) qui donnent de leur temps. Nous ne vendons rien, nous ne prenons aucune commission et nous n’avons aucun actionnaire à rémunérer. Notre seul objectif est de mettre la technologie au service de l’intérêt général.",
  },
  {
    id: "faq-2",
    question: "Que deviennent nos données et celles de nos bénéficiaires\u00A0?",
    answer:
      "La confidentialité est notre priorité absolue. Nous privilégions les solutions locales ou conformes au RGPD hébergées en Europe. Aucune donnée nominative de vos usagers n’est envoyée à des modèles d’IA publics sans anonymisation préalable stricte, et nous signons un engagement de confidentialité systématique.",
  },
  {
    id: "faq-3",
    question: "Faudra-t-il payer un abonnement ou un serveur après votre intervention\u00A0?",
    answer:
      "Non. Notre cahier des charges impose de concevoir des solutions reposant sur des plans gratuits permanents (offres spéciales associations de Google Workspace, Microsoft for Nonprofits, Notion, GitHub) ou sur des outils open source auto-hébergeables sans coût récurrent.",
  },
  {
    id: "faq-4",
    question: "Qui sont les bénévoles de Coup d’Épaule\u00A0?",
    answer:
      "Ce sont des ingénieurs logiciels, des data scientists, des designers et des directeurs de produit en poste dans l’écosystème numérique français, qui souhaitent mettre leurs compétences au profit de causes solidaires, culturelles et environnementales.",
  },
  {
    id: "faq-5",
    question: "Combien de temps l’accompagnement demande-t-il à notre association\u00A0?",
    answer:
      "Nous savons que vos journées sont déjà surchargées. Nous demandons environ 30 minutes pour l’appel de diagnostic, 1 heure d’échange pour clarifier le fonctionnement de votre tâche, puis 1 à 2 heures pour la formation finale. Tout le travail de conception et de code est réalisé par notre équipe bénévole.",
  },
  {
    id: "faq-6",
    question: "Quelle différence avec un cabinet de conseil classique\u00A0?",
    answer:
      "Un cabinet cherche souvent à vendre de volumineux projets de cadrage et des intégrations logicielles coûteuses. À Coup d’Épaule, nous livrons en quelques semaines un outil simple, robuste et immédiatement opérationnel, conçu pour que vous puissiez vous en passer dès demain.",
  },
];
