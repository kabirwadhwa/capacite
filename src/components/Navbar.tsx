"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";

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
      window.history.pushState(null, "", href);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 md:px-8 pt-4 pointer-events-none">
      <div className="max-w-6xl mx-auto pointer-events-auto">
        {/* Floating Island Container */}
        <div
          className={`ceartas-island rounded-2xl px-5 sm:px-6 py-3 flex items-center justify-between transition-all duration-300 ${
            scrolled ? "shadow-lg shadow-[#FF1BA3]/10" : ""
          }`}
        >
          {/* Brand Logo */}
          <a
            href="#"
            onClick={(e) => handleLinkClick(e, "#")}
            className="flex items-center space-x-2 text-xl sm:text-2xl font-black tracking-tight text-foreground group"
          >
            <span>Capacité</span>
            <span className="w-2 h-2 rounded-full bg-[#FF1BA3] group-hover:scale-125 transition-transform" />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-xs lg:text-sm font-semibold text-foreground/75 hover:text-foreground relative py-1 transition-colors group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#FF1BA3] transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href="#volunteers"
              onClick={(e) => handleLinkClick(e, "#volunteers")}
              className="text-xs font-semibold text-foreground/80 hover:text-foreground px-3 py-2 transition-colors"
            >
              Volunteer
            </a>
            <a
              href="#application"
              onClick={(e) => handleLinkClick(e, "#application")}
              className="ceartas-btn-primary inline-flex items-center justify-center px-4 py-2 text-xs font-bold rounded-xl tracking-tight"
            >
              Apply for a pilot
              <ArrowUpRight className="ml-1 w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl border border-[#FFC6E5] bg-[#FFE5F2]/40 text-foreground hover:bg-[#FFE5F2] transition-colors"
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-5 w-5 text-foreground" /> : <Menu className="h-5 w-5 text-foreground" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="mt-2 ceartas-island rounded-2xl p-5 md:hidden animate-fade-in shadow-xl shadow-[#FF1BA3]/15">
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-sm font-semibold text-foreground/85 hover:text-foreground py-2 border-b border-[#FFC6E5]/40 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2 flex flex-col space-y-2">
                <a
                  href="#volunteers"
                  onClick={(e) => handleLinkClick(e, "#volunteers")}
                  className="text-center text-xs font-semibold text-foreground/80 py-2"
                >
                  Join as Volunteer
                </a>
                <a
                  href="#application"
                  onClick={(e) => handleLinkClick(e, "#application")}
                  className="ceartas-btn-primary inline-flex items-center justify-center px-5 py-3 text-sm font-bold rounded-xl text-center shadow-md shadow-[#FF1BA3]/30"
                >
                  Apply for a free pilot
                  <ArrowUpRight className="ml-1 w-4 h-4" />
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
