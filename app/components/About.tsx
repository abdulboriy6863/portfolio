"use client";

import React from "react";
import { Locale, TranslationSchema } from "../data/translations";

interface AboutProps {
  lang: Locale;
  t: TranslationSchema;
}

export default function About({ lang, t }: AboutProps) {
  return (
    <section id="about" className="py-24 bg-bg-secondary relative">
      {/* Decorative vertical line */}
      <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-transparent via-white/5 to-transparent pointer-events-none hidden lg:block" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center lg:text-left mb-16">
          <h2 className="text-xs font-bold text-brand-teal uppercase tracking-widest mb-2">
            {t.about.title}
          </h2>
          <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
            {t.about.heading}
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Narrative */}
          <div className="space-y-6 text-zinc-400 text-sm md:text-base leading-relaxed">
            <p>{t.about.paragraph1}</p>
            <p>{t.about.paragraph2}</p>
            
            {/* Math Background Accent Card */}
            <div className="p-6 rounded-2xl bg-zinc-950 border border-white/5 shadow-inner mt-8">
              <h4 className="font-extrabold text-white text-sm flex items-center gap-2 mb-2">
                <span>📐</span> {t.about.mathTitle}
              </h4>
              <p className="text-xs md:text-sm text-zinc-400 leading-relaxed">
                {t.about.mathText}
              </p>
            </div>
          </div>

          {/* Right Column: Key Details & Languages */}
          <div className="space-y-8 lg:pl-6">
            
            {/* Language Fluency Cards */}
            <div>
              <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-4">
                {t.about.languagesTitle}
              </h4>
              
              <div className="space-y-3">
                {/* English */}
                <div className="p-4 rounded-xl bg-zinc-900/40 border border-white/5 flex items-center justify-between hover:border-brand-teal/20 transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">🇬🇧</span>
                    <div>
                      <div className="font-bold text-white text-sm">{t.about.enLang}</div>
                      <div className="text-3xs text-zinc-500 font-medium uppercase tracking-wider mt-0.5">
                        English
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-brand-teal bg-brand-teal/10 px-3 py-1 rounded-full">
                    {t.about.fluent}
                  </span>
                </div>

                {/* Korean */}
                <div className="p-4 rounded-xl bg-zinc-900/40 border border-white/5 flex items-center justify-between hover:border-brand-indigo/20 transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">🇰🇷</span>
                    <div>
                      <div className="font-bold text-white text-sm">{t.about.koLang}</div>
                      <div className="text-3xs text-zinc-500 font-medium uppercase tracking-wider mt-0.5">
                        Korean
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-brand-indigo bg-brand-indigo/10 px-3 py-1 rounded-full">
                    {t.about.conversational}
                  </span>
                </div>

                {/* Uzbek */}
                <div className="p-4 rounded-xl bg-zinc-900/40 border border-white/5 flex items-center justify-between hover:border-brand-purple/20 transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">🇺🇿</span>
                    <div>
                      <div className="font-bold text-white text-sm">{t.about.uzLang}</div>
                      <div className="text-3xs text-zinc-500 font-medium uppercase tracking-wider mt-0.5">
                        Uzbek
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-brand-purple bg-brand-purple/10 px-3 py-1 rounded-full">
                    {t.about.native}
                  </span>
                </div>
              </div>
            </div>

            {/* Micro details or certificates banner */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-brand-teal/5 to-brand-indigo/5 border border-white/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-indigo/5 rounded-full blur-2xl pointer-events-none" />
              <p className="text-xs text-zinc-400 leading-relaxed">
                {lang === "en" && "Highly passionate about developer ergonomics, clean separation of concerns, and deploying robust systems that stand the test of high traffic volumes and automated workflows."}
                {lang === "ko" && "개발자 인체공학, 깔끔한 관심사 분리, 대용량 트래픽과 자동화 워크플로우를 견뎌내는 강력한 시스템 배포에 깊은 열정을 갖고 있습니다."}
                {lang === "uz" && "Tizimlar arxitekturasi, kodlar tozaligi va yuqori yuklamalarga chidamli, to'liq avtomatlashtirilgan dasturlarni serverlarga yuklash borasida katta qiziqish va tajribaga egaman."}
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
