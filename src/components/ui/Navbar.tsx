'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Container } from './Container';
import { Button } from './Button';
import { Menu, X, HeartHandshake } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Accueil' },
    { href: '/diagnostic', label: 'Diagnostic' },
    { href: '/financements', label: 'Radar Financements' },
    { href: '/benevoles', label: 'Bénévoles' },
    { href: '/a-propos', label: 'À propos' },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/95 backdrop-blur-md transition-all">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo / Brand */}
          <Link
            href="/"
            className="flex items-center gap-2.5 text-ink hover:text-forest transition-colors focus:outline-none"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-forest text-white shadow-sm">
              <HeartHandshake className="h-5 w-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg font-semibold tracking-tight text-ink leading-tight">
                Coup d’Épaule
              </span>
              <span className="text-[10px] uppercase tracking-wider font-semibold text-muted">
                Bénévolat IA & Asso loi 1901
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive =
                link.href === '/'
                  ? pathname === '/'
                  : pathname?.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'text-sm font-medium transition-colors hover:text-forest',
                    isActive ? 'text-forest font-semibold' : 'text-muted'
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/diagnostic">
              <Button size="sm" variant="primary">
                Faire diagnostiquer mon asso
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-ink hover:bg-sand/50 focus:outline-none cursor-pointer"
              aria-expanded={mobileMenuOpen}
              aria-label="Ouvrir le menu de navigation"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-line py-4 space-y-3 bg-paper">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => {
                const isActive =
                  link.href === '/'
                    ? pathname === '/'
                    : pathname?.startsWith(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      'px-3 py-2 rounded-md text-sm font-medium transition-colors',
                      isActive
                        ? 'bg-forest/10 text-forest font-semibold'
                        : 'text-ink hover:bg-sand/40'
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
            <div className="pt-2 px-1">
              <Link
                href="/diagnostic"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full"
              >
                <Button size="md" variant="primary" className="w-full">
                  Faire diagnostiquer mon asso
                </Button>
              </Link>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
