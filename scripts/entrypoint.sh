#!/bin/sh
set -e

echo "[Entrypoint] Vérification et déploiement des migrations PostgreSQL..."
if [ -n "$DATABASE_URL" ]; then
  npx prisma migrate deploy || echo "[Entrypoint] Attention: prisma migrate deploy n'a pas pu se connecter à la base, démarrage du serveur..."
else
  echo "[Entrypoint] Information: DATABASE_URL absent, déploiement des migrations ignoré."
fi

echo "[Entrypoint] Démarrage du serveur Next.js Coup d'Épaule..."
exec node server.js
