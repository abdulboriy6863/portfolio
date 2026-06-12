"use client";

import React from "react";
import { Locale, TranslationSchema } from "../data/translations";

interface ExperienceProps {
  lang: Locale;
  t: TranslationSchema;
}

export default function Experience({ lang, t }: ExperienceProps) {
  return (
    <section id="experience" className="py-24 bg-bg-secondary relative">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-xl mx-auto">
          <h2 className="text-xs font-bold text-brand-teal uppercase tracking-widest mb-2">
            {t.experience.title}
          </h2>
          <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
            {t.experience.subtitle}
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side: Work Experience Timeline (8 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              💼 {lang === "en" ? "Work Experience" : lang === "ko" ? "경력 사항" : "Mehnat Faoliyati"}
            </h4>

            <div className="relative border-l border-white/10 pl-6 ml-3 space-y-12">
              
              {/* Job 1: AI & Automation Engineer */}
              <div className="relative group">
                {/* Timeline node dot */}
                <span className="absolute -left-[31px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-brand-teal border-4 border-bg-secondary group-hover:scale-110 transition-transform duration-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-white animate-ping" />
                </span>
                
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h5 className="text-base font-extrabold text-white group-hover:text-brand-teal transition-colors duration-300">
                    {t.experience.roles.ai.title}
                  </h5>
                  <span className="text-2xs font-semibold text-brand-teal bg-brand-teal/10 px-2.5 py-0.5 rounded-full border border-brand-teal/20">
                    {t.experience.roles.ai.duration}
                  </span>
                </div>
                
                <div className="text-xs font-bold text-zinc-400 mb-4 tracking-wider flex items-center gap-1.5">
                  🏢 {t.experience.roles.ai.company} &bull; 📍 {t.experience.roles.ai.location}
                </div>

                <ul className="space-y-3.5 text-xs text-zinc-400 leading-relaxed list-none pl-0">
                  {t.experience.roles.ai.points.map((point, index) => {
                    const [title, desc] = point.split(": ");
                    return (
                      <li key={index} className="relative pl-4">
                        <span className="absolute left-0 top-1.5 w-1.5 h-1.5 rounded-full bg-brand-teal/60" />
                        <strong className="text-zinc-200 block md:inline font-bold md:mr-1">{title}:</strong>
                        {desc}
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Job 2: Backend Developer EPAM */}
              <div className="relative group">
                {/* Timeline node dot */}
                <span className="absolute -left-[31px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-zinc-700 border-4 border-bg-secondary group-hover:scale-110 transition-transform duration-300"></span>
                
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h5 className="text-base font-extrabold text-white group-hover:text-brand-indigo transition-colors duration-300">
                    {t.experience.roles.epam.title}
                  </h5>
                  <span className="text-2xs font-semibold text-zinc-400 bg-zinc-800/40 px-2.5 py-0.5 rounded-full border border-white/5">
                    {t.experience.roles.epam.duration}
                  </span>
                </div>
                
                <div className="text-xs font-bold text-zinc-400 mb-4 tracking-wider flex items-center gap-1.5">
                  🏢 {t.experience.roles.epam.company} &bull; 📍 {t.experience.roles.epam.location}
                </div>

                <ul className="space-y-3.5 text-xs text-zinc-400 leading-relaxed list-none pl-0">
                  {t.experience.roles.epam.points.map((point, index) => {
                    const [title, desc] = point.split(": ");
                    return (
                      <li key={index} className="relative pl-4">
                        <span className="absolute left-0 top-1.5 w-1.5 h-1.5 rounded-full bg-brand-indigo/60" />
                        <strong className="text-zinc-200 block md:inline font-bold md:mr-1">{title}:</strong>
                        {desc}
                      </li>
                    );
                  })}
                </ul>
              </div>

            </div>
          </div>

          {/* Right Side: Education & Visa Details (5 cols) */}
          <div className="lg:col-span-5 space-y-8 lg:pl-6">
            
            {/* Education Card */}
            <div>
              <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                🎓 {t.experience.education.title}
              </h4>
              
              <div className="p-6 rounded-2xl bg-zinc-950 border border-white/5 hover:border-brand-indigo/20 transition-all duration-300 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-indigo/5 rounded-full blur-2xl pointer-events-none" />
                
                <span className="text-3xs font-extrabold tracking-widest text-brand-indigo uppercase block mb-2">
                  Completed / Degree
                </span>
                
                <h5 className="text-base font-extrabold text-white mb-1 group-hover:text-brand-indigo transition-colors duration-300">
                  {t.experience.education.university}
                </h5>
                <p className="text-xs font-semibold text-zinc-400 mb-4">
                  {t.experience.education.degree}
                </p>

                <div className="flex items-center justify-between border-t border-white/5 pt-4 text-xs font-medium text-zinc-500">
                  <span>📍 {t.experience.education.location}</span>
                  <span>🗓️ {t.experience.education.duration}</span>
                </div>
              </div>
            </div>

            {/* Visa Status Details Panel */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-brand-teal/5 via-brand-indigo/5 to-transparent border border-white/5 relative overflow-hidden">
              <span className="absolute top-3 right-3 text-2xl animate-pulse">🇰🇷</span>
              <h5 className="font-extrabold text-white text-sm mb-3">
                {lang === "en" && "Visa & Work Authorization"}
                {lang === "ko" && "비자 및 취업 허가"}
                {lang === "uz" && "Viza va Ish Faoliyati Ruxsati"}
              </h5>
              <p className="text-xs text-zinc-400 leading-relaxed">
                {lang === "en" && "Possesses an active D-10 Job Seeker Visa in South Korea. Graduated from Dongyang University. Fully authorized to engage in hiring discussions, sponsorships, and transition to E-7 professional worker status with domestic Korean corporations."}
                {lang === "ko" && "대한민국 D-10 구직활동 비자를 보유하고 있습니다. 동양대학교를 졸업했으며, 한국 내 기업 입사 상담, E-7 전문인력 취업 비자 전환 및 근로 계약 체결에 법적 결격 사유가 없습니다."}
                {lang === "uz" && "Janubiy Koreyada faol D-10 ish qidiruvchi vizasiga egaman. Dongyang universitetini tamomlaganman. Koreya kompaniyalari bilan shartnoma imzolash, homiylik (sponsorship) va E-7 professional ishchi maqomiga o'tish uchun barcha qonuniy ruxsatnomalar mavjud."}
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
