import React from 'react';
import Link from 'next/link';
import { Container } from './Container';
import { Sparkles, ShieldCheck } from 'lucide-react';

export function Footer() {
  return (
    <footer className="mt-auto border-t border-[#FFC6E5] bg-gradient-to-b from-[#FFF7FC] to-[#FFE5F2]/40 pt-14 pb-12 text-sm text-black">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-[#FFC6E5]/70">
          {/* Col 1: Mission */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center space-x-2 text-xl font-black tracking-tight text-black group">
              <span>Capacité</span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF1BA3] group-hover:scale-125 transition-transform" />
            </Link>
            <p className="text-black/70 text-xs sm:text-sm leading-relaxed max-w-md font-medium">
              Initiative citoyenne et bénévole au service des associations françaises loi 1901.
              Nous aidons gratuitement les équipes associatives à adopter l’intelligence artificielle
              et l’automatisation de manière sobre, utile et sans dépendance.
            </p>
            <div className="pt-1 flex items-center gap-2 text-xs font-bold text-black/60">
              <Sparkles className="h-4 w-4 text-[#FF1BA3]" />
              <span>100 % gratuit · Bénévolat qualifié · Données protégées RGPD</span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-black">Navigation</h4>
            <ul className="space-y-2 text-xs font-semibold">
              <li>
                <Link href="/diagnostic" className="text-black/70 hover:text-[#FF1BA3] transition-colors">
                  Diagnostic gratuit
                </Link>
              </li>
              <li>
                <Link href="/financements" className="text-black/70 hover:text-[#FF1BA3] transition-colors">
                  Radar Financements
                </Link>
              </li>
              <li>
                <Link href="/financements/annuaire" className="text-black/70 hover:text-[#FF1BA3] transition-colors">
                  Annuaire des subventions
                </Link>
              </li>
              <li>
                <Link href="/benevoles" className="text-black/70 hover:text-[#FF1BA3] transition-colors">
                  Rejoindre comme bénévole
                </Link>
              </li>
              <li>
                <Link href="/a-propos" className="text-black/70 hover:text-[#FF1BA3] transition-colors">
                  Manifeste & Équipe
                </Link>
              </li>
              <li>
                <Link href="/financements/methodologie" className="text-black/70 hover:text-[#FF1BA3] transition-colors">
                  Méthodologie du Radar
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Juridique & Accès */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-black">Juridique & Accès</h4>
            <ul className="space-y-2 text-xs font-semibold">
              <li>
                <Link href="/mentions-legales" className="text-black/70 hover:text-[#FF1BA3] transition-colors">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link href="/confidentialite" className="text-black/70 hover:text-[#FF1BA3] transition-colors">
                  Politique de confidentialité (RGPD)
                </Link>
              </li>
              <li>
                <Link href="/admin" className="text-black/70 hover:text-[#FF1BA3] transition-colors">
                  Espace Administration (Accès réservé)
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/kabirwadhwa/capacite"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black/70 hover:text-[#FF1BA3] transition-colors"
                >
                  Code source (GitHub)
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-black/60 font-medium gap-3">
          <p>© {new Date().getFullYear()} Capacité — Tous droits réservés. Initiative citoyenne bénévole.</p>
          <p className="text-center sm:text-right">
            Hébergement : Railway Corp. · 548 Market St, PMB 68956, San Francisco, CA 94104, USA.
          </p>
        </div>
      </Container>
    </footer>
  );
}
