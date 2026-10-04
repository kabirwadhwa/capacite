import React from 'react';
import Link from 'next/link';
import { Container } from './Container';
import { HeartHandshake, Code2, ShieldCheck } from 'lucide-react';

export function Footer() {
  return (
    <footer className="mt-auto border-t border-line bg-paper-warm pt-12 pb-10 text-sm text-ink">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-line">
          {/* Col 1: Mission */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-md bg-forest text-white">
                <HeartHandshake className="h-4 w-4" />
              </div>
              <span className="font-serif text-lg font-semibold tracking-tight text-ink">
                Coup d’Épaule
              </span>
            </div>
            <p className="text-muted text-xs leading-relaxed max-w-md">
              Initiative citoyenne et bénévole au service des associations loi 1901.
              Nous aidons gratuitement les équipes associatives à adopter l’intelligence artificielle
              et l’automatisation de manière sobre, utile et sans dépendance.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-muted">
              <ShieldCheck className="h-4 w-4 text-forest" />
              <span>100 % gratuit · Données non partagées avec des tiers · Open source</span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-semibold text-ink">Navigation</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/diagnostic" className="text-muted hover:text-forest transition-colors">
                  Diagnostic gratuit
                </Link>
              </li>
              <li>
                <Link href="/financements" className="text-muted hover:text-forest transition-colors">
                  Radar Financements
                </Link>
              </li>
              <li>
                <Link href="/benevoles" className="text-muted hover:text-forest transition-colors">
                  Devenir bénévole
                </Link>
              </li>
              <li>
                <Link href="/a-propos" className="text-muted hover:text-forest transition-colors">
                  Manifeste & Équipe
                </Link>
              </li>
              <li>
                <Link href="/financements/methodologie" className="text-muted hover:text-forest transition-colors">
                  Méthodologie du Radar
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Juridique & Code */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-semibold text-ink">Transparence</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/mentions-legales" className="text-muted hover:text-forest transition-colors">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link href="/confidentialite" className="text-muted hover:text-forest transition-colors">
                  Données personnelles & RGPD
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/kabirwadhwa/capacite"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-muted hover:text-forest transition-colors"
                >
                  <Code2 className="h-3.5 w-3.5" />
                  <span>Code source (GitHub)</span>
                </a>
              </li>
              <li>
                <a
                  href="https://aides-territoires.beta.gouv.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-forest transition-colors"
                >
                  Données Aides-territoires (beta.gouv.fr)
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom line */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-muted gap-3">
          <p>© {new Date().getFullYear()} Coup d’Épaule — Tous droits réservés.</p>
          <p>
            Hébergement : Railway Corp. · 548 Market St, PMB 68956, San Francisco, CA 94104, USA.
          </p>
        </div>
      </Container>
    </footer>
  );
}
