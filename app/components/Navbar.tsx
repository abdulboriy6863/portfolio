"use client";

import React, { useState, useEffect } from "react";
import { Locale, TranslationSchema } from "../data/translations";

interface NavbarProps {
  lang: Locale;
  setLang: (lang: Locale) => void;
  t: TranslationSchema;
}

export default function Navbar({ lang, setLang, t }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple active section tracker
      const sections = ["hero", "about", "skills", "experience", "projects", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const menuItems = [
    { id: "about", label: t.nav.about },
    { id: "skills", label: t.nav.skills },
    { id: "experience", label: t.nav.experience },
    { id: "projects", label: t.nav.projects },
    { id: "contact", label: t.nav.contact },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-3 bg-bg-primary/80 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/20"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, "hero")}
          className="flex items-center gap-2 group"
        >
          <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-teal to-brand-indigo flex items-center justify-center font-extrabold text-white tracking-wider text-sm shadow-md shadow-brand-indigo/20 group-hover:scale-105 transition-transform duration-300">
            JR
          </span>
          <span className="font-extrabold tracking-tight text-white group-hover:text-brand-teal transition-colors duration-300">
            JACK<span className="text-brand-indigo">.R</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className={`text-sm font-medium tracking-wide transition-all duration-300 hover:text-white ${
                activeSection === item.id ? "text-brand-teal font-semibold" : "text-zinc-400"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right Actions: Language Switcher + CTA */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex gap-0.5 bg-zinc-950 p-1 rounded-full border border-white/5">
            {(["en", "ko", "uz"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-3 py-1 rounded-full text-2xs font-bold uppercase transition-all duration-300 cursor-pointer ${
                  lang === l
                    ? "bg-gradient-to-r from-brand-teal to-brand-indigo text-white shadow"
                    : "text-zinc-500 hover:text-zinc-300"
                }`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-3 md:hidden">
          {/* Mobile Language Switcher (Pill) */}
          <div className="flex gap-0.5 bg-zinc-950 p-0.5 rounded-full border border-white/5">
            {(["en", "ko", "uz"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-2 py-0.5 rounded-full text-3xs font-bold uppercase transition-all duration-200 cursor-pointer ${
                  lang === l
                    ? "bg-gradient-to-r from-brand-teal to-brand-indigo text-white shadow"
                    : "text-zinc-500 hover:text-zinc-300"
                }`}
              >
                {l}
              </button>
            ))}
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-zinc-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 top-[60px] z-40 bg-bg-primary/95 backdrop-blur-lg border-t border-white/5 transition-all duration-500 md:hidden ${
          mobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-6 px-8 py-10">
          {menuItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className={`text-xl font-bold tracking-wide transition-colors ${
                activeSection === item.id ? "text-brand-teal" : "text-zinc-400"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
