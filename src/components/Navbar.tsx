"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "The Problem", href: "#the-problem" },
    { label: "Open Tools", href: "#open-tools" },
    { label: "The Pilot", href: "#the-pilot" },
    { label: "Volunteer", href: "#volunteers" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", href);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-[#F4F2EB]/95 backdrop-blur-md border-b border-border-muted py-3"
          : "bg-transparent py-5 sm:py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Brand Wordmark */}
        <div className="flex items-center">
          <a
            href="#"
            onClick={(e) => handleLinkClick(e, "#")}
            className="text-base sm:text-lg font-bold tracking-[0.12em] text-foreground hover:opacity-85 transition-opacity font-display"
          >
            CAPACITÉ
          </a>
          <span className="hidden sm:inline-block text-[10px] uppercase tracking-[0.2em] text-ink-faint border-l border-border-muted pl-3 ml-3 font-mono font-normal">
            Technology for Civil Society
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-7 text-[11px] font-mono uppercase tracking-[0.16em] text-ink-muted">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="hover:text-foreground transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#application"
            onClick={(e) => handleLinkClick(e, "#application")}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-[11px] font-mono tracking-[0.14em] uppercase text-background bg-primary hover:bg-primary-hover rounded-xs transition-colors duration-150"
          >
            <span>Apply for a pilot</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-1.5 text-foreground hover:text-foreground/70 transition-colors"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div className="fixed inset-0 top-[57px] z-40 bg-background md:hidden animate-fade-in border-t border-border-muted">
          <nav className="flex flex-col space-y-5 px-6 py-8 h-full bg-background font-mono">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-sm font-medium tracking-[0.14em] uppercase text-foreground border-b border-border-muted/60 pb-3"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4">
              <a
                href="#application"
                onClick={(e) => handleLinkClick(e, "#application")}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-mono uppercase tracking-[0.14em] text-background bg-primary hover:bg-primary-hover rounded-xs transition-colors w-full"
              >
                <span>Apply for a pilot</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
