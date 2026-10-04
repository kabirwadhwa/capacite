#!/bin/sh
set -e

echo "[Entrypoint] Vérification et déploiement des migrations PostgreSQL..."
if [ -n "$DATABASE_URL" ]; then
  if [ -f "./node_modules/prisma/build/index.js" ]; then
    node ./node_modules/prisma/build/index.js migrate deploy || echo "[Entrypoint] Warning: Migration deploy encountered an issue, proceeding..."
  elif command -v npx > /dev/null 2>&1; then
    npx prisma migrate deploy || echo "[Entrypoint] Warning: Migration deploy encountered an issue, proceeding..."
  fi
fi

echo "[Entrypoint] Démarrage du serveur Next.js Coup d'Épaule..."
exec node server.js
