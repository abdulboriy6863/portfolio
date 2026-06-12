"use client";

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { translations, Locale } from "./data/translations";

export default function Home() {
  // Default to Korean ("ko") since it is tailored to South Korean standard UI
  const [lang, setLang] = useState<Locale>("ko");
  const t = translations[lang];

  return (
    <div className="min-h-screen flex flex-col bg-bg-primary text-zinc-300 selection:bg-brand-indigo/30 selection:text-white">
      <Navbar lang={lang} setLang={setLang} t={t} />
      <main className="flex-1">
        <Hero lang={lang} t={t} />
        <About lang={lang} t={t} />
        <Skills t={t} />
        <Experience lang={lang} t={t} />
        <Projects lang={lang} t={t} />
        <Contact lang={lang} t={t} />
      </main>
    </div>
  );
}
