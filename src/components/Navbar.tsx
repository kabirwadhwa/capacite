"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "How it works", href: "#how-it-works" },
    { label: "What we solve", href: "#what-we-solve" },
    { label: "Principles", href: "#principles" },
    { label: "Pilot programme", href: "#pilot-programme" },
    { label: "About", href: "#about" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
      // Update hash in URL
      window.history.pushState(null, "", href);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border-muted py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
        {/* Logo / Wordmark */}
        <a
          href="#"
          onClick={(e) => handleLinkClick(e, "#")}
          className="text-2xl font-semibold tracking-tight text-foreground hover:opacity-80 transition-opacity"
        >
          Capacité
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-sm font-medium text-foreground/75 hover:text-foreground transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a
            href="#application"
            onClick={(e) => handleLinkClick(e, "#application")}
            className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-background bg-primary hover:bg-primary-hover rounded-md transition-colors duration-200 shadow-sm"
          >
            Apply for a pilot
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-foreground/80 hover:text-foreground transition-colors"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div className="fixed inset-0 top-[73px] z-40 bg-background md:hidden animate-fade-in">
          <nav className="flex flex-col space-y-6 px-8 py-10 border-t border-border-muted h-full bg-background">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-lg font-medium text-foreground/80 hover:text-foreground transition-colors border-b border-border-muted/50 pb-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#application"
              onClick={(e) => handleLinkClick(e, "#application")}
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-background bg-primary hover:bg-primary-hover rounded-md transition-colors shadow-md mt-4 w-full"
            >
              Apply for a pilot
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
