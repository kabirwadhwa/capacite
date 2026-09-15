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
    { label: "About", href: "#what-we-solve" },
    { label: "Tools", href: "#tools" },
    { label: "How it works", href: "#how-it-works" },
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
          ? "bg-[#F7F5F0]/90 backdrop-blur-md border-b border-border-muted py-3.5"
          : "bg-transparent py-5 sm:py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Brand Wordmark */}
        <div className="flex items-center">
          <a
            href="#"
            onClick={(e) => handleLinkClick(e, "#")}
            className="text-lg font-bold tracking-tight text-foreground hover:opacity-85 transition-opacity font-sans"
          >
            CAPACITÉ
          </a>
          <span className="hidden lg:inline-block text-[10px] uppercase tracking-[0.16em] text-ink-faint border-l border-border-muted pl-3 ml-3 font-mono font-medium">
            Technology for Civil Society
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-7 text-xs font-medium uppercase tracking-wider text-ink-muted">
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
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold tracking-wider uppercase text-background bg-primary hover:bg-primary-hover rounded transition-colors duration-150 shadow-2xs"
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
        <div className="fixed inset-0 top-[61px] z-40 bg-background md:hidden animate-fade-in border-t border-border-muted">
          <nav className="flex flex-col space-y-5 px-6 py-8 h-full bg-background">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-base font-semibold tracking-tight text-foreground border-b border-border-muted/60 pb-3"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4">
              <a
                href="#application"
                onClick={(e) => handleLinkClick(e, "#application")}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-background bg-primary hover:bg-primary-hover rounded transition-colors w-full shadow-sm"
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
