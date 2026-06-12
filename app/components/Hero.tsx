"use client";

import React, { useState } from "react";
import { Locale, TranslationSchema } from "../data/translations";

interface HeroProps {
  lang: Locale;
  t: TranslationSchema;
}

export default function Hero({ lang, t }: HeroProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-radial from-brand-indigo/10 via-transparent to-transparent"
    >
      {/* Decorative blurred background shapes */}
      <div className="absolute top-1/4 left-1/10 w-72 h-72 rounded-full bg-brand-teal/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 rounded-full bg-brand-indigo/10 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column: Text Content */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
          
          {/* Status Badges */}
          <div className="flex flex-wrap gap-2.5 mb-6 justify-center lg:justify-start">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-teal/10 text-brand-teal border border-brand-teal/20 shadow-sm shadow-brand-teal/5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-teal opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-teal"></span>
              </span>
              {t.hero.statusOpen}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-indigo/10 text-brand-indigo border border-brand-indigo/20 shadow-sm shadow-brand-indigo/5">
              🎓 {t.hero.statusVisa}
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight mb-4">
            {t.hero.greeting}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-brand-indigo block mt-1">
              {t.hero.name}
            </span>
          </h1>

          {/* Animated or Styled Tagline */}
          <h2 className="text-xl md:text-2xl font-bold text-zinc-300 mb-6 tracking-wide">
            {t.hero.title}
          </h2>

          {/* Intro Paragraph */}
          <p className="text-base md:text-lg text-zinc-400 max-w-xl mb-10 leading-relaxed">
            {lang === "en" &&
              "Specialized in architecting high-performance backends, automating complex pipelines with n8n, and integrating advanced LLMs (Claude, Gemini, OpenAI) directly into business workflows."}
            {lang === "ko" &&
              "고성능 백엔드 아키텍처 설계, n8n을 이용한 복잡한 업무 파이프라인 자동화, 그리고 Claude/Gemini/OpenAI 등 대형언어모델(LLM)을 비즈니스 로직에 결합하는 솔루션에 특화되어 있습니다."}
            {lang === "uz" &&
              "Yuqori yuklamali backend tizimlarini yaratish, n8n orqali murakkab biznes jarayonlarini avtomatlashtirish va Claude/Gemini/OpenAI kabi sun'iy intellekt modellarini integratsiya qilishga ixtisoslashganman."}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-12">
            <a
              href="#projects"
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-brand-teal to-brand-indigo text-white font-bold text-sm tracking-wide shadow-lg shadow-brand-indigo/20 hover:shadow-brand-indigo/35 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 text-center cursor-pointer"
            >
              {t.hero.ctaWork}
            </a>
            <a
              href="#contact"
              className="px-8 py-3.5 rounded-xl bg-zinc-900 text-white font-bold text-sm tracking-wide border border-white/10 hover:bg-zinc-800 hover:border-white/20 active:scale-[0.98] transition-all duration-300 text-center cursor-pointer"
            >
              {t.hero.ctaContact}
            </a>
            <a
              href="/AbdulboriyResume-Eng.pdf"
              download
              className="px-8 py-3.5 rounded-xl bg-zinc-950 text-brand-teal font-bold text-sm tracking-wide border border-brand-teal/20 hover:bg-zinc-900 hover:border-brand-teal/40 active:scale-[0.98] transition-all duration-300 text-center flex items-center justify-center gap-2 cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              {t.hero.ctaResume}
            </a>
          </div>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-3 gap-6 md:gap-10 border-t border-white/5 pt-8 w-full">
            <div>
              <div className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">3+</div>
              <div className="text-2xs md:text-xs text-zinc-500 font-medium uppercase tracking-wider mt-1">
                {t.hero.experienceYears}
              </div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">6+</div>
              <div className="text-2xs md:text-xs text-zinc-500 font-medium uppercase tracking-wider mt-1">
                {t.hero.projectsCount}
              </div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">15+</div>
              <div className="text-2xs md:text-xs text-zinc-500 font-medium uppercase tracking-wider mt-1">
                {t.hero.automationTitle}
              </div>
            </div>
          </div>

        </div>

        {/* Right Column: Avatar/Profile Graphic */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <div className="relative group w-64 h-64 md:w-80 md:h-80">
            {/* Pulsing gradient glow behind image */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-brand-teal to-brand-indigo rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            
            {/* Actual image frame */}
            <div className="relative w-full h-full bg-zinc-950 rounded-3xl overflow-hidden border border-white/10 flex items-center justify-center">
              {!imageError ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src="/images/avatar.jpg"
                  alt={t.hero.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  onError={() => setImageError(true)}
                />
              ) : (
                // Falling back to a clean, gorgeous SVG profile block
                <div className="w-full h-full bg-radial from-zinc-900 to-zinc-950 flex flex-col items-center justify-center p-8 text-center select-none">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-brand-teal to-brand-indigo flex items-center justify-center font-black text-2xl text-white shadow-lg shadow-brand-indigo/35 mb-4 group-hover:scale-110 transition-transform duration-500">
                    JR
                  </div>
                  <span className="text-white font-extrabold tracking-tight text-lg">
                    Rakhmatullaev
                  </span>
                  <span className="text-brand-teal font-semibold text-2xs tracking-widest uppercase mt-1">
                    AI & Full-Stack
                  </span>
                  <div className="mt-4 flex gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-brand-teal animate-pulse" />
                    <span className="w-2 h-2 rounded-full bg-brand-indigo animate-pulse delay-150" />
                    <span className="w-2 h-2 rounded-full bg-brand-purple animate-pulse delay-300" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
