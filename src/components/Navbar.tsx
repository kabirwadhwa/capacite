"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

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
    { label: "About", href: "#why-capacite" },
    { label: "Tools", href: "#tools" },
    { label: "How it works", href: "#how-it-works" },
    { label: "Volunteer", href: "#volunteer" },
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
          ? "bg-[#F7F7F4]/95 backdrop-blur-md border-b border-[#E4E4DE] py-3.5 shadow-xs"
          : "bg-[#F7F7F4]/80 backdrop-blur-xs py-5"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand Wordmark */}
        <a
          href="#"
          onClick={(e) => handleLinkClick(e, "#")}
          className="text-xl font-bold tracking-tight text-[#181818] hover:opacity-90 transition-opacity"
        >
          Capacité
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-[#666660]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="hover:text-[#181818] transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center">
          <a
            href="#apply"
            onClick={(e) => handleLinkClick(e, "#apply")}
            className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-[#315C4C] hover:bg-[#26493C] rounded-[8px] transition-colors duration-150 shadow-xs"
          >
            Apply for a pilot
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-[#181818] hover:text-[#666660] transition-colors"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div className="fixed inset-0 top-[65px] z-40 bg-[#F7F7F4] md:hidden border-t border-[#E4E4DE] px-6 py-8">
          <nav className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-base font-medium text-[#181818] hover:text-[#315C4C] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4">
              <a
                href="#apply"
                onClick={(e) => handleLinkClick(e, "#apply")}
                className="inline-flex items-center justify-center px-5 py-3 text-sm font-medium text-white bg-[#315C4C] hover:bg-[#26493C] rounded-[8px] transition-colors w-full shadow-xs"
              >
                Apply for a pilot
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
