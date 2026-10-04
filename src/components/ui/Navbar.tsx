'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Accueil' },
    { href: '/#comment-ca-marche', label: 'Comment ça marche' },
    { href: '/#ce-que-nous-resolvons', label: 'Solutions' },
    { href: '/financements', label: 'Radar Financements' },
    { href: '/benevoles', label: 'Bénévoles' },
    { href: '/a-propos', label: 'À propos' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 md:px-8 pt-4 pointer-events-none">
      <div className="max-w-6xl mx-auto pointer-events-auto">
        {/* Ceartas Floating Island Container */}
        <div
          className={`ceartas-island rounded-2xl px-5 sm:px-6 py-3 flex items-center justify-between transition-all duration-300 ${
            scrolled ? 'shadow-xl shadow-[#FF1BA3]/15 border-[#FF1BA3]/60' : ''
          }`}
        >
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2 text-xl sm:text-2xl font-black tracking-tight text-black group"
          >
            <span>Capacité</span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF1BA3] group-hover:scale-125 transition-transform shadow-sm shadow-[#FF1BA3]" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-7">
            {navLinks.map((link) => {
              const isActive =
                link.href === '/'
                  ? pathname === '/'
                  : pathname?.startsWith(link.href) && link.href !== '/#comment-ca-marche' && link.href !== '/#ce-que-nous-resolvons';
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    'text-xs lg:text-sm font-bold relative py-1 transition-colors group',
                    isActive ? 'text-black' : 'text-black/75 hover:text-black'
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      'absolute bottom-0 left-0 h-[2px] bg-[#FF1BA3] transition-all duration-200',
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Link
              href="/benevoles"
              className="text-xs font-bold text-black/80 hover:text-black px-3 py-2 transition-colors"
            >
              Rejoindre
            </Link>
            <Link
              href="/diagnostic"
              className="ceartas-btn-primary inline-flex items-center justify-center px-4 py-2 text-xs font-black rounded-xl tracking-tight"
            >
              Diagnostic gratuit
              <ArrowUpRight className="ml-1 w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl border border-[#FFC6E5] bg-[#FFE5F2]/40 text-black hover:bg-[#FFE5F2] transition-colors"
            aria-label="Toggle navigation"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="mt-2 ceartas-island rounded-2xl p-5 md:hidden animate-fade-in shadow-xl shadow-[#FF1BA3]/20">
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-bold text-black/85 hover:text-black py-2 border-b border-[#FFC6E5]/40 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2 flex flex-col space-y-2">
                <Link
                  href="/benevoles"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-center text-xs font-bold text-black/80 py-2"
                >
                  Devenir bénévole tech
                </Link>
                <Link
                  href="/diagnostic"
                  onClick={() => setMobileMenuOpen(false)}
                  className="ceartas-btn-primary inline-flex items-center justify-center px-5 py-3 text-sm font-black rounded-xl text-center shadow-md shadow-[#FF1BA3]/30"
                >
                  Demander un diagnostic gratuit
                  <ArrowUpRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;
