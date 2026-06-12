"use client";

import React, { useState } from "react";
import { Locale, TranslationSchema, ProjectData } from "../data/translations";

interface ProjectsProps {
  lang: Locale;
  t: TranslationSchema;
}

type FilterType = "all" | "fullstack" | "frontend" | "ecommerce";

export default function Projects({ lang, t }: ProjectsProps) {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const filters = [
    { type: "all", label: lang === "en" ? "All" : lang === "ko" ? "전체" : "Barchasi" },
    { type: "fullstack", label: lang === "en" ? "Full-Stack & AI" : lang === "ko" ? "풀스택/AI" : "Full-Stack & AI" },
    { type: "frontend", label: lang === "en" ? "Frontend Only" : lang === "ko" ? "프론트엔드" : "Frontend" },
    { type: "ecommerce", label: lang === "en" ? "E-Commerce" : lang === "ko" ? "이커머스" : "E-Commerce" },
  ];

  const getProjectCategory = (projectTitle: string): FilterType[] => {
    switch (projectTitle) {
      case "ViserPet":
        return ["fullstack", "ecommerce"];
      case "NikeStore":
        return ["fullstack", "ecommerce"];
      case "NoMakler":
        return ["frontend"];
      case "Evos Restaurant":
        return ["frontend"];
      case "Cambridge Online":
        return ["frontend"];
      case "Crafty Ramen":
        return ["frontend"];
      default:
        return [];
    }
  };

  const filteredProjects = t.projects.list.filter((project) => {
    if (activeFilter === "all") return true;
    return getProjectCategory(project.title).includes(activeFilter);
  });

  const handleImageError = (title: string) => {
    setImageErrors((prev) => ({ ...prev, [title]: true }));
  };

  return (
    <section id="projects" className="py-24 bg-bg-primary relative">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-xl mx-auto">
          <h2 className="text-xs font-bold text-brand-teal uppercase tracking-widest mb-2">
            {t.projects.title}
          </h2>
          <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
            {t.projects.subtitle}
          </h3>
        </div>

        {/* Filters bar */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {filters.map((filter) => (
            <button
              key={filter.type}
              onClick={() => setActiveFilter(filter.type as FilterType)}
              className={`px-5 py-2 rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer ${
                activeFilter === filter.type
                  ? "bg-gradient-to-r from-brand-teal to-brand-indigo text-white shadow-lg shadow-brand-indigo/15"
                  : "bg-zinc-950 text-zinc-500 border border-white/5 hover:text-zinc-300 hover:border-white/10"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => {
            const hasError = imageErrors[project.title];
            return (
              <div
                key={idx}
                className="group rounded-2xl bg-zinc-950 border border-white/5 overflow-hidden flex flex-col justify-between hover:border-brand-indigo/35 transition-all duration-300 shadow-xl shadow-black/20"
              >
                {/* Project Image Panel */}
                <div className="h-44 bg-zinc-900 relative overflow-hidden flex items-center justify-center border-b border-white/5">
                  {!hasError ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={() => handleImageError(project.title)}
                    />
                  ) : (
                    // Elegant abstract visual fallback card
                    <div className="w-full h-full bg-radial from-brand-indigo/10 via-zinc-950 to-zinc-950 flex flex-col justify-center items-center p-6 text-center select-none">
                      <span className="w-10 h-10 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center text-lg mb-2">
                        {project.title === "ViserPet" ? "🐶" : project.title === "NikeStore" ? "👟" : "💻"}
                      </span>
                      <span className="font-extrabold text-white text-sm">{project.title}</span>
                      <span className="text-zinc-600 text-3xs uppercase tracking-widest mt-0.5">
                        {project.subtitle}
                      </span>
                    </div>
                  )}
                  {/* Category overlay tags */}
                  <div className="absolute top-3 left-3 flex gap-1">
                    {getProjectCategory(project.title).map((cat) => (
                      <span
                        key={cat}
                        className={`text-3xs font-extrabold uppercase px-2 py-0.5 rounded bg-zinc-950/80 backdrop-blur border text-white border-white/10`}
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Details Panel */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-base font-extrabold text-white mb-1 group-hover:text-brand-teal transition-colors duration-300">
                      {project.title}
                    </h4>
                    <p className="text-3xs text-brand-teal font-semibold tracking-wider uppercase mb-3">
                      {project.subtitle}
                    </p>
                    <p className="text-xs text-zinc-400 leading-relaxed mb-6 line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-2xs font-extrabold text-white tracking-wider uppercase hover:text-brand-teal transition-colors flex items-center gap-1.5 cursor-pointer"
                    >
                      {t.projects.viewDetails} &rarr;
                    </button>
                    <span className="text-4xs font-bold text-zinc-600 uppercase tracking-widest">
                      {project.technologies[0]}
                    </span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Modal Popup for Project Details */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm transition-all duration-300">
          <div className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-2xl bg-zinc-950 border border-white/10 shadow-2xl shadow-black/80 p-6 md:p-8 scrollbar-thin">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between mb-6 pb-4 border-b border-white/5">
              <div>
                <h3 className="text-xl md:text-2xl font-black text-white">{selectedProject.title}</h3>
                <p className="text-xs text-brand-teal font-semibold uppercase tracking-wider mt-0.5">
                  {selectedProject.subtitle}
                </p>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-1.5 text-zinc-500 hover:text-white rounded-lg bg-zinc-900 border border-white/5 hover:border-white/15 transition-colors cursor-pointer"
                aria-label={t.projects.close}
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Body */}
            <div className="space-y-6 text-xs md:text-sm text-zinc-400 leading-relaxed">
              
              {/* Long Description */}
              <p className="text-zinc-300 leading-relaxed">{selectedProject.longDescription}</p>

              {/* Technologies */}
              <div>
                <h4 className="font-extrabold text-white text-xs uppercase tracking-wider mb-2.5">
                  🛠️ {t.projects.techUsed}
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded bg-zinc-900 border border-white/5 text-zinc-300 font-semibold text-3xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div>
                <h4 className="font-extrabold text-white text-xs uppercase tracking-wider mb-2.5">
                  ⚡ {t.projects.mainFeatures}
                </h4>
                <ul className="list-disc pl-5 space-y-1.5">
                  {selectedProject.features.map((feature, idx) => (
                    <li key={idx} className="text-zinc-400">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contributions if present */}
              {selectedProject.contributions && selectedProject.contributions.length > 0 && (
                <div>
                  <h4 className="font-extrabold text-white text-xs uppercase tracking-wider mb-2.5">
                    👨‍💻 {t.projects.contributionsTitle}
                  </h4>
                  <ul className="list-disc pl-5 space-y-1.5">
                    {selectedProject.contributions.map((contr, idx) => (
                      <li key={idx} className="text-zinc-400">
                        {contr}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Challenges if present */}
              {selectedProject.challenges && (
                <div>
                  <h4 className="font-extrabold text-white text-xs uppercase tracking-wider mb-2">
                    ⚠️ {t.projects.challengesTitle}
                  </h4>
                  <p className="p-4 rounded-xl bg-zinc-900/40 border border-white/5 text-zinc-400 leading-relaxed">
                    {selectedProject.challenges}
                  </p>
                </div>
              )}

              {/* Deployment if present */}
              {selectedProject.deployment && (
                <div>
                  <h4 className="font-extrabold text-white text-xs uppercase tracking-wider mb-2.5">
                    🚀 {t.projects.deploymentTitle}
                  </h4>
                  <p className="text-zinc-400">{selectedProject.deployment}</p>
                </div>
              )}

            </div>

            {/* Modal Footer */}
            <div className="mt-8 pt-4 border-t border-white/5 flex justify-end">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-5 py-2.5 rounded-xl bg-zinc-900 border border-white/10 hover:bg-zinc-800 text-white text-xs font-bold transition-all duration-300 cursor-pointer"
              >
                {t.projects.close}
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
